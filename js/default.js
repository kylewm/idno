
/**
    Helper Javascript functions for idno

    If you need to add your own JavaScript, the best thing to do is to create your own js files
    and reference them from a custom plugin or template.

    @package idno
    @subpackage core
*/

/**
*** Content creation
 */

    function contentCreateForm(plugin) {
        if (window.contentCreateType == plugin) {
            $('#contentCreate').slideDown(200);
            $('#contentTypeButtonBar').slideUp(200);
        } else {
            $.ajax('/' + plugin + '/edit/', {
                dataType: 'html',
                success: function(data) {
                    $('#contentCreate').html(data);
                    $('#contentCreate').slideDown(200);
                    $('#contentTypeButtonBar').slideUp(200);
                    window.contentCreateType = plugin;
                    window.contentPage = true;
                    if (jQuery){
                        $('form').sisyphus();
                    }
                },
                error: function(error) {
                    $('#contentTypeButtonBar').slideDown(200);
                }

            });
        }
    }

    function hideContentCreateForm() {
        if (window.contentPage == true) {
            $('#contentTypeButtonBar').slideDown(200);
            $('#contentCreate').slideUp(200);
        } else {
            window.history.go(-1);
        }
    }