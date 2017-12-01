 $(function (){

            var rotateTimeOut = function (){

                $('#rotate').rotate({

                    angle:0,

                    animateTo:2160,

                    duration:8000,

                    callback:function (){

                        alert('网络超时，请检查您的网络设置！');

                    }

                });

            };

            var bRotate = false;



            var rotateFn = function (awards, angles, txt){

                bRotate = !bRotate;

                $('#rotate').stopRotate();

                $('#rotate').rotate({

                    angle:0,

                    animateTo:angles+1800,

                    duration:8000,

                    callback:function (){

                        alert(txt);

                        bRotate = !bRotate;

                    }

                })

            };



            $('.pointer').click(function (){



                if(bRotate)return;

                var item = rnd(0,7);



                switch (item) {

                    case 0:

                        //var angle = [26, 88, 137, 185, 235, 287, 337];

                        rotateFn(0, 30, '12');

                        break;

                    case 1:

                        //var angle = [88, 137, 185, 235, 287];

                        rotateFn(1, 60, '11');

                        break;

                    case 2:

                        //var angle = [137, 185, 235, 287];

                        rotateFn(2, 90, '10');

                        break;

                    case 3:

                        //var angle = [137, 185, 235, 287];

                        rotateFn(3, 120, '9');

                        break;

                    case 4:

                        //var angle = [185, 235, 287];

                        rotateFn(4, 150, '8');

                        break;

                    case 5:

                        //var angle = [185, 235, 287];

                        rotateFn(5, 180, '7');

                        break;

                    case 6:

                        //var angle = [235, 287];

                        rotateFn(6, 210, '6');

                        break;

                    case 7:

                        //var angle = [287];

                        rotateFn(7, 240, '5');

                        break;
                    case 8:

                        //var angle = [287];

                        rotateFn(8, 270, '4');

                        break;
                    case 9:

                        //var angle = [287];

                        rotateFn(9, 300, '3');

                        break;
                    case 10:

                        //var angle = [287];

                        rotateFn(7, 330, '2');

                        break;
					case 11:

                        //var angle = [287];

                        rotateFn(7, 360, '1');

                        break;
                }



                console.log(item);

            });

        });

        function rnd(n, m){

            return Math.floor(Math.random()*(m-n+1)+n)

        }