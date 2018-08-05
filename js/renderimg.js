Vue.component('renderimg', {
  template:` 
      
      <div id="renderize" v-on:load="randimg"></div>


  `,
  computed: {
    randimg: function() {
      
      function viewport() {
        var e = window, a = 'inner';
        if ( !( 'innerWidth' in window ) ) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
      }
      
      var dimensions = viewport();
      var imgList = [];
      
      if(dimensions.width < 360) { // mobile images
        imgsList = ['./background_img/15400572_765122216989217_6711826858003116152_n.jpg',
                      './background_img/15400572_765122216989217_6711826858003116152_n.jpg',
                      './background_img/16602780_757164317785007_7483241174805224017_n.jpg',
                      './background_img/16602780_757164317785007_7483241174805224017_n.jpg',
                      './background_img/16640579_757164021118370_6083884171129595581_n.jpg',
                      './background_img/16640579_757164021118370_6083884171129595581_n.jpg',
                      './background_img/16640846_757504871084285_327832194943939820_n.jpg',
                      './background_img/16711523_757163907785048_2876900981118160062_n.jpg',
                      './background_img/16711523_757163907785048_2876900981118160062_n.jpg',
                      './background_img/16999068_765120683656037_4549233745065790053_n.jpg',
                      './background_img/16999068_765120683656037_4549233745065790053_n.jpg',
                      './background_img/16999070_765121080322664_7424108052507828246_n.jpg',
                      './background_img/16999070_765121080322664_7424108052507828246_n.jpg',
                      './background_img/17021414_765123243655781_4580970521561781334_n.jpg',
                      './background_img/17021414_765123243655781_4580970521561781334_n.jpg',
                      './background_img/17021437_765121873655918_5424372631556577957_n.jpg',
                      './background_img/17021437_765121873655918_5424372631556577957_n.jpg',
                      './background_img/17021650_765121133655992_1599050487041296200_n.jpg',
                      './background_img/17021650_765121133655992_1599050487041296200_n.jpg',
                      './background_img/17022095_765121640322608_1652062904597590892_n.jpg',
                      './background_img/17022095_765121640322608_1652062904597590892_n.jpg',
                      './background_img/18767671_816865995148172_3106183519391738422_n.jpg',
                      './background_img/18767671_816865995148172_3106183519391738422_n.jpg',
                      './background_img/18813510_816109095223862_4931306363862342702_n.jpg',
                      './background_img/18839342_816108598557245_7800779632719677755_n.jpg',
                      './background_img/18839342_816108598557245_7800779632719677755_n.jpg',
                      './background_img/18893041_816866581814780_1393248857883915427_n.jpg',
                      './background_img/27459721_954543521380418_84006005458968911_n.jpg',
                      './background_img/27459721_954543521380418_84006005458968911_n.jpg',
                      './background_img/27459925_954543311380439_5834598467936134675_n.jpg',
                      './background_img/27459925_954543311380439_5834598467936134675_n.jpg',
                      './background_img/27540942_954542018047235_583464822024195297_n.jpg',
                      './background_img/27541037_954959284672175_6513802473747014162_n.jpg',
                      './background_img/27541037_954959284672175_6513802473747014162_n.jpg',
                      './background_img/27749970_954960881338682_787270324427882080_n.jpg',
                      './background_img/27750369_954542888047148_2269990544634655607_n.jpg',
                      './background_img/27750369_954542888047148_2269990544634655607_n.jpg',
                      './background_img/27750824_954960071338763_4982788372477942646_n.jpg',
                      './background_img/27750824_954960071338763_4982788372477942646_n.jpg',
                      './background_img/27971620_961990753969028_5387521165272896006_n.jpg',
                      './background_img/28058759_961981223969981_16619441470565654_n.jpg',
                      './background_img/28166959_962290620605708_5045578726958632351_n.jpg',
                      './background_img/29511732_981193892048714_3831877187636559872_n.jpg',
                      './background_img/Carnaval_post_blog.jpg',
                      './background_img/entrete-presidente-vampiro-paraiso-tuiuti.jpg',
                      './background_img/topless_rio_diabinha.jpg'   
                    ];
      } else {
        imgsList = ['./background_img/15400572_765122216989217_6711826858003116152_n.jpg',
                      './background_img/15400572_765122216989217_6711826858003116152_n.jpg',
                      './background_img/16602780_757164317785007_7483241174805224017_n.jpg',
                      './background_img/16602780_757164317785007_7483241174805224017_n.jpg',
                      './background_img/16640579_757164021118370_6083884171129595581_n.jpg',
                      './background_img/16640579_757164021118370_6083884171129595581_n.jpg',
                      './background_img/16640846_757504871084285_327832194943939820_n.jpg',
                      './background_img/16711523_757163907785048_2876900981118160062_n.jpg',
                      './background_img/16711523_757163907785048_2876900981118160062_n.jpg',
                      './background_img/16999068_765120683656037_4549233745065790053_n.jpg',
                      './background_img/16999068_765120683656037_4549233745065790053_n.jpg',
                      './background_img/16999070_765121080322664_7424108052507828246_n.jpg',
                      './background_img/16999070_765121080322664_7424108052507828246_n.jpg',
                      './background_img/17021414_765123243655781_4580970521561781334_n.jpg',
                      './background_img/17021414_765123243655781_4580970521561781334_n.jpg',
                      './background_img/17021437_765121873655918_5424372631556577957_n.jpg',
                      './background_img/17021437_765121873655918_5424372631556577957_n.jpg',
                      './background_img/17021650_765121133655992_1599050487041296200_n.jpg',
                      './background_img/17021650_765121133655992_1599050487041296200_n.jpg',
                      './background_img/17022095_765121640322608_1652062904597590892_n.jpg',
                      './background_img/17022095_765121640322608_1652062904597590892_n.jpg',
                      './background_img/18767671_816865995148172_3106183519391738422_n.jpg',
                      './background_img/18767671_816865995148172_3106183519391738422_n.jpg',
                      './background_img/18813510_816109095223862_4931306363862342702_n.jpg',
                      './background_img/18839342_816108598557245_7800779632719677755_n.jpg',
                      './background_img/18839342_816108598557245_7800779632719677755_n.jpg',
                      './background_img/18893041_816866581814780_1393248857883915427_n.jpg',
                      './background_img/27459721_954543521380418_84006005458968911_n.jpg',
                      './background_img/27459721_954543521380418_84006005458968911_n.jpg',
                      './background_img/27459925_954543311380439_5834598467936134675_n.jpg',
                      './background_img/27459925_954543311380439_5834598467936134675_n.jpg',
                      './background_img/27540942_954542018047235_583464822024195297_n.jpg',
                      './background_img/27541037_954959284672175_6513802473747014162_n.jpg',
                      './background_img/27541037_954959284672175_6513802473747014162_n.jpg',
                      './background_img/27749970_954960881338682_787270324427882080_n.jpg',
                      './background_img/27750369_954542888047148_2269990544634655607_n.jpg',
                      './background_img/27750369_954542888047148_2269990544634655607_n.jpg',
                      './background_img/27750824_954960071338763_4982788372477942646_n.jpg',
                      './background_img/27750824_954960071338763_4982788372477942646_n.jpg',
                      './background_img/27971620_961990753969028_5387521165272896006_n.jpg',
                      './background_img/28058759_961981223969981_16619441470565654_n.jpg',
                      './background_img/28166959_962290620605708_5045578726958632351_n.jpg',
                      './background_img/29511732_981193892048714_3831877187636559872_n.jpg',
                      './background_img/Carnaval_post_blog.jpg',
                      './background_img/entrete-presidente-vampiro-paraiso-tuiuti.jpg',
                      './background_img/topless_rio_diabinha.jpg'   
                    ];
      }
      
      var indexR = Math.floor(Math.random() * (imgsList.length -1));              
      document.body.style.backgroundImage = "url("+imgsList[indexR]+")";
    }
  },
});

var app = new Vue({
  el: '#app'
})
