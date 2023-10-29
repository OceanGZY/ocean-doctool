import MindMap from "simple-mind-map"
import MiniMap from 'simple-mind-map/src/plugins/MiniMap.js'
import Watermark from 'simple-mind-map/src/plugins/Watermark.js'
import KeyboardNavigation from 'simple-mind-map/src/plugins/KeyboardNavigation.js'
import ExportPDF from 'simple-mind-map/src/plugins/ExportPDF.js'
import ExportXMind from 'simple-mind-map/src/plugins/ExportXMind.js'
import Export from 'simple-mind-map/src/plugins/Export.js'
import Drag from 'simple-mind-map/src/plugins/Drag.js'
import Select from 'simple-mind-map/src/plugins/Select.js'
import RichText from 'simple-mind-map/src/plugins/RichText.js'
import AssociativeLine from 'simple-mind-map/src/plugins/AssociativeLine.js'
import TouchEvent from 'simple-mind-map/src/plugins/TouchEvent.js'
import NodeImgAdjust from 'simple-mind-map/src/plugins/NodeImgAdjust.js'
import SearchPlugin from 'simple-mind-map/src/plugins/Search.js'
import customThemes from "../customThemes"
export default class OceanMindMap {
    public static mindmap: MindMap;
    public static init() {
        // this.mindmap = new MindMap(

        //     {
        //         readonly: false,
        //         layout: "string",
        //         fishboneDeg: 1,
        //         theme: "string",
        //         themeConfig: {},
        //         scaleRatio: 0,
        //         mouseScaleCenterUseMousePosition: true,
        //         maxTag: 10,
        //         expandBtnSize: 1,
        //         imgTextMargin: 1,
        //         textContentMargin: 1,
        //         selectTranslateStep: 1,
        //         selectTranslateLimit: 1,
        //         customNoteContentShow: "",
        //         enableFreeDrag: true,
        //         watermarkConfig: {
        //             text: "string",
        //             lineSpacing: 1,
        //             textSpacing: 1,
        //             angle: 1,
        //             textStyle: {
        //                 color: "red",
        //                 opacity: 1,
        //                 fontSize: 12,
        //             },
        //         },
        //         textAutoWrapWidth: 1,
        //         customHandleMousewheel: "",
        //         mousewheelAction: "string",
        //         mousewheelMoveStep: 1,
        //         mousewheelZoomActionReverse: true,
        //         defaultInsertSecondLevelNodeText: "string",
        //         defaultInsertBelowSecondLevelNodeText: "string",
        //         expandBtnStyle: {
        //             color: "green",
        //             fill: "string",
        //             fontSize: 12,
        //             strokeColor: "blue",
        //         },
        //         expandBtnIcon: {
        //             open: "string",
        //             close: "string",
        //         },
        //         expandBtnNumHandler: (num: any) => "",
        //         isShowExpandNum: true,
        //         enableShortcutOnlyWhenMouseInSvg: true,
        //         initRootNodePosition: "",
        //         exportPaddingX: 1,
        //         exportPaddingY: 1,
        //         nodeTextEditZIndex: 1,
        //         nodeNoteTooltipZIndex: 1,
        //         isEndNodeTextEditOnClickOuter: true,
        //         maxHistoryCount: 1,
        //         alwaysShowExpandBtn: true,
        //         iconList: [],
        //         maxNodeCacheCount: 10,
        //         defaultAssociativeLineText: "string",
        //         fitPadding: 1,
        //         enableCtrlKeyNodeSelection: true,
        //         useLeftKeySelectionRightKeyDrag: true,
        //         beforeTextEdit: "",
        //         isUseCustomNodeContent: true,
        //         customCreateNodeContent: "",
        //         customInnerElsAppendTo: "",
        //         nodeDragPlaceholderMaxSize: 10,
        //         enableAutoEnterTextEditWhenKeydown: true,
        //         richTextEditFakeInPlace: true,
        //         customHandleClipboardText: "",
        //         disableMouseWheelZoom: true,
        //         errorHandler: (code: any, error: any) => { },
        //         resetCss: "string",
        //         enableDblclickBackToRootNode: true,
        //         minExportImgCanvasScale: 1,
        //         hoverRectColor: "red",
        //         hoverRectPadding: 1,
        //         selectTextOnEnterEditText: true,
        //         deleteNodeActive: true,
        //         autoMoveWhenMouseInEdgeOnDrag: true,
        //         fit: true,
        //         dragMultiNodeRectConfig: {
        //             width: 40,
        //             height: 40,
        //             fill: "string",
        //         },
        //         dragPlaceholderRectFill: "string",
        //         dragOpacityConfig: {
        //             cloneNodeOpacity: 1,
        //             beingDragNodeOpacity: 1,
        //         },
        //         tagsColorMap: {},
        //         cooperateStyle: {
        //             avatarSize: 24,
        //             fontSize: 12,
        //         },
        //         associativeLineIsAlwaysAboveNode: true,
        //         defaultGeneralizationText: "string",
        //         handleIsSplitByWrapOnPasteCreateNewNode: "",
        //         addHistoryTime: 1,
        //         el: document.getElementById('mindMapContainer'),
        //     },
        // );
        // 注册插件
        MindMap.usePlugin(MiniMap)
            .usePlugin(Watermark)
            .usePlugin(Drag)
            .usePlugin(KeyboardNavigation)
            .usePlugin(ExportPDF)
            .usePlugin(ExportXMind)
            .usePlugin(Export)
            .usePlugin(Select)
            .usePlugin(AssociativeLine)
            .usePlugin(NodeImgAdjust)
            .usePlugin(TouchEvent)
            .usePlugin(SearchPlugin)

        customThemes.forEach(item => {
            MindMap.defineTheme(item.value, item.theme)
        })

        this.mindmap = new MindMap(
            { el: document.getElementById('mindMapContainer') })

        this.mindmap.addPlugin(MiniMap, {})
        this.mindmap.addPlugin(Watermark, {})
        this.mindmap.addPlugin(Drag, {})
        this.mindmap.addPlugin(KeyboardNavigation, {})
        this.mindmap.addPlugin(ExportPDF, {})
        this.mindmap.addPlugin(ExportXMind, {})
        this.mindmap.addPlugin(Export, {})
        this.mindmap.addPlugin(Select, {})
        this.mindmap.addPlugin(AssociativeLine, {})
        this.mindmap.addPlugin(NodeImgAdjust, {})
        this.mindmap.addPlugin(TouchEvent, {})
        this.mindmap.addPlugin(SearchPlugin, {})
        this.mindmap.addPlugin(RichText, {})

        return this.mindmap
    }
};