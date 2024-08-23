// http://www.ntdm.tv
var rule={
    title:'NT动漫',
    host:'http://www.ntdm9.com',
    homeUrl:'/type/riben.html',
    // url:'/show/fyclass--------fypage---.html',
    url:'/show/fyclassfyfilter.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'--{{fl.by}}-{{fl.class}}--{{fl.letter}}---fypage---{{fl.year}}',
    filter:{
        "riben":[{"key":"year","name":"年份：","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000以前","v":"2000以前"}]},{"key":"class","name":"类型：","value":[{"n":"全部","v":""},{"n":"搞笑","v":"搞笑"},{"n":"运动","v":"运动"},{"n":"励志","v":"励志"},{"n":"热血","v":"热血"},{"n":"战斗","v":"战斗"},{"n":"竞技","v":"竞技"},{"n":"校园","v":"校园"},{"n":"青春","v":"青春"},{"n":"爱情","v":"爱情"},{"n":"冒险","v":"冒险"},{"n":"后宫","v":"后宫"},{"n":"百合","v":"百合"},{"n":"治愈","v":"治愈"},{"n":"萝莉","v":"萝莉"},{"n":"魔法","v":"魔法"},{"n":"悬疑","v":"悬疑"},{"n":"推理","v":"推理"},{"n":"奇幻","v":"奇幻"},{"n":"科幻","v":"科幻"},{"n":"游戏","v":"游戏"},{"n":"神魔","v":"神魔"},{"n":"恐怖","v":"恐怖"},{"n":"血腥","v":"血腥"},{"n":"机战","v":"机战"},{"n":"战争","v":"战争"},{"n":"犯罪","v":"犯罪"},{"n":"历史","v":"历史"},{"n":"社会","v":"社会"},{"n":"职场","v":"职场"},{"n":"剧情","v":"剧情"},{"n":"伪娘","v":"伪娘"},{"n":"耽美","v":"耽美"},{"n":"童年","v":"童年"},{"n":"教育","v":"教育"},{"n":"亲子","v":"亲子"},{"n":"真人","v":"真人"},{"n":"歌舞","v":"歌舞"},{"n":"肉番","v":"肉番"},{"n":"美少女","v":"美少女"},{"n":"轻小说","v":"轻小说"},{"n":"吸血鬼","v":"吸血鬼"},{"n":"女性向","v":"女性向"},{"n":"泡面番","v":"泡面番"},{"n":"欢乐向","v":"欢乐向"}]},{"key":"letter","name":"字母：","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0~9","v":"0~9"}]},{"key":"by","name":"排序：","value":[{"n":"更新时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
        "zhongguo":[{"key":"year","name":"年份：","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000以前","v":"2000以前"}]},{"key":"class","name":"类型：","value":[{"n":"全部","v":""},{"n":"搞笑","v":"搞笑"},{"n":"运动","v":"运动"},{"n":"励志","v":"励志"},{"n":"热血","v":"热血"},{"n":"战斗","v":"战斗"},{"n":"竞技","v":"竞技"},{"n":"校园","v":"校园"},{"n":"青春","v":"青春"},{"n":"爱情","v":"爱情"},{"n":"冒险","v":"冒险"},{"n":"后宫","v":"后宫"},{"n":"百合","v":"百合"},{"n":"治愈","v":"治愈"},{"n":"萝莉","v":"萝莉"},{"n":"魔法","v":"魔法"},{"n":"悬疑","v":"悬疑"},{"n":"推理","v":"推理"},{"n":"奇幻","v":"奇幻"},{"n":"科幻","v":"科幻"},{"n":"游戏","v":"游戏"},{"n":"神魔","v":"神魔"},{"n":"恐怖","v":"恐怖"},{"n":"血腥","v":"血腥"},{"n":"机战","v":"机战"},{"n":"战争","v":"战争"},{"n":"犯罪","v":"犯罪"},{"n":"历史","v":"历史"},{"n":"社会","v":"社会"},{"n":"职场","v":"职场"},{"n":"剧情","v":"剧情"},{"n":"伪娘","v":"伪娘"},{"n":"耽美","v":"耽美"},{"n":"童年","v":"童年"},{"n":"教育","v":"教育"},{"n":"亲子","v":"亲子"},{"n":"真人","v":"真人"},{"n":"歌舞","v":"歌舞"},{"n":"肉番","v":"肉番"},{"n":"美少女","v":"美少女"},{"n":"轻小说","v":"轻小说"},{"n":"吸血鬼","v":"吸血鬼"},{"n":"女性向","v":"女性向"},{"n":"泡面番","v":"泡面番"},{"n":"欢乐向","v":"欢乐向"}]},{"key":"letter","name":"字母：","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0~9","v":"0~9"}]},{"key":"by","name":"排序：","value":[{"n":"更新时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
        "omei":[{"key":"year","name":"年份：","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000以前","v":"2000以前"}]},{"key":"class","name":"类型：","value":[{"n":"全部","v":""},{"n":"搞笑","v":"搞笑"},{"n":"运动","v":"运动"},{"n":"励志","v":"励志"},{"n":"热血","v":"热血"},{"n":"战斗","v":"战斗"},{"n":"竞技","v":"竞技"},{"n":"校园","v":"校园"},{"n":"青春","v":"青春"},{"n":"爱情","v":"爱情"},{"n":"冒险","v":"冒险"},{"n":"后宫","v":"后宫"},{"n":"百合","v":"百合"},{"n":"治愈","v":"治愈"},{"n":"萝莉","v":"萝莉"},{"n":"魔法","v":"魔法"},{"n":"悬疑","v":"悬疑"},{"n":"推理","v":"推理"},{"n":"奇幻","v":"奇幻"},{"n":"科幻","v":"科幻"},{"n":"游戏","v":"游戏"},{"n":"神魔","v":"神魔"},{"n":"恐怖","v":"恐怖"},{"n":"血腥","v":"血腥"},{"n":"机战","v":"机战"},{"n":"战争","v":"战争"},{"n":"犯罪","v":"犯罪"},{"n":"历史","v":"历史"},{"n":"社会","v":"社会"},{"n":"职场","v":"职场"},{"n":"剧情","v":"剧情"},{"n":"伪娘","v":"伪娘"},{"n":"耽美","v":"耽美"},{"n":"童年","v":"童年"},{"n":"教育","v":"教育"},{"n":"亲子","v":"亲子"},{"n":"真人","v":"真人"},{"n":"歌舞","v":"歌舞"},{"n":"肉番","v":"肉番"},{"n":"美少女","v":"美少女"},{"n":"轻小说","v":"轻小说"},{"n":"吸血鬼","v":"吸血鬼"},{"n":"女性向","v":"女性向"},{"n":"泡面番","v":"泡面番"},{"n":"欢乐向","v":"欢乐向"}]},{"key":"letter","name":"字母：","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"},{"n":"0~9","v":"0~9"}]},{"key":"by","name":"排序：","value":[{"n":"更新时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}]
    },
    searchUrl:'/search/**----------fypage---.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
    },
    class_parse: '.search-tag li;a&&Text;a&&href;.*/(\\w+).html',
    play_parse:true,
    detailUrl:'',
    lazy:"",
    limit:6,
    推荐:'*',
    一级:'.blockcontent1&&.blockdif2;img&&alt;img&&src;.newname&&Text;a&&href',
    二级访问前:'',
    二级:{
        "title":"h4&&Text;.detail_imform_value:eq(6)&&Text",
        "img":".poster&&src",
        "desc":".detail_imform_kv:eq(0)&&Text;.detail_imform_value:eq(5)&&Text;.detail_imform_value:eq(2)&&Text;.detail_imform_kv:eq(0)&&Text;.detail_imform_kv:eq(3)&&Text",
        "content":".detail_imform_desc_pre&&Text",
        "tabs":"#menu0&&li",
        "lists":".movurl:eq(#id)&&li"},
    搜索:'*',
}