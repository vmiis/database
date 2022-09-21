(function(){
    //-------------------------------------------------------------------------------------
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    //-------------------------------------------------------------------------------------
    m["Data"]                             ={url:H+"/tasks/Database/Data/page.html",form_module:"Details",router:1};
    m["Details"]                          ={url:H+"/tasks/Database/Details/page.html"};
    m["About"]                            ={url:"http://localhost:8000/vmiis/web-portal/modules/shared/microapp/page.html",router:1};
    //m["About"]                          ={url:"https://www.vmiis.com/modules/shared/microapp/page.html",router:1};
})();
