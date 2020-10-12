;(function ($, window) {

    $.plugin('neonGetStock', {

        /**
         * Default configuration of the plugin.
         * @object
         */
        defaults: {
           refresh: 15000,
        },

        /**
         * Initializes the plugin and sets up the necessary event handler
         */
        init: function () {
            var me = this;

            //this method call reads the data-attributes of the element and makes them available:
            //data-dummyvalue is accessible with me.opts.dummyvalue

            console.log(me.opts.refresh);
            me.applyDataAttributes();

            var refresh = function() {
                $.ajax({
                    url: '/NeonStockInformation/getStock',
                    method: 'GET',
                    success: function (response) {
                        console.log(response);
                        var res_json = $.parseJSON(response);

                        $('#NeonStockNummer').html(res_json.stock);
                        
                        if(res_json.stock < 5) $('#NeonStockInfo').removeClass("high mid").addClass("low");
                        else if(res_json.stock < 20 ) $('#NeonStockInfo').removeClass("high low").addClass("mid");
                        else if(res_json.stock >= 20) $('#NeonStockInfo').removeClass("mid low").addClass("high");
                        else
                            console.log(`Err: intStock is ${res_json.stock}`);
                        
                        if(res_json.config.refresh) me.opts.refresh = res_json.config.refresh*1000;

                        setTimeout(function() {
                            refresh();
                        }, me.opts.refresh);  
                        
                        console.log("refresh now : "+me.opts.refresh/1000+"s");
                    }
                });
            };
            refresh();
        },

    });
})(jQuery, window);

$('#NeonStockInfo').neonGetStock();