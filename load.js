$(function(){
    var initStr = '';
    initStr += '### header1\n';
    initStr += '## header2\n';
    initStr += '# header3\n';
    initStr += '\n';
    initStr += '---\n';
    initStr += '\n';
    initStr += '# Page2\n';
    initStr += '----\n';
    initStr += '![](http://imgur.com/jP236lr.png)\n';
    initStr += '\n';
    initStr += '---\n';
    initStr += '\n';
    initStr += '### [link1](http://coolslide.github.io)\n'
    initStr += '## [link2](http://coolslide.github.io)\n'
    initStr += '# [link3](http://coolslide.github.io)\n'
    initStr += '\n';
    initStr += '---\n';
    initStr += '\n';
    initStr += '# End'

    var textArea = $('#mdText');
    textArea.val(initStr);

    $('#mdBtn').click(function(){
        $.post("http://52.27.9.64:60000/preview", {data: textArea.val()}, function(data){
            putHtml2iframe('htmlFrame', data);
        });
        putHtml2iframe('htmlFrame', '');
    });
});
