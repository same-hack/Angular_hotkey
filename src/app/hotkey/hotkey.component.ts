import { Component, OnInit } from '@angular/core';
import hotkeys from 'hotkeys-js';

@Component({
  selector: 'app-hotkey',
  templateUrl: './hotkey.component.html',
  styleUrls: ['./hotkey.component.scss'],
})
export class HotkeyComponent implements OnInit {
  constructor() {}

  /**オリジナルのショートカット ※これだけでは設定はされない */
  shortcutList = [
    { key: '1', method: this.click1 },
    { key: '2', method: this.click2 },
    { key: 'ctrl+1', method: this.clickCtrl1 },
    { key: 'command+1', method: this.clickCommand1 },
  ];

  /**1が押された際の関数 */
  click1() {
    alert('1が押されました');
  }

  /**2が押された際の関数 */
  click2() {
    alert('2が押されました');
  }

  /**ctrl+1が押された際の関数 */
  clickCtrl1() {
    alert('ctrlと1が押されました');
  }

  /**command+1が押された際の関数 */
  clickCommand1() {
    alert('commandと1が押されました');
  }

  ngOnInit() {
    // 作成したショートカットを実際のキーに設定する
    for (let shortcut of this.shortcutList) {
      hotkeys(shortcut.key, shortcut.method);
    }
  }

  ngOnDestroy() {
    // 【重要】設定したキーボードショートカットを解除
    //  この設定をしないとコンポーネントが破棄されてもショートカットが解除されない
    for (let shortcut of this.shortcutList) {
      console.log(shortcut);
      hotkeys.unbind(shortcut.key, shortcut.method);
    }
  }
}
