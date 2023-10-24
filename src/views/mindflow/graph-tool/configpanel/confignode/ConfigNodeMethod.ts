/*
 * @Author: OCEAN.GZY
 * @Date: 2023-10-24 11:52:11
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-24 11:57:36
 * @FilePath: /ocean-doctool/src/views/mindflow/graph-tool/configpanel/confignode/ConfigNodeMethod.ts
 * @Description: 注释信息
 */
import FlowGraph from '../../../graph-core/index';

export function nodeOpt(id: any, globalGridAttr: any) {
  let curCel: any = null;
  if (id.value) {
    const { graph } = FlowGraph;
    const cell = graph.getCellById(id.value);
    if (!cell || !cell.isNode()) {
      return;
    }
    curCel = cell;
    globalGridAttr.nodeStroke = cell.attr('body/stroke');
    globalGridAttr.nodeStrokeWidth = cell.attr('body/strokeWidth');
    globalGridAttr.nodeFill = cell.attr('body/fill');
    globalGridAttr.nodeFontSize = cell.attr('text/fontSize');
    globalGridAttr.nodeColor = cell.attr('text/fill');
    globalGridAttr.nodeUsers = cell.attr('approve/users');
  }
  return curCel;
}
