(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{205:function(e,t,a){e.exports={container:"MyMap_container__3pm5F"}},232:function(e,t,a){e.exports=a(515)},237:function(e,t,a){},515:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(41),o=a.n(c),s=(a(237),a(239),a(21)),i=a(33),l=a(34),u=a(36),d=a(35),m=a(37),f=a(47),p=a(94),g=a(30),b=a(201),h=a.n(b),O=a(202),j=a.n(O),E=a(29),v=a.n(E),x=a(31),y=a.n(x),S=a(517),C=Object(S.a)("LOGIN"),w=Object(S.a)("LOGOUT"),L=Object(S.a)("AUTH"),A=Object(S.a)("HANDLE_PROFILE_SUBMIT"),N=Object(S.a)("HANDLE_PROFILE_CLEAR"),I=Object(S.a)("FETCH_ADDRESSES_REQUEST"),k=Object(S.a)("FETCH_ADDRESSES_SUCCESS"),_=Object(S.a)("FETCH_ADDRESSES_FAILURE"),R=Object(S.a)("FETCH_COORDS_REQUEST"),D=Object(S.a)("FETCH_COORDS_SUCCESS"),T=Object(S.a)("FETCH_COORDS_FAILURE"),F=Object(S.a)("SET_IS_ORDER_MADE"),M=function(e){return e.authReducer.isLoggedIn},U=function(e){return e.authReducer.profile},P=function(e){return Object.keys(e.authReducer.profile).length>0},J=function(e){return e.loadAddressesReducer.isLoadingAddresses},H=function(e){return e.loadAddressesReducer.errorText},W=function(e){return e.loadAddressesReducer.myAddresses},q=function(e){return e.coordsReducer.isLoadingCoords},G=function(e){return e.coordsReducer.error},V=function(e){return e.coordsReducer.coords},Q=function(e){return e.coordsReducer.isOrderMade},Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(){var e=a.props,t=e.logout;(0,e.setIsOrderMade)(!1),t()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isLoggedIn,a=e.classes;return r.a.createElement(h.a,{position:"static",color:"inherit"},r.a.createElement(j.a,null,r.a.createElement(v.a,{variant:"h5",color:"default",className:a.grow},"Loft Taxi"),r.a.createElement(y.a,{component:f.b,to:"/map",color:"default"},"\u041a\u0430\u0440\u0442\u0430"),r.a.createElement(y.a,{component:f.b,to:"/profile",color:"default"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement(y.a,{component:f.b,to:"/login",color:"default",onClick:this.handleLogout},t?"\u0412\u044b\u0439\u0442\u0438":"\u0412\u043e\u0439\u0442\u0438")))}}]),t}(n.Component),z={logout:w,setIsOrderMade:F},B=Object(s.b)(function(e){return{isLoggedIn:M(e)}},z)(Object(g.withStyles)(function(e){return{grow:{flexGrow:1}}})(Z)),X=a(101),$=Object(s.b)(function(e){return{isLoggedIn:M(e)}},null)(function(e){var t=e.component,a=e.isLoggedIn,n=Object(X.a)(e,["component","isLoggedIn"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/login"})}}))}),Y=a(190),K=a(193),ee=a(191),te=a(10),ae=a(50),ne=a.n(ae),re=a(9),ce=a.n(re),oe=a(99),se=a.n(oe),ie=a(78),le=a.n(ie),ue=function(e){var t=e.type,a=(e.name,e.label),n=e.input,c=e.placeholder,o=e.meta,s=o.touched,i=(o.invalid,o.error),l=Object(X.a)(e,["type","name","label","input","placeholder","meta"]);return r.a.createElement(le.a,Object.assign({label:a,placeholder:c||a,margin:"none",type:t,error:s&&i&&!0,helperText:s&&i},n,l))},de=function(e){function t(){var e,a;Object(i.a)(this,t);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).renderInputs=function(){var e=a.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(ce.a,{item:!0,xs:12,className:"".concat(e.alignLeft," ").concat(e.fieldAlign)},r.a.createElement(Y.a,{name:"userName",component:ue,label:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",type:"text",fullWidth:!0})),r.a.createElement(ce.a,{item:!0,xs:12,className:"".concat(e.alignLeft," ").concat(e.fieldAlign)},r.a.createElement(Y.a,{name:"userPassword",component:ue,label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",fullWidth:!0})))},a.renderForm=function(){var e=a.props,t=e.classes,n=e.handleSubmit,c=e.isSubmitting;return r.a.createElement(ce.a,{container:!0,spacing:0,className:t.container,alignItems:"center",justify:"center"},r.a.createElement(ce.a,{item:!0,xs:8,sm:6,md:4},r.a.createElement(ne.a,{component:"form",onSubmit:n(a.handleSubmit)},r.a.createElement(ce.a,{container:!0,spacing:24,className:t.form},r.a.createElement(ce.a,{item:!0,xs:12,className:"".concat(t.alignCenter," ").concat(t.fieldAlign)},r.a.createElement(v.a,{variant:"h4"},"\u0412\u043e\u0439\u0442\u0438")),c?r.a.createElement(ce.a,{item:!0,xs:12,className:t.loader},r.a.createElement(se.a,null)):a.renderInputs(),r.a.createElement(ce.a,{item:!0,xs:12,className:"".concat(t.alignLeft," ").concat(t.fieldAlign)},r.a.createElement(y.a,{variant:"outlined",color:"primary",type:"submit",component:"button"},"\u0412\u043e\u0439\u0442\u0438"))))))},a.handleSubmit=function(e){var t=e.userName,n=e.userPassword;(0,a.props.testAuth)({username:t,password:n})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.isLoggedIn;return r.a.createElement(n.Fragment,null,e?r.a.createElement(p.a,{to:"/map"}):this.renderForm())}}]),t}(n.Component),me={login:C,testAuth:L},fe=Object(te.d)(Object(s.b)(function(e){return{isLoggedIn:M(e),isSubmitting:Object(K.a)("loginform")(e)}},me),Object(g.withStyles)(function(e){return{container:{width:"100%",height:"100%"},form:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"stretch",padding:3*e.spacing.unit},fieldAlign:{display:"flex"},alignLeft:{justifyContent:"flex-start"},alignCenter:{justifyContent:"center"},loader:{display:"flex",justifyContent:"center",alignItems:"center",height:192}}}),Object(ee.a)({form:"loginform",validate:function(e){var t={};return e.userName?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.userName)||(t.userName="\u0422\u0443\u0442 \u043d\u0443\u0436\u0435\u043d \u0432\u0430\u0448 e-mail"):t.userName="\u041d\u0430\u0434\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043b\u043e\u0433\u0438\u043d",e.userPassword||(t.userPassword="\u041d\u0430\u0434\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"),t}}))(de),pe=a(199),ge=a.n(pe),be=a(205),he=a.n(be),Oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).map=null,a.mapContainer=r.a.createRef(),a.renderRoute=function(){var e=a.props.orderCoords;a.map.addLayer({id:"route",type:"line",source:{type:"geojson",data:{type:"Feature",properties:{color:"#F7455D"},geometry:{type:"LineString",coordinates:e}}},paint:{"line-width":8,"line-color":["get","color"]}}),a.map.flyTo({center:e[0]})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){ge.a.accessToken="pk.eyJ1Ijoia29ub3ZhbG92YS1hbmFzdCIsImEiOiJjanJkZHN4a3QwYWpjNDRwODdpNGp0cHA2In0.OQvQUUwv8c7DJQouM-dPTA",this.map=new ge.a.Map({container:this.mapContainer.current,style:"mapbox://styles/mapbox/streets-v9",center:[30.2656504,59.8029126],zoom:15})}},{key:"componentDidUpdate",value:function(e){if(e!==this.props){var t=this.props,a=t.isOrderMade,n=t.orderCoords;!a&&this.map.getLayer("route")&&(this.map.removeLayer("route"),this.map.removeSource("route")),a&&n&&n.length>0&&e.orderCoords!==n&&this.renderRoute()}}},{key:"componentWillUnmount",value:function(){this.map.remove()}},{key:"render",value:function(){return r.a.createElement("div",{className:he.a.container,ref:this.mapContainer})}}]),t}(n.Component),je=Object(s.b)(function(e){return{orderCoords:V(e),isOrderMade:Q(e)}},null)(Oe),Ee=a(23),ve=a(100),xe=a(194),ye=a.n(xe),Se=function(e){function t(){var e,a;Object(i.a)(this,t);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={address1:"",address2:""},a.handleChange=function(e){a.setState(Object(ve.a)({},e.target.name,e.target.value))},a.handleButtonClick=function(){var e=a.props,t=e.fetchCoordsRequest,n=e.setIsOrderMade,r=a.state,c=r.address1,o=r.address2;c&&o&&t({address1:c,address2:o}),n(!0),a.setState(Object(Ee.a)({},a.state,{address1:"",address2:""}))},a.renderInputs=function(){var e=a.props,t=e.classes,c=e.MyAddresses,o=a.state,s=o.address1,i=o.address2;return r.a.createElement(n.Fragment,null,r.a.createElement(ce.a,{item:!0,xs:12,className:"".concat(t.alignCenter," ").concat(t.fieldAlign)},r.a.createElement(le.a,{id:"address-1",name:"address1",select:!0,margin:"normal",label:"\u041f\u0443\u043d\u043a\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",value:a.state.address1,onChange:a.handleChange,fullWidth:!0},r.a.createElement(ye.a,{value:""},"\u041f\u0443\u043d\u043a\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"),c.map(function(e){return i===e?e:r.a.createElement(ye.a,{key:e,value:e},e)}))),r.a.createElement(ce.a,{item:!0,xs:12,className:"".concat(t.alignCenter," ").concat(t.fieldAlign)},r.a.createElement(le.a,{id:"address-2",name:"address2",select:!0,margin:"normal",label:"\u041f\u0443\u043d\u043a\u0442 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",value:a.state.address2,onChange:a.handleChange,fullWidth:!0},r.a.createElement(ye.a,{value:""},"\u041f\u0443\u043d\u043a\u0442 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"),c.map(function(e){return s===e?e:r.a.createElement(ye.a,{key:e,value:e},e)}))))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchAddressesRequest,a=e.MyAddresses;a&&0!==a.length||t()}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.isLoadingAddresses,n=e.errorText,c=this.state,o=c.address1,s=c.address2;return r.a.createElement(ce.a,{container:!0,spacing:24},r.a.createElement(ce.a,{item:!0,xs:12,className:"".concat(t.alignCenter," ").concat(t.fieldAlign)},r.a.createElement(v.a,{variant:"h4"},"\u0412\u044b\u0437\u043e\u0432 \u0442\u0430\u043a\u0441\u0438")),n&&r.a.createElement(ce.a,{item:!0,xs:12,className:"".concat(t.alignCenter," ").concat(t.fieldAlign)},r.a.createElement(v.a,{variant:"body1"},n)),a?r.a.createElement(ce.a,{item:!0,xs:12,className:t.loader},r.a.createElement(se.a,null)):this.renderInputs(),r.a.createElement(ce.a,{item:!0,xs:12,className:"".concat(t.alignLeft," ").concat(t.fieldAlign)},r.a.createElement(y.a,{variant:"outlined",color:"primary",component:"button",disabled:!o||!s,onClick:this.handleButtonClick},"\u0412\u044b\u0437\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u0441\u0438")))}}]),t}(n.Component),Ce={fetchAddressesRequest:I,fetchCoordsRequest:R,setIsOrderMade:F},we=Object(te.d)(Object(s.b)(function(e){return{isLoadingAddresses:J(e),errorText:H(e),MyAddresses:W(e),isLoadingCoords:q(e)}},Ce),Object(g.withStyles)(function(e){return{fieldAlign:{display:"flex"},alignLeft:{justifyContent:"flex-start"},alignCenter:{justifyContent:"center"},loader:{display:"flex",justifyContent:"center",alignItems:"center",height:192}}}))(Se),Le=Object(g.withStyles)(function(e){return{fieldAlign:{display:"flex"},alignLeft:{justifyContent:"flex-start"},alignCenter:{justifyContent:"center"}}})(function(e){var t=e.classes,a=e.header,n=e.body,c=e.btnText,o=e.linkTo;return r.a.createElement(ce.a,{container:!0,spacing:24},r.a.createElement(ce.a,{item:!0,xs:12,className:"".concat(t.alignCenter," ").concat(t.fieldAlign)},r.a.createElement(v.a,{variant:"h4"},a)),r.a.createElement(ce.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"body1"},n)),r.a.createElement(ce.a,{item:!0,xs:12,className:"".concat(t.alignLeft," ").concat(t.fieldAlign)},r.a.createElement(y.a,{component:f.b,variant:"outlined",color:"primary",to:o},c)))}),Ae=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){(0,a.props.setIsOrderMade)(!1)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.errorCoords;return r.a.createElement(ce.a,{container:!0,spacing:24},r.a.createElement(ce.a,{item:!0,xs:12,className:"".concat(t.alignCenter," ").concat(t.fieldAlign)},r.a.createElement(v.a,{variant:"h4"},"\u0417\u0430\u043a\u0430\u0437 \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d")),r.a.createElement(ce.a,{item:!0,xs:12},a&&r.a.createElement(v.a,{variant:"body1"},a),!a&&r.a.createElement(v.a,{variant:"body1"},"\u0412\u0430\u0448\u0435 \u0442\u0430\u043a\u0441\u0438 \u0443\u0436\u0435 \u0435\u0434\u0435\u0442 \u043a \u0432\u0430\u043c. \u041f\u0440\u0438\u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 10 \u043c\u0438\u043d\u0443\u0442")),r.a.createElement(ce.a,{item:!0,xs:12,className:"".concat(t.alignLeft," ").concat(t.fieldAlign)},r.a.createElement(y.a,{variant:"outlined",color:"primary",component:"button",onClick:this.handleClick},"\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0437\u0430\u043a\u0430\u0437")))}}]),t}(n.Component),Ne={setIsOrderMade:F},Ie=Object(te.d)(Object(s.b)(function(e){return{errorCoords:G(e)}},Ne),Object(g.withStyles)(function(e){return{fieldAlign:{display:"flex"},alignLeft:{justifyContent:"flex-start"},alignCenter:{justifyContent:"center"}}}))(Ae),ke=Object(te.d)(Object(s.b)(function(e){return{isProfile:P(e),isOrderMade:Q(e)}},null),Object(g.withStyles)(function(e){return{container:{width:"100%",height:"100%",position:"absolute"},form:{margin:30,maxWidth:300,position:"absolute",zIndex:200,top:70,display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"stretch",padding:3*e.spacing.unit}}}))(function(e){var t=e.classes,a=e.isProfile,n=e.isOrderMade;return r.a.createElement(ce.a,{container:!0,spacing:0,className:t.container,alignItems:"center",justify:"flex-start"},r.a.createElement(ce.a,{item:!0,xs:12,md:8},r.a.createElement(ne.a,{className:t.form},a&&!n&&r.a.createElement(we,null),a&&n&&r.a.createElement(Ie,null),!a&&r.a.createElement(Le,{header:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",body:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",btnText:"\u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u044c",linkTo:"/profile"}))))}),_e=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(je,null),r.a.createElement(ke,null))},Re=a(55),De=function(e){return e&&e.replace(/[^A-Za-z\s]/,"")||""},Te=function(e){if(!e)return"";var t=e.replace(/[^\d\s]/g,"");return t&&t.substring(0,16).match(/\d{1,4}/g).join(" ")},Fe=function(e){return e?e.replace(/\s/g,""):""},Me=function(e){if(!e||"/"===e)return"";var t=e.replace(/[^\d]/g,"");if(t){var a=t.substring(0,2),n=t.substring(2,4);return+a>12&&(a="12"),"".concat(a,"/").concat(n)}},Ue=function(e){if(!e)return"";var t=e.replace(/[^\d]/,"");return t&&t.substring(0,3)},Pe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={isUpdated:!1},a.requiredFields=["cardName","cardNumber","expDate","cvv"],a.handleSubmit=function(e){var t=a.props,n=t.isLoggedIn,r=t.handleProfileSubmit;a.setState(Object(Ee.a)({},a.state,{isUpdated:!0})),r({isLoggedIn:n,profile:Object(Ee.a)({},e)})},a.handleClear=function(){var e=a.props,t=e.handleProfileClear,n=e.change;a.setState({isUpdated:!1}),a.requiredFields.forEach(function(e){return n(e,"")}),t()},a.renderForm=function(){var e=a.props,t=e.classes,c=e.handleSubmit;return r.a.createElement(n.Fragment,null,r.a.createElement(ne.a,{component:"form",onSubmit:c(a.handleSubmit)},r.a.createElement(ce.a,{container:!0,spacing:16,className:t.form},r.a.createElement(ce.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"h4",className:"".concat(t.alignCenter," ").concat(t.fieldAlign)},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement(v.a,{variant:"h6",className:"".concat(t.alignLeft," ").concat(t.fieldAlign)},"\u0421\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b")),r.a.createElement(ce.a,{item:!0,xs:12,sm:6,md:6},r.a.createElement(Y.a,{name:"cardName",component:ue,label:"\u0418\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430",type:"text",required:!0,fullWidth:!0,format:De})),r.a.createElement(ce.a,{item:!0,xs:12,sm:6,md:6},r.a.createElement(Y.a,{name:"cardNumber",component:ue,label:"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b",required:!0,fullWidth:!0,format:Te,parse:Fe})),r.a.createElement(ce.a,{item:!0,xs:12,sm:6,md:6},r.a.createElement(Y.a,{name:"expDate",component:ue,label:"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",required:!0,fullWidth:!0,placeholder:"__ /__",InputLabelProps:{shrink:!0},format:Me})),r.a.createElement(ce.a,{item:!0,xs:12,sm:6,md:6},r.a.createElement(Y.a,{name:"cvv",component:ue,label:"CVV",required:!0,fullWidth:!0,format:Ue})),r.a.createElement(ce.a,{item:!0,xs:6,className:"".concat(t.alignLeft," ").concat(t.fieldAlign)},r.a.createElement(y.a,{variant:"contained",color:"primary",component:"button",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),r.a.createElement(ce.a,{item:!0,xs:6,className:"".concat(t.alignLeft," ").concat(t.fieldAlign)},r.a.createElement(y.a,{variant:"contained",color:"primary",component:"button",onClick:a.handleClear},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))))},a.renderAlert=function(){var e=a.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(ne.a,{className:e.form},r.a.createElement(Le,{header:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",body:"\u041f\u043b\u0430\u0442\u0451\u0436\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b. \u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u0441\u0438.",btnText:"\u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043a\u0430\u0440\u0442\u0443",linkTo:"/map"})))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.isUpdated;return r.a.createElement(ce.a,{container:!0,spacing:0,className:e.container,alignItems:"center",justify:"center"},r.a.createElement(ce.a,{item:!0,xs:10,md:6},t?this.renderAlert():this.renderForm()))}}]),t}(n.Component),Je={login:C,handleProfileSubmit:A,handleProfileClear:N,change:Re.a},He=Object(te.d)(Object(s.b)(function(e){return{isLoggedIn:M(e),initialValues:U(e)}},Je),Object(g.withStyles)(function(e){return{container:{width:"100%",height:"100%"},form:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:3*e.spacing.unit},formcolumn:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"stretch"},fieldAlign:{display:"flex"},alignLeft:{justifyContent:"flex-start"},alignCenter:{justifyContent:"center"}}}),Object(ee.a)({form:"profileform",validate:function(e){var t={};if(["cardName","cardNumber","expDate","cvv"].forEach(function(a){e[a]||(t[a]="\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")}),e.expDate){var a=e.expDate.substring(0,2),n=e.expDate.substring(3);+new Date(+("20"+n),+a-1)<Date.now()&&(t.expDate="\u0414\u0430\u0442\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0435\u0432\u0435\u0440\u043d\u043e")}return/^\S+\s\S+$/gi.test(e.cardName)||(t.cardName="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u0430\u043a \u043d\u0430 \u043a\u0430\u0440\u0442\u0435"),e.cardNumber&&e.cardNumber.length<16&&(t.cardNumber="\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 16 \u0446\u0438\u0444\u0440"),/^\d{3}$/gi.test(e.cvv)||(t.cvv="CVV \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 3 \u0446\u0438\u0444\u0440"),t}}))(Pe),We=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(B,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/login",component:fe}),r.a.createElement(p.a,{path:"/",exact:!0,to:"login"}),r.a.createElement($,{path:"/map",component:_e}),r.a.createElement($,{path:"/profile",component:He}))))}}]),t}(n.Component),qe=a(207),Ge=a(192),Ve={isLoggedIn:!1,profile:{}},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.toString():return Object(Ee.a)({},e,{isLoggedIn:!0});case w.toString():return Object(Ee.a)({},e,{isLoggedIn:!1});case A.toString():var a=t.payload.profile;return Object(Ee.a)({},e,{profile:a});case N.toString():return Object(Ee.a)({},e,{profile:{}});default:return e}},Ze={myAddresses:[],isLoadingAddresses:null,error:null,errorText:null},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.toString():return Object(Ee.a)({},e,{isLoadingAddresses:!0});case k.toString():return Object(Ee.a)({},e,{myAddresses:t.payload,isLoadingAddresses:!1,error:null,errorText:null});case _.toString():return Object(Ee.a)({},e,{error:t.payload,errorText:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0441\u0435\u0442\u0438",isLoadingAddresses:!1});default:return e}},Be={isLoadingCoords:!1,error:null,coords:null,isOrderMade:!1},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.toString():return Object(Ee.a)({},e,{isLoadingCoords:!0});case D.toString():return Object(Ee.a)({},e,{error:null,coords:t.payload,isLoadingCoords:!1});case T.toString():return Object(Ee.a)({},e,{coords:null,error:t.payload,errorCoords:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0441\u0435\u0442\u0438",isLoadingCoords:!1});case F.toString():return Object(Ee.a)({},e,{isOrderMade:t.payload});default:return e}},$e=Object(te.c)({authReducer:Qe,loadAddressesReducer:ze,coordsReducer:Xe,form:Ge.a}),Ye=function(){var e=localStorage.state?JSON.parse(localStorage.state):{isLoggedIn:!1,profile:{}},t=e.isLoggedIn,a=e.profile;return void 0===a&&(a={}),void 0===t&&(t=!1),{isLoggedIn:t,profile:a}},Ke=Object(qe.a)(),et=function(){return Object(te.e)($e,{authReducer:Object(Ee.a)({},Ye())},Object(te.d)(Object(te.a)(Ke),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}))},tt=a(16),at=a.n(tt),nt=a(12),rt=a(206),ct=a.n(rt).a.create({baseURL:"https://backend-loft-taxi.glitch.me"}),ot=function(e){var t=e.username,a=e.password;return ct("/auth?username=".concat(t.trim(),"&password=").concat(a.trim()),{method:"GET",mode:"cors"}).then(function(e){return e})},st=function(){return ct("/addressList",{method:"GET",mode:"cors"}).then(function(e){return e})},it=function(e){var t=e.address1,a=e.address2;return ct("/route?address1=".concat(t,"&address2=").concat(a),{method:"GET",mode:"cors"}).then(function(e){return e})},lt=at.a.mark(mt),ut=at.a.mark(ft),dt=at.a.mark(pt);function mt(e){var t;return at.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(nt.a)(ot,e.payload);case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",{error:a.t0.message});case 10:case"end":return a.stop()}},lt,this,[[0,7]])}function ft(e){var t,a,n;return at.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(nt.b)(Object(Re.b)("loginform"));case 2:return r.next=4,Object(nt.a)(mt,e);case 4:if(t=r.sent,a=t.error,n=t.data,!a){r.next=12;break}return r.next=10,Object(nt.b)(Object(Re.c)("loginform",{userName:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0442\u0438",userPassword:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0442\u0438",_error:a}));case 10:r.next=20;break;case 12:if(n.success){r.next=17;break}return r.next=15,Object(nt.b)(Object(Re.c)("loginform",{userName:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",userPassword:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",_error:n.error}));case 15:r.next=20;break;case 17:if(!n.success){r.next=20;break}return r.next=20,Object(nt.b)(C());case 20:case"end":return r.stop()}},ut,this)}function pt(){return at.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nt.e)(L.toString(),ft);case 2:case"end":return e.stop()}},dt,this)}var gt=at.a.mark(ht),bt=at.a.mark(Ot);function ht(){var e,t,a;return at.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(nt.a)(st);case 3:if(e=n.sent,t=e.error,a=e.data,t){n.next=9;break}return n.next=9,Object(nt.b)(k(a.addresses));case 9:if(!t){n.next=12;break}return n.next=12,Object(nt.b)(_(t));case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(0),n.next=18,Object(nt.b)(_(n.t0));case 18:case"end":return n.stop()}},gt,this,[[0,14]])}function Ot(){return at.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nt.d)(I.toString(),ht);case 2:case"end":return e.stop()}},bt,this)}var jt=at.a.mark(vt),Et=at.a.mark(xt);function vt(e){var t,a,n;return at.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(nt.a)(it,e.payload);case 3:if(t=r.sent,a=t.error,n=t.data,a){r.next=9;break}return r.next=9,Object(nt.b)(D(n));case 9:if(!a){r.next=12;break}return r.next=12,Object(nt.b)(T(a));case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(0),r.next=18,Object(nt.b)(T(r.t0));case 18:case"end":return r.stop()}},jt,this,[[0,14]])}function xt(){return at.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nt.d)(R.toString(),vt);case 2:case"end":return e.stop()}},Et,this)}var yt=at.a.mark(_t),St=at.a.mark(Rt),Ct=at.a.mark(Dt),wt=at.a.mark(Tt),Lt=at.a.mark(Ft);function At(e){var t=e.payload,a=t.isLoggedIn,n=t.profile;localStorage.state=JSON.stringify({isLoggedIn:a,profile:n})}function Nt(){var e=(!!localStorage.state&&JSON.parse(localStorage.state)).isLoggedIn;localStorage.state=JSON.stringify({isLoggedIn:e})}function It(e){var t=(localStorage.state?JSON.parse(localStorage.state):{}).profile;localStorage.state=JSON.stringify({isLoggedIn:!1,profile:t})}function kt(e){var t=(localStorage.state?JSON.parse(localStorage.state):{}).profile;localStorage.state=JSON.stringify({isLoggedIn:!0,profile:t})}function _t(){return at.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nt.e)(A.toString(),At);case 2:case"end":return e.stop()}},yt,this)}function Rt(){return at.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nt.e)(N.toString(),Nt);case 2:case"end":return e.stop()}},St,this)}function Dt(){return at.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nt.d)(w.toString(),It);case 2:case"end":return e.stop()}},Ct,this)}function Tt(){return at.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nt.d)(C.toString(),kt);case 2:case"end":return e.stop()}},wt,this)}function Ft(){return at.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nt.c)(_t);case 2:return e.next=4,Object(nt.c)(Rt);case 4:return e.next=6,Object(nt.c)(Dt);case 6:return e.next=8,Object(nt.c)(Tt);case 8:case"end":return e.stop()}},Lt,this)}var Mt=at.a.mark(Ut);function Ut(){return at.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nt.c)(pt);case 2:return e.next=4,Object(nt.c)(Ot);case 4:return e.next=6,Object(nt.c)(xt);case 6:return e.next=8,Object(nt.c)(Ft);case 8:case"end":return e.stop()}},Mt,this)}var Pt=et();Ke.run(Ut),o.a.render(r.a.createElement(s.a,{store:Pt},r.a.createElement(We,null)),document.getElementById("root"))}},[[232,2,1]]]);
//# sourceMappingURL=main.13f47270.chunk.js.map