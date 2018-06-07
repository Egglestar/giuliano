jssor_1_slider_init = function() {

       var jssor_1_SlideshowTransitions = [
         {$Duration:800,$Opacity:2}
       ];

       var jssor_1_options = {
         $AutoPlay: 1,
         $SlideshowOptions: {
           $Class: $JssorSlideshowRunner$,
           $Transitions: jssor_1_SlideshowTransitions
         },
         $ArrowNavigatorOptions: {
           $Class: $JssorArrowNavigator$
         },
         $BulletNavigatorOptions: {
           $Class: $JssorBulletNavigator$
         }
       };

       var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

       /*#region responsive code begin*/

       var MAX_WIDTH = 980;

       function ScaleSlider() {
           var containerElement = jssor_1_slider.$Elmt.parentNode;
           var containerWidth = containerElement.clientWidth;

           if (containerWidth) {

               var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

               jssor_1_slider.$ScaleWidth(expectedWidth);
           }
           else {
               window.setTimeout(ScaleSlider, 30);
           }
       }

       ScaleSlider();

       $Jssor$.$AddEvent(window, "load", ScaleSlider);
       $Jssor$.$AddEvent(window, "resize", ScaleSlider);
       $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
       /*#endregion responsive code end*/
   };

jssor_2_slider_init = function() {

       var jssor_2_SlideshowTransitions = [
         {$Duration:800,$Opacity:2}
       ];

       var jssor_2_options = {
         $AutoPlay: 1,
         $SlideshowOptions: {
           $Class: $JssorSlideshowRunner$,
           $Transitions: jssor_2_SlideshowTransitions
         },
         $ArrowNavigatorOptions: {
           $Class: $JssorArrowNavigator$
         },
         $BulletNavigatorOptions: {
           $Class: $JssorBulletNavigator$
         }
       };

       var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);

       /*#region responsive code begin*/

       var MAX_WIDTH = 980;

       function ScaleSlider() {
           var containerElement = jssor_2_slider.$Elmt.parentNode;
           var containerWidth = containerElement.clientWidth;

           if (containerWidth) {

               var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

               jssor_2_slider.$ScaleWidth(expectedWidth);
           }
           else {
               window.setTimeout(ScaleSlider, 30);
           }
       }

       ScaleSlider();

       $Jssor$.$AddEvent(window, "load", ScaleSlider);
       $Jssor$.$AddEvent(window, "resize", ScaleSlider);
       $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
       /*#endregion responsive code end*/
   };

   jssor_3_slider_init = function() {

          var jssor_3_SlideshowTransitions = [
            {$Duration:800,$Opacity:2}
          ];

          var jssor_3_options = {
            $AutoPlay: 1,
            $SlideshowOptions: {
              $Class: $JssorSlideshowRunner$,
              $Transitions: jssor_3_SlideshowTransitions
            },
            $ArrowNavigatorOptions: {
              $Class: $JssorArrowNavigator$
            },
            $BulletNavigatorOptions: {
              $Class: $JssorBulletNavigator$
            }
          };

          var jssor_3_slider = new $JssorSlider$("jssor_3", jssor_3_options);

          /*#region responsive code begin*/

          var MAX_WIDTH = 980;

          function ScaleSlider() {
              var containerElement = jssor_3_slider.$Elmt.parentNode;
              var containerWidth = containerElement.clientWidth;

              if (containerWidth) {

                  var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                  jssor_3_slider.$ScaleWidth(expectedWidth);
              }
              else {
                  window.setTimeout(ScaleSlider, 30);
              }
          }

          ScaleSlider();

          $Jssor$.$AddEvent(window, "load", ScaleSlider);
          $Jssor$.$AddEvent(window, "resize", ScaleSlider);
          $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
          /*#endregion responsive code end*/
      };

      jssor_4_slider_init = function() {

       var jssor_4_SlideshowTransitions = [
         {$Duration:800,$Opacity:2}
       ];

       var jssor_4_options = {
         $AutoPlay: 1,
         $SlideshowOptions: {
           $Class: $JssorSlideshowRunner$,
           $Transitions: jssor_4_SlideshowTransitions
         },
         $ArrowNavigatorOptions: {
           $Class: $JssorArrowNavigator$
         },
         $BulletNavigatorOptions: {
           $Class: $JssorBulletNavigator$
         }
       };

       var jssor_4_slider = new $JssorSlider$("jssor_4", jssor_4_options);

       /*#region responsive code begin*/

       var MAX_WIDTH = 980;

       function ScaleSlider() {
           var containerElement = jssor_4_slider.$Elmt.parentNode;
           var containerWidth = containerElement.clientWidth;

           if (containerWidth) {

               var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

               jssor_4_slider.$ScaleWidth(expectedWidth);
           }
           else {
               window.setTimeout(ScaleSlider, 30);
           }
       }

       ScaleSlider();

       $Jssor$.$AddEvent(window, "load", ScaleSlider);
       $Jssor$.$AddEvent(window, "resize", ScaleSlider);
       $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
       /*#endregion responsive code end*/
   };
