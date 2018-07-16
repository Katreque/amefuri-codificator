var bufferControl = function(string) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(string).select();
    document.execCommand("copy");
    $temp.remove();
}
