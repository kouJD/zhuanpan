module.exports = function(grunt){
    //初始化grunt 配置
    grunt.initConfig({
 
        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),
        //concat插件的配置信息
        concat: {
            options:{
                stripBanners:true, //合并时允许输出头部信息
                banner:'/*!<%= pkg.name %>-<%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */'
            },
            cssConcat:{
                src:['lib/css/*.css'],
                dest:'lib/css/concat/<%= pkg.name %>-<%= pkg.version %>.css' //dest 是目的地输出
            },
            jsConcat:{
                src:'lib/js/*.js',
                dest:'lib/js/concat/<%=pkg.name %>-<%= pkg.version %>.js'
            }
        },
        //压缩css
        cssmin:{
            options:{
                stripBanners:true, //合并时允许输出头部信息
                banner:'/*!<%= pkg.name %>-<%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build:{
                src:'lib/css/concat/<%=pkg.name %>-<%=pkg.version %>.css',//压缩是要压缩合并了的
                dest:'luckDraw/css/<%= pkg.name %>.min.css' //dest 是目的地输出
            }
        },
        
 
       
        //less编译
        less: {
            compile: {
                files: {
                    'lib/css/style.css': 'less/style.less',
                }
            },
            yuicompress: {
                files: {
                },
                options: {
                    yuicompress: true
                }
            }
        },
       
        //watch自动化
        watch:{
            build:{
                files:['less/*less'],
                tasks:['less','concat','cssmin'],
                options:{spawn:false}
            }
        }
 
    });
    //告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');    
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //告诉grunt当我们在终端输入grunt时需要做些什么
    grunt.registerInitTask('default',['less','concat','cssmin','watch']);
};