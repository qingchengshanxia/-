//行政处罚、许可公示切换
$(document).ready(function(){

    //让一页占满一屏
    function setFullScreen(){
        var screenh=$(document).height();
        var contenth=$('.water-body').height();
        var mh = screenh-162-110;
        var nh='';
        if(contenth>mh){
            nh=contenth;
        }else{
            nh=mh;
        }
        $('.water-body').css({height:mh});
    }
    setFullScreen()

    //分页
    laypage({
        cont: $('#wPage'), //容器。值支持id名、原生dom对象，jquery对象,
        pages: 12, //总页数
        skip: true, //是否开启跳页
        groups: 7, //连续显示分页数
        first: 1, //将首页显示为数字1,。若不显示，设置false即可
        last: 12, //将尾页显示为总页数。若不显示，设置false即可
        prev: '上一页', //若不显示，设置false即可
        next: '下一页', //若不显示，设置false即可
        curr: function(){ //通过url获取当前页，也可以同上（pages）方式获取
                var page = location.search.match(/page=(\d+)/);
                return page ? page[1] : 1;
            }(),
        jump: function(e, first){ //触发分页后的回调
            if(!first){ //一定要加此判断，否则初始时会无限刷新
                location.href = '?page='+e.curr;
            }
        }
    });


    //点击切换选项卡和下面的内容卡
    $(document).on('click','.tab-head>li',function(){
        var index=$(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.table-body li').eq(index).show().siblings('li').hide();
    })


    //点击搜索，在第一个tab中显示搜索结果
    $(document).on('click','.search-btn',function(){
        var val=$('.search-input>input').val();
        if(!val){
            return;
        }else{

        }
    })

    //点击tab1内容第二列内容，进入详情页
    $(document).on('click','td[data-id]',function(){
        window.location.href="detail.html?id="+$(this).attr('data-id');
    })


    //ajax获取数据
    function getData(){
        $.ajax({
            url: '/',
            type: 'post',
            async:true,
            dataType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: {

            },
            success:function(){

            },
            error:function(){

            }
        })
    }
})