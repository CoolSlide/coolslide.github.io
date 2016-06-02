$(function(){
    var initStr = '# header1\n## header2\n### header3\n\n---\n\n[Q] 1 + 1 = ?\n[A] 1\n[A#] 2\n[A] 3\n[A] 4';
    initStr += '\n----\n![](https://avatars3.githubusercontent.com/u/19519576?v=3&s=200)\n\n---\n\n#End';

    var textArea = $('#mdText');
    textArea.val(initStr);

    $('#mdBtn').click(function(){
        $.post("http://52.27.9.64:60000/preview", {data: textArea.val()}, function(data){
            putHtml2iframe('htmlFrame', data);
        });
        putHtml2iframe('htmlFrame', '');
    });
});
