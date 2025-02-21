AuthStatusWidget = {
    options: {
        indicatorContainer: 'header'
    },
    
    events: {
        initialized: function(ev) {
            Sail.loadCSS(Sail.modules.defaultPath + 'AuthStatusWidget.css')
        },
        
        authenticated: function(ev) {
            AuthStatusWidget.showIndicator(AuthStatusWidget.options.indicatorContainer)
        },
        
        unauthenticated: function(ev) {
            $('#auth-indicator').remove()
        }
    },
    
    showIndicator: function(inContainer) {
        $('#auth-indicator').remove()
        
        indicator = $('<div id="auth-indicator"></div>')
        indicator.append('<div id="auth-as">'+Sail.app.session.account.login+'</div>')
        indicator.append('<div id="logout-button">[<a href="#">Logout</a>]</div>')
        
        indicator.find('a').click(function() {
            $(Sail.app).trigger('logout')
        })
        
        $(inContainer || 'body').append(indicator)
    }
}
