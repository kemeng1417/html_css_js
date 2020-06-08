(function (jq) {
    jq.extend(
        {
            valid: function (form) {
                jq(form).find(':submit').click(function () {
                    jq(form).find('.item span').remove();
                    var flag = true;
                    jq(form).find(':text,:password').each(function () { //注意组合选择器中间是逗号分隔

                            var require = $(this).attr('require');
                            if (require) {
                                var val = $(this).val();
                                if (val.length <= 0) {
                                    var label = $(this).attr('label');
                                    var tag = document.createElement('span');
                                    tag.innerText = label + '不能为空';
                                    $(this).after(tag);
                                    flag = false;
                                    return false;

                                }
                                var minLen = $(this).attr('min-len');
                                if (minLen) {
                                    var minLenInt = parseInt(minLen);
                                    if (val.length <= minLenInt) {
                                        var label = $(this).attr('label');
                                        var tag = document.createElement('span');
                                        tag.innerText = label + '最小长度为' + minLen;
                                        $(this).after(tag);
                                        flag = false;
                                        return false;
                                    }
                                }
                            }


                        }
                    );
                    return flag;
                });
            }
        }
    )
})(jQuery);