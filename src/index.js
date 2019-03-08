// Spread.Sheets関連モジュールのインポート
import * as GCSS from '@grapecity/spread-sheets';
import '@grapecity/spread-sheets-resources-ja';
import '@grapecity/spread-sheets/styles/gc.spread.sheets.css';

// InputManJS関連モジュールのインポート
import '@grapecity/inputman/CSS/gc.inputman-js.css';

// InputManJSセルモジュールのインポート
import * as GCIMCellType from '@grapecity/spread-sheets-inputmancelltype';

// 日本語カルチャ設定
GCSS.Spread.Common.CultureManager.culture("ja-jp");
// Spread.Sheetsコントロールの生成
var spread = new GCSS.Spread.Sheets.Workbook(document.getElementById('ss'));
var sheet = spread.getSheet(0);
sheet.setColumnWidth(0, 200);
// InputManJSセル(日付時刻型)の生成
var gcDateTimeCellType = new GCIMCellType.GcDateTimeCellType({
  // 入力書式の設定
  formatPattern: 'yyyy/MM/dd HH:mm:ss',
  // ドロップダウンボタンの表示設定
  showDropDownButton: true
});
// A1セルに対するInputManJSセル設定
sheet.setCellType(0, 0, gcDateTimeCellType);