import React, {Component} from 'react';
import Brute from '../components/ChatBot/Chatbot'

class Chatbot extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        (function(d, m){
            var kommunicateSettings = {"appId":"321687dbfcbe7c590acb0d787a9c4ef2d","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
    }
    render() {
        return(
            <div>
                    <Brute/>
            </div>
        )
    }
}
export default Chatbot;