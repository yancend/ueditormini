/**
 * 开发版本的文件导入
 */
(function (){
    var paths  = [
            'editor.js',
            'core/browser.js',
            'core/utils.js',
            'core/EventBase.js',
            'core/dtd.js',
            'core/domUtils.js',
            'core/Range.js',
            'core/Selection.js',
            'core/Editor.js',
            'core/ajax.js',
            'core/filterword.js',
            'core/node.js',
            'core/htmlparser.js',
            'core/filternode.js',
            'plugins/defaultfilter.js',
            'plugins/inserthtml.js',
            'plugins/autotypeset.js',
            'plugins/autosubmit.js',
            'plugins/background.js',
            'plugins/image.js',
            'plugins/justify.js',
            'plugins/font.js',
            'plugins/link.js',
            'plugins/iframe.js',
            'plugins/scrawl.js',
            'plugins/removeformat.js',
            'plugins/blockquote.js',
            'plugins/convertcase.js',
            'plugins/indent.js',
            'plugins/print.js',
            'plugins/preview.js',
            'plugins/selectall.js',
            'plugins/paragraph.js',
            'plugins/directionality.js',
            'plugins/horizontal.js',
            'plugins/time.js',
            'plugins/rowspacing.js',
            'plugins/lineheight.js',
            'plugins/insertcode.js',
            'plugins/cleardoc.js',
            'plugins/anchor.js',
            'plugins/wordcount.js',
            'plugins/pagebreak.js',
            'plugins/wordimage.js',
            'plugins/dragdrop.js',
            'plugins/undo.js',
            'plugins/paste.js',     //粘贴时候的提示依赖了UI
            'plugins/list.js',
            'plugins/source.js',
            'plugins/enterkey.js',
            'plugins/keystrokes.js',
            'plugins/fiximgclick.js',
            'plugins/autolink.js',
            'plugins/puretxtpaste.js',
            'plugins/video.js',
            'plugins/table.core.js',
            'plugins/table.cmds.js',
            'plugins/table.action.js',
            'plugins/contextmenu.js',
            'plugins/basestyle.js',
            'plugins/elementpath.js',
            'plugins/formatmatch.js',
            'plugins/searchreplace.js',
            'plugins/customstyle.js',
            'plugins/catchremoteimage.js',
            'plugins/snapscreen.js',
            'plugins/insertparagraph.js',
            'plugins/webapp.js',
            'plugins/template.js',
            'plugins/music.js',
            'ui/widget.js',
            'ui/button.js',
            'ui/toolbar.js',
            'ui/menu.js',
            'ui/dropmenu.js',
            'ui/contextmenu.js',
            'ui/splitbutton.js',
            'ui/popup.js',
            'ui/colorpicker.js',
            'ui/tablepicker.js',
            'ui/combobox.js',
            'ui/modal.js',
            'ui/tooltip.js',
            'ui/tab.js',
            'ui/emotion.js',
            'ui/elementpath.js',
            'adapter/adapter.js',
            'adapter/ready.js',
            'adapter/button.js',
            'adapter/list.js',
            'adapter/tablepicker.js',
            'adapter/fullscreen.js',
            'adapter/font.js',
            'adapter/elementpath.js',
            'adapter/dialog.js',
            'adapter/emotion.js'
        ],
        baseURL = '../_src/';
    for (var i=0,pi;pi = paths[i++];) {
        document.write('<script type="text/javascript" src="'+ baseURL + pi +'"></script>');
    }
})();
