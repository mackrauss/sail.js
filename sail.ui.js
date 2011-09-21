Sail.UI = {
    init: function() {
        $(document).ready(function() {
            $('button, input[type=submit], input[type=reset], input[type=button]').button()
            $('.dialog button').click(function(){
                Sail.UI.dismissDialog($(this).parents('.dialog'))
            })
            
            $(Sail.app).trigger('initialized.ui')
        })
    },
    
    showDialog: function(jq) {
        dialogId = 'sail-dialog-'+Math.floor(Math.random()*10e10).toString(16)
        console.debug("Sail.UI: showing dialog "+dialogId)
        mask = $('<div class="mask"></div>')
        mask.addClass(dialogId)
        mask.insertBefore(jq)
        mask.css('z-index', 999)
        $(jq).css('z-index', 1000)
        $(jq).data('sail-dialog-id', dialogId)
        $(jq).show()
    },
    
    dismissDialog: function(jq) {
        if ($(jq).length == 0)
            return // don't attempt to dismiss if dialog doesn't exist
        dialogId = $(jq).data('sail-dialog-id')
        console.debug("Sail.UI: dismissing dialog "+dialogId)
        $('.mask.'+dialogId).remove()
        $(jq).fadeOut('fast', function() {$(this).remove()})
    }
}