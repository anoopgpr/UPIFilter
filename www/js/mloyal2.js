 $.mobile.allowCrossDomainPages = true;
_debug = false;

var appversion='8.0';

var newap=false;

var vidlen='';

var pendingprofile = false;
var popUp;
var city_id='';
var category_id='';

var gallery_cat='';
var galstr='';
var player_cat='';
var fix_cat='';

var reg_id="";
var isuserexist=false;

var filenm_bill='';

var filenm='';
var filenmdoc='';
var filenmshop='';

var str1='';
var str2='';

var selcid='';
var selname='';

var str3='';

 var errors = {};

var lastattemptpage='';

var backfromemail='';
var transfertype = '';

var scanval='';
var isGiftStore = false;


var json_fb='https://taghash.co/mloyalApps/facebookufifilters.php';
/*var RSS_twitter='http://xceedfbapps.com/mloyalfeeds/twitter.php?brandname=pizzahut';
var RSS_pinterest='http://xceedfbapps.com/mloyalfeeds/pinterest.php?brandname=phoolwaladotcom';
var RSS_instagram='http://xceedfbapps.com/mloyalfeeds/instagram.php?brandname=IndigoDelicatessen';
var RSS_youtube='http://xceedfbapps.com/mloyalfeeds/youtube.php?brandname=sanjeevkapoorkhazana';
var RSS_tumblr='http://xceedfbapps.com/mloyalfeeds/tumblr.php?brandurl=http://vinegarwoman.tumblr.com';
var RSS_matchfix='http://xceedfbapps.com/ddfeeds/calendar_new.php';//'http://xceedfbapps.com/ddfeeds/myxml.php';*/
var RSS_twitter,RSS_pinterest,RSS_instagram,RSS_youtube,RSS_tumblr,RSS_matchfix;
var brandname='ufifilters';
var aboutus_det='ufifilters';
var brand_url='https://hil.in/';
var cart = { cartdata: []};
var indexary=new Array();
var ids = [];
var cityarr=new Array();
var cityidarr=new Array();
var scanmobileno='';

user = {
	"balance" : 0,
	"firstname" : "",
	"id" : "",
	"lastname" : "",
	"total" : 0,
	"validity" : "",
	"mobile" : "",
	"email":"",
	"dob":"",
	"name":"",
	"latitude_ck":"",
	"longitude_ck":"",
	"trans_sms":"",
	"dealerbonuspoints":"",
	"mktgsms":"",
	"cpns":"",
	"ads":"",
	"dob":"",
	"emailid":"",
	"def_store":"",
	"def_city":"",
	"visit_frequency":"",
	"membertype":"",
	"district":"",
	"cashback":"",
	"other_mobile_no":"",
	"referencecode":"",
	"pancardno":"",
	"photo":"",
	"shopname":"",
	"gstno":"",
	"shopestablish":"",
	"PhotoofShop":"",
	"doc":"",
	"doc1":"",
	"state":"",
	"cinno":"",
	"pin":"",
	"address_ck":"",
	"state_ck":"",
	"street_ck":"",
	"created_on":"",
	"isApproved":"",
	"refer_code":"",
	"owner_mobileno":"",
	"nocounter":"",
	"isBlocked":"",
	"ditrtobuy":"",
	"brandstobuy":"",
	"firmage":"",
	"marriage":"",
	"store_code":"",
	"adharno":""
};


store = {
	"store_id" : "",
    "store_name" : "",
	"store_category" : "",
    "redeem_logic" : "",
    "store_members" : "",
	"store_rank" : "",
    "admin_id" : "",
    "brand_id" : "",
	"district" : "",
	"storemobile":"",
	"nocounter ":"",
	"walletpoints ":"",
	"storepoints ":"",
	"Retailer_Balance_Points ":"",
	"storecode ":"",
	"storefirstname ":"",
	"division ":""
};

var SERVER = "https://ufifilters.mloyalretail.com/m/";
var SERVER1 = "https://ufifilters.mloyalretail.com/";
var SERVER2 = "https://ufifilters.mloyalretail.com/APIs/";
var SERVER3 = 'https://ufifilters.mloyalretail.com/Rewards/';
//var versionurl  ='http://180.179.198.150:4022/';
var versionurl  ='https://taghash.co/ufifilters/';
var GSERVER = "https://birlasampann.mloyalretail.com/APIs/";
var GSERVER_2 = "https://ufifilters.mloyalretail.com/APIs/";


/*var SERVER = "http://localhost:8086/https://ufifilters.mloyalretail.com/m/";
var SERVER1 = "http://localhost:8086/https://ufifilters.mloyalretail.com/";
var SERVER2 = "http://localhost:8086/https://ufifilters.mloyalretail.com/APIs/";
var SERVER3 = 'http://localhost:8086/https://ufifilters.mloyalretail.com/Rewards/';
//var versionurl  ='http://180.179.198.150:4022/';
var versionurl  ='http://localhost:8086/https://taghash.co/ufifilters/';
var GSERVER = "http://localhost:8086/https://birlasampann.mloyalretail.com/APIs/";
var GSERVER_2 = "http://localhost:8086/https://ufifilters.mloyalretail.com/APIs/";
*/

$(document).ready(function (event) {

               checkVersion();

	           $.mobile.changePage( "#slidepage", { transition: "none"} );

                $("#wait").css("display","none"); // hide it initially
				
                 $(document).ajaxStart(function() {
                       $("#wait").css("display","block");
                    });
				  
                 $(document).ajaxStop(function() {
                       $("#wait").css("display","none");
                    });

				//loadStates();
				
				$( function() {
					 //$("#popupNested1").enhanceWithin().popup();
					 $("#popupNestedSettings").enhanceWithin().popup();
					 //$("#scan2").enhanceWithin().popup();
					 $("#withoutscan").enhanceWithin().popup();

					 $("#withoutscancou").enhanceWithin().popup();

					 $('#userapprove').enhanceWithin().popup();

					  $('#withoutpan').enhanceWithin().popup();

					  $('#schemes_pop').enhanceWithin().popup();

					 // $('#userapprove_rtypeselection').enhanceWithin().popup();

					  $('#ret_scan_selection').enhanceWithin().popup();
            $('#transfer_details').enhanceWithin().popup();


				});
        loadLocation();
		loadLocation_retlist();
				/*$("#addmore_sdata").click(function(){

					 addInput('dynamicInput_sdata');

				 });*/

				 $('#homepagefooter').owlCarousel({
					loop:true,
					margin:0,
					nav:false,
					dots:false,
					autoplay:true,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						1000:{
							items:1
						}
					}
						
				});

				 document.addEventListener("backbutton", function(e)
				 {

						if($.mobile.activePage.is('#scanpage'))
						{
							gobackfromscan();
						}
						if($.mobile.activePage.is('#homepage') || $.mobile.activePage.is('#dealerhomepage'))
						{
						   e.preventDefault();
						   var x;
							if (confirm("Are you sure you want to exit?") == true) {
								x = "Yes";
								navigator.app.exitApp();
							} else {
								x = "No";
								 $.mobile.changePage( ($.mobile.activepage.attr('id')), { transition: "none"} );

							}
				   
						}
						else 
						{
							navigator.app.backHistory();
						}

			   
				}, false);

		console.log(localStorage.getItem('latestApp'));

//		if(localStorage.getItem('latestApp')=='true')
//		{

				 
	
				var cattype = localStorage.getItem('cattype');

				//cattype='Retailer';
				//localStorage.setItem("usernameufifilters","9654493334");
				//localStorage.setItem("passwordufifilters","1297");


				if(typeof cattype==undefined || cattype== null)
					cattype='';
					if(cattype=='dealer')
					{

						document.getElementById('headlbl_login').innerHTML='Distributor/Wholesaler';

						var dealeruser = localStorage.getItem("usernamemloyal_ufi");
						var dealerpass = localStorage.getItem("userpassloyal_ufi");
						if(typeof dealeruser == undefined || dealeruser == null)
							dealeruser = '';
						if(typeof dealerpass == undefined || dealerpass == null)
							dealerpass = '';
						//console.log('dealeruser'+dealeruser+'.......dealerpass'+dealerpass);
						if(dealeruser!='')
						{
							$('#dealerusername').val(dealeruser);
							 $('#dealer_mobileno').val(dealeruser);
						}
						if(dealeruser!='' && dealerpass!='')
	                    {
	                           $('#dealerusername').val(localStorage.getItem("usernamemloyal_ufi"));
	                           $('#dealer_mobileno').val(localStorage.getItem("usermobilemloyal_ufi"));
	                           //$('#dealerpassword').val(localStorage.getItem("userpassloyal_ufi"));
	                           var pass = localStorage.getItem("userpassloyal_ufi");
							    if(pass.length>=4)
						       {
						       /*var i=4;
						       while(i>0)
						                  {
						                    $('#dealercodeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }*/

									$('#dealerpassword').val(pass);
						        }
						        $.mobile.changePage( "#gifslider", { transition: "none"} );
								setTimeout( function() {
								    dealerauthenticate();
								}, 1000);  // 2 seconds
	                           
                        }
                        else if(dealeruser!='' && dealerpass=='')
		                 {
	                        $('#dealerusername').val(localStorage.getItem("usernamemloyal_ufi"));
	                        $('#dealer_mobileno').val(localStorage.getItem("usermobilemloyal_ufi"));
	                        $.mobile.changePage( "#page-login-dealer", { transition: "none"} );
	                        
		                 }
	                     else
	                     {
	                     	$.mobile.changePage( "#page-login-dealer", { transition: "none"} );
							
						 }
					}
					else if(cattype=='SalesExecutive' )
					{	
						document.getElementById('headlbl_login_se').innerHTML='Sales Executive';

						var dealeruser = localStorage.getItem("usernamemloyal_ufi");
						var dealerpass = localStorage.getItem("userpassloyal_ufi");
						//alert(dealeruser+'................'+dealerpass);
						if(typeof dealeruser == undefined || dealeruser == null)
							dealeruser = '';
						if(typeof dealerpass == undefined || dealerpass == null)
							dealerpass = '';
						//console.log('dealeruser'+dealeruser+'.......dealerpass'+dealerpass);
						if(dealeruser!='')
						{
							 $('#dealerusername_se').val(dealeruser);
							 $('#dealer_mobileno_se').val(dealeruser);
						}
						if(dealeruser!='' && dealerpass!='')
	                    {
	                           
	                           $('#dealerusername_se').val(localStorage.getItem("usernamemloyal_ufi"));
	                           $('#dealer_mobileno_se').val(localStorage.getItem("usermobilemloyal_ufi"));
	                           //$('#dealerpassword').val(localStorage.getItem("userpassloyal_ufi"));
	                           var pass = localStorage.getItem("userpassloyal_ufi");
							    if(pass.length>=4)
						       {
						       /*var i=4;
						       while(i>0)
						                  {
						                    $('#dealercodeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }*/
										 $('#dealerpassword_se').val(pass);
						        }
						        $.mobile.changePage( "#gifslider", { transition: "none"} );
								setTimeout( function() {
								    dealerauthenticate_se();
								}, 2000);  // 2 seconds
	                           
                        }
                        else if(dealeruser!='' && dealerpass=='')
		                 {
	                        $('#dealerusername_se').val(localStorage.getItem("usernamemloyal_ufi"));
	                        $('#dealer_mobileno_se').val(localStorage.getItem("usermobilemloyal_ufi")); 
	                        $.mobile.changePage( "#page-login-dealer_se", { transition: "none"} );
	                        
		                 }
	                     else
	                     {
	                     	$.mobile.changePage( "#page-login-dealer_se", { transition: "none"} );
							
						 }
					}
					else if(cattype=='Retailer' || cattype=='Painter' || cattype=='Mechanic')
					{
						if(localStorage.getItem("usernameufifilters")!=null && localStorage.getItem("usernameufifilters")!='' && localStorage.getItem("passwordufifilters")!=null && localStorage.getItem("passwordufifilters")!='')
	                    {
	                         $('#username').val(localStorage.getItem("usernameufifilters"));
	                         var pass = localStorage.getItem("passwordufifilters");
	                         if(pass.length>=4)
						       {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#codeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						        }
	                          // $('#password_myacc').val(localStorage.getItem("passwordufifilters"));
							   user.mobile=localStorage.getItem("usernameufifilters");
							   //console.log("in ready");
							   $.mobile.changePage( "#gifslider", { transition: "none"} );
								setTimeout( function() {
								    authenticate();
								}, 1500);  // 2 seconds
	                          

							  /*if(imageExists('http://180.179.218.225:8383/gold/uploads/'+localStorage.getItem("contestimg")+'.jpg'))
	                          {
	                              document.getElementById("contest_img").src='http://180.179.218.225:8383/gold/uploads/'+localStorage.getItem("contestimg")+'.jpg';
								  console.log('imageexistyes:'+localStorage.getItem("contestimg"));
	                          }*/
	                                                
	                     }
					   else if(localStorage.getItem("usernameufifilters")!=null && localStorage.getItem("usernameufifilters")!='' && (localStorage.getItem("passwordufifilters")==null || localStorage.getItem("passwordufifilters")=='')) 
		                 {
		                 	$('#username').val(localStorage.getItem("usernameufifilters"));
	                        $.mobile.changePage( "#myaccount", { transition: "none"} );
	                        
		                 }
						else
						{

							if(cattype != 'dealer')
							{
								
								if(cattype == 'Painter') {
									document.getElementById('head_label').innerHTML='Painter';
									document.getElementById('head_label_myacct').innerHTML='Painter';
									document.getElementById('role_img').src='assets/images/skillfull_painter.png';
									document.getElementById('role_img').alt='Painter';
									document.getElementById('role_img_myacct').src='assets/images/skillfull_painter.png';
									document.getElementById('role_img_myacct').alt='Painter';
								}
								else if(cattype == 'Retailer') {
									document.getElementById('head_label').innerHTML='Retailer ';
									document.getElementById('head_label_myacct').innerHTML='Retailer';
									document.getElementById('role_img').src='assets/images/credible_retailer.png';
									document.getElementById('role_img').alt='Retailer';
									document.getElementById('role_img_myacct').src='assets/images/credible_retailer.png';
									document.getElementById('role_img_myacct').alt='Retailer ';

								}
								else {
									document.getElementById('head_label').innerHTML='Mechanic';
									document.getElementById('head_label_myacct').innerHTML='Mechanic'
									document.getElementById('role_img').src='assets/images/energetic_plumber.png';
									document.getElementById('role_img').alt='Mechanic';
									document.getElementById('role_img_myacct').src='assets/images/energetic_plumber.png';
									document.getElementById('role_img_myacct').alt='Mechanic';
								}
                /*if(localStorage.getItem("retaiter_type")=='pipes' || cattype=='Mechanic')
                {
                  document.getElementById("mainhlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("saleshlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("schhlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("refhlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("wathlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("emphlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("sochlogo").src='assets/images/logo_home_pipes.png';
                  
                }
                else if(localStorage.getItem("retaiter_type")=='putty' || cattype=='Painter')
                {
                  document.getElementById("mainhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("saleshlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("schhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("refhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("wathlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("emphlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("sochlogo").src='assets/images/logo_home_putty.png';
                }
                else
                {*/
                  document.getElementById("mainhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("saleshlogo").src='assets/images/logo_inner.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("schhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("refhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("wathlogo").src='assets/images/logo_inner.png';
                  document.getElementById("emphlogo").src='assets/images/logo_inner.png';
                  document.getElementById("sochlogo").src='assets/images/logo_inner.png';
               // }
							}
							$.mobile.changePage( "#selectcategorypage", { transition: "none"} );
							//$.mobile.changePage( "#page-forgot-password", { transition: "none"} );
						}
					}
				   else
					  {
                         $.mobile.changePage( "#slidepage", { transition: "none"} );
					  }

					  //$("#cardimage1_status").attr("data-label", "0%");
					  //document.getElementById("cardimage1_status").setAttribute("data-label", "2%");
			//}
			//else{
			//	console.log("in else");
			//	 $.mobile.changePage( "#downpage", { transition: "none"} );
			//	}


					 
});

 function checkVersion()
 {

    /* console.log(SERVER1+'appversion.json');
 	 $.ajax({
           
			url: SERVER1+'appversion.json',
            type: 'GET',
			timeout: 300000,
            dataType: "json",
            async:false,
         
           complete: function(xhr, textStatus) {
		   //called when complete

		    },

			success: function(data, textStatus, xhr) {
			
			  console.log("VESRION:"+JSON.stringify(data));

			  console.log(data.version);
			   console.log(appversion);

			  

			  console.log(data.version==appversion)

			  if(data.version==appversion)
			  	newap=true;
			  else
			  	newap=false;

			  localStorage.setItem('latestApp',newap);

			  

		
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 //toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				 localStorage.setItem('latestApp','true');
				}
		});*/


		newap=true;
		localStorage.setItem('latestApp',newap);


 }

$(document).on('pageshow', '#page-forgot-password', function (event, ui) {
		var cattype = localStorage.getItem('cattype');
		
	
		if(cattype == 'Painter') {
			document.getElementById('head_label').innerHTML='Painter';
			document.getElementById('role_img').src='assets/images/skillfull_painter.png';
			document.getElementById('role_img').alt='Painter';
		}
		else if(cattype == 'Retailer') {
			document.getElementById('head_label').innerHTML='Retailer';
			document.getElementById('role_img').src='assets/images/credible_retailer.png';
			document.getElementById('role_img').alt='Retailer';
		}
		else {
			document.getElementById('head_label').innerHTML='Mechanic';
			document.getElementById('role_img').src='assets/images/energetic_plumber.png';
			document.getElementById('role_img').alt='Mechanic';
		}

	});
/*
$(document).on('pageinit', '#selectcategorypage', function (event, ui) {
		user.mobile='';
		localStorage.removeItem('usernamemloyal_ufi');
		localStorage.removeItem('userpassloyal_ufi');
		localStorage.removeItem('district_ufi');

		localStorage.removeItem('usernameufifilters');
		localStorage.removeItem('passwordufifilters');
		localStorage.removeItem('cattype');
		localStorage.removeItem('userdist_ufifilters');
		localStorage.removeItem('usermtype_ufifilters');
		localStorage.removeItem('profiletype_ufi');
		localStorage.removeItem('is_approved_ufifilters');
		localStorage.removeItem('created_on_ufifilters');
		localStorage.removeItem('id');
		localStorage.removeItem('useradd_ufifilters');
		localStorage.removeItem('userphoto_ufifilters');
		localStorage.removeItem('usershoppic_ufifilters');
		localStorage.removeItem('userstate');

	});
*/

function getOtp_dealer() 
{
        var cin = $('#forgot_cin').val();
        localStorage.setItem("cin",cin);
        if(cin==''){
		 toast('Please enter your username');
	    }
	    else
	    {
			if($("#chck-tnc1").is(":checked"))
			{
		 $.ajax({
           
			url: SERVER2+'forgot_pswd_dealer_json_api.asp',
            type: 'GET',
			timeout: 300000,
            dataType: "json",
           data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','Status_flag': '0', 'login_name': cin , 'membertype':localStorage.getItem('cattype')},
    complete: function(xhr, textStatus) {
   //called when complete
    },

			success: function(data, textStatus, xhr) {
			
			 //console.log("Data:"+JSON.stringify(data));

			 if(data.data.length>0){
				 //var dealermobileno = data.data.substring(data.data.indexOf("#")+1,data.data.length);
				  //startWatch();

				  toast('The passcode has been sent to your mobile.Please check your SMS.');
			  
				  //localStorage.setItem('usernamemloyal_ufi',cin);
				  //localStorage.setItem('usermobilemloyal_ufi',dealermobileno);
				  //$('#dealer_mobileno').val(dealermobileno);
			      $('#dealerusername').val(cin);
				  localStorage.removeItem('userpassloyal_ufi');
				  /*$('#dealercodeBox1').val('');
				  $('#dealercodeBox2').val('');
				  $('#dealercodeBox3').val('');
				  $('#dealercodeBox4').val('');*/
				  $('#dealerpassword').val('');
				  
				   document.getElementById('headlbl_login').innerHTML='Dealer';
				   document.getElementById('headimg_login').src='assets/images/daring_dealers.png';
				   document.getElementById('headimg_login').alt='Dealer';
				   $.mobile.changePage("#page-login-dealer");
              }
			  else{
				 toast(cin+' is not registered, please try again.');
				 $('#forgot_cin').val('');
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
		});
		}
		else
		 {
		 toast('Please agree to all terms and conditions');	 
		 }
 }
  
}

function getOtp_dealer_old() 
{
        var cin = $('#forgot_cin').val();
        localStorage.setItem("cin",cin);
        if(cin==''){
		 toast('Please enter your login name');
	    }
	    else
	    {
			if($("#chck-tnc1").is(":checked"))
			{
		 $.ajax({
           
			url: SERVER2+'forgot_pswd_dealer_json_api.asp',
            type: 'GET',
			timeout: 300000,
            dataType: "json",
           data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','Status_flag': '0', 'login_name': cin , 'membertype':localStorage.getItem('cattype')},
    complete: function(xhr, textStatus) {
   //called when complete
    },

			success: function(data, textStatus, xhr) {
			
			 //console.log("Data:"+JSON.stringify(data));

			 if(data.data.length>0){
				 var dealermobileno = data.data.substring(data.data.indexOf("#")+1,data.data.length);
				  //startWatch(); //Commented by Ajay

				  toast('The passcode has been sent to your mobile.Please check your SMS.');
			  
				  localStorage.setItem('usernamemloyal_ufi',cin);
				  localStorage.setItem('usermobilemloyal_ufi',dealermobileno);
				  $('#dealer_mobileno').val(dealermobileno);
			      $('#dealerusername').val(cin);
				  localStorage.removeItem('userpassloyal_ufi');
				  $('#dealercodeBox1').val('');
				  $('#dealercodeBox2').val('');
				  $('#dealercodeBox3').val('');
				  $('#dealercodeBox4').val('');
				  
				   document.getElementById('headlbl_login').innerHTML='Dealer';
				   document.getElementById('headimg_login').src='assets/images/daring_dealers.png';
				   document.getElementById('headimg_login').alt='Dealer';
				  $.mobile.changePage("#page-login");
              }
			  else{
				 toast(cin+' is not registered, please try again.');
				 $('#forgot_cin').val('');
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
		});
		}
		else
		 {
		 toast('Please agree to all terms and conditions');	 
		 }
 }
  
}

function getOtp_dealer_resend() 
 {
        var cin = localStorage.getItem("cin");
        if(cin==''){
		 toast('Please enter your CIN Number');
	    }
	    else
	    {
		 $.ajax({
           
			url: SERVER2+'forgot_pswd_dealer_json_api.asp',
            type: 'GET',
			timeout: 300000,
            dataType: "json",
           data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','Status_flag': '0', 'login_name': cin , 'membertype':localStorage.getItem('cattype')},
    complete: function(xhr, textStatus) {
   //called when complete
    },

			success: function(data, textStatus, xhr) {
			
			 //console.log("Data:"+JSON.stringify(data));

			 if(data.data.length>0){
				 var dealermobileno = data.data.substring(data.data.indexOf("#")+1,data.data.length);
				 startWatch(); //Commented by Ajay

				  toast('The  passcode has been sent to your mobile.Please check your SMS.');
			  
				  localStorage.setItem('usernamemloyal_ufi',cin);
				  localStorage.setItem('usermobilemloyal_ufi',dealermobileno);
				  $('#dealer_mobileno').val(dealermobileno);
			      $('#dealerusername').val(cin);
				  localStorage.removeItem('userpassloyal_ufi');
				  $('#dealercodeBox1').val('');
				  $('#dealercodeBox2').val('');
				  $('#dealercodeBox3').val('');
				  $('#dealercodeBox4').val('');
				  
				   document.getElementById('headlbl_login').innerHTML='Distributor/Wholesaler';
				   document.getElementById('headimg_login').src='assets/images/responsible_dealer.png';
				   document.getElementById('headimg_login').alt='Distributor/Wholesaler';
				  $.mobile.changePage("#page-login");
              }
			  else{
				 toast(cin+' is not registered, please try again.');
				 $('#forgot_cin').val('');
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
		});
		}
  
}

function dealerselogin()
{
	var cattype = localStorage.getItem('cattype');
	if(cattype == 'dealer')
	{
		$.mobile.changePage("#page-forgot-password_dealer");
	}
	else
	{
		$.mobile.changePage("#page-forgot-password_se");
	}
}

$(document).on('pageshow', '#page-login', function (event, ui) {
	var cattype = localStorage.getItem('cattype');
	//console.log(cattype);
								if(cattype == 'dealer') {
									
								   document.getElementById('headlbl_login').innerHTML='Distributor/Wholesaler';
								   document.getElementById('headimg_login').src='assets/images/responsible_dealer.png';
								   document.getElementById('headimg_login').alt='Distributor/Wholesaler';
								}
								else {									
								  document.getElementById('headlbl_login').innerHTML='Sales Executive';
								  document.getElementById('headimg_login').src='assets/images/sale_executive.png';
								  document.getElementById('headimg_login').alt='Enthusiastic Sales Executive';
								   $("#forgot_button_resend_del").attr("href", "javascript:getOtp_se_resend();");
								}
});


$(document).on('pageshow', '#page-login-dealer', function (event, ui) {
	var cattype = localStorage.getItem('cattype');
	//console.log(cattype);
								if(cattype == 'dealer') {
									
								   document.getElementById('headlbl_login').innerHTML='Distributor/Wholesaler';
								   document.getElementById('headimg_login').src='assets/images/responsible_dealer.png';
								   document.getElementById('headimg_login').alt='Distributor/Wholesaler';
								}
								else {			
									
								  document.getElementById('headlbl_login').innerHTML='Sales Executive';
								  document.getElementById('headimg_login').src='assets/images/sale_executive.png';
								  document.getElementById('headimg_login').alt='Sales Executive';
								   //$("#forgot_button_resend_del").attr("href", "javascript:getOtp_se_resend();");page-forgot-password_se
								   $("#forgot_button_resend_del").attr("href", "#page-forgot-password_se");
								}
});

 function getOtp_se() 
 {

 	
        var mob = $('#forgot_mobile_se').val();
        
        if(mob==''){
		 toast('Please enter your username');
	    }
	    /*else if(mob.length!=10){

	    	toast('Please enter valid Mobile Number');
	    }*/
	    else
	    {
		if($("#chck-tnc2").is(":checked"))
			{
		 $.ajax({
            //url: SERVER2+ 'forgot_pswd_dealer_json_api.asp',
			url: SERVER2+'forgot_pswd_dealer_se_json_api.asp',
            type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','Status_flag': '0', 'login_name': mob, 'membertype':localStorage.getItem('cattype')},
    complete: function(xhr, textStatus) {
   //called when complete
    },

			success: function(data, textStatus, xhr) {
			
			 console.log("Data:"+JSON.stringify(data));

			 if(data.data.length>0){
				 //var dealermobileno = mob;//data.data.substring(data.data.indexOf("#")+1,data.data.length);
				 //startWatch(); 

				  toast('The passcode has been sent to your mobile.Please check your SMS.');
			  
				  //localStorage.setItem('usernamemloyal_ufi',mob);
				  //localStorage.setItem('usermobilemloyal_ufi',dealermobileno);
				  //$('#dealer_mobileno').val(dealermobileno);
			      $('#dealerusername').val(mob);
				  localStorage.removeItem('userpassloyal_ufi');
				  //$('#dealercodeBox1').val('');
				 // $('#dealercodeBox2').val('');
				 // $('#dealercodeBox3').val('');
				 // $('#dealercodeBox4').val('');
				 $('#dealerpassword').val('');

				  document.getElementById('headlbl_login').innerHTML='Sales Executive';
				  document.getElementById('headimg_login').src='assets/images/Enthusiastic_Employee.png';
				  document.getElementById('headimg_login').alt='Sales Executive';

				  $("#forgot_button_resend_del").attr("href", "#page-forgot-password_se");
				
				  $.mobile.changePage("#page-login-dealer");
              }
			  else{
				 toast(mob+' is not registered, please try again.');
				 $('#forgot_mobile_se').val('');
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
		});
		}
		else
		{
			toast('Please agree to all terms and conditions');	 
		}
		}
  
}

function getOtp_se_resend() 
 {
        var mob = $('#dealer_mobileno').val();
        if(mob==''){
		 toast('Please enter your username');
	    }
	    /*else if(mob.length!=10){

	    	toast('Please enter valid Mobile Number');
	    }*/
	    else
	    {
		 $.ajax({
            //url: SERVER2+ 'forgot_pswd_dealer_json_api.asp',
			url: SERVER2+'forgot_pswd_dealer_se_json_api.asp',
            type: 'GET',
			timeout: 300000,
            dataType: "json",
           data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','Status_flag': '0', 'login_name': mob, 'membertype':localStorage.getItem('cattype')},
    complete: function(xhr, textStatus) {
   //called when complete
    },

			success: function(data, textStatus, xhr) {
			
			 console.log("Data:"+JSON.stringify(data));

			 if(data.data.length>0){
				 //var dealermobileno = mob;//data.data.substring(data.data.indexOf("#")+1,data.data.length);
				 //startWatch(); 

				  toast('The  passcode has been sent to your mobile.Please check your SMS.');
			  
				  //localStorage.setItem('usernamemloyal_ufi',mob);
				  //localStorage.setItem('usermobilemloyal_ufi',dealermobileno);
				  //$('#dealer_mobileno').val(dealermobileno);
			      $('#dealerusername').val(mob);
				  localStorage.removeItem('userpassloyal_ufi');
				  //$('#dealercodeBox1').val('');
				  //$('#dealercodeBox2').val('');
				  //$('#dealercodeBox3').val('');
				  //$('#dealercodeBox4').val('');
				  $('#dealerpassword_se').val('');

				  document.getElementById('headlbl_login').innerHTML='Sales Executive';
				  document.getElementById('headimg_login').src='assets/images/salesman.png';
				  document.getElementById('headimg_login').alt='Sales Executive';

				$("#forgot_button_resend_del").attr("href", "javascript:getOtp_se_resend();");
				
				  $.mobile.changePage("#page-login");
              }
			  else{
				 toast(mob+' is not registered, please try again.');
				 $('#forgot_cin').val('');
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
		});
		}
  
}


 function getotpConfirm()
 {
	
	var mob = $('#forgot_mobile').val();
	 
	 if(mob=='')
	 {
		 toast('Please enter your mobile number');
	 }
	 else if(mob.length==10){
		if($("#chck-tnc").is(":checked"))
		 {
		 
			searchcust();
	
		 }
		 else
		 {
			toast('Please agree to all terms and conditions');	 
		 }
	  }else{
	   toast('Please enter 10 digits mobile number');
	  }

 }

 function getotpConfirmResend()
 {
	
	var mob = $('#username').val();
	 
	searchcustResend(mob);
	//	}
	//else
	
 }


 function getOtp(mob) 
 {
        var cattype = localStorage.getItem('cattype');
		 $.ajax({
            
			url: SERVER+'forgot_pswd.asp',
            type: 'GET',
			timeout: 300000,
            dataType: "html",
            data:{'mobileno' : mob,
				  'membertype' : localStorage.getItem('cattype')
				 },
			
			success: function(data, textStatus, xhr) {
			
			 //console.log("Data:"+JSON.stringify(data));

			 if(data.toLowerCase()=='success'){
				 
				 //startWatch(); 
				  toast('The passcode has been sent to your mobile.Please check your SMS.');
			  
				  localStorage.setItem("SMSMNO",mob);
				 
			      $('#username').val(mob);
				  localStorage.setItem('usernameufifilters',mob);
				   				
							/*	if(cattype == 'Painter') 
								{
									document.getElementById('head_label_myacct').innerHTML= cattype;
									document.getElementById('role_img_myacct').src='assets/images/skillfull_painter.png';
									document.getElementById('role_img_myacct').alt=cattype;
								}
								else */
                if(cattype == 'Retailer') 
								{
									document.getElementById('head_label_myacct').innerHTML= 'Retailer';
									document.getElementById('role_img_myacct').src='assets/images/credible_retailer.png';
									document.getElementById('role_img_myacct').alt= 'Retailer';

								}
								else 
								{
									document.getElementById('head_label_myacct').innerHTML='Mechanic';
									document.getElementById('role_img_myacct').src='assets/images/energetic_plumber.png';
									document.getElementById('role_img_myacct').alt='Mechanic';
								}
				  $.mobile.changePage("#myaccount");
              }
			  else{
				 $('#forgot-msg').html(mob+' is not registered, please try again.');
				 $('#forgot_mobile').val('');
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				// toast('getotp :Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
		});
  
}

$(document).on('pageshow', '#myaccount', function (event, ui) {
	var cattype = localStorage.getItem('cattype');
	
								if(cattype == 'Painter') {
									document.getElementById('head_label_myacct').innerHTML=cattype;
									document.getElementById('role_img_myacct').src='assets/images/skillfull_painter.png';
									document.getElementById('role_img_myacct').alt=cattype;
								}
								else if(cattype == 'Retailer') {
									document.getElementById('head_label_myacct').innerHTML=cattype;
									document.getElementById('role_img_myacct').src='assets/images/responsible_dealer.png';
									document.getElementById('role_img_myacct').alt=cattype;

								}
								else {
									document.getElementById('head_label_myacct').innerHTML='Mechanic';
									document.getElementById('role_img_myacct').src='assets/images/energetic_plumber.png';
									document.getElementById('role_img_myacct').alt='Mechanic';
								}
})

function getOtpold() 
{
       
	 var mob = $('#forgot_mobile').val();
	 
	 if(mob==''){
		 toast('Please enter your mobile number');
	 }
	 else if(mob.length==10){

        
		 $.ajax({
            
			url: SERVER+'forgot_pswd.asp?mobileno='+mob,
            type: 'GET',
			timeout: 300000,
            dataType: "html",
            
			
			success: function(data, textStatus, xhr) {
			
			 //console.log("Data:"+JSON.stringify(data));

			 if(data.toLowerCase()=='success'){
				 
				  startWatch();// Commented by Ajay

				  toast('The  passcode has been sent to your mobile.Please check your SMS.');
			  
				  localStorage.setItem("SMSMNO",mob);
				 
			      $('#username').val(mob);
				  localStorage.setItem('usernameufifilters',mob);
				 
				  $.mobile.changePage("#myaccount");
              }
			  else{
				 $('#forgot-msg').html(mob+' is not registered, please try again.');
				 $('#forgot_mobile').val('');
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 //toast('forgot pswd:Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
		});
  }else{
   toast('Please enter 10 digits mobile number');
  }
  
  
}

function myLogin(){

	//authenticate();
	searchcust();

}

function searchcust()
{
	
 
 var searchcust = $('#forgot_mobile').val();

 if(searchcust=='')
 {
	toast('Please Enter Mobile No.');
 }
 else if(searchcust.length<10 || searchcust.length>10)
 {
	 toast('Invalid Mobile No.');
 }
 else{
  

 $.ajax({
   url: SERVER2+'get_points_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': searchcust},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
    //console.log('JSONDATA'+JSON.stringify(data));
	if(data.data.length>0)
		{
			user.balance = data.data[0].BalancePoints;
			user.firstname = data.data[0].CustomerName;
			user.mobile = searchcust;
			user.email= data.data[0].Email;

			document.getElementById("profilenm").innerHTML=user.firstname;

			toast('You are registered with us');

			localStorage.setItem('usernameufifilters',searchcust);
			localStorage.setItem('balance',user.balance);
			localStorage.setItem('firstname',user.firstname);
			localStorage.setItem('emailid',user.email);

			var existmemtype = data.data[0].membertype;
			if(typeof existmemtype == undefined || existmemtype == null)
				existmemtype = '';
			if((existmemtype != '') && (existmemtype != localStorage.getItem('cattype')))
			{
				toast('You are already registered as '+existmemtype);
				$.mobile.changePage( "#selectcategorypage", { transition: "flip"} );
			}
			else
			{
				$('#forgot_mobile').val('');
				getOtp(searchcust);
			}
			
		
			
			
			isuserexist=true;
		}

	else
		{
		    if(data.error.indexOf('Customer exists as a dealer')>=0)
			{
			    toast(data.error);
			}
			else
			{
				$('#forgot_mobile').val('');
				getOtp(searchcust);
				isuserexist=false;
			}
		}
	
  
    },
    error: function(xhr, textStatus, errorThrown) {
		//toast('searchcust:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
  

 }

}

function searchcustResend(mob){
	
 
 var searchcust = mob;

 if(searchcust=='')
 {
	toast('Please Enter Mobile No.');
 }
 else if(searchcust.length<10 || searchcust.length>10)
 {
	 toast('Invalid Mobile No.');
 }
 
 else{
  

 $.ajax({
   url: SERVER2+'get_points_json_api.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': searchcust},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
    //console.log('JSONDATA'+JSON.stringify(data));
	if(data.data.length>0)
		{
			/*user.balance = data.data[0].BalancePoints;
			user.firstname = data.data[0].CustomerName;
			user.mobile = searchcust;
			user.email= data.data[0].Email;

			document.getElementById("profilenm").innerHTML=user.firstname;

			toast('You are registered with us');

			localStorage.setItem('usernameufifilters',searchcust);
			localStorage.setItem('balance',user.balance);
			localStorage.setItem('firstname',user.firstname);
			localStorage.setItem('emailid',user.email);*/
			var existmemtype = data.data[0].scanfilename;
			if(typeof existmemtype == undefined || existmemtype == null)
				existmemtype = '';
			if((existmemtype != '') && (existmemtype != localStorage.getItem('cattype')))
			{
				toast('You are already registered as '+existmemtype);
				$.mobile.changePage( "#selectcategorypage", { transition: "flip"} );
				//$.mobile.changePage( "#slidepage", { transition: "flip"} );
			}
			else
			{
				$('#forgot_mobile').val('');
				getOtp(searchcust);
			}
			
		
			
			
			isuserexist=true;
		}

	else
		{
			$('#forgot_mobile').val('');
				getOtp(searchcust);
			isuserexist=false;
		}
	
  
    },
    error: function(xhr, textStatus, errorThrown) {
		//toast('searchcust resend:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
  

 }

}

$(document).on('pageinit', '#myaccount', function (event, ui) {

	//	receivedEvent('deviceready');

		  
       
        $(document).on('tap', '#login_button', function (e, ui) {

			
		e.preventDefault();
		e.stopPropagation();
		
		authenticate();

	});
});


function authenticate()
{

  var uname = $('#username').val();


  /*var pwd = $('#password_myacc').val();
  if(pwd=='')
  {*/
  var pwd = $('#codeBox1').val()+$('#codeBox2').val()+$('#codeBox3').val()+$('#codeBox4').val();
  //}
  var phno = localStorage.getItem("phno");

  
   
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
   url: SERVER+'mloyallogin_json.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'username': uname, 'password': pwd,'phonenos':phno,'device_id':reg_id},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){

    //user.balance = checkforundefinedPts(data.Expected_points);
	user.balance = checkforundefinedPts(data.balance);
    //user.dealerbonuspoints=data.dealerbonuspoints;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	//user.trans_sms = data.trans_sms;
	//user.mktgsms = data.mktgsms;
	//user.cpns = data.cpns;
    //user.ads = data.ads;
    user.dob = data.dob;
	user.doa = data.Doa;
    user.emailid = data.emailid;
	  user.def_store = data.store;
	  user.def_city = data.store_city;
	  user.visit_frequency = data.visit_frequency;
	  user.membertype = data.membertype;
	  user.store_code = data.store_code;

	  user.cashback_painter = checkforundefinedPts(data.cashback);
   

	  user.cashback = checkforundefinedPts(data.usable_wallet_balance);

	console.log(user.balance);

    if(user.balance.toString().indexOf(".")>=0)
	{
		user.balance  = parseFloat(user.balance).toFixed(2);
	}
	if(user.cashback.toString().indexOf(".")>=0)
	{
		user.cashback  = parseFloat(user.cashback).toFixed(2);
	}

	//user.other_mobile_no = data.PayTMNo;
	user.district = data.District;
	//user.tehsil = data.Tehsil;
	//user.referencecode = data.Ref_code;
	user.pancardno = data.Pan_card_no;
	user.photo = data.Photo;
	user.shopname = data.Shop_Name;
	user.gstno = data.GSTNo;
	//user.shopestablish = data.Shop_Establishment_Cert;
	//user.PhotoofShop=data.PhotoofShop;
    //user.doc=data.Electrician_ID;
	//user.doc1=data.PersonalID;
    //user.state=data.State;
    user.cinno=uname;
    user.pin=data.PostalCode;
	user.address_ck=data.floor_flat;
	user.city_ufi=data.City;
	user.state_ck=data.State;
	user.street_ck=data.street;
	user.created_on=data.Created_On;
	user.isApproved=data.IsApproved;

	user.isLive=data.state_live_status;

    user.marriage = data.MaritalStatus;
	user.ditrtobuy = data.Distributor_name;
  if(user.ditrtobuy=='Mobile App')
    user.ditrtobuy = '';
	user.brandstobuy = data.brands_to_buy;
	user.firmage = data.firm_age;

	//user.isBlocked = data.IsBlocked;
	//user.bankname = data.BankName;
	user.bankac = data.Bank_Ac_No;
	//user.bankifsc = data.IFSC_code;
	//user.bankcity = data.Bank_City;
	//user.bankbranch = data.Bank_Branch_Address;
	user.adharno = data.aadhar_card_no;
	user.adharphoto = data.Aadhar_Card_Photo;
	user.panphoto = data.Pan_Card_Photo;
	user.gstphoto = data.Gst_Photo;
	user.refer_code = data.refer_code;
	user.Store_Id=data.Store_Id;
	user.owner_mobileno=data.owner_mobileno;
	//user.working_shopname=data.working_shopname;
	//user.can_chq=data.Cancelled_cheque;

	user.IsApproved_se=data.IsApproved_se;

	//user.nocounter=data.CounterBoyLimitRetailer;
	//user.adharphotoback = data.Aadhar_Card_Photo_2;
	//user.panphotoback = data.Pan_Card_Photo_2;
	//user.tot_failed_paytm_amount = data.tot_failed_paytm_amount;
	//if(typeof user.tot_failed_paytm_amount == 'undefined' || user.tot_failed_paytm_amount==null || user.tot_failed_paytm_amount=='null' || user.tot_failed_paytm_amount=='undefined')
		//user.tot_failed_paytm_amount='0';

	
   // success{"HomeNo":null,"Title":null,"Gender":null,"Dob":"","Doa":null,"Agegroup":null,"Email":"","floor_flat":null,"building":null,"street":null,"town":null,"Country":null,"City":"","PostalCode":null,"FinalPath":"https://ufifilters.mloyalretail.com/mapp","UniqueNum":"5814164591","ExpM":9,"ExpY":2019,"Dobday":null,"Dobmonth":null,"Dobyear":null,"Doaday":null,"Doamonth":null,"Doayear":null,"Occupation":null,"member_type":"New","Form_Id":null,"User_Id":5,"Store_Id":null,"Created_On":"10/5/2018 5:32:30 PM","upload_on":"10/5/2018 5:32:30 PM","Status_Flag":1,"data_source":0,"genuine_flag":0,"updateStoreCode":null,"updateCustomer":null,"user_id_bkp":null,"store_id_bkp":null,"support_remarks":null,
   //"other_mobile_no":null,"District":null,"Pan_card_no":null,"Ref_code":null,"Village":null,"Electrician_ID":null,"Photo":null,"State":null,"PersonalID":null,"Shop_Name":null,"GSTNo":null,"Shop_Establishment_Cert":null,"PhotoofShop":null,"CINNo":null,"IsApproved":"UnApproved","IsApprovedSmsStatus":0,"support_flag":null,"DS_Store_Code":null,"DS_table_name":null,"MaritalStatus":null,"PurchaseSourceForElectricalProduct":null,"PurchaseBrandForElectricalProduct":null,"TotalExperience":null,"VerificationQuestion":null,"district":null,"dealerbonuspoints":0,"dealerexpiredpoints":0}
	//if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		//user.cpns='0';
    
    
    $('#username').val('');
    $('#password_myacc').val('');


	$('#update_pmobile_elec').val(uname);
	$('#update_pmobile_ret').val(uname);
	$('#update_pmobile_del').val(uname);
	$('#update_pmobile_cb').val(uname);
	$('#update_pmobile_elec1').val(uname);
	$('#update_pmobile_ret1').val(uname);
	//$('#update_omobile_ret1').val(uname);
	$('#update_pmobile_cb1').val(uname);
    $('#update_store_ret').val(user.store_code);
	$('#update_store_ret1').val(user.store_code);


	$('#update_ret_cb').val(user.store_code);
	$('#update_ret_cb1').val(user.store_code);
	

	
	
   if(typeof user.membertype == undefined || user.membertype==null || user.membertype == '')
   {
   		user.membertype = localStorage.getItem('cattype');
   }
   if(user.isApproved=='UnApproved')
   {
	   user.isApproved='PENDING';
	   $('#pendingdiv').css('display','block');
	   $('#verifydiv').css('display','none');
	   $('#rejectdiv').css('display','none');
   }
   else if(user.isApproved=='Rejected')
   {
	   user.isApproved='REJECTED';
	   $('#pendingdiv').css('display','none');
	   $('#verifydiv').css('display','none');
	   $('#rejectdiv').css('display','block');
   }
   /*else if(user.isBlocked=='1')
   {
	   user.isBlocked='BLOCKED';
	  
   }*/
   else
   {
	   $('#verifydiv').css('display','block');
	   $('#pendingdiv').css('display','none');
	   $('#rejectdiv').css('display','none');
   }
   
   localStorage.setItem('usernameufifilters',uname);
   localStorage.setItem('passwordufifilters',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('cashback',user.cashback);
   //localStorage.setItem('dealerbonuspoints',user.dealerbonuspoints);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('storecode_ufi',user.store_code);
   //localStorage.setItem('trans_sms',user.trans_sms);
   //localStorage.setItem('mktgsms',user.mktgsms);
   //localStorage.setItem('cpns',user.cpns);
   //localStorage.setItem('ads',user.ads);
   
   localStorage.setItem('cashback_painter',user.cashback_painter);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   localStorage.setItem("usermtype_ufifilters",user.membertype);
   localStorage.setItem("profiletype_ufi",user.membertype);
   localStorage.setItem("userdist_ufifilters",user.district);
   //localStorage.setItem("userothmobile_ufifilters",user.other_mobile_no);
   //localStorage.setItem("userref_ufifilters",user.referencecode);
   localStorage.setItem("userpan_ufifilters",user.pancardno);
   localStorage.setItem("userphoto_ufifilters",user.photo);
   localStorage.setItem("usershop_ufifilters",user.shopname);
   localStorage.setItem("usergst_ufifilters",user.gstno);
   //localStorage.setItem("usershopest_ufifilters",user.shopestablish);
   //localStorage.setItem("usershoppic_ufifilters",user.PhotoofShop);
   //localStorage.setItem("userdoc_ufifilters",user.PersonalId);
   localStorage.setItem("userstate",user.state_ck);
   localStorage.setItem("usercin_ufifilters",user.cinno);
   localStorage.setItem("userpin_ufifilters",user.pin);
   localStorage.setItem("useradd_ufifilters",user.address_ck);
   localStorage.setItem("created_on_ufifilters",user.created_on);
   localStorage.setItem("is_approved_ufifilters",user.isApproved);

   localStorage.setItem("marriage",user.marriage);
   localStorage.setItem("ditrtobuy",user.ditrtobuy);
   localStorage.setItem("brandstobuy",user.brandstobuy);
   localStorage.setItem("firmage",user.firmage);
   localStorage.setItem("adharno",user.adharno);

   localStorage.setItem("is_live_ufifilters",user.isLive);
   //localStorage.setItem("is_blocked_ufifilters",user.isBlocked);
   localStorage.setItem("refer_code_ck",user.refer_code);

   localStorage.setItem('selfimg',user.photo);
   //localStorage.setItem('docimg',user.PersonalId);
   //localStorage.setItem('shopimg',user.PhotoofShop);
   localStorage.setItem('adimg',user.adharphoto);
   localStorage.setItem('panimg',user.panphoto);
   localStorage.setItem('gstimg',user.gstphoto);
   //localStorage.setItem('estimg',user.shopestablish);
   //localStorage.setItem('adimg_back',user.adharphotoback);
   //localStorage.setItem('panimg_back',user.panphotoback);
   //localStorage.setItem('tot_failed_paytm_amount',user.tot_failed_paytm_amount);

   localStorage.setItem('IsApproved_se',user.IsApproved_se);
	

	
   $('#emptype').val(localStorage.getItem("usermtype_ufifilters"));

   $('#share_refer_code').val(user.refer_code);
   //$("#emptype").selectmenu('refresh');

   loadStates();
  /*
   if(localStorage.getItem("usermtype_ufifilters")=='Painter')
   {
		$('#referdiv').css('display','flex');
		$('#referdiv2').css('display','none');
   		$('#mylistdiv').css('display','none');
   		$('#pointspassbookpanel').css('display','none');
		$('#pointspassbookpanel_plumber').css('display','none');
		$('#counterdiv').css('display','none');
		$('#rewardshistpanel').css('display','none');
		$('#rewardstorediv').css('display','none');
		$('#rewardsdivpanel').css('display','none');
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#counterdivpanel').css('display','none');
		$('#scandiv').css('display','flex');
		$('#voucherdivpanel').css('display','none');
		$('#ass_scandivpanel').css('display','none');
		//document.getElementById("homepointslabel_oth").innerHTML='My Wallet';
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','none');
		$('#myapprovalsdiv').css('display','none');
		$('#otherheader').css('display','block');
		$('#retailerheader').css('display','none');
		$('#counterheader').css('display','none');
		$('#walletdiv').css('display','none');


		document.getElementById("otherheader_pts_txt").innerHTML='Total Cashback Received';
		document.getElementById("pointbal_bal").innerHTML=user.cashback_painter;
		document.getElementById("pointbal_head").innerHTML='Total Cashback Received';

		
	    var numbers = /^[0-9]+$/;
		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_elec").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
	   
				$("#update_state_elec option").each(function() {
						  if($(this).text().indexOf(user.state_ck)>=0) {
							 
							$(this).prop('selected', 'selected');            
						  }                        
						});
				var sval=$("#update_state_elec").val();
				fetchdistrict1(sval);
		   }
		}

		var today = new Date();
		
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_elec1').setAttribute("max", today);

			
		
			

		if(user.dob!='')
		{
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob_elec').val(yyyy+'-'+mm+'-'+dd);
		
		}
		
			

	   

   }*/
   if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
   {

	  
	    //$('#referdiv').css('display','none');
		//$('#referdiv2').css('display','flex');
   		$('#mylistdiv').css('display','none');
   		$('#rewardstorediv').css('display','none');
   		$('#counterdiv').css('display','none');
   		//$('#notificationsdiv').css('display','none');
   		//$('#walletdiv').css('display','block');
   		
   		$('#referdiv').css('display','none');
		$('#referdiv2').css('display','flex');
		//document.getElementById("homepointslabel").innerHTML='My Wallet';
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#otherheader').css('display','none');
		$('#retailerheader').css('display','block');
		$('#voucherdivpanel').css('display','none');
		$('#counterheader').css('display','none');
        $('#counterdivpanel').css('display','none');
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','block');
		$('#referdivpanel').css('display','block');
		$('#sales_data_main').css('display','none');
		$('#scandiv').css('display','flex');
		

		$('#myapprovalsdiv').css('display','none');
		$('#sales_data_panel').css('display','none');
		$('#sales_data_main').css('display','none');
		$('#scandiv_panel_other').css('display','block');
		$('#scandiv').css('display','flex');

		var numbers = /^[0-9]+$/;

	
    /*
		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_ret").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
        
		$("#update_state_ret option").each(function() {
				  if($(this).text().indexOf(user.state_ck)>=0) {
					 
					$(this).prop('selected', 'selected');            
				  }                        
				});
		var sval=$("#update_state_ret").val();
		fetchdistrict1(sval);
		   }
    }*/

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;
			$today = new Date();
			$yesterday = new Date($today);
			$yesterday.setDate($today.getDate() - 6570); 


				
			var dd1 = $yesterday.getDate();
			var mm1 = parseInt($yesterday.getMonth())+1;
			var yyyy1 = $yesterday.getFullYear();

			today = yyyy1+'-'+mm1+'-'+dd1;
			
			document.getElementById('update_dob_ret1').setAttribute("max", today);
			document.getElementById('update_dob1').setAttribute("max", today);
			
		if(user.dob!='')
		{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;

		
		$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		$('#update_dob_ret1').val(yyyy+'-'+mm+'-'+dd);
		
		}

		if(user.doa!='')
		{
			
		var dom = user.doa.split('-');
		mm2 = dom.length == 3 ? dom[1] : '';
		dd2 = dom.length == 3 ? dom[0] : '';
		yyyy2 = dom.length == 3 ? dom[2] : '';
		mm2 = mm2.trim();
		dd2 = dd2.trim();
		yyyy2 = yyyy2.trim();
		if(dd2.length == 1)
			dd2 = '0'+dd2;
		if(mm2.length == 1)
			mm2 = '0'+mm2;


		$('#update_dom_ret').val(yyyy2+'-'+mm2+'-'+dd2);
		$('#update_dom_ret1').val(yyyy2+'-'+mm2+'-'+dd2);

		$('#update_dom_ret').val(data.Doayear+'-'+data.Doamonth+'-'+data.Doaday);
		$('#update_dom_ret1').val(data.Doayear+'-'+data.Doamonth+'-'+data.Doaday);
		
		}



   }
   if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
   {
    
   	
	    $('#referdiv').css('display','none');
		$('#referdiv2').css('display','flex');
 		$('#scandiv').css('display','none');
		$('#scandiv_panel_other').css('display','none');
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','none');
		$('#mylistdiv').css('display','none');
		$('#counterdiv').css('display','none');
   		$('#rewardstorediv').css('display','none');
   		//$('#notificationsdiv').css('display','block');
   		$('#walletdiv').css('display','none');
		$('#walletdivpanel').css('display','none');
		$('#retailerheader').css('display','none');
		$('#otherheader').css('display','block');
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#ass_scandivpanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#referdivpanel').css('display','block');
		$('#rewardsdivpanel').css('display','none');
		$('#rewardshistpanel').css('display','none');
		$('#pointspassbookpanel').css('display','none');
        $('#pointspassbookpanel_plumber').css('display','block');
		$('#counterdivpanel').css('display','none');
		$('#voucherdivpanel').css('display','none');
		$('#counterheader').css('display','none');
		$('#myapprovalsdiv').css('display','none');
		//document.getElementById("homepointslabel").innerHTML='My Wallet';
		var numbers = /^[0-9]+$/;


		document.getElementById("otherheader_pts_txt").innerHTML='My Wallet';
		document.getElementById("pointbal_bal").innerHTML='&#8377; '+user.balance;
		document.getElementById("pointbal_head").innerHTML='Points';

	
    /*
		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_cb").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
        
		$("#update_state_cb option").each(function() {
				  if($(this).text().indexOf(user.state_ck)>=0) {
					 
					$(this).prop('selected', 'selected');            
				  }                        
				});
		var sval=$("#update_state_cb").val();
		fetchdistrict1(sval);
		   }
    }*/

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_cb1').setAttribute("max", today);
			document.getElementById('update_dob_cb').setAttribute("max", today);
			
		if(user.dob!='')
		{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		//alert('mm'+mm+'...dd'+dd+'...yyyy'+yyyy);
		$('#update_dob_cb').val(yyyy+'-'+mm+'-'+dd);
		
		}

		if(user.doa!='')
		{
			
		var dom = user.doa.split('-');
		mm2 = dom.length == 3 ? dom[1] : '';
		dd2 = dom.length == 3 ? dom[0] : '';
		yyyy2 = dom.length == 3 ? dom[2] : '';
		mm2 = mm2.trim();
		dd2 = dd2.trim();
		yyyy2 = yyyy2.trim();
		if(dd2.length == 1)
			dd2 = '0'+dd2;
		if(mm2.length == 1)
			mm2 = '0'+mm2;


		$('#update_dom_cb').val(yyyy2+'-'+mm2+'-'+dd2);
		$('#update_dom_cb1').val(yyyy2+'-'+mm2+'-'+dd2);

		$('#update_dom_cb').val(data.Doayear+'-'+data.Doamonth+'-'+data.Doaday);
		$('#update_dom_cb1').val(data.Doayear+'-'+data.Doamonth+'-'+data.Doaday);
		
		}

		//$('#update_rmobile_cb1').val(user.owner_mobileno);


   }
   if(localStorage.getItem("usermtype_ufifilters")=='Dealer')
   {
 		$('#referdiv').css('display','none');
		$('#referdiv2').css('display','none');
		$('#counterdiv').css('display','flex');
		document.getElementById("homepointslabel").innerHTML='Dealer Points';

   }
   


 if(typeof user.membertype==undefined || user.membertype==null)
   	user.membertype='';
	//console.log("user.firstname"+user.firstname);
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.city_ufi=='undefined' || user.city_ufi=='null' || user.city_ufi==null)
		user.city_ufi = '';
 if(user.state_ck=='undefined' || user.state_ck=='null' || user.state_ck==null)
		user.state_ck = '0';
 if(user.street_ck=='undefined' || user.street_ck=='null' || user.street_ck==null)
		user.street_ck = '';

 /*if(user.photo=='undefined' || user.photo=='null' || user.photo==null || user.photo=='')
		user.photo = 'user_pic.png';
 if(user.doc=='undefined' || user.doc=='null' || user.doc==null)
		user.doc = 'my_membership_s.png';
 if(user.doc1=='undefined' || user.doc1=='null' || user.doc1==null)
		user.doc1 = 'my_membership_s.png';*/
 if(user.adharno=='undefined' || user.adharno=='null' || user.adharno==null || user.adharno=='')
		user.adharno = '';
 if(user.created_on=='undefined' || user.created_on=='null' || user.created_on==null)
		user.created_on = 'Not available';
 if(user.isApproved=='undefined' || user.isApproved=='null' || user.isApproved==null)
		user.isApproved = 'Unknown Status';

   if(localStorage.getItem("usermtype_ufifilters")=='Painter')
   {
		$('#update_name_elec').val(user.firstname);
		$('#update_surname_elec').val(user.lastname);
		$('#update_pmobile_elec').val(user.mobile);
		//$('#update_omobile_elec').val(user.other_mobile_no);
		//$('#update_ref_elec').val(user.referencecode);
		$('#update_email_elec').val(user.emailid);
		$('#update_flat_elec').val(user.address_ck);
		$('#update_address_elec').val(user.street_ck);

	



		$('#update_district_elec').val(user.district);
		$('#update_district_elec1').val(user.district);
		//$('#update_tehsil_elec').val(user.tehsil);
		$('#update_city_elec').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		$('#update_state_elec').val(user.state_ck);
		$('#update_state_elec1').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_elec').val(user.pin);
		
		//$('#update_bankname_elec').val(user.bankname);
		$('#update_bankac_elec').val(user.bankac);
		/*($('#update_bankifsc_elec').val(user.bankifsc);
		$('#update_bankcity_elec').val(user.bankcity);
		$('#update_bankbranch_elec').val(user.bankbranch);*/

		$('#update_adhar_elec').val(user.adharno);
		$('#update_pan_elec').val(user.pancardno);
		

        $('#update_marriage_elec').val(user.marriage);
		$('#update_ditrtobuy_elec').val(user.ditrtobuy);
		$('#update_brandstobuy_elec').val(user.brandstobuy);
		//$('#update_firmage_elec').val(user.firmage);

		$('#update_adhar_elec1').val(user.adharno);


		$('#update_name_elec1').val(user.firstname);
		$('#update_surname_elec1').val(user.lastname);
		$('#update_pmobile_elec1').val(user.mobile);
		//$('#update_omobile_elec').val(user.other_mobile_no);
		//$('#update_ref_elec').val(user.referencecode);
		$('#update_email_elec1').val(user.emailid);
		$('#update_flat_elec1').val(user.address_ck);
		$('#update_address_elec1').val(user.street_ck);
		$('#update_city_elec1').val(user.city_ufi);
		$('#update_pin_elec1').val(user.pin);
		$('#update_pan_elec1').val(user.pancardno);
		$('#update_marriage_elec1').val(user.marriage);
		$('#update_ditrtobuy_elec1').val(user.ditrtobuy);
		$('#update_brandstobuy_elec1').val(user.brandstobuy);
		//$('#update_firmage_elec1').val(user.firmage);
		//$('#update_gst_elec1').val(user.gstno);
		$('#update_bankac_elec1').val(user.bankac);

		
		//fetchcity1(user.state_ck);
		if(user.adharphoto != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.adharphoto))
			{
			document.getElementById("cardimage_aadhar_elec").src = versionurl+'uploads/'+user.adharphoto;
			localStorage.setItem('adimg',user.adharphoto);
			document.getElementById("cardimage_aadhar_elec1").src = versionurl+'uploads/'+user.adharphoto;
			}
		}

		/*if(user.panphoto != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.panphoto))
			{
			document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.panphoto;
			localStorage.setItem('panimg',user.panphoto);
			document.getElementById("cardimage_proof_elec1").src = versionurl+'uploads/'+user.panphoto;
			}
		}
		if(user.adharphotoback != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.adharphotoback))
			{
			document.getElementById("cardimage_aadhar_elec_back").src = versionurl+'uploads/'+user.adharphotoback;
			localStorage.setItem('adimg_back',user.adharphotoback);
			document.getElementById("cardimage_aadhar_elec1_back").src = versionurl+'uploads/'+user.adharphotoback;
			}
		}

		if(user.panphotoback != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.panphotoback))
			{
			document.getElementById("cardimage_proof_elec_back").src = versionurl+'uploads/'+user.panphotoback;
			localStorage.setItem('panimg_back',user.panphotoback);
			document.getElementById("cardimage_proof_elec1_back").src = versionurl+'uploads/'+user.panphotoback;
			}
		}*/
		//if(user.adharphoto == null && user.panphoto == null)
		
		//if(user.panphoto == null) As per arpit
		//	pendingprofile = true;

		//alert('user.panphoto'+user.panphoto+'....pendingprofile'+pendingprofile);

		if(user.photo != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.photo))
			{
			//document.getElementById("cardimage_self_elec").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			//document.getElementById("cardimage_self_elec1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			localStorage.setItem('selfimg',user.photo);
			}
		}
		//else
			//pendingprofile = true;
		

		//document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.doc;

		document.getElementById("pointbal_bal").innerHTML=user.cashback_painter;
		document.getElementById("pointbal_head").innerHTML='Count of Cashback Received';


   }
   else if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
   {
	    user.shoptype = localStorage.getItem("retaiter_type");
		$('#update_name_ret').val(user.firstname);
		$('#update_surname_ret').val(user.lastname);
		$('#update_pmobile_ret').val(user.mobile);
		//$('#update_omobile_ret').val(user.other_mobile_no);
		//$('#update_ref_ret').val(user.referencecode);
		$('#update_email_ret').val(user.emailid);
		$('#update_flat_ret').val(user.address_ck);
		$('#update_address_ret').val(user.street_ck);

	/*	
	var dd = document.getElementById('update_district_ret');
	for (var i = 0; i < dd.options.length; i++) {
		if (dd.options[i].text === user.district) {
			dd.selectedIndex = i;
			break;
		}
	}

	*/
	    $('#update_district_ret').val();
		$('#update_district_ret1').val();
		//$('#update_tehsil_ret').val(user.tehsil);
		$('#update_city_ret').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		//$('#update_state_ret').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_ret').val(user.pin);
        //$('#update_pan_ret').val(user.pancardno);
        //console.lohg('user.ditrtobuy:'+user.ditrtobuy);
        $('#update_marriage_ret').val(user.marriage);
		
		$('#update_brandstobuy_ret').val(user.brandstobuy);
		$('#update_firmage_ret').val(user.firmage);



		$('#update_name_ret1').val(user.firstname);
		$('#update_surname_ret1').val(user.lastname);
		$('#update_pmobile_ret1').val(user.mobile);
		//$('#update_omobile_ret').val(user.other_mobile_no);
		//$('#update_ref_ret').val(user.referencecode);
		$('#update_email_ret1').val(user.emailid);
		$('#update_flat_ret1').val(user.address_ck);
		$('#update_address_ret1').val(user.street_ck);

	
		//$('#update_district_ret').val(user.district);
		//$('#update_tehsil_ret').val(user.tehsil);
		$('#update_city_ret1').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		$('#update_state_ret').val(user.state_ck);
		$('#update_state_ret1').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_ret1').val(user.pin);
        //$('#update_pan_ret1').val(user.pancardno);

        $('#update_marriage_ret1').val(user.marriage);
		
		$('#update_brandstobuy_ret').val(user.brandstobuy);
		$('#update_firmage_ret1').val(user.firmage);

		$('#update_shopname_ret').val(user.shopname);
		$('#update_shoptype_ret').val(user.shoptype);
		$('#update_shopname_ret1').val(user.shopname);

		$('#update_gst_ret').val(user.gstno);
		$('#update_gst_ret1').val(user.gstno);

		$('#update_adhar_ret').val(user.adharno);
		$('#update_adhar_ret1').val(user.adharno);

		$('#update_ditrtobuy_ret').val(user.ditrtobuy);
		$('#update_ditrtobuy_ret1').val(user.ditrtobuy);
		
	
		
		if(user.adharphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphoto))
		{
		document.getElementById("cardimage_aadhar_ret").src = versionurl+'uploads/'+user.adharphoto;
		localStorage.setItem('adimg',user.adharphoto);
		document.getElementById("cardimage_aadhar_ret1").src = versionurl+'uploads/'+user.adharphoto;
		}
		}
		
		if(user.panphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.panphoto))
		{
			document.getElementById("cardimage_proof_ret").src = versionurl+'uploads/'+user.panphoto;
			localStorage.setItem('panimg',user.panphoto);
			document.getElementById("cardimage_proof_ret1").src = versionurl+'uploads/'+user.panphoto;
		}
		}


		if(user.photo != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.photo))
			{
			//document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			//document.getElementById("cardimage_self_ret1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			//document.getElementById("cardimage_proof_ret").src = versionurl+'uploads/'+user.doc;
			localStorage.setItem('selfimg',user.photo);
			}
		}
		//else
			//pendingprofile = true;
		
		if(user.gstphoto != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.gstphoto))
			{
			document.getElementById("cardimage_gst_ret").src = versionurl+'uploads/'+user.gstphoto;
			localStorage.setItem('gstimg',user.gstphoto);
			document.getElementById("cardimage_gst_ret1").src = versionurl+'uploads/'+user.gstphoto;
			}
		}

		document.getElementById("pointspass_ret1").innerHTML='&#8377; '+user.balance;
		document.getElementById("pointspass_del1").innerHTML=user.cashback;
		document.getElementById("pointspass_scan").innerHTML=user.cashback_painter;
		document.getElementById("pointbal_bal").innerHTML='&#8377; '+user.balance;

   }
   else if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
   {
   	
		$('#update_name_cb').val(user.firstname);
		$('#update_name_cb1').val(user.firstname);
		$('#update_surname_cb').val(user.lastname);
		$('#update_surname_cb1').val(user.lastname);
		$('#update_pmobile_cb').val(user.mobile);
		//$('#update_omobile_cb').val(user.other_mobile_no);
		//$('#update_ref_cb').val(user.referencecode);
		$('#update_email_cb').val(user.emailid);
		$('#update_flat_cb').val(user.address_ck);
		$('#update_address_cb').val(user.street_ck);

		

		if(typeof user.owner_mobileno == undefined || user.owner_mobileno == null || user.owner_mobileno == 'null')
			user.owner_mobileno = '';
		
        $('#update_email_cb1').val(user.emailid);
		$('#update_address_cb1').val(user.street_ck);
		$('#update_district_cb').val(user.district);
		$('#update_district_cb1').val(user.district);
		//$('#update_tehsil_cb').val(user.tehsil);
		$('#update_city_cb').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		$('#update_state_cb').val(user.state_ck);
		$('#update_state_cb1').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_cb').val(user.pin);
		$('#update_pin_cb1').val(user.pin);
		//$('#update_pan_cb').val(user.pancardno);

        $('#update_marriage_cb').val(user.marriage);
		$('#update_ditrtobuy_cb').val(user.ditrtobuy);
		$('#update_ditrtobuy_cb1').val(user.ditrtobuy);
		$('#update_brandstobuy_cb').val(user.brandstobuy);
		//$('#update_firmage_cb').val(user.firmage);

		$('#update_adhar_cb').val(user.adharno);
		$('#update_adhar_cb1').val(user.adharno);
		
		



		if(user.photo != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.photo))
		{
	
		document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		localStorage.setItem('selfimg',user.photo);
		}
		}
		

		document.getElementById("pointbal_bal").innerHTML='&#8377; '+user.balance;
		document.getElementById("pointbal_head").innerHTML='Points';


   }

	$('#update_firstname').val(user.firstname);
	$('#update_lastname').val(user.lastname);
	    var dob = user.dob.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[0] : '';
		var yyyy = dob.length == 3 ? dob[2] : '';
		
		$('#update_dd').val(dd);
		$('#update_mm').val(mm);
		$('#update_yyyy').val(yyyy);
     
	$('#update_firstname1').val(user.firstname);
	$('#update_lastname1').val(user.lastname);
	$('#update_email1').val(user.emailid);
	
	$('#update_pmobile_elec1').val(user.mobile);

	//$('#update_omobile_elec1').val(user.mobile);


	



	document.getElementById("profile_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("profile_id").innerHTML='Mobile No '+user.id;
	document.getElementById("profile_join").innerHTML='UFI Filters Joining '+user.created_on;

  
   		
                  document.getElementById("mainhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("saleshlogo").src='assets/images/logo_inner.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("schhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("refhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("wathlogo").src='assets/images/logo_inner.png';
                  document.getElementById("emphlogo").src='assets/images/logo_inner.png';
                  document.getElementById("sochlogo").src='assets/images/logo_inner.png';
               

	   document.getElementById("profile_isapproved").innerHTML= user.isApproved+'!';
	
document.getElementById("profilenm").innerHTML=user.firstname;//+' '+user.lastname;
document.getElementById("user_name_home").innerHTML=user.firstname+' '+user.lastname;
document.getElementById("user_points_home").innerHTML='&#8377; '+user.balance;
if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
{


		document.getElementById("user_points_home_oth").innerHTML=user.cashback;
}
else if(localStorage.getItem("usermtype_ufifilters")=='Painter')
{
	document.getElementById("user_points_home_oth").innerHTML=user.cashback_painter;
}
else if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
{
	document.getElementById("user_points_home_oth").innerHTML='&#8377; '+user.balance;
}
else
	document.getElementById("user_points_home_oth").innerHTML=user.cashback;
	   
document.getElementById("user_id_home").innerHTML='Mem ID '+user.id;
document.getElementById("user_mobile_home").innerHTML='Mobile No '+user.mobile;
if(localStorage.getItem("usermtype_ufifilters")=='Painter' || localStorage.getItem("usermtype_ufifilters")=='Retailer')
	{
	
		if(localStorage.getItem("retaiter_type")=='Putty')
		{
			document.getElementById("user_wallet_home").innerHTML=user.cashback_painter;
		}
		else
		{
		document.getElementById("user_wallet_home").innerHTML=user.cashback;
		}
	 }
else
	document.getElementById("user_wallet_home").innerHTML=user.cashback;
document.getElementById("db_wallet").innerHTML=user.cashback;
document.getElementById("db_wallet1").innerHTML=user.cashback_painter;
document.getElementById("user_id_home_panel").innerHTML=user.id;
document.getElementById("membershipid_panel").innerHTML='<img src="https://chart.googleapis.com/chart?cht=qr&chs=150x150&chld=L|1&chl='+user.firstname+'#'+user.membertype +'#'+user.id+'" class="img-responsive" alt=""/>';

//document.getElementById("username_wnew").innerHTML=user.firstname+' '+user.lastname;
//document.getElementById("userloc_wnew").innerHTML=user.district;


if(user.photo!=null && imageExists(versionurl+'uploads/'+user.photo))
{
//document.getElementById("cardimage_self_cb").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("ppichome").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("ppicprofile").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
//document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
//document.getElementById("userpic_wnew").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
}


//if(user.PhotoofShop!=null  && imageExists(versionurl+'uploads/'+user.PhotoofShop))
//document.getElementById("cardimage_shop_ret").src = versionurl+'uploads/'+user.PhotoofShop;

	if(localStorage.getItem("cardPic")==null || localStorage.getItem("cardPic")=='null' || localStorage.getItem("cardPic")=='undefined' )
	   {
		/*document.getElementById("cardImage").src = 'img/card_profile.png';
		document.getElementById("cardImagepop").src = 'img/card_profile.png';
		document.getElementById("cardImagepunch").src = 'img/card_profile.png';*/
		//document.getElementById("cardImagemenu").src = 'img/user_profile.png';
		
	   }
    else
	   {
	
	   }
	

  var new_app=localStorage.getItem('latestApp');

  if(new_app==null || new_app=='')
  	new_app='true';

 if(new_app=='true')
 {

	if(user.firstname=='')
    {
		 //setminDate();
		 $.mobile.changePage( "#profilepage", { transition: "flip"} );
    }
	  else
    {
    	$.mobile.changePage( "#homepage", { transition: "flip"} );
       // alert(localStorage.getItem("profiledone"));
		/*	if(localStorage.getItem("profiledone_ufi"))
			{
				$.mobile.changePage( "#homepage", { transition: "flip"} );
				//schemePopup();
				console.log('profiledone_ufi Yes');
			}
			else
		    {
				$.mobile.changePage( "#profilepage", { transition: "flip"} );
		    }*/
    }
}
else{
				console.log("in else");
				 $.mobile.changePage( "#downpage", { transition: "none"} );
}
 
    /*if(parseInt(user.cashback)>=5000 && user.pancardno==''){
    	
						$('#withoutpan').popup();
					    $('#withoutpan').popup("open");
    }*/
	//showNotifications1();
   }else{
		  toast('Authentication failed');
		  localStorage.removeItem('passwordufifilters');
		  $('#codeBox1').val('');
		  $('#codeBox2').val('');
		  $('#codeBox3').val('');
		  $('#codeBox4').val('');
		  $.mobile.changePage( "#myaccount", { transition: "flip"} );

   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernameufifilters');
	pwd = localStorage.getItem('passwordufifilters');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.cashback = localStorage.getItem('cashback');
    //user.dealerbonuspoints=localStorage.getItem('dealerbonuspoints');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
	//user.other_mobile_no = localStorage.getItem("userothmobile_ufifilters");

    user.membertype = localStorage.getItem("usermtype_ufifilters");
    user.district = localStorage.getItem("userdist_ufifilters");
   // user.referencecode = localStorage.getItem("userref_ufifilters");
    user.pancardno = localStorage.getItem("userpan_ufifilters");
    user.photo = localStorage.getItem("userphoto_ufifilters");
    user.shopname = localStorage.getItem("usershop_ufifilters");
    user.gstno = localStorage.getItem("usergst_ufifilters");
    //user.shopestablish = localStorage.getItem("usershopest_ufifilters");
    //user.PhotoofShop = localStorage.getItem("usershoppic_ufifilters");
    //user.PersonalId = localStorage.getItem("userdoc_ufifilters");
    user.state = localStorage.getItem("userstate");
    user.cinno = localStorage.getItem("usercin_ufifilters");
    user.pin = localStorage.getItem("userpin_ufifilters");
    user.address_ck = localStorage.getItem("useradd_ufifilters");
    user.created_on = localStorage.getItem("created_on_ufifilters");

    user.marriage = localStorage.getItem("marriage");
	user.ditrtobuy = localStorage.getItem("ditrtobuy");
	user.brandstobuy = localStorage.getItem("brandstobuy");
	user.firmage = localStorage.getItem("firmage");

    user.isApproved = '';

    user.IsApproved_se=localStorage.getItem("IsApproved_se");

    user.isLive=localStorage.getItem("is_live_ufifilters");
	//user.isBlocked = localStorage.getItem("is_blocked_ufifilters");
    user.refer_code = localStorage.getItem("refer_code_ck");
	user.adharno = localStorage.getItem("adharno");

    user.photo = localStorage.getItem('selfimg');
    //user.PersonalId = localStorage.getItem('docimg');
    //user.PhotoofShop = localStorage.getItem('shopimg');
    user.adharphoto = localStorage.getItem('adimg');
    user.panphoto = localStorage.getItem('panimg');
    user.gstphoto = localStorage.getItem('gstimg');
    //user.shopestablish = localStorage.getItem('estimg');
	//user.adharphotoback = localStorage.getItem('adimg_back');
    //user.panphotoback = localStorage.getItem('panimg_back');
    $('#emptype').val(localStorage.getItem("usermtype_ufifilters"));

   $('#share_refer_code').val(user.refer_code);
   //$("#emptype").selectmenu('refresh');

   if(localStorage.getItem("usermtype_ufifilters")=='Painter')
   {
		$('#referdiv').css('display','flex');
		$('#referdiv2').css('display','none');
   		$('#mylistdiv').css('display','none');
   		$('#pointspassbookpanel').css('display','none');
		$('#pointspassbookpanel_plumber').css('display','none');
		$('#counterdiv').css('display','none');
		$('#rewardshistpanel').css('display','none');
		$('#rewardstorediv').css('display','none');
		$('#rewardsdivpanel').css('display','none');
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#wallethistorypanel').css('display','block');
		$('#counterdivpanel').css('display','none');
		$('#voucherdivpanel').css('display','none');
		$('#ass_scandivpanel').css('display','none');
		//document.getElementById("homepointslabel_oth").innerHTML='My Wallet';
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','none');

		$('#otherheader').css('display','block');
		$('#retailerheader').css('display','none');
		$('#counterheader').css('display','none');
		
	    var numbers = /^[0-9]+$/;
		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_elec").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
	   
				$("#update_state_elec option").each(function() {
						  if($(this).text().indexOf(user.state_ck)>=0) {
							 
							$(this).prop('selected', 'selected');            
						  }                        
						});
				var sval=$("#update_state_elec").val();
				fetchdistrict1(sval);
		   }
		}

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_elec1').setAttribute("max", today);

			
		
			

		if(user.dob!='' && user.dob!=null)
		{
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob_elec').val(yyyy+'-'+mm+'-'+dd);
		
		}
		
			

	   

   }
   if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
   {
	    //$('#referdiv').css('display','none');
		//$('#referdiv2').css('display','flex');
   		$('#mylistdiv').css('display','none');
   		$('#rewardstorediv').css('display','flex');
   		$('#counterdiv').css('display','none');
   		//$('#notificationsdiv').css('display','none');
   		//$('#walletdiv').css('display','block');
   		
   		$('#referdiv').css('display','none');
		$('#referdiv2').css('display','flex');
		try{
		document.getElementById("homepointslabel").innerHTML='My Wallet';
		}catch(err){}
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#otherheader').css('display','none');
		$('#retailerheader').css('display','block');
		$('#voucherdivpanel').css('display','none');
		$('#counterheader').css('display','none');
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','none');
		$('#counterdivpanel').css('display','none');
		$('#sales_data_main').css('display','flex');
		$('#scandiv').css('display','flex');
        /*if(localStorage.getItem("retaiter_type")=='Putty')
		{
			$('#myapprovalsdiv').css('display','none');
			$('#sales_data_panel').css('display','none');
			$('#sales_data_main').css('display','none');
			$('#scandiv_panel_other').css('display','block');
			$('#scandiv').css('display','flex');
		}
		else
		{
			$('#sales_data_main').css('display','flex');
			$('#sales_data_panel').css('display','block');
			$('#scandiv').css('display','none');
			$('#myapprovalsdiv').css('display','flex');
			$('#scandiv_panel_other').css('display','block');
			
		}*/

		$('#myapprovalsdiv').css('display','none');
		$('#sales_data_panel').css('display','none');
		$('#sales_data_main').css('display','none');
		$('#scandiv_panel_other').css('display','block');
		$('#scandiv').css('display','flex');

		var numbers = /^[0-9]+$/;

		/*if(localStorage.getItem("retaiter_type")=='Putty')
		{
		 document.getElementById("waldiv").css('display','none');
		}
		else
		{
			document.getElementById("waldiv").css('display','block');
		}*/

		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_ret").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
        
		$("#update_state_ret option").each(function() {
				  if($(this).text().indexOf(user.state_ck)>=0) {
					 
					$(this).prop('selected', 'selected');            
				  }                        
				});
		var sval=$("#update_state_ret").val();
		fetchdistrict1(sval);
		   }
		}

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			try{
			document.getElementById('update_dob_ret1').setAttribute("max", today);
			document.getElementById('update_dob1').setAttribute("max", today);
		}catch(err){}
			
		if(user.dob!='')
		{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		
		}



   }
   if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
   {
   	
	    $('#referdiv').css('display','none');
		$('#referdiv2').css('display','none');
 		$('#scandiv').css('display','none');
		$('#scandiv_panel_other').css('display','none');
		$('#pipes_billupload_panel').css('display','block');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','none');
		$('#mylistdiv').css('display','none');
		$('#counterdiv').css('display','none');
   		$('#rewardstorediv').css('display','flex');
   		//$('#notificationsdiv').css('display','block');
   		$('#walletdiv').css('display','none');
		$('#walletdivpanel').css('display','block');
		$('#retailerheader').css('display','none');
		$('#otherheader').css('display','block');
		$('#gamesdiv').css('display','flex');
		$('#giftsdiv').css('display','flex');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#ass_scandivpanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#referdivpanel').css('display','none');
		$('#rewardsdivpanel').css('display','none');
		$('#voucherdivpanel').css('display','none');
		$('#counterheader').css('display','none');
		$('#myapprovalsdiv').css('display','none');
		//document.getElementById("homepointslabel").innerHTML='My Wallet';
		var numbers = /^[0-9]+$/;

	

		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_cb").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
        
		$("#update_state_cb option").each(function() {
				  if($(this).text().indexOf(user.state_ck)>=0) {
					 
					$(this).prop('selected', 'selected');            
				  }                        
				});
		var sval=$("#update_state_cb").val();
		fetchdistrict1(sval);
		   }
		}

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_cb1').setAttribute("max", today);
			document.getElementById('update_dob_cb').setAttribute("max", today);
			
		if(user.dob!='')
		{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob_cb').val(yyyy+'-'+mm+'-'+dd);
		
		}


   }
   if(localStorage.getItem("usermtype_ufifilters")=='Dealer')
   {
 		$('#referdiv').css('display','none');
		$('#referdiv2').css('display','none');
		$('#counterdiv').css('display','flex');
		document.getElementById("homepointslabel").innerHTML='Dealer Points';

   }
   
   // localStorage.setItem('passworddd',pwd);
   
   //localStorage.setItem('def_store','gold Rajkot');
   if(typeof user.membertype==undefined || user.membertype==null)
   	user.membertype='';
	//console.log("user.firstname"+user.firstname);
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.city_ufi=='undefined' || user.city_ufi=='null' || user.city_ufi==null)
		user.city_ufi = '0';
 if(user.state_ck=='undefined' || user.state_ck=='null' || user.state_ck==null)
		user.state_ck = '0';
 if(user.street_ck=='undefined' || user.street_ck=='null' || user.street_ck==null)
		user.street_ck = '';

 /*if(user.photo=='undefined' || user.photo=='null' || user.photo==null || user.photo=='')
		user.photo = 'user_pic.png';
 if(user.doc=='undefined' || user.doc=='null' || user.doc==null)
		user.doc = 'my_membership_s.png';
 if(user.doc1=='undefined' || user.doc1=='null' || user.doc1==null)
		user.doc1 = 'my_membership_s.png';
 if(user.PhotoofShop=='undefined' || user.PhotoofShop=='null' || user.PhotoofShop==null)
		user.PhotoofShop = 'my_membership_s.png';*/
 if(user.created_on=='undefined' || user.created_on=='null' || user.created_on==null)
		user.created_on = 'Not available';
 if(user.isApproved=='undefined' || user.isApproved=='null' || user.isApproved==null)
		user.isApproved = 'Unknown Status';
	if(localStorage.getItem("usermtype_ufifilters")=='Painter')
   {
		$('#update_name_elec').val(user.firstname);
		$('#update_surname_elec').val(user.lastname);
		$('#update_pmobile_elec').val(user.mobile);
		//$('#update_omobile_elec').val(user.other_mobile_no);
		//$('#update_ref_elec').val(user.referencecode);
		$('#update_email_elec').val(user.emailid);
		$('#update_flat_elec').val(user.address_ck);
		$('#update_address_elec').val(user.street_ck);

/*		var dd = document.getElementById('update_district_elec');
for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === user.district) {
        dd.selectedIndex = i;
        break;
    }
}
*/


	//	$('#update_district_elec').val(user.district);
		//$('#update_tehsil_elec').val(user.tehsil);
		$('#update_city_elec').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		//$('#update_state_elec').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_elec').val(user.pin);
		$('#update_pan_elec').val(user.pancardno);

        $('#update_marriage_elec').val(user.marriage);
		$('#update_ditrtobuy_elec').val(user.ditrtobuy);
		$('#update_brandstobuy_elec').val(user.brandstobuy);
		//$('#update_firmage_elec').val(user.firmage);
		$('#update_adhar_elec').val(user.adharno);
		
		//$('#update_bankname_elec').val(user.bankname);
		$('#update_bankac_elec').val(user.bankac);
		/*$('#update_bankifsc_elec').val(user.bankifsc);
		$('#update_bankcity_elec').val(user.bankcity);
		$('#update_bankbranch_elec').val(user.bankbranch);

		
		$('#update_pan_elec').val(user.pancardno);	*/

		
		//fetchcity1(user.state_ck);
		if(imageExists(versionurl+'uploads/'+user.adharphoto))
		{
			document.getElementById("cardimage_aadhar_elec").src = versionurl+'uploads/'+user.adharphoto;
			localStorage.setItem('adimg',user.adharphoto);
			document.getElementById("cardimage_aadhar_elec1").src = versionurl+'uploads/'+user.adharphoto;
		}
		/*if(imageExists(versionurl+'uploads/'+user.panphoto))
		{
		document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.panphoto;
		localStorage.setItem('panimg',user.panphoto);
		document.getElementById("cardimage_proof_elec1").src = versionurl+'uploads/'+user.panphoto;
		}

		if(imageExists(versionurl+'uploads/'+user.adharphotoback))
		{
		document.getElementById("cardimage_aadhar_elec_back").src = versionurl+'uploads/'+user.adharphotoback;
		localStorage.setItem('adimg_back',user.adharphotoback);
		document.getElementById("cardimage_aadhar_elec1_back").src = versionurl+'uploads/'+user.adharphotoback;
		}
		if(imageExists(versionurl+'uploads/'+user.panphotoback))
		{
		document.getElementById("cardimage_proof_elec_back").src = versionurl+'uploads/'+user.panphotoback;
		localStorage.setItem('panimg_back',user.panphotoback);
		document.getElementById("cardimage_proof_elec1_back").src = versionurl+'uploads/'+user.panphotoback;
		}*/

		if(imageExists(versionurl+'uploads/'+user.photo))
		{
		//document.getElementById("cardimage_self_elec").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		//document.getElementById("cardimage_self_elec1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		localStorage.setItem('selfimg',user.photo);
		}

		//document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.doc;


   }
   else if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
   {
	  user.shoptype = localStorage.getItem("retaiter_type");
		$('#update_name_ret').val(user.firstname);
		$('#update_surname_ret').val(user.lastname);
		$('#update_pmobile_ret').val(user.mobile);
		//$('#update_omobile_ret').val(user.other_mobile_no);
		//$('#update_ref_ret').val(user.referencecode);
		$('#update_email_ret').val(user.emailid);
		$('#update_flat_ret').val(user.address_ck);
		$('#update_address_ret').val(user.street_ck);
		$('#update_shoptype_ret').val(user.shoptype);
/*var dd = document.getElementById('update_district_ret');
for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === user.district) {
        dd.selectedIndex = i;
        break;
    }
}
*/

		//$('#update_district_ret').val(user.district);
		//$('#update_tehsil_ret').val(user.tehsil);
		$('#update_city_ret').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		//$('#update_state_ret').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_ret').val(user.pin);
		//$('#update_pan_ret').val(user.pancardno);
		$('#update_adhar_ret').val(user.adharno);

        $('#update_marriage_ret').val(user.marriage);
		$('#update_ditrtobuy_ret').val(user.ditrtobuy);
		$('#update_brandstobuy_ret').val(user.brandstobuy);
		$('#update_firmage_ret').val(user.firmage);
		
		/*$('#update_bankname_ret').val(user.bankname);
		$('#update_bankac_ret').val(user.bankac);
		$('#update_bankifsc_ret').val(user.bankifsc);
		$('#update_bankcity_ret').val(user.bankcity);
		$('#update_bankbranch_ret').val(user.bankbranch);

		$('#update_adhar_ret').val(user.adharno);
		$('#update_pan_ret').val(user.pancardno);
		$('#update_gst_ret').val(user.gstno);

		$('#update_shopname_ret').val(user.shopname);
		$('#update_shopestablish_ret').val(user.shopestablish);	*/
		
		if(user.adharphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphoto))
		{
		document.getElementById("cardimage_aadhar_ret").src = versionurl+'uploads/'+user.adharphoto;
		localStorage.setItem('adimg',user.adharphoto);
		document.getElementById("cardimage_aadhar_ret1").src = versionurl+'uploads/'+user.adharphoto;
		}
		}
		
		if(user.panphoto != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.panphoto))
			{
			document.getElementById("cardimage_proof_ret").src = versionurl+'uploads/'+user.panphoto;
			localStorage.setItem('panimg',user.panphoto);
			document.getElementById("cardimage_proof_ret1").src = versionurl+'uploads/'+user.panphoto;
			}
		}

		/*if(user.adharphotoback != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphotoback))
		{
		document.getElementById("cardimage_aadhar_ret_back").src = versionurl+'uploads/'+user.adharphotoback;
		localStorage.setItem('adimg_back',user.adharphotoback);
		document.getElementById("cardimage_aadhar_ret1_back").src = versionurl+'uploads/'+user.adharphotoback;
		}
		}
		
		if(user.panphotoback != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.panphotoback))
		{
		document.getElementById("cardimage_proof_ret_back").src = versionurl+'uploads/'+user.panphotoback;
		localStorage.setItem('panimg_back',user.panphotoback);
		document.getElementById("cardimage_proof_ret1_back").src = versionurl+'uploads/'+user.panphotoback;
		}
		}*/

		if(user.photo != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.photo))
		{
		//document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		//document.getElementById("cardimage_self_ret1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		//document.getElementById("cardimage_proof_ret").src = versionurl+'uploads/'+user.doc;
		localStorage.setItem('selfimg',user.photo);
		}
		}

		if(user.gstphoto != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.gstphoto))
			{
			document.getElementById("cardimage_gst_ret").src = versionurl+'uploads/'+user.gstphoto;
			localStorage.setItem('gstimg',user.gstphoto);
			document.getElementById("cardimage_gst_ret1").src = versionurl+'uploads/'+user.gstphoto;
			}
		}

		/*if(user.shopestablish != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.shopestablish))
		{
		document.getElementById("update_shopestablish_ret").src = versionurl+'uploads/'+user.shopestablish;
		localStorage.setItem('estimg',user.shopestablish);
		document.getElementById("update_shopestablish_ret1").src = versionurl+'uploads/'+user.shopestablish;
		}
		}*/

   }
   else if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
   {
   	
		$('#update_name_cb').val(user.firstname);
		$('#update_name_cb1').val(user.firstname);
		$('#update_surname_cb').val(user.lastname);
		$('#update_pmobile_cb').val(user.mobile);
		//$('#update_omobile_cb').val(user.other_mobile_no);
		$('#update_ref_cb').val(user.referencecode);
		$('#update_email_cb').val(user.emailid);
		$('#update_flat_cb').val(user.address_ck);
		$('#update_address_cb').val(user.street_ck);
/*
var dd = document.getElementById('update_district_cb');
for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === user.district) {
        dd.selectedIndex = i;
        break;
    }
}
*/

//		$('#update_district_cb').val(user.district);
		//$('#update_tehsil_cb').val(user.tehsil);
		$('#update_city_cb').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		//$('#update_state_elec').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_cb').val(user.pin);
		//$('#update_pan_cb').val(user.pancardno);

        
		$('#update_marriage_cb').val(user.marriage);
		$('#update_ditrtobuy_cb').val(user.ditrtobuy);
		$('#update_ditrtobuy_cb1').val(user.ditrtobuy);
		$('#update_brandstobuy_cb').val(user.brandstobuy);
		//$('#update_firmage_cb').val(user.firmage);
		$('#update_adhar_cb').val(user.adharno);
		
		/*$('#update_bankname_cb').val(user.bankname);
		$('#update_bankac_cb').val(user.bankac);
		$('#update_bankifsc_cb').val(user.bankifsc);
		$('#update_bankcity_cb').val(user.bankcity);
		$('#update_bankbranch_cb').val(user.bankbranch);

		
		$('#update_pan_cb').val(user.pancardno);	

		
		//fetchcity1(user.state_ck);
		if(user.adharphoto != '')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphoto))
		{
		document.getElementById("cardimage_aadhar_cb").src = versionurl+'uploads/'+user.adharphoto;
		document.getElementById("cardimage_aadhar_cb1").src = versionurl+'uploads/'+user.adharphoto;
		localStorage.setItem('adimg',user.adharphoto);
		}
		}

		if(user.panphoto != '')
		{
		if(imageExists(versionurl+'uploads/'+user.panphoto))
		{
		document.getElementById("cardimage_proof_cb").src = versionurl+'uploads/'+user.panphoto;
		document.getElementById("cardimage_proof_cb1").src = versionurl+'uploads/'+user.panphoto;
		localStorage.setItem('panimg',user.panphoto);
		}
		}


		if(user.adharphotoback != '')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphotoback))
		{
		document.getElementById("cardimage_aadhar_cb_back").src = versionurl+'uploads/'+user.adharphotoback;
		document.getElementById("cardimage_aadhar_cb1_back").src = versionurl+'uploads/'+user.adharphotoback;
		localStorage.setItem('adimg_back',user.adharphotoback);
		}
		}

		if(user.panphotoback != '')
		{
		if(imageExists(versionurl+'uploads/'+user.panphotoback))
		{
		document.getElementById("cardimage_proof_cb_back").src = versionurl+'uploads/'+user.panphotoback;
		document.getElementById("cardimage_proof_cb1_back").src = versionurl+'uploads/'+user.panphotoback;
		localStorage.setItem('panimg_back',user.panphotoback);
		}
		}*/

		if(user.photo != '')
		{
		if(imageExists(versionurl+'uploads/'+user.photo))
		{
		//document.getElementById("cardimage_self_cb").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		//document.getElementById("cardimage_self_cb1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		localStorage.setItem('selfimg',user.photo);
		}
		}
		//document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.doc;


   }

	$('#update_firstname').val(user.firstname);
	$('#update_lastname').val(user.lastname);
	    var dob = user.dob.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[0] : '';
		var yyyy = dob.length == 3 ? dob[2] : '';
		
		$('#update_dd').val(dd);
		$('#update_mm').val(mm);
		$('#update_yyyy').val(yyyy);
     
	$('#update_firstname1').val(user.firstname);
	$('#update_lastname1').val(user.lastname);
	$('#update_email1').val(user.emailid);
	
	$('#update_pmobile_elec1').val(user.mobile);

	//$('#update_omobile_elec1').val(user.mobile);


	



	document.getElementById("profile_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("profile_id").innerHTML='Mobile No '+user.id;
	document.getElementById("profile_join").innerHTML='UFI Filters Joining '+user.created_on;
	/*if(user.isBlocked == 'BLOCKED')
	   {
		document.getElementById("profile_isapproved").innerHTML= user.isBlocked+'!';
	   }
	else
	   {*/
		document.getElementById("profile_isapproved").innerHTML= user.isApproved+'!';
	  // }
	//document.getElementById("profile_pic").src = user.photo;

     //$('#push_reg_no').val(reg_id);

//document.getElementById("barcontenthome").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span></a>';
document.getElementById("profilenm").innerHTML=user.firstname;//+' '+user.lastname;
document.getElementById("user_name_home").innerHTML=user.firstname+' '+user.lastname;
document.getElementById("user_points_home").innerHTML=user.balance;
if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
{
	/*if(user.tot_failed_paytm_amount!='0')
		   {
			document.getElementById("user_points_home_oth").innerHTML='+&#8377; '+user.tot_failed_paytm_amount;
		   }
	else
		{
			document.getElementById("user_points_home_oth").innerHTML=user.cashback;
		}*/

		document.getElementById("user_points_home_oth").innerHTML=user.cashback;

}
else if(localStorage.getItem("usermtype_ufifilters")=='Painter')
{
	document.getElementById("user_points_home_oth").innerHTML=user.cashback_painter;
}
else if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
{
	document.getElementById("user_points_home_oth").innerHTML=user.balance;
}
else
document.getElementById("user_points_home_oth").innerHTML=user.cashback;
document.getElementById("user_id_home").innerHTML='Mem ID '+user.id;
document.getElementById("user_mobile_home").innerHTML='Mobile No '+user.mobile;
if(localStorage.getItem("usermtype_ufifilters")=='Painter' || localStorage.getItem("usermtype_ufifilters")=='Retailer')
	{
	/*if(user.tot_failed_paytm_amount!='0')
		   {
			document.getElementById("user_wallet_home").innerHTML='+&#8377; '+user.tot_failed_paytm_amount;
		   }
	else
		{
			document.getElementById("user_wallet_home").innerHTML=user.cashback;
		}*/

		if(localStorage.getItem("retaiter_type")=='Putty')
		{
			document.getElementById("user_wallet_home").innerHTML=user.cashback_painter;
		}
		else
		{
		document.getElementById("user_wallet_home").innerHTML=user.cashback;
		}

	 }
else
document.getElementById("user_wallet_home").innerHTML=user.cashback;
document.getElementById("user_id_home_panel").innerHTML=user.id;
document.getElementById("membershipid_panel").innerHTML='<img src="https://chart.googleapis.com/chart?cht=qr&chs=150x150&chld=L|1&chl='+user.firstname+'#'+user.membertype+'#'+user.id+'" class="img-responsive" alt=""/>';

//document.getElementById("username_wnew").innerHTML=user.firstname+' '+user.lastname;
//document.getElementById("userloc_wnew").innerHTML=user.district;


if(user.photo!=null && imageExists(versionurl+'uploads/'+user.photo))
{
//document.getElementById("cardimage_self_cb").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("ppichome").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("ppicprofile").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
//document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
//document.getElementById("userpic_wnew").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
}


//if(user.PhotoofShop!=null  && imageExists(versionurl+'uploads/'+user.PhotoofShop))
//document.getElementById("cardimage_shop_ret").src = versionurl+'uploads/'+user.PhotoofShop;

	
	/*document.getElementById("profilenm1").innerHTML=user.firstname+' '+user.lastname;
    document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	document.getElementById("pr_valid").innerHTML=user.validity;*/
    //alert(user.firstname);
	if(user.lastname=='')
    {
		 //setminDate();
		 $.mobile.changePage( "#profilepage", { transition: "flip"} );
    }
    else
    {
    	$.mobile.changePage( "#homepage", { transition: "flip"} );
       // alert(localStorage.getItem("profiledone"));
	   /* if(localStorage.getItem("profiledone_ufi"))
			{xzz
			$.mobile.changePage( "#homepage", { transition: "flip"} );
			console.log('profiledone_ufi Yes');
			}
        else
            $.mobile.changePage( "#profilepage", { transition: "flip"} );*/
    }

	//showNotifications1();
    }
  });
 }
}



function authenticate1(){

  var uname = $('#username').val();
  /*var pwd = $('#password_myacc').val();
  if(pwd=='')
  {*/
  var pwd = $('#codeBox1').val()+$('#codeBox2').val()+$('#codeBox3').val()+$('#codeBox4').val();
  //}
  var phno = localStorage.getItem("phno");

  //alert(regg_id);
   
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
   url: SERVER+'mloyallogin_json.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'username': uname, 'password': pwd,'phonenos':phno,'device_id':reg_id},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {

		  $("#wait").css("display","none"); // hide it initially
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){


    user.balance = checkforundefinedPts(data.Expected_points);
    //user.dealerbonuspoints=data.dealerbonuspoints;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	//user.trans_sms = data.trans_sms;
	//user.mktgsms = data.mktgsms;
	//user.cpns = data.cpns;
    //user.ads = data.ads;
    user.dob = data.dob;
    user.emailid = data.emailid;
	user.def_store = data.store;
	user.def_city = data.store_city;
	user.visit_frequency = data.visit_frequency;
	user.membertype = data.membertype;
	user.store_code = data.store_code;

	user.cashback_painter = checkforundefinedPts(data.cashback);
   

	user.cashback = checkforundefinedPts(data.usable_wallet_balance);

	console.log(user.balance);

    if(user.balance.toString().indexOf(".")>=0)
	{
		user.balance  = parseFloat(user.balance).toFixed(2);
	}
	if(user.cashback.toString().indexOf(".")>=0)
	{
		user.cashback  = parseFloat(user.cashback).toFixed(2);
	}

	//user.other_mobile_no = data.PayTMNo;
	user.district = data.District;
	//user.tehsil = data.Tehsil;
	//user.referencecode = data.Ref_code;
	user.pancardno = data.Pan_card_no;
	user.photo = data.Photo;
	user.shopname = data.Shop_Name;
	user.gstno = data.GSTNo;
	//user.shopestablish = data.Shop_Establishment_Cert;
	//user.PhotoofShop=data.PhotoofShop;
    //user.doc=data.Electrician_ID;
	//user.doc1=data.PersonalID;
    //user.state=data.State;
    user.cinno=uname;
    user.pin=data.PostalCode;
	user.address_ck=data.floor_flat;
	user.city_ufi=data.City;
	user.state_ck=data.State;
	user.street_ck=data.street;
	user.created_on=data.Created_On;
	user.isApproved=data.IsApproved;

	user.isLive=data.state_live_status;

    user.marriage = data.MaritalStatus;
	user.ditrtobuy = data.Distributor_name;
	user.brandstobuy = data.brands_to_buy;
	user.firmage = data.firm_age;

	//user.isBlocked = data.IsBlocked;
	//user.bankname = data.BankName;
	user.bankac = data.Bank_Ac_No;
	//user.bankifsc = data.IFSC_code;
	//user.bankcity = data.Bank_City;
	//user.bankbranch = data.Bank_Branch_Address;
	user.adharno = data.aadhar_card_no;
	user.adharphoto = data.Aadhar_Card_Photo;
	user.panphoto = data.Pan_Card_Photo;
	user.gstphoto = data.Gst_Photo;
	user.refer_code = data.refer_code;
	user.Store_Id=data.Store_Id;
	user.owner_mobileno=data.owner_mobileno;
	//user.working_shopname=data.working_shopname;
	//user.can_chq=data.Cancelled_cheque;

	user.IsApproved_se=data.IsApproved_se;

	//user.nocounter=data.CounterBoyLimitRetailer;
	//user.adharphotoback = data.Aadhar_Card_Photo_2;
	//user.panphotoback = data.Pan_Card_Photo_2;
	//user.tot_failed_paytm_amount = data.tot_failed_paytm_amount;
	//if(typeof user.tot_failed_paytm_amount == 'undefined' || user.tot_failed_paytm_amount==null || user.tot_failed_paytm_amount=='null' || user.tot_failed_paytm_amount=='undefined')
		//user.tot_failed_paytm_amount='0';

	
   // success{"HomeNo":null,"Title":null,"Gender":null,"Dob":"","Doa":null,"Agegroup":null,"Email":"","floor_flat":null,"building":null,"street":null,"town":null,"Country":null,"City":"","PostalCode":null,"FinalPath":"https://ufifilters.mloyalretail.com/mapp","UniqueNum":"5814164591","ExpM":9,"ExpY":2019,"Dobday":null,"Dobmonth":null,"Dobyear":null,"Doaday":null,"Doamonth":null,"Doayear":null,"Occupation":null,"member_type":"New","Form_Id":null,"User_Id":5,"Store_Id":null,"Created_On":"10/5/2018 5:32:30 PM","upload_on":"10/5/2018 5:32:30 PM","Status_Flag":1,"data_source":0,"genuine_flag":0,"updateStoreCode":null,"updateCustomer":null,"user_id_bkp":null,"store_id_bkp":null,"support_remarks":null,
   //"other_mobile_no":null,"District":null,"Pan_card_no":null,"Ref_code":null,"Village":null,"Electrician_ID":null,"Photo":null,"State":null,"PersonalID":null,"Shop_Name":null,"GSTNo":null,"Shop_Establishment_Cert":null,"PhotoofShop":null,"CINNo":null,"IsApproved":"UnApproved","IsApprovedSmsStatus":0,"support_flag":null,"DS_Store_Code":null,"DS_table_name":null,"MaritalStatus":null,"PurchaseSourceForElectricalProduct":null,"PurchaseBrandForElectricalProduct":null,"TotalExperience":null,"VerificationQuestion":null,"district":null,"dealerbonuspoints":0,"dealerexpiredpoints":0}
	//if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		//user.cpns='0';
    
    
    $('#username').val('');
    $('#password_myacc').val('');


	$('#update_pmobile_elec').val(uname);
	$('#update_pmobile_ret').val(uname);
	$('#update_pmobile_del').val(uname);
	$('#update_pmobile_cb').val(uname);
	$('#update_pmobile_elec1').val(uname);
	$('#update_pmobile_ret1').val(uname);
	//$('#update_omobile_ret1').val(uname);
	$('#update_pmobile_cb1').val(uname);

	

	
	
   if(typeof user.membertype == undefined || user.membertype==null || user.membertype == '')
   {
   		user.membertype = localStorage.getItem('cattype');
   }
   if(user.isApproved=='UnApproved')
   {
	   user.isApproved='PENDING';
	   $('#pendingdiv').css('display','block');
	   $('#verifydiv').css('display','none');
	   $('#rejectdiv').css('display','none');
   }
   else if(user.isApproved=='Rejected')
   {
	   user.isApproved='REJECTED';
	   $('#pendingdiv').css('display','none');
	   $('#verifydiv').css('display','none');
	   $('#rejectdiv').css('display','block');
   }
   /*else if(user.isBlocked=='1')
   {
	   user.isBlocked='BLOCKED';
	  
   }*/
   else
   {
	   $('#verifydiv').css('display','block');
	   $('#pendingdiv').css('display','none');
	   $('#rejectdiv').css('display','none');
   }
   
   localStorage.setItem('usernameufifilters',uname);
   localStorage.setItem('passwordufifilters',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('cashback',user.cashback);
   //localStorage.setItem('dealerbonuspoints',user.dealerbonuspoints);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('storecode_ufi',user.store_code);
   //localStorage.setItem('trans_sms',user.trans_sms);
   //localStorage.setItem('mktgsms',user.mktgsms);
   //localStorage.setItem('cpns',user.cpns);
   //localStorage.setItem('ads',user.ads);
   
   localStorage.setItem('cashback_painter',user.cashback_painter);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   localStorage.setItem("usermtype_ufifilters",user.membertype);
   localStorage.setItem("profiletype_ufi",user.membertype);
   localStorage.setItem("userdist_ufifilters",user.district);
   //localStorage.setItem("userothmobile_ufifilters",user.other_mobile_no);
   //localStorage.setItem("userref_ufifilters",user.referencecode);
   localStorage.setItem("userpan_ufifilters",user.pancardno);
   localStorage.setItem("userphoto_ufifilters",user.photo);
   localStorage.setItem("usershop_ufifilters",user.shopname);
   localStorage.setItem("usergst_ufifilters",user.gstno);
   //localStorage.setItem("usershopest_ufifilters",user.shopestablish);
   //localStorage.setItem("usershoppic_ufifilters",user.PhotoofShop);
   //localStorage.setItem("userdoc_ufifilters",user.PersonalId);
   localStorage.setItem("userstate",user.state_ck);
   localStorage.setItem("usercin_ufifilters",user.cinno);
   localStorage.setItem("userpin_ufifilters",user.pin);
   localStorage.setItem("useradd_ufifilters",user.address_ck);
   localStorage.setItem("created_on_ufifilters",user.created_on);
   localStorage.setItem("is_approved_ufifilters",user.isApproved);

   localStorage.setItem("marriage",user.marriage);
   localStorage.setItem("ditrtobuy",user.ditrtobuy);
   localStorage.setItem("brandstobuy",user.brandstobuy);
   localStorage.setItem("firmage",user.firmage);
   localStorage.setItem("adharno",user.adharno);

   localStorage.setItem("is_live_ufifilters",user.isLive);
   //localStorage.setItem("is_blocked_ufifilters",user.isBlocked);
   localStorage.setItem("refer_code_ck",user.refer_code);

   localStorage.setItem('selfimg',user.photo);
   //localStorage.setItem('docimg',user.PersonalId);
   //localStorage.setItem('shopimg',user.PhotoofShop);
   localStorage.setItem('adimg',user.adharphoto);
   localStorage.setItem('panimg',user.panphoto);
   localStorage.setItem('gstimg',user.gstphoto);
   //localStorage.setItem('estimg',user.shopestablish);
   //localStorage.setItem('adimg_back',user.adharphotoback);
   //localStorage.setItem('panimg_back',user.panphotoback);
   //localStorage.setItem('tot_failed_paytm_amount',user.tot_failed_paytm_amount);

   localStorage.setItem('IsApproved_se',user.IsApproved_se);
	

	
   $('#emptype').val(localStorage.getItem("usermtype_ufifilters"));

   $('#share_refer_code').val(user.refer_code);
   //$("#emptype").selectmenu('refresh');

   if(localStorage.getItem("usermtype_ufifilters")=='Painter')
   {
		$('#referdiv').css('display','flex');
		$('#referdiv2').css('display','none');
   		$('#mylistdiv').css('display','none');
   		$('#pointspassbookpanel').css('display','none');
		$('#pointspassbookpanel_plumber').css('display','none');
		$('#counterdiv').css('display','none');
		$('#rewardshistpanel').css('display','none');
		$('#rewardstorediv').css('display','none');
		$('#rewardsdivpanel').css('display','none');
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#counterdivpanel').css('display','none');
		$('#scandiv').css('display','flex');
		$('#voucherdivpanel').css('display','none');
		$('#ass_scandivpanel').css('display','none');
		//document.getElementById("homepointslabel_oth").innerHTML='My Wallet';
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','none');
		$('#myapprovalsdiv').css('display','none');
		$('#otherheader').css('display','block');
		$('#retailerheader').css('display','none');
		$('#counterheader').css('display','none');
		$('#walletdiv').css('display','none');


		document.getElementById("otherheader_pts_txt").innerHTML='Total Cashback Received';
		document.getElementById("pointbal_bal").innerHTML='&#8377; '+user.cashback_painter;
		document.getElementById("pointbal_head").innerHTML='Total Cashback Received';

		
	    var numbers = /^[0-9]+$/;
		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_elec").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
	   
				$("#update_state_elec option").each(function() {
						  if($(this).text().indexOf(user.state_ck)>=0) {
							 
							$(this).prop('selected', 'selected');            
						  }                        
						});
				var sval=$("#update_state_elec").val();
				fetchdistrict1(sval);
		   }
		}

		var today = new Date();
		
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_elec1').setAttribute("max", today);

			
		
			

		if(user.dob!='')
		{
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob_elec').val(yyyy+'-'+mm+'-'+dd);
		
		}
		
			

	   

   }
   if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
   {
	    //$('#referdiv').css('display','none');
		//$('#referdiv2').css('display','flex');
   		$('#mylistdiv').css('display','none');
   		$('#rewardstorediv').css('display','flex');
   		$('#counterdiv').css('display','none');
   		//$('#notificationsdiv').css('display','none');
   		//$('#walletdiv').css('display','block');
   		
   		$('#referdiv').css('display','none');
		$('#referdiv2').css('display','flex');
		document.getElementById("homepointslabel").innerHTML='My Wallet';
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#otherheader').css('display','none');
		$('#retailerheader').css('display','block');
		$('#voucherdivpanel').css('display','none');
		$('#counterheader').css('display','none');
        $('#counterdivpanel').css('display','none');
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','none');
		$('#referdivpanel').css('display','block');
		$('#sales_data_main').css('display','none');
		$('#scandiv').css('display','flex');
		/*if(localStorage.getItem("retaiter_type")=='Putty')
		{
			$('#myapprovalsdiv').css('display','none');
			$('#sales_data_panel').css('display','none');
			$('#sales_data_main').css('display','none');
			$('#scandiv_panel_other').css('display','block');
			$('#scandiv').css('display','flex');
		}
		else
		{
			$('#sales_data_main').css('display','flex');
			$('#sales_data_panel').css('display','block');
			$('#scandiv').css('display','none');
			$('#myapprovalsdiv').css('display','flex');
			$('#scandiv_panel_other').css('display','block');
			
		}*/

		$('#sales_data_main').css('display','none');
		$('#sales_data_panel').css('display','none');
		$('#scandiv').css('display','none');
		$('#myapprovalsdiv').css('display','none');
		$('#scandiv_panel_other').css('display','block');

		var numbers = /^[0-9]+$/;

	

		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_ret").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
        
		$("#update_state_ret option").each(function() {
				  if($(this).text().indexOf(user.state_ck)>=0) {
					 
					$(this).prop('selected', 'selected');            
				  }                        
				});
		var sval=$("#update_state_ret").val();
		fetchdistrict1(sval);
		   }
		}

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;
			$today = new Date();
			$yesterday = new Date($today);
			$yesterday.setDate($today.getDate() - 6570); 


				
			var dd1 = $yesterday.getDate();
			var mm1 = parseInt($yesterday.getMonth())+1;
			var yyyy1 = $yesterday.getFullYear();

			today = yyyy1+'-'+mm1+'-'+dd1;
			
			document.getElementById('update_dob_ret1').setAttribute("max", today);
			document.getElementById('update_dob1').setAttribute("max", today);
			
		if(user.dob!='')
		{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		
		}



   }
   if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
   {
    
   	
	    $('#referdiv').css('display','none');
		$('#referdiv2').css('display','flex');
 		$('#scandiv').css('display','none');
		$('#scandiv_panel_other').css('display','none');
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','none');
		$('#mylistdiv').css('display','none');
		$('#counterdiv').css('display','none');
   		$('#rewardstorediv').css('display','none');
   		//$('#notificationsdiv').css('display','block');
   		$('#walletdiv').css('display','none');
		$('#walletdivpanel').css('display','block');
		$('#retailerheader').css('display','none');
		$('#otherheader').css('display','block');
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#ass_scandivpanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#referdivpanel').css('display','block');
		$('#rewardsdivpanel').css('display','none');
		$('#rewardshistpanel').css('display','none');
		$('#pointspassbookpanel').css('display','none');
        $('#pointspassbookpanel_plumber').css('display','block');
		$('#counterdivpanel').css('display','none');
		$('#voucherdivpanel').css('display','block');
		$('#counterheader').css('display','none');
		$('#myapprovalsdiv').css('display','none');
		//document.getElementById("homepointslabel").innerHTML='My Wallet';
		var numbers = /^[0-9]+$/;


		document.getElementById("otherheader_pts_txt").innerHTML='My Wallet';
		document.getElementById("pointbal_bal").innerHTML='&#8377; '+user.balance;
		document.getElementById("pointbal_head").innerHTML='Points';

	

		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_cb").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
        
		$("#update_state_cb option").each(function() {
				  if($(this).text().indexOf(user.state_ck)>=0) {
					 
					$(this).prop('selected', 'selected');            
				  }                        
				});
		var sval=$("#update_state_cb").val();
		fetchdistrict1(sval);
		   }
		}

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_cb1').setAttribute("max", today);
			document.getElementById('update_dob_cb').setAttribute("max", today);
			
		if(user.dob!='')
		{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		//alert('mm'+mm+'...dd'+dd+'...yyyy'+yyyy);
		$('#update_dob_cb').val(yyyy+'-'+mm+'-'+dd);
		
		}

		//$('#update_rmobile_cb1').val(user.owner_mobileno);


   }
   if(localStorage.getItem("usermtype_ufifilters")=='Dealer')
   {
 		$('#referdiv').css('display','none');
		$('#referdiv2').css('display','none');
		$('#counterdiv').css('display','flex');
		document.getElementById("homepointslabel").innerHTML='Dealer Points';

   }
   


 if(typeof user.membertype==undefined || user.membertype==null)
   	user.membertype='';
	//console.log("user.firstname"+user.firstname);
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.city_ufi=='undefined' || user.city_ufi=='null' || user.city_ufi==null)
		user.city_ufi = '0';
 if(user.state_ck=='undefined' || user.state_ck=='null' || user.state_ck==null)
		user.state_ck = '0';
 if(user.street_ck=='undefined' || user.street_ck=='null' || user.street_ck==null)
		user.street_ck = '';

 /*if(user.photo=='undefined' || user.photo=='null' || user.photo==null || user.photo=='')
		user.photo = 'user_pic.png';
 if(user.doc=='undefined' || user.doc=='null' || user.doc==null)
		user.doc = 'my_membership_s.png';
 if(user.doc1=='undefined' || user.doc1=='null' || user.doc1==null)
		user.doc1 = 'my_membership_s.png';*/
 if(user.adharno=='undefined' || user.adharno=='null' || user.adharno==null || user.adharno=='')
		user.adharno = '';
 if(user.created_on=='undefined' || user.created_on=='null' || user.created_on==null)
		user.created_on = 'Not available';
 if(user.isApproved=='undefined' || user.isApproved=='null' || user.isApproved==null)
		user.isApproved = 'Unknown Status';

   if(localStorage.getItem("usermtype_ufifilters")=='Painter')
   {
		$('#update_name_elec').val(user.firstname);
		$('#update_surname_elec').val(user.lastname);
		$('#update_pmobile_elec').val(user.mobile);
		//$('#update_omobile_elec').val(user.other_mobile_no);
		//$('#update_ref_elec').val(user.referencecode);
		$('#update_email_elec').val(user.emailid);
		$('#update_flat_elec').val(user.address_ck);
		$('#update_address_elec').val(user.street_ck);

	

/*var dd = document.getElementById('update_district_elec');
for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === user.district) {
        dd.selectedIndex = i;
        break;
    }
}
*/


		$('#update_district_elec').val(user.district);
		$('#update_district_elec1').val(user.district);
		//$('#update_tehsil_elec').val(user.tehsil);
		$('#update_city_elec').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		$('#update_state_elec').val(user.state_ck);
		$('#update_state_elec1').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_elec').val(user.pin);
		
		//$('#update_bankname_elec').val(user.bankname);
		$('#update_bankac_elec').val(user.bankac);
		/*($('#update_bankifsc_elec').val(user.bankifsc);
		$('#update_bankcity_elec').val(user.bankcity);
		$('#update_bankbranch_elec').val(user.bankbranch);*/

		$('#update_adhar_elec').val(user.adharno);
		$('#update_pan_elec').val(user.pancardno);
		

        $('#update_marriage_elec').val(user.marriage);
		$('#update_ditrtobuy_elec').val(user.ditrtobuy);
		$('#update_brandstobuy_elec').val(user.brandstobuy);
		//$('#update_firmage_elec').val(user.firmage);

		$('#update_adhar_elec1').val(user.adharno);


		$('#update_name_elec1').val(user.firstname);
		$('#update_surname_elec1').val(user.lastname);
		$('#update_pmobile_elec1').val(user.mobile);
		//$('#update_omobile_elec').val(user.other_mobile_no);
		//$('#update_ref_elec').val(user.referencecode);
		$('#update_email_elec1').val(user.emailid);
		$('#update_flat_elec1').val(user.address_ck);
		$('#update_address_elec1').val(user.street_ck);
		$('#update_city_elec1').val(user.city_ufi);
		$('#update_pin_elec1').val(user.pin);
		$('#update_pan_elec1').val(user.pancardno);
		$('#update_marriage_elec1').val(user.marriage);
		$('#update_ditrtobuy_elec1').val(user.ditrtobuy);
		$('#update_brandstobuy_elec1').val(user.brandstobuy);
		//$('#update_firmage_elec1').val(user.firmage);
		//$('#update_gst_elec1').val(user.gstno);
		$('#update_bankac_elec1').val(user.bankac);

		
		//fetchcity1(user.state_ck);
		if(user.adharphoto != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.adharphoto))
			{
			document.getElementById("cardimage_aadhar_elec").src = versionurl+'uploads/'+user.adharphoto;
			localStorage.setItem('adimg',user.adharphoto);
			document.getElementById("cardimage_aadhar_elec1").src = versionurl+'uploads/'+user.adharphoto;
			}
		}

		/*if(user.panphoto != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.panphoto))
			{
			document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.panphoto;
			localStorage.setItem('panimg',user.panphoto);
			document.getElementById("cardimage_proof_elec1").src = versionurl+'uploads/'+user.panphoto;
			}
		}
		if(user.adharphotoback != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.adharphotoback))
			{
			document.getElementById("cardimage_aadhar_elec_back").src = versionurl+'uploads/'+user.adharphotoback;
			localStorage.setItem('adimg_back',user.adharphotoback);
			document.getElementById("cardimage_aadhar_elec1_back").src = versionurl+'uploads/'+user.adharphotoback;
			}
		}

		if(user.panphotoback != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.panphotoback))
			{
			document.getElementById("cardimage_proof_elec_back").src = versionurl+'uploads/'+user.panphotoback;
			localStorage.setItem('panimg_back',user.panphotoback);
			document.getElementById("cardimage_proof_elec1_back").src = versionurl+'uploads/'+user.panphotoback;
			}
		}*/
		//if(user.adharphoto == null && user.panphoto == null)
		
		//if(user.panphoto == null) As per arpit
		//	pendingprofile = true;

		//alert('user.panphoto'+user.panphoto+'....pendingprofile'+pendingprofile);

		if(user.photo != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.photo))
			{
			//document.getElementById("cardimage_self_elec").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			//document.getElementById("cardimage_self_elec1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			localStorage.setItem('selfimg',user.photo);
			}
		}
		//else
			//pendingprofile = true;
		

		//document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.doc;

		document.getElementById("pointbal_bal").innerHTML=user.cashback_painter;
		document.getElementById("pointbal_head").innerHTML='Count of Cashback Received';


   }
   else if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
   {
	   user.shoptype = localStorage.getItem("retaiter_type");  
		$('#update_name_ret').val(user.firstname);
		$('#update_surname_ret').val(user.lastname);
		$('#update_pmobile_ret').val(user.mobile);
		//$('#update_omobile_ret').val(user.other_mobile_no);
		//$('#update_ref_ret').val(user.referencecode);
		$('#update_email_ret').val(user.emailid);
		$('#update_flat_ret').val(user.address_ck);
		$('#update_address_ret').val(user.street_ck);

	/*	
	var dd = document.getElementById('update_district_ret');
	for (var i = 0; i < dd.options.length; i++) {
		if (dd.options[i].text === user.district) {
			dd.selectedIndex = i;
			break;
		}
	}

	*/
	    $('#update_district_ret').val();
		$('#update_district_ret1').val();
		//$('#update_tehsil_ret').val(user.tehsil);
		$('#update_city_ret').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		//$('#update_state_ret').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_ret').val(user.pin);
        //$('#update_pan_ret').val(user.pancardno);
        //console.lohg('user.ditrtobuy:'+user.ditrtobuy);
        $('#update_marriage_ret').val(user.marriage);
		
		$('#update_brandstobuy_ret').val(user.brandstobuy);
		$('#update_firmage_ret').val(user.firmage);



		$('#update_name_ret1').val(user.firstname);
		$('#update_surname_ret1').val(user.lastname);
		$('#update_pmobile_ret1').val(user.mobile);
		//$('#update_omobile_ret').val(user.other_mobile_no);
		//$('#update_ref_ret').val(user.referencecode);
		$('#update_email_ret1').val(user.emailid);
		$('#update_flat_ret1').val(user.address_ck);
		$('#update_address_ret1').val(user.street_ck);

	/*	
	var dd = document.getElementById('update_district_ret');
	for (var i = 0; i < dd.options.length; i++) {
		if (dd.options[i].text === user.district) {
			dd.selectedIndex = i;
			break;
		}
	}

	*/
		//$('#update_district_ret').val(user.district);
		//$('#update_tehsil_ret').val(user.tehsil);
		$('#update_city_ret1').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		$('#update_state_ret').val(user.state_ck);
		$('#update_state_ret1').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_ret1').val(user.pin);
        //$('#update_pan_ret1').val(user.pancardno);

        $('#update_marriage_ret1').val(user.marriage);
		
		$('#update_brandstobuy_ret').val(user.brandstobuy);
		$('#update_firmage_ret1').val(user.firmage);

		$('#update_shopname_ret').val(user.shopname);
		$('#update_shoptype_ret').val(user.shoptype);
		$('#update_shopname_ret1').val(user.shopname);

		$('#update_gst_ret').val(user.gstno);
		$('#update_gst_ret1').val(user.gstno);

		$('#update_adhar_ret').val(user.adharno);
		$('#update_adhar_ret1').val(user.adharno);

		$('#update_ditrtobuy_ret').val(user.ditrtobuy);
		$('#update_ditrtobuy_ret1').val(user.ditrtobuy);
		
		/*$('#update_bankname_ret').val(user.bankname);
		$('#update_bankac_ret').val(user.bankac);
		$('#update_bankifsc_ret').val(user.bankifsc);
		$('#update_bankcity_ret').val(user.bankcity);
		$('#update_bankbranch_ret').val(user.bankbranch);

		$('#update_adhar_ret').val(user.adharno);
		$('#update_pan_ret').val(user.pancardno);
		$('#update_gst_ret').val(user.gstno);

		$('#update_shopname_ret').val(user.shopname);
		$('#update_shopestablish_ret').val(user.shopestablish);	
		
		if(user.adharphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphoto))
		{
		document.getElementById("cardimage_aadhar_ret").src = versionurl+'uploads/'+user.adharphoto;
		localStorage.setItem('adimg',user.adharphoto);
		document.getElementById("cardimage_aadhar_ret1").src = versionurl+'uploads/'+user.adharphoto;
		}
		}*/
		
		if(user.panphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.panphoto))
		{
			document.getElementById("cardimage_proof_ret").src = versionurl+'uploads/'+user.panphoto;
			localStorage.setItem('panimg',user.panphoto);
			document.getElementById("cardimage_proof_ret1").src = versionurl+'uploads/'+user.panphoto;
		}
		}

		/*if(user.adharphotoback != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphotoback))
		{
		document.getElementById("cardimage_aadhar_ret_back").src = versionurl+'uploads/'+user.adharphotoback;
		localStorage.setItem('adimg_back',user.adharphotoback);
		document.getElementById("cardimage_aadhar_ret1_back").src = versionurl+'uploads/'+user.adharphotoback;
		}
		}
		
		if(user.panphotoback != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.panphotoback))
		{
		document.getElementById("cardimage_proof_ret_back").src = versionurl+'uploads/'+user.panphotoback;
		localStorage.setItem('panimg_back',user.panphotoback);
		document.getElementById("cardimage_proof_ret1_back").src = versionurl+'uploads/'+user.panphotoback;
		}
		}*/
		
		//if(user.adharphoto == null && user.panphoto == null)
		//if(user.panphoto == null) As per arpit
		//	pendingprofile = true;

		if(user.photo != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.photo))
			{
			//document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			//document.getElementById("cardimage_self_ret1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			//document.getElementById("cardimage_proof_ret").src = versionurl+'uploads/'+user.doc;
			localStorage.setItem('selfimg',user.photo);
			}
		}
		//else
			//pendingprofile = true;
		
		if(user.gstphoto != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.gstphoto))
			{
			document.getElementById("cardimage_gst_ret").src = versionurl+'uploads/'+user.gstphoto;
			localStorage.setItem('gstimg',user.gstphoto);
			document.getElementById("cardimage_gst_ret1").src = versionurl+'uploads/'+user.gstphoto;
			}
		}

		/*if(user.shopestablish != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.shopestablish))
		{
		document.getElementById("update_shopestablish_ret").src = versionurl+'uploads/'+user.shopestablish;
		localStorage.setItem('estimg',user.shopestablish);
		document.getElementById("update_shopestablish_ret1").src = versionurl+'uploads/'+user.shopestablish;
		}
		}

		if(user.gstphoto == null && user.shopestablish == null)
			pendingprofile = true;

		if(user.can_chq != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.can_chq))
			{
			document.getElementById("cardimage_chq_ret").src = versionurl+'uploads/'+user.can_chq;
			localStorage.setItem('chqimg',user.can_chq);
			document.getElementById("cardimage_chq_ret1").src = versionurl+'uploads/'+user.can_chq;
			}
		}*/
		document.getElementById("pointspass_ret1").innerHTML=user.balance;
		document.getElementById("pointspass_del1").innerHTML=user.cashback;
		document.getElementById("pointspass_scan").innerHTML=user.cashback_painter;
		document.getElementById("pointbal_bal").innerHTML='&#8377; '+user.balance;

   }
   else if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
   {
   	
		$('#update_name_cb').val(user.firstname);
		$('#update_name_cb1').val(user.firstname);
		$('#update_surname_cb').val(user.lastname);
		$('#update_surname_cb1').val(user.lastname);
		$('#update_pmobile_cb').val(user.mobile);
		//$('#update_omobile_cb').val(user.other_mobile_no);
		//$('#update_ref_cb').val(user.referencecode);
		$('#update_email_cb').val(user.emailid);
		$('#update_flat_cb').val(user.address_ck);
		$('#update_address_cb').val(user.street_ck);

		

		//$('#update_rmobile_cb').val(user.owner_mobileno);
		//$('#update_currwork_cb').val(user.working_shopname);
		//$('#update_currwork_cb1').val(user.working_shopname);

		if(typeof user.owner_mobileno == undefined || user.owner_mobileno == null || user.owner_mobileno == 'null')
			user.owner_mobileno = '';
		//if(typeof user.working_shopname == undefined || user.working_shopname == null || user.working_shopname == 'null')
			//user.working_shopname = '';

		/*if(user.owner_mobileno!='' && user.working_shopname!='')
	   {
		document.getElementById('update_rmobile_cb').readOnly = true;
		document.getElementById('update_rmobile_cb1').readOnly = true;
		document.getElementById('update_currwork_cb').readOnly = true;
		document.getElementById('update_currwork_cb1').readOnly = true;
	   }*/
/*var dd = document.getElementById('update_district_cb');

for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === user.district) {
        dd.selectedIndex = i;
        break;
    }
}
*/
        $('#update_email_cb1').val(user.emailid);
		$('#update_address_cb1').val(user.street_ck);
		$('#update_district_cb').val(user.district);
		$('#update_district_cb1').val(user.district);
		//$('#update_tehsil_cb').val(user.tehsil);
		$('#update_city_cb').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		$('#update_state_cb').val(user.state_ck);
		$('#update_state_cb1').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_cb').val(user.pin);
		$('#update_pin_cb1').val(user.pin);
		//$('#update_pan_cb').val(user.pancardno);

        $('#update_marriage_cb').val(user.marriage);
		$('#update_ditrtobuy_cb').val(user.ditrtobuy);
		$('#update_ditrtobuy_cb1').val(user.ditrtobuy);
		$('#update_brandstobuy_cb').val(user.brandstobuy);
		//$('#update_firmage_cb').val(user.firmage);

		$('#update_adhar_cb').val(user.adharno);
		$('#update_adhar_cb1').val(user.adharno);
		
		/*$('#update_bankname_cb').val(user.bankname);
		$('#update_bankac_cb').val(user.bankac);
		$('#update_bankifsc_cb').val(user.bankifsc);
		$('#update_bankcity_cb').val(user.bankcity);
		$('#update_bankbranch_cb').val(user.bankbranch);*/

		
		//$('#update_pan_cb1').val(user.pancardno);	

		//$('#update_gst_cb').val(user.gstno);
		//$('#update_gst_cb1').val(user.gstno);

		
		//fetchcity1(user.state_ck);
		/*if(user.adharphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphoto))
		{
		document.getElementById("cardimage_aadhar_cb").src = versionurl+'uploads/'+user.adharphoto;
		document.getElementById("cardimage_aadhar_cb1").src = versionurl+'uploads/'+user.adharphoto;
		localStorage.setItem('adimg',user.adharphoto);
		}
		}

		if(user.panphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.panphoto))
		{
		document.getElementById("cardimage_proof_cb").src = versionurl+'uploads/'+user.panphoto;
		document.getElementById("cardimage_proof_cb1").src = versionurl+'uploads/'+user.panphoto;
		localStorage.setItem('panimg',user.panphoto);
		}
		}

		if(user.adharphotoback != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphotoback))
		{
		document.getElementById("cardimage_aadhar_cb_back").src = versionurl+'uploads/'+user.adharphotoback;
		document.getElementById("cardimage_aadhar_cb1_back").src = versionurl+'uploads/'+user.adharphotoback;
		localStorage.setItem('adimg_back',user.adharphotoback);
		}
		}
		
		if(user.panphotoback != '')
		{
		if(imageExists(versionurl+'uploads/'+user.panphotoback))
		{
		document.getElementById("cardimage_proof_cb_back").src = versionurl+'uploads/'+user.panphotoback;
		document.getElementById("cardimage_proof_cb1_back").src = versionurl+'uploads/'+user.panphotoback;
		localStorage.setItem('panimg_back',user.panphotoback);
		}
		}*/

		//if(user.adharphoto == null && user.panphoto == null)
		//if(user.panphoto == null) as per arpit
		//	pendingprofile = true;



		if(user.photo != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.photo))
		{
		//document.getElementById("cardimage_self_cb").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		//document.getElementById("cardimage_self_cb1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		localStorage.setItem('selfimg',user.photo);
		}
		}
		//else
			//pendingprofile = true;


		/*if(user.can_chq != '')
		{
			
			if(imageExists(versionurl+'uploads/'+user.can_chq))
			{
			document.getElementById("cardimage_chq_cb").src = versionurl+'uploads/'+user.can_chq;
			localStorage.setItem('chqimg',user.can_chq);
			document.getElementById("cardimage_chq_cb1").src = versionurl+'uploads/'+user.can_chq;
			}
		}*/
		//document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.doc;


		document.getElementById("pointbal_bal").innerHTML='&#8377; '+user.balance;
		document.getElementById("pointbal_head").innerHTML='My Wallet';


   }

	$('#update_firstname').val(user.firstname);
	$('#update_lastname').val(user.lastname);
	    var dob = user.dob.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[0] : '';
		var yyyy = dob.length == 3 ? dob[2] : '';
		
		$('#update_dd').val(dd);
		$('#update_mm').val(mm);
		$('#update_yyyy').val(yyyy);
     
	$('#update_firstname1').val(user.firstname);
	$('#update_lastname1').val(user.lastname);
	$('#update_email1').val(user.emailid);
	
	$('#update_pmobile_elec1').val(user.mobile);

	//$('#update_omobile_elec1').val(user.mobile);


	



	document.getElementById("profile_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("profile_id").innerHTML='Mobile No '+user.id;
	document.getElementById("profile_join").innerHTML='UFI Filters Joining '+user.created_on;

  
   			/*if(localStorage.getItem("retaiter_type")=='pipes' || localStorage.getItem("usermtype_ufifilters")=='Mechanic')
                {
                  document.getElementById("mainhlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("saleshlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("schhlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("refhlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("wathlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("emphlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("sochlogo").src='assets/images/logo_home_pipes.png';

                  
                }
        else if(localStorage.getItem("retaiter_type")=='putty' || localStorage.getItem("usermtype_ufifilters")=='Painter')
                {
                  document.getElementById("mainhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("saleshlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("schhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("refhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("wathlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("emphlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("sochlogo").src='assets/images/logo_home_putty.png';
                }
          else
                {*/
                  document.getElementById("mainhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("saleshlogo").src='assets/images/logo_inner.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("schhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("refhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("wathlogo").src='assets/images/logo_inner.png';
                  document.getElementById("emphlogo").src='assets/images/logo_inner.png';
                  document.getElementById("sochlogo").src='assets/images/logo_inner.png';
                //}
	/*if(user.isBlocked == 'BLOCKED')
	   {
		document.getElementById("profile_isapproved").innerHTML= user.isBlocked+'!';
	   }
	else
	   {
		document.getElementById("profile_isapproved").innerHTML= user.isApproved+'!';
	   }*/

	   document.getElementById("profile_isapproved").innerHTML= user.isApproved+'!';
	//document.getElementById("profile_pic").src = user.photo;

     //$('#push_reg_no').val(reg_id);

//document.getElementById("barcontenthome").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span></a>';
document.getElementById("profilenm").innerHTML=user.firstname;//+' '+user.lastname;
document.getElementById("user_name_home").innerHTML=user.firstname+' '+user.lastname;
document.getElementById("user_points_home").innerHTML=user.balance;
if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
{
	/*if(user.tot_failed_paytm_amount!='0')
		   {
			document.getElementById("user_points_home_oth").innerHTML='+&#8377; '+user.tot_failed_paytm_amount;
		   }
	else
		{
			document.getElementById("user_points_home_oth").innerHTML=user.cashback;
		}*/

		document.getElementById("user_points_home_oth").innerHTML=user.cashback;
}
else if(localStorage.getItem("usermtype_ufifilters")=='Painter')
{
	document.getElementById("user_points_home_oth").innerHTML=user.cashback_painter;
}
else if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
{
	document.getElementById("user_points_home_oth").innerHTML=user.balance;
}
else
	document.getElementById("user_points_home_oth").innerHTML=user.cashback;
	   
document.getElementById("user_id_home").innerHTML='Mem ID '+user.id;
document.getElementById("user_mobile_home").innerHTML='Mobile No '+user.mobile;
if(localStorage.getItem("usermtype_ufifilters")=='Painter' || localStorage.getItem("usermtype_ufifilters")=='Retailer')
	{
	/*if(user.tot_failed_paytm_amount!='0')
		   {
			document.getElementById("user_wallet_home").innerHTML='+&#8377; '+user.tot_failed_paytm_amount;
		   }
	else
		{
			document.getElementById("user_wallet_home").innerHTML=user.cashback;
		}*/

		if(localStorage.getItem("retaiter_type")=='Putty')
		{
			document.getElementById("user_wallet_home").innerHTML=user.cashback_painter;
		}
		else
		{
		document.getElementById("user_wallet_home").innerHTML=user.cashback;
		}

	 }
else
	document.getElementById("user_wallet_home").innerHTML=user.cashback;
document.getElementById("db_wallet").innerHTML=user.cashback;
document.getElementById("db_wallet1").innerHTML=user.cashback_painter;
document.getElementById("user_id_home_panel").innerHTML=user.id;
document.getElementById("membershipid_panel").innerHTML='<img src="https://chart.googleapis.com/chart?cht=qr&chs=150x150&chld=L|1&chl='+user.firstname+'#'+user.membertype +'#'+user.id+'" class="img-responsive" alt=""/>';

//document.getElementById("username_wnew").innerHTML=user.firstname+' '+user.lastname;
//document.getElementById("userloc_wnew").innerHTML=user.district;


if(user.photo!=null && imageExists(versionurl+'uploads/'+user.photo))
{
//document.getElementById("cardimage_self_cb").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("ppichome").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("ppicprofile").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
//document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
//document.getElementById("userpic_wnew").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
}


//if(user.PhotoofShop!=null  && imageExists(versionurl+'uploads/'+user.PhotoofShop))
//document.getElementById("cardimage_shop_ret").src = versionurl+'uploads/'+user.PhotoofShop;

	if(localStorage.getItem("cardPic")==null || localStorage.getItem("cardPic")=='null' || localStorage.getItem("cardPic")=='undefined' )
	   {
		/*document.getElementById("cardImage").src = 'img/card_profile.png';
		document.getElementById("cardImagepop").src = 'img/card_profile.png';
		document.getElementById("cardImagepunch").src = 'img/card_profile.png';*/
		//document.getElementById("cardImagemenu").src = 'img/user_profile.png';
		
	   }
    else
	   {
		/*document.getElementById("cardImage").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';
		document.getElementById("cardImagepop").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';
		document.getElementById("cardImagepunch").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';*/
		//document.getElementById("cardImagemenu").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';
	   }
	/*document.getElementById("profilenm1").innerHTML=user.firstname+' '+user.lastname;
    document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	document.getElementById("pr_valid").innerHTML=user.validity;*/
    //alert(user.firstname);

  var new_app=localStorage.getItem('latestApp');

  if(new_app==null || new_app=='')
  	new_app='true';

 if(new_app=='true')
 {

	if(user.lastname=='')
    {
		 //setminDate();
		 $.mobile.changePage( "#profilepage", { transition: "flip"} );
    }
	/*else if(pendingprofile)
	{
		//alert('pendingprofile...'+pendingprofile+'.......localStorage.getItem(firsttime)...'+localStorage.getItem('firsttime'));
           if(localStorage.getItem('firsttime')=='true'){
				$.mobile.changePage( "#homepage", { transition: "flip"} );
				localStorage.setItem("firsttime","false");
			}
			else{
				

		
				toast('Please note that your registration form will not be sent for approval until you upload your PAN. You can proceed to scan QR Codes using the UFI Filters app but your rewards will not be available for use.');
		

				$.mobile.changePage( "#profilepage2", { transition: "flip"} );
			}
	}*/
    else
    {
    	//$.mobile.changePage( "#homepage", { transition: "flip"} );
       // alert(localStorage.getItem("profiledone"));
			if(localStorage.getItem("profiledone_ufi"))
			{
				$.mobile.changePage( "#homepage", { transition: "flip"} );
				//schemePopup();
				console.log('profiledone_ufi Yes');
			}
			else
		    {
				$.mobile.changePage( "#profilepage", { transition: "flip"} );
		    }
    }
}
else{
				console.log("in else");
				 $.mobile.changePage( "#downpage", { transition: "none"} );
}
 
    /*if(parseInt(user.cashback)>=5000 && user.pancardno==''){
    	
						$('#withoutpan').popup();
					    $('#withoutpan').popup("open");
    }*/
	//showNotifications1();
   
   }else{
		  toast('Authentication failed');
		  localStorage.removeItem('passwordufifilters');
		  $('#codeBox1').val('');
		  $('#codeBox2').val('');
		  $('#codeBox3').val('');
		  $('#codeBox4').val('');
		  $.mobile.changePage( "#myaccount", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernameufifilters');
	pwd = localStorage.getItem('passwordufifilters');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.cashback = localStorage.getItem('cashback');
    user.dealerbonuspoints=localStorage.getItem('dealerbonuspoints');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
	//user.other_mobile_no = localStorage.getItem("userothmobile_ufifilters");

    user.membertype = localStorage.getItem("usermtype_ufifilters");
    user.district = localStorage.getItem("userdist_ufifilters");
    user.referencecode = localStorage.getItem("userref_ufifilters");
    user.pancardno = localStorage.getItem("userpan_ufifilters");
    user.photo = localStorage.getItem("userphoto_ufifilters");
    user.shopname = localStorage.getItem("usershop_ufifilters");
    user.gstno = localStorage.getItem("usergst_ufifilters");
    //user.shopestablish = localStorage.getItem("usershopest_ufifilters");
    user.PhotoofShop = localStorage.getItem("usershoppic_ufifilters");
    user.PersonalId = localStorage.getItem("userdoc_ufifilters");
    user.state = localStorage.getItem("userstate");
    user.cinno = localStorage.getItem("usercin_ufifilters");
    user.pin = localStorage.getItem("userpin_ufifilters");
    user.address_ck = localStorage.getItem("useradd_ufifilters");
    user.created_on = localStorage.getItem("created_on_ufifilters");
    user.isApproved = localStorage.getItem("is_approved_ufifilters");

    user.isLive = localStorage.getItem("is_live_ufifilters");
	user.isBlocked = localStorage.getItem("is_blocked_ufifilters");
    user.refer_code = localStorage.getItem("refer_code_ck");

    user.photo = localStorage.getItem('selfimg');
    user.PersonalId = localStorage.getItem('docimg');
    user.PhotoofShop = localStorage.getItem('shopimg');
    user.adharphoto = localStorage.getItem('adimg');
    user.panphoto = localStorage.getItem('panimg');
    user.gstphoto = localStorage.getItem('gstimg');
    user.shopestablish = localStorage.getItem('estimg');
	user.adharphotoback = localStorage.getItem('adimg_back');
    user.panphotoback = localStorage.getItem('panimg_back');

    user.IsApproved_se= localStorage.getItem('IsApproved_se');

   

    $('#emptype').val(localStorage.getItem("usermtype_ufifilters"));


   $('#share_refer_code').val(user.refer_code);
   //$("#emptype").selectmenu('refresh');

   if(localStorage.getItem("usermtype_ufifilters")=='Painter')
   {
		$('#referdiv').css('display','flex');
		$('#referdiv2').css('display','none');
   		$('#mylistdiv').css('display','none');
   		$('#pointspassbookpanel').css('display','none');
		$('#pointspassbookpanel_plumber').css('display','none');
		$('#counterdiv').css('display','none');
		$('#rewardshistpanel').css('display','none');
		$('#rewardstorediv').css('display','none');
		$('#rewardsdivpanel').css('display','none');
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#wallethistorypanel').css('display','block');
		$('#counterdivpanel').css('display','none');
		$('#voucherdivpanel').css('display','none');
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','none');
		
		//document.getElementById("homepointslabel_oth").innerHTML='My Wallet';

		$('#otherheader').css('display','block');
		$('#retailerheader').css('display','none');
		$('#counterheader').css('display','none');
		
	    var numbers = /^[0-9]+$/;
		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_elec").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
	   
				$("#update_state_elec option").each(function() {
						  if($(this).text().indexOf(user.state_ck)>=0) {
							 
							$(this).prop('selected', 'selected');            
						  }                        
						});
				var sval=$("#update_state_elec").val();
				fetchdistrict1(sval);
		   }
		}

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_elec1').setAttribute("max", today);

			
		
			

		if(user.dob!='')
		{
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob_elec').val(yyyy+'-'+mm+'-'+dd);
		
		}
		
			

	   

   }
   if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
   {
	    //$('#referdiv').css('display','none');
		//$('#referdiv2').css('display','flex');
   		$('#mylistdiv').css('display','none');
   		$('#rewardstorediv').css('display','flex');
   		$('#counterdiv').css('display','none');
   		//$('#notificationsdiv').css('display','none');
   		//$('#walletdiv').css('display','block');
   		
   		$('#referdiv').css('display','none');
		$('#referdiv2').css('display','flex');
		try{
		document.getElementById("homepointslabel").innerHTML='My Wallet';
		}catch(err){}
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#otherheader').css('display','none');
		$('#retailerheader').css('display','block');
		$('#voucherdivpanel').css('display','none');
		$('#counterheader').css('display','none');
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','block');
		$('#sales_data_panel').css('display','none');
		$('#sales_data_main').css('display','none');
		$('#scandiv').css('display','flex');

		/*if(localStorage.getItem("retaiter_type")=='Putty')
		{
		 document.getElementById("waldiv").css('display','none');
		}
		else
		{
			document.getElementById("waldiv").css('display','block');
		}*/

		var numbers = /^[0-9]+$/;

	

		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_ret").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
        
		$("#update_state_ret option").each(function() {
				  if($(this).text().indexOf(user.state_ck)>=0) {
					 
					$(this).prop('selected', 'selected');            
				  }                        
				});
		var sval=$("#update_state_ret").val();
		fetchdistrict1(sval);
		   }
		}

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			try{
			document.getElementById('update_dob_ret1').setAttribute("max", today);
			document.getElementById('update_dob1').setAttribute("max", today);
		}catch(err){}
			
		if(user.dob!='')
		{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		
		}



   }
   if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
   {
   	
	    $('#referdiv').css('display','none');
		$('#referdiv2').css('display','none');
 		$('#scandiv').css('display','none');
		$('#scandiv_panel_other').css('display','none');
		$('#pipes_billupload_panel').css('display','block');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','block');
		$('#mylistdiv').css('display','none');
		$('#counterdiv').css('display','none');
   		$('#rewardstorediv').css('display','flex');
   		//$('#notificationsdiv').css('display','block');
   		$('#walletdiv').css('display','none');
		$('#walletdivpanel').css('display','block');
		$('#retailerheader').css('display','none');
		$('#otherheader').css('display','block');
		$('#gamesdiv').css('display','flex');
		$('#giftsdiv').css('display','flex');
		$('#gamesdivpanel').css('display','block');
		$('#giftsdivpanel').css('display','block');
		$('#giftshistpanel').css('display','block');
		$('#ass_scandivpanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#referdivpanel').css('display','none');
		$('#rewardsdivpanel').css('display','block');
		$('#voucherdivpanel').css('display','block');
		$('#counterheader').css('display','none');
		$('#myapprovalsdiv').css('display','none');
		//document.getElementById("homepointslabel").innerHTML='My Wallet';
		var numbers = /^[0-9]+$/;

	

		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_cb").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
        
		$("#update_state_cb option").each(function() {
				  if($(this).text().indexOf(user.state_ck)>=0) {
					 
					$(this).prop('selected', 'selected');            
				  }                        
				});
		var sval=$("#update_state_cb").val();
		fetchdistrict1(sval);
		   }
		}

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_cb1').setAttribute("max", today);
			document.getElementById('update_dob_cb').setAttribute("max", today);
			
		if(user.dob!='')
		{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob_cb').val(yyyy+'-'+mm+'-'+dd);
		
		}


   }
   if(localStorage.getItem("usermtype_ufifilters")=='Dealer')
   {
 		$('#referdiv').css('display','none');
		$('#referdiv2').css('display','none');
		$('#counterdiv').css('display','flex');
		document.getElementById("homepointslabel").innerHTML='Dealer Points';

   }
   
   // localStorage.setItem('passworddd',pwd);
   
   //localStorage.setItem('def_store','gold Rajkot');
   if(typeof user.membertype==undefined || user.membertype==null)
   	user.membertype='';
	//console.log("user.firstname"+user.firstname);
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.city_ufi=='undefined' || user.city_ufi=='null' || user.city_ufi==null)
		user.city_ufi = '0';
 if(user.state_ck=='undefined' || user.state_ck=='null' || user.state_ck==null)
		user.state_ck = '0';
 if(user.street_ck=='undefined' || user.street_ck=='null' || user.street_ck==null)
		user.street_ck = '';

 /*if(user.photo=='undefined' || user.photo=='null' || user.photo==null || user.photo=='')
		user.photo = 'user_pic.png';
 if(user.doc=='undefined' || user.doc=='null' || user.doc==null)
		user.doc = 'my_membership_s.png';
 if(user.doc1=='undefined' || user.doc1=='null' || user.doc1==null)
		user.doc1 = 'my_membership_s.png';
 if(user.PhotoofShop=='undefined' || user.PhotoofShop=='null' || user.PhotoofShop==null)
		user.PhotoofShop = 'my_membership_s.png';*/
 if(user.created_on=='undefined' || user.created_on=='null' || user.created_on==null)
		user.created_on = 'Not available';
 if(user.isApproved=='undefined' || user.isApproved=='null' || user.isApproved==null)
		user.isApproved = 'Unknown Status';
	if(localStorage.getItem("usermtype_ufifilters")=='Painter')
   {
		$('#update_name_elec').val(user.firstname);
		$('#update_surname_elec').val(user.lastname);
		$('#update_pmobile_elec').val(user.mobile);
		//$('#update_omobile_elec').val(user.other_mobile_no);
		$('#update_ref_elec').val(user.referencecode);
		$('#update_email_elec').val(user.emailid);
		$('#update_flat_elec').val(user.address_ck);
		$('#update_address_elec').val(user.street_ck);

/*		var dd = document.getElementById('update_district_elec');
for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === user.district) {
        dd.selectedIndex = i;
        break;
    }
}
*/


	//	$('#update_district_elec').val(user.district);
		//$('#update_tehsil_elec').val(user.tehsil);
		$('#update_city_elec').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		//$('#update_state_elec').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_elec').val(user.pin);
		
		$('#update_bankname_elec').val(user.bankname);
		$('#update_bankac_elec').val(user.bankac);
		$('#update_bankifsc_elec').val(user.bankifsc);
		$('#update_bankcity_elec').val(user.bankcity);
		$('#update_bankbranch_elec').val(user.bankbranch);

		$('#update_adhar_elec').val(user.adharno);
		$('#update_pan_elec').val(user.pancardno);	

		
		//fetchcity1(user.state_ck);
		if(imageExists(versionurl+'uploads/'+user.adharphoto))
		{
		document.getElementById("cardimage_aadhar_elec").src = versionurl+'uploads/'+user.adharphoto;
		localStorage.setItem('adimg',user.adharphoto);
		document.getElementById("cardimage_aadhar_elec1").src = versionurl+'uploads/'+user.adharphoto;
		}
		if(imageExists(versionurl+'uploads/'+user.panphoto))
		{
		document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.panphoto;
		localStorage.setItem('panimg',user.panphoto);
		document.getElementById("cardimage_proof_elec1").src = versionurl+'uploads/'+user.panphoto;
		}
		if(imageExists(versionurl+'uploads/'+user.adharphotoback))
		{
		document.getElementById("cardimage_aadhar_elec_back").src = versionurl+'uploads/'+user.adharphotoback;
		localStorage.setItem('adimg_back',user.adharphotoback);
		document.getElementById("cardimage_aadhar_elec1_back").src = versionurl+'uploads/'+user.adharphotoback;
		}
		/*if(imageExists(versionurl+'uploads/'+user.panphotoback))
		{
		document.getElementById("cardimage_proof_elec_back").src = versionurl+'uploads/'+user.panphotoback;
		localStorage.setItem('panimg_back',user.panphotoback);
		document.getElementById("cardimage_proof_elec1_back").src = versionurl+'uploads/'+user.panphotoback;
		}*/

		if(imageExists(versionurl+'uploads/'+user.photo))
		{
		document.getElementById("cardimage_self_elec").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardimage_self_elec1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		localStorage.setItem('selfimg',user.photo);
		}

		//document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.doc;


   }
   else if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
   {
	  user.shoptype=localStorage.getItem("retaiter_type");
		$('#update_name_ret').val(user.firstname);
		$('#update_surname_ret').val(user.lastname);
		$('#update_pmobile_ret').val(user.mobile);
		//$('#update_omobile_ret').val(user.other_mobile_no);
		$('#update_ref_ret').val(user.referencecode);
		$('#update_email_ret').val(user.emailid);
		$('#update_flat_ret').val(user.address_ck);
		$('#update_address_ret').val(user.street_ck);
/*var dd = document.getElementById('update_district_ret');
for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === user.district) {
        dd.selectedIndex = i;
        break;
    }
}
*/

		//$('#update_district_ret').val(user.district);
		//$('#update_tehsil_ret').val(user.tehsil);
		$('#update_city_ret').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		//$('#update_state_ret').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_ret').val(user.pin);
		
		$('#update_bankname_ret').val(user.bankname);
		$('#update_bankac_ret').val(user.bankac);
		$('#update_bankifsc_ret').val(user.bankifsc);
		$('#update_bankcity_ret').val(user.bankcity);
		$('#update_bankbranch_ret').val(user.bankbranch);

		$('#update_adhar_ret').val(user.adharno);
		//$('#update_pan_ret').val(user.pancardno);
		$('#update_gst_ret').val(user.gstno);

		$('#update_shopname_ret').val(user.shopname);
		$('#update_shoptype_ret').val(user.shoptype);
		$('#update_shopestablish_ret').val(user.shopestablish);	
		
		if(user.adharphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphoto))
		{
		document.getElementById("cardimage_aadhar_ret").src = versionurl+'uploads/'+user.adharphoto;
		localStorage.setItem('adimg',user.adharphoto);
		document.getElementById("cardimage_aadhar_ret1").src = versionurl+'uploads/'+user.adharphoto;
		}
		}
		
		if(user.panphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.panphoto))
		{
		document.getElementById("cardimage_proof_ret").src = versionurl+'uploads/'+user.panphoto;
		localStorage.setItem('panimg',user.panphoto);
		document.getElementById("cardimage_proof_ret1").src = versionurl+'uploads/'+user.panphoto;
		}
		}

		if(user.adharphotoback != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphotoback))
		{
		document.getElementById("cardimage_aadhar_ret_back").src = versionurl+'uploads/'+user.adharphotoback;
		localStorage.setItem('adimg_back',user.adharphotoback);
		document.getElementById("cardimage_aadhar_ret1_back").src = versionurl+'uploads/'+user.adharphotoback;
		}
		}
		
		/*if(user.panphotoback != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.panphotoback))
		{
		document.getElementById("cardimage_proof_ret_back").src = versionurl+'uploads/'+user.panphotoback;
		localStorage.setItem('panimg_back',user.panphotoback);
		document.getElementById("cardimage_proof_ret1_back").src = versionurl+'uploads/'+user.panphotoback;
		}
		}*/

		if(user.photo != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.photo))
		{
		document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardimage_self_ret1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		//document.getElementById("cardimage_proof_ret").src = versionurl+'uploads/'+user.doc;
		localStorage.setItem('selfimg',user.photo);
		}
		}

		if(user.gstphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.gstphoto))
		{
		document.getElementById("cardimage_gst_ret").src = versionurl+'uploads/'+user.gstphoto;
		localStorage.setItem('gstimg',user.gstphoto);
		document.getElementById("cardimage_gst_ret1").src = versionurl+'uploads/'+user.gstphoto;
		}
		}

		if(user.shopestablish != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.shopestablish))
		{
		document.getElementById("update_shopestablish_ret").src = versionurl+'uploads/'+user.shopestablish;
		localStorage.setItem('estimg',user.shopestablish);
		document.getElementById("update_shopestablish_ret1").src = versionurl+'uploads/'+user.shopestablish;
		}
		}

   }
   else if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
   {
   	
		$('#update_name_cb').val(user.firstname);
		$('#update_name_cb1').val(user.firstname);
		$('#update_surname_cb').val(user.lastname);
		$('#update_pmobile_cb').val(user.mobile);
		//$('#update_omobile_cb').val(user.other_mobile_no);
		$('#update_ref_cb').val(user.referencecode);
		$('#update_email_cb').val(user.emailid);
		$('#update_flat_cb').val(user.address_ck);
		$('#update_address_cb').val(user.street_ck);
/*
var dd = document.getElementById('update_district_cb');
for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === user.district) {
        dd.selectedIndex = i;
        break;
    }
}
*/

//		$('#update_district_cb').val(user.district);
		//$('#update_tehsil_cb').val(user.tehsil);
		$('#update_city_cb').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		//$('#update_state_elec').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_cb').val(user.pin);
		
		$('#update_bankname_cb').val(user.bankname);
		$('#update_bankac_cb').val(user.bankac);
		$('#update_bankifsc_cb').val(user.bankifsc);
		$('#update_bankcity_cb').val(user.bankcity);
		$('#update_bankbranch_cb').val(user.bankbranch);

		$('#update_adhar_cb').val(user.adharno);
		//$('#update_pan_cb').val(user.pancardno);	

		
		//fetchcity1(user.state_ck);
		if(user.adharphoto != '')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphoto))
		{
		document.getElementById("cardimage_aadhar_cb").src = versionurl+'uploads/'+user.adharphoto;
		document.getElementById("cardimage_aadhar_cb1").src = versionurl+'uploads/'+user.adharphoto;
		localStorage.setItem('adimg',user.adharphoto);
		}
		}

		if(user.panphoto != '')
		{
		if(imageExists(versionurl+'uploads/'+user.panphoto))
		{
		document.getElementById("cardimage_proof_cb").src = versionurl+'uploads/'+user.panphoto;
		document.getElementById("cardimage_proof_cb1").src = versionurl+'uploads/'+user.panphoto;
		localStorage.setItem('panimg',user.panphoto);
		}
		}

		if(user.adharphotoback != '')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphotoback))
		{
		document.getElementById("cardimage_aadhar_cb_back").src = versionurl+'uploads/'+user.adharphotoback;
		document.getElementById("cardimage_aadhar_cb1_back").src = versionurl+'uploads/'+user.adharphotoback;
		localStorage.setItem('adimg_back',user.adharphotoback);
		}
		}

		/*if(user.panphotoback != '')
		{
		if(imageExists(versionurl+'uploads/'+user.panphotoback))
		{
		document.getElementById("cardimage_proof_cb_back").src = versionurl+'uploads/'+user.panphotoback;
		document.getElementById("cardimage_proof_cb1_back").src = versionurl+'uploads/'+user.panphotoback;
		localStorage.setItem('panimg_back',user.panphotoback);
		}
		}*/

		if(user.photo != '')
		{
		if(imageExists(versionurl+'uploads/'+user.photo))
		{
		document.getElementById("cardimage_self_cb").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardimage_self_cb1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		localStorage.setItem('selfimg',user.photo);
		}
		}
		//document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.doc;


   }

	$('#update_firstname').val(user.firstname);
	$('#update_lastname').val(user.lastname);
	    var dob = user.dob.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[0] : '';
		var yyyy = dob.length == 3 ? dob[2] : '';
		
		$('#update_dd').val(dd);
		$('#update_mm').val(mm);
		$('#update_yyyy').val(yyyy);
     
	$('#update_firstname1').val(user.firstname);
	$('#update_lastname1').val(user.lastname);
	$('#update_email1').val(user.emailid);
	
	$('#update_pmobile_elec1').val(user.mobile);

	//$('#update_omobile_elec1').val(user.mobile);


	



	document.getElementById("profile_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("profile_id").innerHTML='Mobile No '+user.id;
	document.getElementById("profile_join").innerHTML='UFI Filters Joining '+user.created_on;
	if(user.isBlocked == 'BLOCKED')
	   {
		document.getElementById("profile_isapproved").innerHTML= user.isBlocked+'!';
	   }
	else
	   {
		document.getElementById("profile_isapproved").innerHTML= user.isApproved+'!';
	   }
	//document.getElementById("profile_pic").src = user.photo;

     //$('#push_reg_no').val(reg_id);

//document.getElementById("barcontenthome").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span></a>';
document.getElementById("profilenm").innerHTML=user.firstname;//+' '+user.lastname;
document.getElementById("user_name_home").innerHTML=user.firstname+' '+user.lastname;
document.getElementById("user_points_home").innerHTML=user.balance;
if(localStorage.getItem("usermtype_ufifilters")=='Painter' || localStorage.getItem("usermtype_ufifilters")=='Retailer')
	{
	if(user.tot_failed_paytm_amount!='0')
		   {
			document.getElementById("user_points_home_oth").innerHTML=user.tot_failed_paytm_amount;
		   }
	else
		{
			document.getElementById("user_points_home_oth").innerHTML=user.cashback;
		}

	 }
else
	document.getElementById("user_points_home_oth").innerHTML=user.cashback;
document.getElementById("user_id_home").innerHTML='Mem ID '+user.id;
document.getElementById("user_mobile_home").innerHTML='Mobile No '+user.mobile;
if(localStorage.getItem("usermtype_ufifilters")=='Painter' || localStorage.getItem("usermtype_ufifilters")=='Retailer')
	{
	if(user.tot_failed_paytm_amount!='0')
		   {
			document.getElementById("user_wallet_home").innerHTML='+&#8377; '+user.tot_failed_paytm_amount;
		   }
	else
		{
			if(localStorage.getItem("retaiter_type")=='Putty')
		{
			document.getElementById("user_wallet_home").innerHTML=user.cashback_painter;
		}
		else
		{
		document.getElementById("user_wallet_home").innerHTML=user.cashback;
		}
		}

	 }
else
	document.getElementById("user_wallet_home").innerHTML=user.cashback;
document.getElementById("user_id_home_panel").innerHTML=user.id;
document.getElementById("membershipid_panel").innerHTML='<img src="https://chart.googleapis.com/chart?cht=qr&chs=150x150&chld=L|1&chl='+user.firstname+'#'+user.membertype+'#'+user.id+'" class="img-responsive" alt=""/>';

document.getElementById("username_wnew").innerHTML=user.firstname+' '+user.lastname;
document.getElementById("userloc_wnew").innerHTML=user.district;


if(user.photo!=null && imageExists(versionurl+'uploads/'+user.photo))
{
document.getElementById("cardimage_self_cb").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("ppichome").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("ppicprofile").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("userpic_wnew").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
}


if(user.PhotoofShop!=null  && imageExists(versionurl+'uploads/'+user.PhotoofShop))
document.getElementById("cardimage_shop_ret").src = versionurl+'uploads/'+user.PhotoofShop;

	
	/*document.getElementById("profilenm1").innerHTML=user.firstname+' '+user.lastname;
    document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	document.getElementById("pr_valid").innerHTML=user.validity;*/
    //alert(user.firstname);
	
	showNotifications1();
    }
  });
 }
}



function authenticate2(){

  var uname = $('#username').val();
  /*var pwd = $('#password_myacc').val();
  if(pwd=='')
  {*/
  var pwd = $('#codeBox1').val()+$('#codeBox2').val()+$('#codeBox3').val()+$('#codeBox4').val();
  //}
  var phno = localStorage.getItem("phno");


  alert(reg_id);
   
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
   url: SERVER+'mloyallogin_json.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'username': uname, 'password': pwd,'phonenos':phn,'device_id':reg_id},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){
    user.balance = data.balance;
    user.dealerbonuspoints=data.dealerbonuspoints;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
    user.dob = data.dob;
    user.emailid = data.emailid;
	user.def_store = data.store;
	user.def_city = data.store_city;
	user.visit_frequency = data.visit_frequency;
	user.membertype = data.membertype;
	user.district = data.district;
	user.cashback = data.cashback;
	//user.other_mobile_no = data.PayTMNo;
	user.district = data.District;
	user.tehsil = data.Tehsil;
	user.referencecode = data.Ref_code;
	user.pancardno = data.Pan_card_no;
	user.photo = data.Photo;
	user.shopname = data.Shop_Name;
	user.gstno = data.GSTNo;
	user.shopestablish = data.Shop_Establishment_Cert;
	user.PhotoofShop=data.PhotoofShop;
    user.doc=data.Electrician_ID;
	user.doc1=data.PersonalID;
    //user.state=data.State;
    user.cinno=data.CINNo;
    user.pin=data.PostalCode;
	user.address_ck=data.floor_flat;
	user.city_ufi=data.City;
	user.state_ck=data.State;
	user.street_ck=data.street;
	user.created_on=data.Created_On;
	user.isApproved=data.IsApproved;

	user.isLive=data.state_live_status;
	user.IsBlocked=data.IsBlocked;
	user.bankname = data.BankName;
	user.bankac = data.Bank_Ac_No;
	user.bankifsc = data.IFSC_code;
	user.bankcity = data.Bank_City;
	user.bankbranch = data.Bank_Branch_Address;
	user.adharno = data.Aadhar_Card_No;
	user.adharphoto = data.Aadhar_Card_Photo;
	user.panphoto = data.Pan_Card_Photo;
	user.gstphoto = data.Gst_Photo;
	user.refer_code = data.refer_code;
	user.Store_Id=data.Store_Id;
	user.owner_mobileno=data.owner_mobileno;
	user.working_shopname=data.working_shopname;
	user.can_chq=data.Cancelled_cheque;
	user.nocounter=data.CounterBoyLimitRetailer;
	user.adharphotoback = data.Aadhar_Card_Photo_2;
	user.panphotoback = data.Pan_Card_Photo_2;


   // success{"HomeNo":null,"Title":null,"Gender":null,"Dob":"","Doa":null,"Agegroup":null,"Email":"","floor_flat":null,"building":null,"street":null,"town":null,"Country":null,"City":"","PostalCode":null,"FinalPath":"https://ufifilters.mloyalretail.com/mapp","UniqueNum":"5814164591","ExpM":9,"ExpY":2019,"Dobday":null,"Dobmonth":null,"Dobyear":null,"Doaday":null,"Doamonth":null,"Doayear":null,"Occupation":null,"member_type":"New","Form_Id":null,"User_Id":5,"Store_Id":null,"Created_On":"10/5/2018 5:32:30 PM","upload_on":"10/5/2018 5:32:30 PM","Status_Flag":1,"data_source":0,"genuine_flag":0,"updateStoreCode":null,"updateCustomer":null,"user_id_bkp":null,"store_id_bkp":null,"support_remarks":null,
   //"other_mobile_no":null,"District":null,"Pan_card_no":null,"Ref_code":null,"Village":null,"Electrician_ID":null,"Photo":null,"State":null,"PersonalID":null,"Shop_Name":null,"GSTNo":null,"Shop_Establishment_Cert":null,"PhotoofShop":null,"CINNo":null,"IsApproved":"UnApproved","IsApprovedSmsStatus":0,"support_flag":null,"DS_Store_Code":null,"DS_table_name":null,"MaritalStatus":null,"PurchaseSourceForElectricalProduct":null,"PurchaseBrandForElectricalProduct":null,"TotalExperience":null,"VerificationQuestion":null,"district":null,"dealerbonuspoints":0,"dealerexpiredpoints":0}
	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';
    
    
    $('#username').val('');
    $('#password_myacc').val('');


	$('#update_pmobile_elec').val(uname);
	$('#update_pmobile_ret').val(uname);
	$('#update_pmobile_del').val(uname);
	$('#update_pmobile_cb').val(uname);
	$('#update_pmobile_elec1').val(uname);
	$('#update_pmobile_ret1').val(uname);
	//$('#update_omobile_ret1').val(uname);
	$('#update_pmobile_cb1').val(uname);

	

	
	
    
   if(typeof user.membertype == undefined || user.membertype==null || user.membertype == '')
   {
   		user.membertype = localStorage.getItem('cattype');
   }
   if(user.isApproved=='UnApproved')
   {
	   user.isApproved='PENDING';
	   $('#pendingdiv').css('display','block');
	   $('#verifydiv').css('display','none');
	   $('#rejectdiv').css('display','none');
   }
   else if(user.isApproved=='Rejected')
   {
	   user.isApproved='REJECTED';
	   $('#pendingdiv').css('display','none');
	   $('#verifydiv').css('display','none');
	   $('#rejectdiv').css('display','block');
   }
   else if(user.isBlocked=='Blocked')
   {
	   user.isBlocked='BLOCKED';
   }
   else
   {
	   $('#pendingdiv').css('display','none');
	   $('#verifydiv').css('display','block');
	   $('#rejectdiv').css('display','none');
   }
   
   localStorage.setItem('usernameufifilters',uname);
   localStorage.setItem('passwordufifilters',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('cashback',user.cashback);
   localStorage.setItem('dealerbonuspoints',user.dealerbonuspoints);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   localStorage.setItem("usermtype_ufifilters",user.membertype);
   localStorage.setItem("profiletype_ufi",user.membertype);
   localStorage.setItem("userdist_ufifilters",user.district);
   //localStorage.setItem("userothmobile_ufifilters",user.other_mobile_no);
   localStorage.setItem("userref_ufifilters",user.referencecode);
   localStorage.setItem("userpan_ufifilters",user.pancardno);
   localStorage.setItem("userphoto_ufifilters",user.photo);
   localStorage.setItem("usershop_ufifilters",user.shopname);
   localStorage.setItem("usergst_ufifilters",user.gstno);
   //localStorage.setItem("usershopest_ufifilters",user.shopestablish);
   localStorage.setItem("usershoppic_ufifilters",user.PhotoofShop);
   localStorage.setItem("userdoc_ufifilters",user.PersonalId);
   localStorage.setItem("userstate",user.state_ck);
   localStorage.setItem("usercin_ufifilters",user.cinno);
   localStorage.setItem("userpin_ufifilters",user.pin);
   localStorage.setItem("useradd_ufifilters",user.address_ck);
   localStorage.setItem("created_on_ufifilters",user.created_on);
   localStorage.setItem("is_approved_ufifilters",user.isApproved);

   localStorage.setItem("is_live_ufifilters",user.isLive);
   localStorage.setItem("is_blocked_ufifilters",user.isBlocked);
   localStorage.setItem("refer_code_ck",user.refer_code);

   localStorage.setItem('selfimg',user.photo);
   localStorage.setItem('docimg',user.PersonalId);
   localStorage.setItem('shopimg',user.PhotoofShop);
   localStorage.setItem('adimg',user.adharphoto);
   localStorage.setItem('panimg',user.panphoto);
   localStorage.setItem('gstimg',user.gstphoto);
   localStorage.setItem('estimg',user.shopestablish);
   localStorage.setItem('adimg_back',user.adharphotoback);
   localStorage.setItem('panimg_back',user.panphotoback);
   
	

	
   $('#emptype').val(localStorage.getItem("usermtype_ufifilters"));

   $('#share_refer_code').val(user.refer_code);
   //$("#emptype").selectmenu('refresh');

   if(localStorage.getItem("usermtype_ufifilters")=='Painter')
   {
		$('#referdiv').css('display','flex');
		$('#referdiv2').css('display','none');
   		$('#mylistdiv').css('display','none');
   		$('#pointspassbookpanel').css('display','none');
		$('#pointspassbookpanel_plumber').css('display','none');
		$('#counterdiv').css('display','none');
		$('#rewardshistpanel').css('display','none');
		$('#rewardstorediv').css('display','none');
		$('#rewardsdivpanel').css('display','none');
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#wallethistorypanel').css('display','block');
		$('#counterdivpanel').css('display','none');
		$('#scandiv').css('display','flex');
		$('#voucherdivpanel').css('display','none');
		//document.getElementById("homepointslabel_oth").innerHTML='My Wallet';
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','none');

		$('#otherheader').css('display','block');
		$('#retailerheader').css('display','none');
		$('#counterheader').css('display','none');


		
	    var numbers = /^[0-9]+$/;
		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_elec").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
	   
				$("#update_state_elec option").each(function() {
						  if($(this).text().indexOf(user.state_ck)>=0) {
							 
							$(this).prop('selected', 'selected');            
						  }                        
						});
				var sval=$("#update_state_elec").val();
				fetchdistrict1(sval);
		   }
		}

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_elec1').setAttribute("max", today);

			
		
			

		if(user.dob!='')
		{
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob_elec').val(yyyy+'-'+mm+'-'+dd);
		
		}
		
			

	   

   }
   if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
   {
	    //$('#referdiv').css('display','none');
		//$('#referdiv2').css('display','flex');
   		$('#mylistdiv').css('display','none');
   		$('#rewardstorediv').css('display','flex');
   		$('#counterdiv').css('display','none');
   		//$('#notificationsdiv').css('display','none');
   		//$('#walletdiv').css('display','block');
   		
   		$('#referdiv').css('display','none');
		$('#referdiv2').css('display','flex');
		document.getElementById("homepointslabel").innerHTML='My Wallet';
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#otherheader').css('display','none');
		$('#retailerheader').css('display','block');
		$('#voucherdivpanel').css('display','none');
		$('#counterheader').css('display','none');
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','none');
		$('#sales_data_main').css('display','none');
		$('#scandiv').css('display','flex');

		/*if(localStorage.getItem("retaiter_type")=='Putty')
		{
		 document.getElementById("waldiv").css('display','none');
		}
		else
		{
			document.getElementById("waldiv").css('display','block');
		}*/
		var numbers = /^[0-9]+$/;

	

		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_ret").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
        
		$("#update_state_ret option").each(function() {
				  if($(this).text().indexOf(user.state_ck)>=0) {
					 
					$(this).prop('selected', 'selected');            
				  }                        
				});
		var sval=$("#update_state_ret").val();
		fetchdistrict1(sval);
		   }
		}

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_ret1').setAttribute("max", today);
			document.getElementById('update_dob1').setAttribute("max", today);
			
		if(user.dob!='')
		{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		
		}



   }
   if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
   {
   	
	    $('#referdiv').css('display','none');
		$('#referdiv2').css('display','none');
 		$('#scandiv').css('display','none');
		$('#scandiv_panel_other').css('display','none');
		$('#pipes_billupload_panel').css('display','block');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','block');
		$('#mylistdiv').css('display','none');
		$('#counterdiv').css('display','none');
   		$('#rewardstorediv').css('display','flex');
   		//$('#notificationsdiv').css('display','block');
   		$('#walletdiv').css('display','none');
		$('#walletdivpanel').css('display','block');
		$('#retailerheader').css('display','none');
		$('#otherheader').css('display','block');
		$('#gamesdiv').css('display','flex');
		$('#giftsdiv').css('display','flex');
		$('#gamesdivpanel').css('display','block');
		$('#giftsdivpanel').css('display','block');
		$('#giftshistpanel').css('display','block');
		$('#ass_scandivpanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#referdivpanel').css('display','none');
		$('#rewardsdivpanel').css('display','block');
		$('#rewardshistpanel').css('display','none');
		$('#pointspassbookpanel').css('display','none');
		$('#pointspassbookpanel_plumber').css('display','block');
		$('#counterdivpanel').css('display','none');
		$('#voucherdivpanel').css('display','block');
		$('#counterheader').css('display','none');
		$('#myapprovalsdiv').css('display','none');
		//document.getElementById("homepointslabel").innerHTML='My Wallet';
		var numbers = /^[0-9]+$/;

	

		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_cb").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
        
		$("#update_state_cb option").each(function() {
				  if($(this).text().indexOf(user.state_ck)>=0) {
					 
					$(this).prop('selected', 'selected');            
				  }                        
				});
		var sval=$("#update_state_cb").val();
		fetchdistrict1(sval);
		   }
		}

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_cb1').setAttribute("max", today);
			document.getElementById('update_dob_cb').setAttribute("max", today);
			
		if(user.dob!='')
		{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob_cb').val(yyyy+'-'+mm+'-'+dd);
		
		}

		$('#update_rmobile_cb1').val(user.owner_mobileno);


   }
   if(localStorage.getItem("usermtype_ufifilters")=='Dealer')
   {
 		$('#referdiv').css('display','none');
		$('#referdiv2').css('display','none');
		$('#counterdiv').css('display','flex');
		document.getElementById("homepointslabel").innerHTML='Dealer Points';

   }
   
   // localStorage.setItem('passworddd',pwd);
   
   //localStorage.setItem('def_store','gold Rajkot');
   if(typeof user.membertype==undefined || user.membertype==null)
   	user.membertype='';
	//console.log("user.firstname"+user.firstname);
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.city_ufi=='undefined' || user.city_ufi=='null' || user.city_ufi==null)
		user.city_ufi = '0';
 if(user.state_ck=='undefined' || user.state_ck=='null' || user.state_ck==null)
		user.state_ck = '0';
 if(user.street_ck=='undefined' || user.street_ck=='null' || user.street_ck==null)
		user.street_ck = '';

 /*if(user.photo=='undefined' || user.photo=='null' || user.photo==null || user.photo=='')
		user.photo = 'user_pic.png';
 if(user.doc=='undefined' || user.doc=='null' || user.doc==null)
		user.doc = 'my_membership_s.png';
 if(user.doc1=='undefined' || user.doc1=='null' || user.doc1==null)
		user.doc1 = 'my_membership_s.png';
 if(user.PhotoofShop=='undefined' || user.PhotoofShop=='null' || user.PhotoofShop==null)
		user.PhotoofShop = 'my_membership_s.png';*/
 if(user.created_on=='undefined' || user.created_on=='null' || user.created_on==null)
		user.created_on = 'Not available';
 if(user.isApproved=='undefined' || user.isApproved=='null' || user.isApproved==null)
		user.isApproved = 'Unknown Status';
	if(localStorage.getItem("usermtype_ufifilters")=='Painter')
   {
		$('#update_name_elec').val(user.firstname);
		$('#update_surname_elec').val(user.lastname);
		$('#update_pmobile_elec').val(user.mobile);
		//$('#update_omobile_elec').val(user.other_mobile_no);
		$('#update_ref_elec').val(user.referencecode);
		$('#update_email_elec').val(user.emailid);
		$('#update_flat_elec').val(user.address_ck);
		$('#update_address_elec').val(user.street_ck);

	

/*var dd = document.getElementById('update_district_elec');
for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === user.district) {
        dd.selectedIndex = i;
        break;
    }
}
*/


		//$('#update_district_elec').val(user.district);
		//$('#update_tehsil_elec').val(user.tehsil);
		$('#update_city_elec').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		//$('#update_state_elec').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_elec').val(user.pin);
		
		$('#update_bankname_elec').val(user.bankname);
		$('#update_bankac_elec').val(user.bankac);
		$('#update_bankifsc_elec').val(user.bankifsc);
		$('#update_bankcity_elec').val(user.bankcity);
		$('#update_bankbranch_elec').val(user.bankbranch);

		$('#update_adhar_elec').val(user.adharno);
		$('#update_pan_elec').val(user.pancardno);	

		
		//fetchcity1(user.state_ck);
		if(user.adharphoto != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.adharphoto))
			{
			document.getElementById("cardimage_aadhar_elec").src = versionurl+'uploads/'+user.adharphoto;
			localStorage.setItem('adimg',user.adharphoto);
			document.getElementById("cardimage_aadhar_elec1").src = versionurl+'uploads/'+user.adharphoto;
			}
		}

		if(user.panphoto != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.panphoto))
			{
			document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.panphoto;
			localStorage.setItem('panimg',user.panphoto);
			document.getElementById("cardimage_proof_elec1").src = versionurl+'uploads/'+user.panphoto;
			}
		}

		if(user.adharphotoback != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.adharphotoback))
			{
			document.getElementById("cardimage_aadhar_elec_back").src = versionurl+'uploads/'+user.adharphotoback;
			localStorage.setItem('adimg_back',user.adharphotoback);
			document.getElementById("cardimage_aadhar_elec1_back").src = versionurl+'uploads/'+user.adharphotoback;
			}
		}

		/*if(user.panphotoback != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.panphotoback))
			{
			document.getElementById("cardimage_proof_elec_back").src = versionurl+'uploads/'+user.panphotoback;
			localStorage.setItem('panimg_back',user.panphotoback);
			document.getElementById("cardimage_proof_elec1_back").src = versionurl+'uploads/'+user.panphotoback;
			}
		}*/

		if(user.photo != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.photo))
			{
			document.getElementById("cardimage_self_elec").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("cardimage_self_elec1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			localStorage.setItem('selfimg',user.photo);
			}
		}

		if(user.can_chq != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.can_chq))
			{
			document.getElementById("cardimage_chq_elec").src = versionurl+'uploads/'+user.can_chq;
			localStorage.setItem('chqimg',user.can_chq);
			document.getElementById("cardimage_chq_elec1").src = versionurl+'uploads/'+user.can_chq;
			}
		}

		//document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.doc;


   }
   else if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
   {
	  user.shoptype= localStorage.getItem("retaiter_type");
		$('#update_name_ret').val(user.firstname);
		$('#update_surname_ret').val(user.lastname);
		$('#update_pmobile_ret').val(user.mobile);
		//$('#update_omobile_ret').val(user.other_mobile_no);
		$('#update_ref_ret').val(user.referencecode);
		$('#update_email_ret').val(user.emailid);
		$('#update_flat_ret').val(user.address_ck);
		$('#update_address_ret').val(user.street_ck);

/*	
var dd = document.getElementById('update_district_ret');
for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === user.district) {
        dd.selectedIndex = i;
        break;
    }
}

*/
		//$('#update_district_ret').val(user.district);
		//$('#update_tehsil_ret').val(user.tehsil);
		$('#update_city_ret').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		//$('#update_state_ret').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_ret').val(user.pin);
		
		$('#update_bankname_ret').val(user.bankname);
		$('#update_bankac_ret').val(user.bankac);
		$('#update_bankifsc_ret').val(user.bankifsc);
		$('#update_bankcity_ret').val(user.bankcity);
		$('#update_bankbranch_ret').val(user.bankbranch);

		$('#update_adhar_ret').val(user.adharno);
		//$('#update_pan_ret').val(user.pancardno);
		$('#update_gst_ret').val(user.gstno);

		$('#update_shopname_ret').val(user.shopname);
		$('#update_shoptype_ret').val(user.shoptype);
		$('#update_shopestablish_ret').val(user.shopestablish);	
		
		if(user.adharphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphoto))
		{
		document.getElementById("cardimage_aadhar_ret").src = versionurl+'uploads/'+user.adharphoto;
		localStorage.setItem('adimg',user.adharphoto);
		document.getElementById("cardimage_aadhar_ret1").src = versionurl+'uploads/'+user.adharphoto;
		}
		}
		
		if(user.panphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.panphoto))
		{
		document.getElementById("cardimage_proof_ret").src = versionurl+'uploads/'+user.panphoto;
		localStorage.setItem('panimg',user.panphoto);
		document.getElementById("cardimage_proof_ret1").src = versionurl+'uploads/'+user.panphoto;
		}
		}

		if(user.adharphotoback != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphotoback))
		{
		document.getElementById("cardimage_aadhar_ret_back").src = versionurl+'uploads/'+user.adharphotoback;
		localStorage.setItem('adimg_back',user.adharphotoback);
		document.getElementById("cardimage_aadhar_ret1_back").src = versionurl+'uploads/'+user.adharphotoback;
		}
		}
		
		/*if(user.panphotoback != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.panphotoback))
		{
		document.getElementById("cardimage_proof_ret_back").src = versionurl+'uploads/'+user.panphotoback;
		localStorage.setItem('panimg_back',user.panphotoback);
		document.getElementById("cardimage_proof_ret1_back").src = versionurl+'uploads/'+user.panphotoback;
		}
		}*/

		if(user.photo != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.photo))
		{
		document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardimage_self_ret1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		//document.getElementById("cardimage_proof_ret").src = versionurl+'uploads/'+user.doc;
		localStorage.setItem('selfimg',user.photo);
		}
		}
		
		if(user.gstphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.gstphoto))
		{
		document.getElementById("cardimage_gst_ret").src = versionurl+'uploads/'+user.gstphoto;
		localStorage.setItem('gstimg',user.gstphoto);
		document.getElementById("cardimage_gst_ret1").src = versionurl+'uploads/'+user.gstphoto;
		}
		}

		if(user.shopestablish != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.shopestablish))
		{
		document.getElementById("update_shopestablish_ret").src = versionurl+'uploads/'+user.shopestablish;
		localStorage.setItem('estimg',user.shopestablish);
		document.getElementById("update_shopestablish_ret1").src = versionurl+'uploads/'+user.shopestablish;
		}
		}
		if(user.can_chq != 'null')
		{
			if(imageExists(versionurl+'uploads/'+user.can_chq))
			{
			document.getElementById("cardimage_chq_ret").src = versionurl+'uploads/'+user.can_chq;
			localStorage.setItem('chqimg',user.can_chq);
			document.getElementById("cardimage_chq_ret1").src = versionurl+'uploads/'+user.can_chq;
			}
		}
		document.getElementById("pointspass_ret1").innerHTML=user.balance;
		document.getElementById("pointspass_del1").innerHTML=user.cashback;
		document.getElementById("pointspass_scan").innerHTML=user.cashback_painter;
		document.getElementById("pointbal_bal").innerHTML='&#8377; '+user.balance;

   }
   else if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
   {
   	
		$('#update_name_cb').val(user.firstname);
		$('#update_name_cb1').val(user.firstname);
		$('#update_surname_cb').val(user.lastname);
		$('#update_pmobile_cb').val(user.mobile);
		//$('#update_omobile_cb').val(user.other_mobile_no);
		$('#update_ref_cb').val(user.referencecode);
		$('#update_email_cb').val(user.emailid);
		$('#update_flat_cb').val(user.address_ck);
		$('#update_address_cb').val(user.street_ck);

		$('#update_rmobile_cb').val(user.owner_mobileno);
		$('#update_currwork_cb1').val(user.working_shopname);
		$('#update_currwork_cb').val(user.working_shopname);

		
		if(typeof user.owner_mobileno == undefined || user.owner_mobileno == null || user.owner_mobileno == 'null')
			user.owner_mobileno = '';
		if(typeof user.working_shopname == undefined || user.working_shopname == null || user.working_shopname == 'null')
			user.working_shopname = '';

		if(user.owner_mobileno!='' && user.working_shopname!='')
	   {
		document.getElementById('update_rmobile_cb').readOnly = true;
		document.getElementById('update_rmobile_cb1').readOnly = true;
		document.getElementById('update_currwork_cb').readOnly = true;
		document.getElementById('update_currwork_cb1').readOnly = true;
	   }
		
/*var dd = document.getElementById('update_district_cb');

for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === user.district) {
        dd.selectedIndex = i;
        break;
    }
}
*/

		//$('#update_district_cb').val(user.district);
		//$('#update_tehsil_cb').val(user.tehsil);
		$('#update_city_cb').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		//$('#update_state_elec').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_cb').val(user.pin);
		
		$('#update_bankname_cb').val(user.bankname);
		$('#update_bankac_cb').val(user.bankac);
		$('#update_bankifsc_cb').val(user.bankifsc);
		$('#update_bankcity_cb').val(user.bankcity);
		$('#update_bankbranch_cb').val(user.bankbranch);

		$('#update_adhar_cb').val(user.adharno);
		//$('#update_pan_cb').val(user.pancardno);	

		
		//fetchcity1(user.state_ck);
		if(user.adharphoto != '')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphoto))
		{
		document.getElementById("cardimage_aadhar_cb").src = versionurl+'uploads/'+user.adharphoto;
		document.getElementById("cardimage_aadhar_cb1").src = versionurl+'uploads/'+user.adharphoto;
		localStorage.setItem('adimg',user.adharphoto);
		}
		}

		if(user.panphoto != '')
		{
		if(imageExists(versionurl+'uploads/'+user.panphoto))
		{
		document.getElementById("cardimage_proof_cb").src = versionurl+'uploads/'+user.panphoto;
		document.getElementById("cardimage_proof_cb1").src = versionurl+'uploads/'+user.panphoto;
		localStorage.setItem('panimg',user.panphoto);
		}
		}

		if(user.adharphotoback != '')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphotoback))
		{
		document.getElementById("cardimage_aadhar_cb_back").src = versionurl+'uploads/'+user.adharphotoback;
		document.getElementById("cardimage_aadhar_cb1_back").src = versionurl+'uploads/'+user.adharphotoback;
		localStorage.setItem('adimg_back',user.adharphotoback);
		}
		}

		/*if(user.panphotoback != '')
		{
		if(imageExists(versionurl+'uploads/'+user.panphotoback))
		{
		document.getElementById("cardimage_proof_cb_back").src = versionurl+'uploads/'+user.panphotoback;
		document.getElementById("cardimage_proof_cb1_back").src = versionurl+'uploads/'+user.panphotoback;
		localStorage.setItem('panimg_back',user.panphotoback);
		}
		}*/

		if(user.photo != '')
		{
		if(imageExists(versionurl+'uploads/'+user.photo))
		{
		document.getElementById("cardimage_self_cb").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardimage_self_cb1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		localStorage.setItem('selfimg',user.photo);
		}
		}


		if(user.can_chq != '')
		{
			
			if(imageExists(versionurl+'uploads/'+user.can_chq))
			{
			document.getElementById("cardimage_chq_cb").src = versionurl+'uploads/'+user.can_chq;
			localStorage.setItem('chqimg',user.can_chq);
			document.getElementById("cardimage_chq_cb1").src = versionurl+'uploads/'+user.can_chq;
			}
		}
		//document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.doc;


   }

	$('#update_firstname').val(user.firstname);
	$('#update_lastname').val(user.lastname);
	    var dob = user.dob.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[0] : '';
		var yyyy = dob.length == 3 ? dob[2] : '';
		
		$('#update_dd').val(dd);
		$('#update_mm').val(mm);
		$('#update_yyyy').val(yyyy);
     
	$('#update_firstname1').val(user.firstname);
	$('#update_lastname1').val(user.lastname);
	$('#update_email1').val(user.emailid);
	
	$('#update_pmobile_elec1').val(user.mobile);

	//$('#update_omobile_elec1').val(user.mobile);


	



	document.getElementById("profile_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("profile_id").innerHTML='Mobile No '+user.id;
	document.getElementById("profile_join").innerHTML='UFI Filters Joining '+user.created_on;
	if(user.isBlocked == 'BLOCKED')
	   {
		document.getElementById("profile_isapproved").innerHTML= user.isBlocked+'!';
	   }
	else
	   {
		document.getElementById("profile_isapproved").innerHTML= user.isApproved+'!';
	   }
	//document.getElementById("profile_pic").src = user.photo;

     //$('#push_reg_no').val(reg_id);

//document.getElementById("barcontenthome").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span></a>';
document.getElementById("profilenm").innerHTML=user.firstname;//+' '+user.lastname;
document.getElementById("user_name_home").innerHTML=user.firstname+' '+user.lastname;
document.getElementById("user_points_home").innerHTML=user.balance;
if(localStorage.getItem("usermtype_ufifilters")=='Painter' || localStorage.getItem("usermtype_ufifilters")=='Retailer')
	   {
		if(user.tot_failed_paytm_amount!='0')
			   {
				document.getElementById("user_points_home_oth").innerHTML=user.tot_failed_paytm_amount;
			   }
		else
			{
				document.getElementById("user_points_home_oth").innerHTML=user.cashback;
			}
	   }
else
	document.getElementById("user_points_home_oth").innerHTML=user.cashback;
document.getElementById("user_id_home").innerHTML='Mem ID '+user.id;
document.getElementById("user_mobile_home").innerHTML='Mobile No '+user.mobile;
if(localStorage.getItem("usermtype_ufifilters")=='Painter' || localStorage.getItem("usermtype_ufifilters")=='Retailer')
	   {
		if(user.tot_failed_paytm_amount!='0')
			   {
				document.getElementById("user_wallet_home").innerHTML='+&#8377; '+user.tot_failed_paytm_amount;
			   }
		else
			{
				if(localStorage.getItem("retaiter_type")=='Putty')
		{
			document.getElementById("user_wallet_home").innerHTML=user.cashback_painter;
		}
		else
		{
		document.getElementById("user_wallet_home").innerHTML=user.cashback;
		}
			}
	   }
else
	document.getElementById("user_wallet_home").innerHTML=user.cashback;
document.getElementById("user_id_home_panel").innerHTML=user.id;
document.getElementById("membershipid_panel").innerHTML='<img src="https://chart.googleapis.com/chart?cht=qr&chs=150x150&chld=L|1&chl='+user.firstname+'#'+user.membertype +'#'+user.id+'" class="img-responsive" alt=""/>';

document.getElementById("username_wnew").innerHTML=user.firstname+' '+user.lastname;
document.getElementById("userloc_wnew").innerHTML=user.district;


if(user.photo!=null && imageExists(versionurl+'uploads/'+user.photo))
{
document.getElementById("cardimage_self_cb").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("ppichome").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("ppicprofile").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("userpic_wnew").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
}


if(user.PhotoofShop!=null  && imageExists(versionurl+'uploads/'+user.PhotoofShop))
document.getElementById("cardimage_shop_ret").src = versionurl+'uploads/'+user.PhotoofShop;

	if(localStorage.getItem("cardPic")==null || localStorage.getItem("cardPic")=='null' || localStorage.getItem("cardPic")=='undefined' )
	   {
		/*document.getElementById("cardImage").src = 'img/card_profile.png';
		document.getElementById("cardImagepop").src = 'img/card_profile.png';
		document.getElementById("cardImagepunch").src = 'img/card_profile.png';*/
		//document.getElementById("cardImagemenu").src = 'img/user_profile.png';
		
	   }
    else
	   {
		/*document.getElementById("cardImage").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';
		document.getElementById("cardImagepop").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';
		document.getElementById("cardImagepunch").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';*/
		//document.getElementById("cardImagemenu").src = 'http://graph.facebook.com/' + localStorage.getItem("cardPic") + '/picture?type=small';
	   }
	/*document.getElementById("profilenm1").innerHTML=user.firstname+' '+user.lastname;
    document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	document.getElementById("pr_valid").innerHTML=user.validity;*/
    //alert(user.firstname);

	//showNotifications1();
   }else{
		  toast('Authentication failed');
		  localStorage.removeItem('passwordufifilters');
		  $('#codeBox1').val('');
		  $('#codeBox2').val('');
		  $('#codeBox3').val('');
		  $('#codeBox4').val('');
		  $.mobile.changePage( "#myaccount", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernameufifilters');
	pwd = localStorage.getItem('passwordufifilters');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.cashback = localStorage.getItem('cashback');
    user.dealerbonuspoints=localStorage.getItem('dealerbonuspoints');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    //user.trans_sms = localStorage.getItem('trans_sms');
    //user.mktgsms = localStorage.getItem('mktgsms');
    //user.cpns = localStorage.getItem('cpns');
    //user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
	//user.other_mobile_no = localStorage.getItem("userothmobile_ufifilters");

    user.membertype = localStorage.getItem("usermtype_ufifilters");
    user.district = localStorage.getItem("userdist_ufifilters");
    //user.referencecode = localStorage.getItem("userref_ufifilters");
    user.pancardno = localStorage.getItem("userpan_ufifilters");
    user.photo = localStorage.getItem("userphoto_ufifilters");
    //user.shopname = localStorage.getItem("usershop_ufifilters");
    user.gstno = localStorage.getItem("usergst_ufifilters");
    //user.shopestablish = localStorage.getItem("usershopest_ufifilters");
    //user.PhotoofShop = localStorage.getItem("usershoppic_ufifilters");
    //user.PersonalId = localStorage.getItem("userdoc_ufifilters");
    user.state = localStorage.getItem("userstate");
    user.cinno = localStorage.getItem("usercin_ufifilters");
    user.pin = localStorage.getItem("userpin_ufifilters");
    user.address_ck = localStorage.getItem("useradd_ufifilters");
    user.created_on = localStorage.getItem("created_on_ufifilters");
    user.isApproved = localStorage.getItem("is_approved_ufifilters");

    user.isLive = localStorage.getItem("is_live_ufifilters");
	//user.isBlocked = localStorage.getItem("is_blocked_ufifilters");
    user.refer_code = localStorage.getItem("refer_code_ck");

    user.photo = localStorage.getItem('selfimg');
    //user.PersonalId = localStorage.getItem('docimg');
    //user.PhotoofShop = localStorage.getItem('shopimg');
    user.adharphoto = localStorage.getItem('adimg');
    user.panphoto = localStorage.getItem('panimg');
    user.gstphoto = localStorage.getItem('gstimg');
    //user.shopestablish = localStorage.getItem('estimg');
	//user.adharphotoback = localStorage.getItem('adimg_back');
    //user.panphotoback = localStorage.getItem('panimg_back');
    $('#emptype').val(localStorage.getItem("usermtype_ufifilters"));

   $('#share_refer_code').val(user.refer_code);
   //$("#emptype").selectmenu('refresh');

   if(localStorage.getItem("usermtype_ufifilters")=='Painter')
   {
		$('#referdiv').css('display','flex');
		$('#referdiv2').css('display','none');
   		$('#mylistdiv').css('display','none');
   		$('#pointspassbookpanel').css('display','none');
		$('#pointspassbookpanel_plumber').css('display','none');
		$('#counterdiv').css('display','none');
		$('#rewardshistpanel').css('display','none');
		$('#rewardstorediv').css('display','none');
		$('#rewardsdivpanel').css('display','none');
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#wallethistorypanel').css('display','block');
		$('#counterdivpanel').css('display','none');
		$('#voucherdivpanel').css('display','none');
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','none');
		
		//document.getElementById("homepointslabel_oth").innerHTML='My Wallet';

		$('#otherheader').css('display','block');
		$('#retailerheader').css('display','none');
		$('#counterheader').css('display','none');
		
	    var numbers = /^[0-9]+$/;
		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_elec").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
	   
				$("#update_state_elec option").each(function() {
						  if($(this).text().indexOf(user.state_ck)>=0) {
							 
							$(this).prop('selected', 'selected');            
						  }                        
						});
				var sval=$("#update_state_elec").val();
				fetchdistrict1(sval);
		   }
		}

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_elec1').setAttribute("max", today);

			
		
			

		if(user.dob!='')
		{
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob_elec').val(yyyy+'-'+mm+'-'+dd);
		
		}
		
			

	   

   }
   if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
   {
	    //$('#referdiv').css('display','none');
		//$('#referdiv2').css('display','flex');
   		$('#mylistdiv').css('display','none');
   		$('#rewardstorediv').css('display','flex');
   		$('#counterdiv').css('display','none');
   		//$('#notificationsdiv').css('display','none');
   		//$('#walletdiv').css('display','block');
   		
   		$('#referdiv').css('display','none');
		$('#referdiv2').css('display','flex');
		try{
		document.getElementById("homepointslabel").innerHTML='My Wallet';
		}catch(err){}
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#otherheader').css('display','none');
		$('#retailerheader').css('display','block');
		$('#voucherdivpanel').css('display','none');
		$('#counterheader').css('display','none');
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','none');
		$('#sales_data_main').css('display','none');
		$('#scandiv').css('display','flex');

		/*if(localStorage.getItem("retaiter_type")=='Putty')
		{
		 document.getElementById("waldiv").css('display','none');
		}
		else
		{
			document.getElementById("waldiv").css('display','block');
		}*/
		var numbers = /^[0-9]+$/;

	

		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_ret").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
        
		$("#update_state_ret option").each(function() {
				  if($(this).text().indexOf(user.state_ck)>=0) {
					 
					$(this).prop('selected', 'selected');            
				  }                        
				});
		var sval=$("#update_state_ret").val();
		fetchdistrict1(sval);
		   }
		}

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			try{
			document.getElementById('update_dob_ret1').setAttribute("max", today);
			document.getElementById('update_dob1').setAttribute("max", today);
		}catch(err){}
			
		if(user.dob!='')
		{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		
		}



   }
   if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
   {
   	
	    $('#referdiv').css('display','none');
		$('#referdiv2').css('display','none');
 		$('#scandiv').css('display','none');
		$('#scandiv_panel_other').css('display','none');
		$('#pipes_billupload_panel').css('display','block');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','block');
		$('#mylistdiv').css('display','none');
		$('#counterdiv').css('display','none');
   		$('#rewardstorediv').css('display','flex');
   		//$('#notificationsdiv').css('display','block');
   		$('#walletdiv').css('display','none');
		$('#walletdivpanel').css('display','block');
		$('#retailerheader').css('display','none');
		$('#otherheader').css('display','block');
		$('#gamesdiv').css('display','flex');
		$('#giftsdiv').css('display','flex');
		$('#gamesdivpanel').css('display','block');
		$('#giftsdivpanel').css('display','block');
		$('#giftshistpanel').css('display','block');
		$('#ass_scandivpanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#referdivpanel').css('display','none');
		$('#rewardsdivpanel').css('display','block');
		$('#voucherdivpanel').css('display','block');
		$('#counterheader').css('display','none');
		$('#myapprovalsdiv').css('display','none');
		//document.getElementById("homepointslabel").innerHTML='My Wallet';
		var numbers = /^[0-9]+$/;

	

		if(user.state_ck!=null){
		if(user.state_ck.match(numbers))
		{

			$("#update_state_cb").val(user.state_ck);
			fetchdistrict1(user.state_ck);



		}
		else
		   {
        
		$("#update_state_cb option").each(function() {
				  if($(this).text().indexOf(user.state_ck)>=0) {
					 
					$(this).prop('selected', 'selected');            
				  }                        
				});
		var sval=$("#update_state_cb").val();
		fetchdistrict1(sval);
		   }
		}

		var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_cb1').setAttribute("max", today);
			document.getElementById('update_dob_cb').setAttribute("max", today);
			
		if(user.dob!='')
		{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob_cb').val(yyyy+'-'+mm+'-'+dd);
		
		}


   }
   if(localStorage.getItem("usermtype_ufifilters")=='Dealer')
   {
 		$('#referdiv').css('display','none');
		$('#referdiv2').css('display','none');
		$('#counterdiv').css('display','flex');
		document.getElementById("homepointslabel").innerHTML='Dealer Points';

   }
   
   // localStorage.setItem('passworddd',pwd);
   
   //localStorage.setItem('def_store','gold Rajkot');
   if(typeof user.membertype==undefined || user.membertype==null)
   	user.membertype='';
	//console.log("user.firstname"+user.firstname);
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.city_ufi=='undefined' || user.city_ufi=='null' || user.city_ufi==null)
		user.city_ufi = '0';
 if(user.state_ck=='undefined' || user.state_ck=='null' || user.state_ck==null)
		user.state_ck = '0';
 if(user.street_ck=='undefined' || user.street_ck=='null' || user.street_ck==null)
		user.street_ck = '';

 /*if(user.photo=='undefined' || user.photo=='null' || user.photo==null || user.photo=='')
		user.photo = 'user_pic.png';
 if(user.doc=='undefined' || user.doc=='null' || user.doc==null)
		user.doc = 'my_membership_s.png';
 if(user.doc1=='undefined' || user.doc1=='null' || user.doc1==null)
		user.doc1 = 'my_membership_s.png';
 if(user.PhotoofShop=='undefined' || user.PhotoofShop=='null' || user.PhotoofShop==null)
		user.PhotoofShop = 'my_membership_s.png';*/
 if(user.created_on=='undefined' || user.created_on=='null' || user.created_on==null)
		user.created_on = 'Not available';
 if(user.isApproved=='undefined' || user.isApproved=='null' || user.isApproved==null)
		user.isApproved = 'Unknown Status';
	if(localStorage.getItem("usermtype_ufifilters")=='Painter')
   {
		$('#update_name_elec').val(user.firstname);
		$('#update_surname_elec').val(user.lastname);
		$('#update_pmobile_elec').val(user.mobile);
		//$('#update_omobile_elec').val(user.other_mobile_no);
		$('#update_ref_elec').val(user.referencecode);
		$('#update_email_elec').val(user.emailid);
		$('#update_flat_elec').val(user.address_ck);
		$('#update_address_elec').val(user.street_ck);

/*		var dd = document.getElementById('update_district_elec');
for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === user.district) {
        dd.selectedIndex = i;
        break;
    }
}
*/


	//	$('#update_district_elec').val(user.district);
		//$('#update_tehsil_elec').val(user.tehsil);
		$('#update_city_elec').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		//$('#update_state_elec').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_elec').val(user.pin);
		$('#update_adhar_elec').val(user.adharno);
		
		//$('#update_bankname_elec').val(user.bankname);
		$('#update_bankac_elec').val(user.bankac);
		/*$('#update_bankifsc_elec').val(user.bankifsc);
		$('#update_bankcity_elec').val(user.bankcity);
		$('#update_bankbranch_elec').val(user.bankbranch);

		
		$('#update_pan_elec').val(user.pancardno);	*/

		
		//fetchcity1(user.state_ck);
		if(imageExists(versionurl+'uploads/'+user.adharphoto))
		{
		document.getElementById("cardimage_aadhar_elec").src = versionurl+'uploads/'+user.adharphoto;
		localStorage.setItem('adimg',user.adharphoto);
		document.getElementById("cardimage_aadhar_elec1").src = versionurl+'uploads/'+user.adharphoto;
		}
		/*if(imageExists(versionurl+'uploads/'+user.panphoto))
		{
		document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.panphoto;
		localStorage.setItem('panimg',user.panphoto);
		document.getElementById("cardimage_proof_elec1").src = versionurl+'uploads/'+user.panphoto;
		}

		if(imageExists(versionurl+'uploads/'+user.adharphotoback))
		{
		document.getElementById("cardimage_aadhar_elec_back").src = versionurl+'uploads/'+user.adharphotoback;
		localStorage.setItem('adimg_back',user.adharphotoback);
		document.getElementById("cardimage_aadhar_elec1_back").src = versionurl+'uploads/'+user.adharphotoback;
		}
		if(imageExists(versionurl+'uploads/'+user.panphotoback))
		{
		document.getElementById("cardimage_proof_elec_back").src = versionurl+'uploads/'+user.panphotoback;
		localStorage.setItem('panimg_back',user.panphotoback);
		document.getElementById("cardimage_proof_elec1_back").src = versionurl+'uploads/'+user.panphotoback;
		}*/

		if(imageExists(versionurl+'uploads/'+user.photo))
		{
		//document.getElementById("cardimage_self_elec").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		//document.getElementById("cardimage_self_elec1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		localStorage.setItem('selfimg',user.photo);
		}

		//document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.doc;


   }
   else if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
   {
	 
		$('#update_name_ret').val(user.firstname);
		$('#update_surname_ret').val(user.lastname);
		$('#update_pmobile_ret').val(user.mobile);
		//$('#update_omobile_ret').val(user.other_mobile_no);
		$('#update_ref_ret').val(user.referencecode);
		$('#update_email_ret').val(user.emailid);
		$('#update_flat_ret').val(user.address_ck);
		$('#update_address_ret').val(user.street_ck);
/*var dd = document.getElementById('update_district_ret');
for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === user.district) {
        dd.selectedIndex = i;
        break;
    }
}
*/

		//$('#update_district_ret').val(user.district);
		//$('#update_tehsil_ret').val(user.tehsil);
		$('#update_city_ret').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		//$('#update_state_ret').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_ret').val(user.pin);
		$('#update_adhar_ret').val(user.adharno);
		
		/*$('#update_bankname_ret').val(user.bankname);
		$('#update_bankac_ret').val(user.bankac);
		$('#update_bankifsc_ret').val(user.bankifsc);
		$('#update_bankcity_ret').val(user.bankcity);
		$('#update_bankbranch_ret').val(user.bankbranch);

		$('#update_adhar_ret').val(user.adharno);
		$('#update_pan_ret').val(user.pancardno);
		$('#update_gst_ret').val(user.gstno);

		$('#update_shopname_ret').val(user.shopname);
		$('#update_shopestablish_ret').val(user.shopestablish);	*/
		
		if(user.adharphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphoto))
		{
		document.getElementById("cardimage_aadhar_ret").src = versionurl+'uploads/'+user.adharphoto;
		localStorage.setItem('adimg',user.adharphoto);
		document.getElementById("cardimage_aadhar_ret1").src = versionurl+'uploads/'+user.adharphoto;
		}
		}
		
		if(user.panphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.panphoto))
		{
		document.getElementById("cardimage_proof_ret").src = versionurl+'uploads/'+user.panphoto;
		localStorage.setItem('panimg',user.panphoto);
		document.getElementById("cardimage_proof_ret1").src = versionurl+'uploads/'+user.panphoto;
		}
		}

		/*if(user.adharphotoback != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphotoback))
		{
		document.getElementById("cardimage_aadhar_ret_back").src = versionurl+'uploads/'+user.adharphotoback;
		localStorage.setItem('adimg_back',user.adharphotoback);
		document.getElementById("cardimage_aadhar_ret1_back").src = versionurl+'uploads/'+user.adharphotoback;
		}
		}
		
		if(user.panphotoback != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.panphotoback))
		{
		document.getElementById("cardimage_proof_ret_back").src = versionurl+'uploads/'+user.panphotoback;
		localStorage.setItem('panimg_back',user.panphotoback);
		document.getElementById("cardimage_proof_ret1_back").src = versionurl+'uploads/'+user.panphotoback;
		}
		}*/

		if(user.photo != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.photo))
		{
		//document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		//document.getElementById("cardimage_self_ret1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		//document.getElementById("cardimage_proof_ret").src = versionurl+'uploads/'+user.doc;
		localStorage.setItem('selfimg',user.photo);
		}
		}

		if(user.gstphoto != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.gstphoto))
		{
		document.getElementById("cardimage_gst_ret").src = versionurl+'uploads/'+user.gstphoto;
		localStorage.setItem('gstimg',user.gstphoto);
		document.getElementById("cardimage_gst_ret1").src = versionurl+'uploads/'+user.gstphoto;
		}
		}

		/*if(user.shopestablish != 'null')
		{
		if(imageExists(versionurl+'uploads/'+user.shopestablish))
		{
		document.getElementById("update_shopestablish_ret").src = versionurl+'uploads/'+user.shopestablish;
		localStorage.setItem('estimg',user.shopestablish);
		document.getElementById("update_shopestablish_ret1").src = versionurl+'uploads/'+user.shopestablish;
		}
		}*/

   }
   else if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
   {
   	
		$('#update_name_cb').val(user.firstname);
		$('#update_name_cb1').val(user.firstname);
		$('#update_surname_cb').val(user.lastname);
		$('#update_pmobile_cb').val(user.mobile);
		//$('#update_omobile_cb').val(user.other_mobile_no);
		$('#update_ref_cb').val(user.referencecode);
		$('#update_email_cb').val(user.emailid);
		$('#update_flat_cb').val(user.address_ck);
		$('#update_address_cb').val(user.street_ck);
		$('#update_currwork_cb1').val(user.working_shopname);
		$('#update_currwork_cb').val(user.working_shopname);
/*
var dd = document.getElementById('update_district_cb');
for (var i = 0; i < dd.options.length; i++) {
    if (dd.options[i].text === user.district) {
        dd.selectedIndex = i;
        break;
    }
}
*/

//		$('#update_district_cb').val(user.district);
		//$('#update_tehsil_cb').val(user.tehsil);
		$('#update_city_cb').val(user.city_ufi);
        //$("#update_city_elec").selectmenu('refresh');

		//$('#update_state_elec').val(user.state_ck);
        //$("#update_state_elec").selectmenu('refresh');
		$('#update_pin_cb').val(user.pin);
		$('#update_adhar_cb').val(user.adharno);
		
		/*$('#update_bankname_cb').val(user.bankname);
		$('#update_bankac_cb').val(user.bankac);
		$('#update_bankifsc_cb').val(user.bankifsc);
		$('#update_bankcity_cb').val(user.bankcity);
		$('#update_bankbranch_cb').val(user.bankbranch);

		
		$('#update_pan_cb').val(user.pancardno);	

		
		//fetchcity1(user.state_ck);
		if(user.adharphoto != '')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphoto))
		{
		document.getElementById("cardimage_aadhar_cb").src = versionurl+'uploads/'+user.adharphoto;
		document.getElementById("cardimage_aadhar_cb1").src = versionurl+'uploads/'+user.adharphoto;
		localStorage.setItem('adimg',user.adharphoto);
		}
		}

		if(user.panphoto != '')
		{
		if(imageExists(versionurl+'uploads/'+user.panphoto))
		{
		document.getElementById("cardimage_proof_cb").src = versionurl+'uploads/'+user.panphoto;
		document.getElementById("cardimage_proof_cb1").src = versionurl+'uploads/'+user.panphoto;
		localStorage.setItem('panimg',user.panphoto);
		}
		}

		if(user.adharphotoback != '')
		{
		if(imageExists(versionurl+'uploads/'+user.adharphotoback))
		{
		document.getElementById("cardimage_aadhar_cb_back").src = versionurl+'uploads/'+user.adharphotoback;
		document.getElementById("cardimage_aadhar_cb1_back").src = versionurl+'uploads/'+user.adharphotoback;
		localStorage.setItem('adimg_back',user.adharphotoback);
		}
		}

		if(user.panphotoback != '')
		{
		if(imageExists(versionurl+'uploads/'+user.panphotoback))
		{
		document.getElementById("cardimage_proof_cb_back").src = versionurl+'uploads/'+user.panphotoback;
		document.getElementById("cardimage_proof_cb1_back").src = versionurl+'uploads/'+user.panphotoback;
		localStorage.setItem('panimg_back',user.panphotoback);
		}
		}*/

		if(user.photo != '')
		{
		if(imageExists(versionurl+'uploads/'+user.photo))
		{
		//document.getElementById("cardimage_self_cb").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		//document.getElementById("cardimage_self_cb1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("ppic1").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
		localStorage.setItem('selfimg',user.photo);
		}
		}
		//document.getElementById("cardimage_proof_elec").src = versionurl+'uploads/'+user.doc;


   }

	$('#update_firstname').val(user.firstname);
	$('#update_lastname').val(user.lastname);
	    var dob = user.dob.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[0] : '';
		var yyyy = dob.length == 3 ? dob[2] : '';
		
		$('#update_dd').val(dd);
		$('#update_mm').val(mm);
		$('#update_yyyy').val(yyyy);
     
	$('#update_firstname1').val(user.firstname);
	$('#update_lastname1').val(user.lastname);
	$('#update_email1').val(user.emailid);
	
	$('#update_pmobile_elec1').val(user.mobile);

	//$('#update_omobile_elec1').val(user.mobile);


	



	document.getElementById("profile_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("profile_id").innerHTML='Mobile No '+user.id;
	document.getElementById("profile_join").innerHTML='UFI Filters Joining '+user.created_on;
	/*if(user.isBlocked == 'BLOCKED')
	   {
		document.getElementById("profile_isapproved").innerHTML= user.isBlocked+'!';
	   }
	else
	   {*/
		document.getElementById("profile_isapproved").innerHTML= user.isApproved+'!';
	   //}
	//document.getElementById("profile_pic").src = user.photo;

     //$('#push_reg_no').val(reg_id);

//document.getElementById("barcontenthome").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span></a>';
document.getElementById("profilenm").innerHTML=user.firstname;//+' '+user.lastname;
document.getElementById("user_name_home").innerHTML=user.firstname+' '+user.lastname;
document.getElementById("user_points_home").innerHTML=user.balance;
if(localStorage.getItem("usermtype_ufifilters")=='Painter' || localStorage.getItem("usermtype_ufifilters")=='Retailer')
	{
		/*if(user.tot_failed_paytm_amount!='0')
			   {
				document.getElementById("user_points_home_oth").innerHTML='+&#8377; '+user.tot_failed_paytm_amount;
			   }
		else
			{
				document.getElementById("user_points_home_oth").innerHTML=user.cashback;
			}*/

			document.getElementById("user_points_home_oth").innerHTML=user.cashback;
	   }
else
	document.getElementById("user_points_home_oth").innerHTML=user.cashback;
document.getElementById("user_id_home").innerHTML='Mem ID '+user.id;
document.getElementById("user_mobile_home").innerHTML='Mobile No '+user.mobile;
if(localStorage.getItem("usermtype_ufifilters")=='Painter' || localStorage.getItem("usermtype_ufifilters")=='Retailer')
	{
		/*if(user.tot_failed_paytm_amount!='0')
			   {
				document.getElementById("user_wallet_home").innerHTML='+&#8377; '+user.tot_failed_paytm_amount;
			   }
		else
			{
				document.getElementById("user_wallet_home").innerHTML=user.cashback;
			}*/

			if(localStorage.getItem("retaiter_type")=='Putty')
		{
			document.getElementById("user_wallet_home").innerHTML=user.cashback_painter;
		}
		else
		{
		document.getElementById("user_wallet_home").innerHTML=user.cashback;
		}
	   }
else
	document.getElementById("user_wallet_home").innerHTML=user.cashback;
document.getElementById("user_id_home_panel").innerHTML=user.id;
document.getElementById("membershipid_panel").innerHTML='<img src="https://chart.googleapis.com/chart?cht=qr&chs=150x150&chld=L|1&chl='+user.firstname+'#'+user.membertype+'#'+user.id+'" class="img-responsive" alt=""/>';

//document.getElementById("username_wnew").innerHTML=user.firstname+' '+user.lastname;
//document.getElementById("userloc_wnew").innerHTML=user.district;


if(user.photo!=null && imageExists(versionurl+'uploads/'+user.photo))
{
//document.getElementById("cardimage_self_cb").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("ppichome").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("ppicprofile").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
//document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
//document.getElementById("userpic_wnew").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
}


//if(user.PhotoofShop!=null  && imageExists(versionurl+'uploads/'+user.PhotoofShop))
//document.getElementById("cardimage_shop_ret").src = versionurl+'uploads/'+user.PhotoofShop;

	
	/*document.getElementById("profilenm1").innerHTML=user.firstname+' '+user.lastname;
    document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	document.getElementById("pr_valid").innerHTML=user.validity;*/
    //alert(user.firstname);
	
	//showNotifications1();
    }
  });
 }
}



function savecategory()
{	
	var cattype = $("input[name='select_role']:checked").val()
	console.log(cattype);

	if(typeof cattype==undefined || cattype=='undefined'|| cattype==null|| cattype=='null' || cattype=='')
	{
		toast('Please select category type');
	}
	else
	{
		localStorage.setItem('cattype',cattype);
    /*
		if(cattype=='dealer')
		{
			document.getElementById("headlbl_login").innerHTML= 'Distributor/Wholesaler';
			document.getElementById("dealer_headlbl").innerHTML= 'Distributor/Wholesaler';
			//$.mobile.changePage( "#page-forgot-password_dealer", { transition: "none"} );
		    $.mobile.changePage( "#page-login-dealer", { transition: "none"} );
		}
		else*/
     if(cattype=='SalesExecutive')
		{
			document.getElementById("headlbl_login_se").innerHTML= 'Sales Executive';
			document.getElementById("dealer_headlbl").innerHTML= 'Sales Executive';
			//$.mobile.changePage( "#page-forgot-password_se", { transition: "none"} );
			$.mobile.changePage( "#page-login-se", { transition: "none"} );
		}
		else
		{
			$.mobile.changePage( "#page-forgot-password", { transition: "none"} );
		}
	}
}

function dealerauthenticate()
{

 //localStorage.setItem('usernamemloyal_ufi','303049');

//choosecontact();
 
 //$('#dealerusername').val('303049');
 var uname = $('#dealerusername').val();
 var pwd = $('#dealerpassword').val();
 //var pwd = $('#dealercodeBox1').val()+$('#dealercodeBox2').val()+$('#dealercodeBox3').val()+$('#dealercodeBox4').val();

 if(uname=='' || pwd==''){
  toast('Please enter Username/password');
 }else{
  

 $.ajax({
   url: SERVER2+'login_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','userid': uname, 'pswd': pwd,'device_id':reg_id},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {

     console.log('data'+JSON.stringify(data));
    //alert('JSONDATA'+JSON.stringify(data));

	
   
   if(data.data.length=='1'){
    store.store_id = data.data[0].store_id;
    store.store_name = data.data[0].store_name;
	//store.store_category = data.data[0].store_category;

    //store.redeem_logic = data.data[0].redeem_logic;
	store.store_members = data.data[0].store_members;
	store.store_rank = data.data[0].store_rank;
    //store.admin_id = data.data[0].admin_id;
    //store.brand_id = data.data[0].global_brand_id;

	store.district = data.data[0].store_district;
	store.walletpoints = checkforundefinedPts(data.data[0].store_wallet);
	store.storepoints = checkforundefinedPts(data.data[0].Dealer_Points);
	store.Retailer_Balance_Points= checkforundefinedPts(data.data[0].Retailer_Balance_Points);
	store.storemobile = data.data[0].Store_mobnumber;
	store.storecode = data.data[0].store_code;

    store.storefirstname = data.data[0].Store_mgr;
    store.division = data.data[0].state_division;
    console.log('store.division'+store.division);


	if(store.walletpoints.indexOf(".")>=0)
	{
		store.walletpoints  = parseFloat(store.walletpoints).toFixed(2);
	}
	if(store.storepoints.indexOf(".")>=0)
	{
		store.storepoints = parseFloat(store.storepoints).toFixed(2);
	}
	if(store.Retailer_Balance_Points.indexOf(".")>=0)
	{
		store.Retailer_Balance_Points  = parseFloat(store.Retailer_Balance_Points).toFixed(2);
	}


    var cattype = localStorage.getItem('cattype');
	//console.log(cattype);
	if(cattype == 'dealer') 
	{

			user.mobile=store.storemobile;
	}
	else
	{
			//user.mobile=uname;
			user.mobile=store.storemobile;

	}
//Division Pipes - 31, 32, 33, 34, 35, 37, 88  && Putty - 36, 81, 88
	if(store.division == '31' || store.division == '32' || store.division == '33' || store.division == '34' || store.division == '35' || store.division == '37')
	{
		  $('#sales_data_panel_other').css('display','none');
		  $('scandiv_panel_other').css('display','block');
		  localStorage.setItem("retaiter_type","putty");
				  /*document.getElementById("mainhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("saleshlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("schhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("refhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("wathlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("emphlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("sochlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("scanhlogo").src='assets/images/logo_home_putty.png';*/
				  document.getElementById("mainhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("saleshlogo").src='assets/images/logo_inner.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("schhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("refhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("wathlogo").src='assets/images/logo_inner.png';
                  document.getElementById("emphlogo").src='assets/images/logo_inner.png';
                  document.getElementById("sochlogo").src='assets/images/logo_inner.png';
                  document.getElementById("scanhlogo").src='assets/images/logo_inner.png';
                 
	}
	else if(store.division == '36' || store.division == '81')
	{
		 $('#sales_data_panel_other').css('display','block');
		 $('scandiv_panel_other').css('display','none');
		localStorage.setItem("retaiter_type","pipes");
				  /*document.getElementById("mainhlogo").src='assets/images/logo_home_pipes.png';
               	  document.getElementById("saleshlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("schhlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("refhlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("wathlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("emphlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("sochlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("scanhlogo").src='assets/images/logo_home_pipes.png';*/
				  document.getElementById("mainhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("saleshlogo").src='assets/images/logo_inner.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("schhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("refhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("wathlogo").src='assets/images/logo_inner.png';
                  document.getElementById("emphlogo").src='assets/images/logo_inner.png';
                  document.getElementById("sochlogo").src='assets/images/logo_inner.png';
                  document.getElementById("scanhlogo").src='assets/images/logo_inner.png';
                  
	}

	else
                {
                	 $('#sales_data_panel_other').css('display','block');
                	  $('scandiv_panel_other').css('display','none');
                  document.getElementById("mainhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("saleshlogo").src='assets/images/logo_inner.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("schhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("refhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("wathlogo").src='assets/images/logo_inner.png';
                  document.getElementById("emphlogo").src='assets/images/logo_inner.png';
                  document.getElementById("sochlogo").src='assets/images/logo_inner.png';
                  document.getElementById("scanhlogo").src='assets/images/logo_inner.png';

                }

	/*if(typeof store.storemobile==undefined || store.storemobile=='undefined'|| store.storemobile==null || store.storemobile=='null' || store.storemobile=='')
    {
        store.storemobile='XXXXX';
    }*/
	if(typeof store.storefirstname==undefined || store.storefirstname=='undefined'|| store.storefirstname==null || store.storefirstname=='null' || store.storefirstname=='')
    {
        store.storefirstname='User';
    }

	//store.dispatchcontactperson = data.data[0].dispatchcontactperson;
	store.storeaddr = data.data[0].Store_address;
	store.storelocation = data.data[0].Store_location;
	store.storecity = data.data[0].Store_city;
	store.storestate = data.data[0].Store_state;
	store.storecountry = data.data[0].Store_Country;
	store.storezone = data.data[0].store_zone;
	store.storezip = data.data[0].store_zip;
	store.storephone = data.data[0].Store_phonenumber;
	store.storeemail = data.data[0].store_emailid;
	//store.sename = data.data[0].SE_Name;
	//store.secode = data.data[0].SE_code;
	//store.bmname = data.data[0].BM_Name;
	store.panno = checkforundefined(data.data[0].PanNo);
	store.gstno = checkforundefined(data.data[0].GstIn);
	//store.storelastname = data.data[0].Store_mgr_lastname;
	//store.store_dd = data.data[0].Store_mgr_DobDay;
	//store.store_mm = data.data[0].Store_mgr_DobMonth;
	//store.store_yy = data.data[0].Store_mgr_DobYear;
	//store.storeflatno = data.data[0].Store_FlatNo;
	//store.storestreet = data.data[0].Store_Street;
	//store.storetehsil = data.data[0].store_Tehsil;
	//store.storepaytmno = data.data[0].Store_Paytm_no;
	//store.storebankname = data.data[0].Store_Bank_Name;
	//store.storebankacno = data.data[0].Store_Bank_ACNO;
	//store.storebankifsc = data.data[0].Store_Bank_IFSC;
	//store.storebankcity = data.data[0].Store_Bank_City;
	//store.storebankaddr = data.data[0].Bank_Branch_Address;
	store.sepending = data.data[0].SE_Pending_Approval;
	//store.sepending = data.data[0].SE_Pending_Approval_BySECode;
	store.seapproved = data.data[0].SE_Approved;
	store.serejected = data.data[0].SE_Reject;
	//store.nocounter = data.data[0].CounterBoyLimitDealer;
	//store.refer_code = data.data[0].refer_code;

	store.isLive= data.data[0].state_live_status;


	document.getElementById('pendingct').innerHTML=store.sepending;
	document.getElementById('approvedct').innerHTML=store.seapproved;
	document.getElementById('rejectct').innerHTML=store.serejected;
	//document.getElementById('dealer_ppic_main').src=versionurl+'uploads/dealer_'+store.storemobile;
	//document.getElementById('dealer_ppic_panel').src=versionurl+'uploads/dealer_'+store.storemobile;
	/*if(store.store_dd!='')
		{
		
		$('#update_dob_del').val(store.store_yy+'-'+store.store_mm+'-'+store.store_dd);
		
		}

	var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_del').setAttribute("max", today);

	$('#update_name_del').val(store.store_name);
	$('#update_surname_del').val(store.storelastname);


    $('#update_contact_del').val(store.dispatchcontactperson);
	
	$('#update_pmobile_del').val(store.storemobile);
	$('#update_omobile_del').val(store.storepaytmno);

	$('#update_email_del').val(store.storeemail);

	if(store.store_dd!='' && store.store_mm!='' && store.store_yy!='')
		$('#update_dob_del').val(store.store_dd+'-'+store.store_mm+'-'+store.store_yy);

	$('#update_flat_del').val(store.storeaddr);
	$('#update_address_del').val(store.storelocation);
	$('#update_state_del').val(store.storestate);
	//$("#update_state_del").selectmenu('refresh');
	$('#update_city_del').val(store.storecity);
	$('#update_district_del').val(store.district);
	//$('#update_tehsil_del').val(store.storetehsil);
	$('#update_pin_del').val(store.storezip);

	$('#update_bankname_del').val(store.storebankname);
	$('#update_bankac_del').val(store.storebankacno);
	$('#update_bankifsc_del').val(store.storebankifsc);
	$('#update_bankcity_del').val(store.storebankcity);
	$('#update_bankbranch_del').val(store.storebankaddr);
	$('#share_refer_code').val(store.refer_code);*/
		//brand_id=user.brand_id;
	 //console.log('TEST'+data.data[0].store_name);
     localStorage.setItem('storeid',data.data[0].store_id);
    $('#username').val('');
    $('#password').val('');
    
    localStorage.setItem('usernamemloyal_ufi',uname);
    localStorage.setItem('userpassloyal_ufi',pwd);

    localStorage.setItem('store_id',store.store_id);
    localStorage.setItem('store_name',store.store_name);
    //localStorage.setItem('redeem_logic',store.redeem_logic);
    localStorage.setItem('store_members',store.store_members);
    localStorage.setItem('store_rank',store.store_rank);
	//localStorage.setItem('store_category',store.store_category);
    //localStorage.setItem('admin_id',store.admin_id);
    //localStorage.setItem('brand_id',store.brand_id);
	localStorage.setItem('district_ufi',store.district);
	localStorage.setItem('userdist_ufifilters',store.district);
	localStorage.setItem('storepoint_ufi',store.storepoints);
	localStorage.setItem('storepoint_r_ufi',store.Retailer_Balance_Points);
	localStorage.setItem('storemobile_ufifilters',store.storemobile);
	localStorage.setItem('storecode_ufi',store.storecode);
	//localStorage.setItem('secode',store.secode);

	//localStorage.setItem('isLive',store.isLive);



	
	//localStorage.setItem("refer_code_ck",store.refer_code);
    document.getElementById("user_name").innerHTML=store.store_name;
	document.getElementById("storenm").innerHTML=store.store_name;
	
    //document.getElementById("storedistrict").innerHTML=store.district;
    document.getElementById("user_id").innerHTML='GST No '+store.gstno;
	document.getElementById("user_id1").innerHTML='GST No '+store.gstno;
    document.getElementById("wallet_points").innerHTML=checkforundefinedPts(store.walletpoints);
	//document.getElementById("user_points").innerHTML=checkforundefinedPts(store.storepoints);

     //document.getElementById("user_points_ret").innerHTML=store.Retailer_Balance_Points;
    //document.getElementById("username_wnew").innerHTML=store.Store_mgr;
    //document.getElementById("userloc_wnew").innerHTML=store.district;
    document.getElementById("pointbal_bal").innerHTML=checkforundefinedPts(store.Retailer_Balance_Points);
    //document.getElementById("pointspass_ret1_dealer").innerHTML=checkforundefinedPts(store.storepoints);
	document.getElementById("pointspass_del1_dealer").innerHTML=checkforundefinedPts(store.walletpoints);
	document.getElementById("deal_pt").innerHTML=checkforundefinedPts(store.walletpoints);
    //document.getElementById("dealerid_panel").innerHTML='<img src="https://chart.googleapis.com/chart?cht=qr&chs=150x150&chld=L|1&chl='+store.store_id+'" class="img-responsive" alt=""/>';
	document.getElementById("dealerid_panel").innerHTML='<img src="https://chart.googleapis.com/chart?cht=qr&chs=150x150&chld=L|1&chl='+store.Store_mgr+'#Dealer#'+store.storecode+'" class="img-responsive" alt=""/>';

	//$('#user_id').css('display','none');
	//$('#user_id1').css('display','none');
	//$('#side_edit_profile').css('display','none');
	//alert('djdjjddjd');
	/*setting up profilepage*/
	document.getElementById("profile_name").innerHTML=store.storefirstname;
	//document.getElementById("profile_name").innerHTML=store.dispatchcontactperson;
	document.getElementById("profile_id").innerHTML='Mobile No '+store.storephone;
	
	document.getElementById("transferfromregid").innerHTML=store.storephone;
	$('#profile_join').css('display','none');
	document.getElementById("profile_isapproved").innerHTML= 'Verified';	

    localStorage.setItem("usermtype_ufifilters",localStorage.getItem('cattype'));
	console.log(localStorage.getItem('cattype'));
    if(localStorage.getItem('cattype')=='Dealer' || localStorage.getItem('cattype')=='dealer')
    {
		
    	$('#profilehead').css('display', 'block');
    	$('#userpoint').css('display', 'block');
    	$('#approveddigit').css('display', 'none');
    	$('#pointstransferpanel').css('display', 'block');
		$('#pointsrevokepanel').css('display', 'block');
    	$('#pointspasspanel').css('display', 'block');
    	$('#addcounterpanel').css('display', 'block');
    	$('#rewardspanel').css('display', 'none');
    	$('#rewardshis_panel').css('display', 'block');
    	$('#transferpanel').css('display', 'block');
    	$('#schemepanel').css('display', 'block');
    	$('#retailerapprovalpanel').css('display', 'none');
    	$('#counterapprovalpanel').css('display', 'none');
    	$('#historyapprovalpanel').css('display', 'none');
    	$('#referralpanel').css('display', 'none');
    	$('#tncpanel').css('display', 'block');
		$('#side_edit_profile').css('display','block');
        
		$('#dealer_2').css('display','none');
		$('#dealer_9').css('display','none');
		$('#dealer_10').css('display','none');
    }
    else
    {

    	document.getElementById("storenm").innerHTML=store.sename;
    	document.getElementById("user_id1").innerHTML='SE Code'+store.secode;
		//document.getElementById("username_wnew").innerHTML=store.sename;
    	$('#profilehead').css('display', 'none');
    	$('#userpoint').css('display', 'none');
    	$('#approveddigit').css('display', 'block');
    	$('#pointstransferpanel').css('display', 'none');
		$('#pointsrevokepanel').css('display', 'none');
    	$('#pointspasspanel').css('display', 'none');
    	$('#addcounterpanel').css('display', 'none');
    	$('#rewardspanel').css('display', 'none');
    	$('#rewardshis_panel').css('display', 'none');
    	$('#transferpanel').css('display', 'none');
    	$('#schemepanel').css('display', 'none');
    	$('#retailerapprovalpanel').css('display', 'block');
    	$('#counterapprovalpanel').css('display', 'block');
    	$('#historyapprovalpanel').css('display', 'block');
    	$('#referralpanel').css('display', 'block');
    	$('#tncpanel').css('display', 'none');
		$('#side_edit_profile').css('display','none');

		$('#dealer_1').css('display','none');
		$('#dealer_2').css('display','none');
		$('#dealer_3').css('display','none');
		$('#dealer_4').css('display','flex');
		$('#dealer_5').css('display','none');
		$('#dealer_6').css('display','none');
		$('#dealer_7').css('display','none');
		$('#dealer_8').css('display','flex');
		$('#dealer_9').css('display','flex');
		$('#dealer_10').css('display','flex');

		$('#pointspasspanel').css('display','none');
		$('#rewardspanel').css('display','none');
		$('#dealer_lpanel_1').css('display','none');
		$('#dealer_lpanel_2').css('display','block');
		$('#dealer_lpanel_3').css('display','none');
		$('#dealer_lpanel_4').css('display','none');
    }
    fetchdistrict1(store.storestate);

	var new_app=localStorage.getItem('latestApp');

  	if(new_app==null || new_app=='')
  		new_app='true';

	

     if(new_app=='true')
 	{

    $.mobile.changePage( "#dealerhomepage", { transition: "none"} );
    }

    else{
				console.log("in else");
				 $.mobile.changePage( "#downpage", { transition: "none"} );
	}
    //$.mobile.changePage( "#profilepage", { transition: "none"} );
   /*$( ":mobile-pagecontainer" ).pagecontainer( 
    "change", 
    "#homePage", 
    { reload : true, showLoadMsg : false } 
);*/
   }else{


				  toast('Authentication failed');
				  localStorage.removeItem('usernamemloyal_ufi');
				  localStorage.removeItem('userpassloyal_ufi');
				  /*$('#dealercodeBox1').val('');
				  $('#dealercodeBox2').val('');
				  $('#dealercodeBox3').val('');
				  $('#dealercodeBox4').val('');*/

				  $('#dealerusername').val('');
				  $('#dealerpassword').val('');

				   //$('#dealerusername').val(localStorage.getItem('usernamemloyal_ufi'));
		           $.mobile.changePage( "#page-login-dealer", { transition: "flip"} );	


				 
   }
    },
    error: function(xhr, textStatus, errorThrown) {
		
		//toast('dealer auth:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
  

   


   

 }
}


function dealerauthenticate_se()
{

 //var SERVER2 = 'https://ckbirla.mloyalretail.com/apis/';

 var uname = $('#dealerusername_se').val();
 var pwd = $('#dealerpassword_se').val();
 //var pwd = $('#dealercodeBox1').val()+$('#dealercodeBox2').val()+$('#dealercodeBox3').val()+$('#dealercodeBox4').val();

 if(uname=='' || pwd==''){
  toast('Please enter Username/password');
 }else{
  

 $.ajax({
   url: SERVER2+'forgot_pswd_dealer_se_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'apiuid':'MLOYALUFIAPI','apipswd':'Ml0yalUFIAP!2!','login_name': uname, 'user_pwd': pwd,'Status_flag':'1'},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {

     console.log('data'+JSON.stringify(data));

	    if(data.error.length>0)
		{
			toast('Authentication failed');

			localStorage.removeItem('usernamemloyal_ufi');
			localStorage.removeItem('userpassloyal_ufi');
			
			$('#dealerusername_se').val('');
			$('#dealerpassword_se').val('');

		}	
		else
		{
			//toast(data.data);

			store.secode = data.SEdata[0].SE_code ;
			store.sename = data.SEdata[0].SE_name;

			document.getElementById("user_id_se").innerHTML='SE Code '+store.secode;
    		document.getElementById("user_id1_se").innerHTML='SE Code '+store.secode;
			document.getElementById("user_name_se").innerHTML= store.sename;
			document.getElementById("user_name_se1").innerHTML= store.sename;

			localStorage.setItem('usernamemloyal_ufi',uname);
			localStorage.setItem('userpassloyal_ufi',pwd);

			localStorage.setItem('store_code_se',uname);

			var new_app=localStorage.getItem('latestApp');

		    if(new_app==null || new_app=='')
			new_app='true';


			if(new_app=='true')
			{

				$.mobile.changePage( "#dealerhomepage_se", { transition: "none"} );
			}

			else
			{
						console.log("in else");
						$.mobile.changePage( "#downpage", { transition: "none"} );
			}


		}
    
    },
    error: function(xhr, textStatus, errorThrown) {
		
		//toast('dealer auth:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
  
 }
}

function dealerauthenticate1(){
 //localStorage.setItem('usernamemloyal_ufi','303049');

//choosecontact();
 
 //$('#dealerusername').val('303049');
 var uname = $('#dealerusername').val();
 var pwd = $('#dealerpassword').val();
 //var pwd = $('#dealercodeBox1').val()+$('#dealercodeBox2').val()+$('#dealercodeBox3').val()+$('#dealercodeBox4').val();

 if(uname=='' || pwd==''){
  toast('Please enter Username/password');
 }else{
  

 $.ajax({
   url: SERVER2+'login_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','userid': uname, 'pswd': pwd,'device_id':reg_id},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {

     console.log('data'+JSON.stringify(data));
    //alert('JSONDATA'+JSON.stringify(data));

	
   
   if(data.data.length=='1'){
    store.store_id = data.data[0].store_id;
    store.store_name = data.data[0].store_name;
	//store.store_category = data.data[0].store_category;

    //store.redeem_logic = data.data[0].redeem_logic;
	store.store_members = data.data[0].store_members;
	store.store_rank = data.data[0].store_rank;
    //store.admin_id = data.data[0].admin_id;
    //store.brand_id = data.data[0].global_brand_id;

	store.district = data.data[0].store_district;
	store.walletpoints = data.data[0].Balance_Points;
	store.storepoints = data.data[0].Dealer_Points;
	store.Retailer_Balance_Points=data.data[0].Retailer_Balance_Points;
	store.storemobile = data.data[0].Store_mobnumber;
	store.storecode = data.data[0].store_code;

  store.storefirstname = data.data[0].Store_mgr;
  store.division = data.data[0].state_division;
  console.log('store.division'+store.division);
	var cattype = localStorage.getItem('cattype');
	//console.log(cattype);
	if(cattype == 'dealer') 
	{

			user.mobile=store.storemobile;
	}
	else
	{
			//user.mobile=uname;
			user.mobile=store.storemobile;

	}

	//Division Pipes - 31, 32, 33, 34, 35, 37, 88  && Putty - 36, 81, 88
	if(store.division == '31' || store.division == '32' || store.division == '33' || store.division == '34' || store.division == '35' || store.division == '37')
	{
		  $('#sales_data_panel_other').css('display','none');
		  $('scandiv_panel_other').css('display','block');
		localStorage.setItem("retaiter_type","Putty");
				  /*document.getElementById("mainhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("saleshlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("schhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("refhlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("wathlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("emphlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("sochlogo").src='assets/images/logo_home_putty.png';
                  document.getElementById("scanhlogo").src='assets/images/logo_home_putty.png';*/
				  document.getElementById("mainhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("saleshlogo").src='assets/images/logo_inner.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("schhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("refhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("wathlogo").src='assets/images/logo_inner.png';
                  document.getElementById("emphlogo").src='assets/images/logo_inner.png';
                  document.getElementById("sochlogo").src='assets/images/logo_inner.png';
                  document.getElementById("scanhlogo").src='assets/images/logo_inner.png';
                 
	}
	else if(store.division == '36' || store.division == '81')
	{
		 $('#sales_data_panel_other').css('display','block');
		 $('scandiv_panel_other').css('display','none');
		localStorage.setItem("retaiter_type","pipes");
				  /*document.getElementById("mainhlogo").src='assets/images/logo_home_pipes.png';
               	  document.getElementById("saleshlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("schhlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("refhlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("wathlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("emphlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("sochlogo").src='assets/images/logo_home_pipes.png';
                  document.getElementById("scanhlogo").src='assets/images/logo_home_pipes.png';*/
				  document.getElementById("mainhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("saleshlogo").src='assets/images/logo_inner.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("schhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("refhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("wathlogo").src='assets/images/logo_inner.png';
                  document.getElementById("emphlogo").src='assets/images/logo_inner.png';
                  document.getElementById("sochlogo").src='assets/images/logo_inner.png';
                  document.getElementById("scanhlogo").src='assets/images/logo_inner.png';
                  
	}

	else
                {
                	 $('#sales_data_panel_other').css('display','block');
                	  $('scandiv_panel_other').css('display','none');
                  document.getElementById("mainhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("saleshlogo").src='assets/images/logo_inner.png';
                  document.getElementById("rewhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("schhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("refhlogo").src='assets/images/logo_inner.png';
                  document.getElementById("wathlogo").src='assets/images/logo_inner.png';
                  document.getElementById("emphlogo").src='assets/images/logo_inner.png';
                  document.getElementById("sochlogo").src='assets/images/logo_inner.png';
                  document.getElementById("scanhlogo").src='assets/images/logo_inner.png';

                }

	/*if(typeof store.storemobile==undefined || store.storemobile=='undefined'|| store.storemobile==null || store.storemobile=='null' || store.storemobile=='')
    {
        store.storemobile='XXXXX';
    }*/
	if(typeof store.storefirstname==undefined || store.storefirstname=='undefined'|| store.storefirstname==null || store.storefirstname=='null' || store.storefirstname=='')
    {
        store.storefirstname='User';
    }

	//store.dispatchcontactperson = data.data[0].dispatchcontactperson;
	store.storeaddr = data.data[0].Store_address;
	store.storelocation = data.data[0].Store_location;
	store.storecity = data.data[0].Store_city;
	store.storestate = data.data[0].Store_state;
	store.storecountry = data.data[0].Store_Country;
	store.storezone = data.data[0].store_zone;
	store.storezip = data.data[0].store_zip;
	store.storephone = data.data[0].Store_phonenumber;
	store.storeemail = data.data[0].store_emailid;
	//store.sename = data.data[0].SE_Name;
	//store.secode = data.data[0].SE_code;
	//store.bmname = data.data[0].BM_Name;
	store.panno = data.data[0].PanNo;
	store.gstno = data.data[0].GstIn;
	//store.storelastname = data.data[0].Store_mgr_lastname;
	//store.store_dd = data.data[0].Store_mgr_DobDay;
	//store.store_mm = data.data[0].Store_mgr_DobMonth;
	//store.store_yy = data.data[0].Store_mgr_DobYear;
	//store.storeflatno = data.data[0].Store_FlatNo;
	//store.storestreet = data.data[0].Store_Street;
	//store.storetehsil = data.data[0].store_Tehsil;
	//store.storepaytmno = data.data[0].Store_Paytm_no;
	//store.storebankname = data.data[0].Store_Bank_Name;
	//store.storebankacno = data.data[0].Store_Bank_ACNO;
	//store.storebankifsc = data.data[0].Store_Bank_IFSC;
	//store.storebankcity = data.data[0].Store_Bank_City;
	//store.storebankaddr = data.data[0].Bank_Branch_Address;
	store.sepending = data.data[0].SE_Pending_Approval;
	//store.sepending = data.data[0].SE_Pending_Approval_BySECode;
	store.seapproved = data.data[0].SE_Approved;
	store.serejected = data.data[0].SE_Reject;
	//store.nocounter = data.data[0].CounterBoyLimitDealer;
	//store.refer_code = data.data[0].refer_code;

	store.isLive= data.data[0].state_live_status;


	document.getElementById('pendingct').innerHTML=store.sepending;
	document.getElementById('approvedct').innerHTML=store.seapproved;
	document.getElementById('rejectct').innerHTML=store.serejected;
	//document.getElementById('dealer_ppic_main').src=versionurl+'uploads/dealer_'+store.storemobile;
	//document.getElementById('dealer_ppic_panel').src=versionurl+'uploads/dealer_'+store.storemobile;
	/*if(store.store_dd!='')
		{
		
		$('#update_dob_del').val(store.store_yy+'-'+store.store_mm+'-'+store.store_dd);
		
		}

	var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_del').setAttribute("max", today);

	$('#update_name_del').val(store.store_name);
	$('#update_surname_del').val(store.storelastname);


    $('#update_contact_del').val(store.dispatchcontactperson);
	
	$('#update_pmobile_del').val(store.storemobile);
	$('#update_omobile_del').val(store.storepaytmno);

	$('#update_email_del').val(store.storeemail);

	if(store.store_dd!='' && store.store_mm!='' && store.store_yy!='')
		$('#update_dob_del').val(store.store_dd+'-'+store.store_mm+'-'+store.store_yy);

	$('#update_flat_del').val(store.storeaddr);
	$('#update_address_del').val(store.storelocation);
	$('#update_state_del').val(store.storestate);
	//$("#update_state_del").selectmenu('refresh');
	$('#update_city_del').val(store.storecity);
	$('#update_district_del').val(store.district);
	//$('#update_tehsil_del').val(store.storetehsil);
	$('#update_pin_del').val(store.storezip);

	$('#update_bankname_del').val(store.storebankname);
	$('#update_bankac_del').val(store.storebankacno);
	$('#update_bankifsc_del').val(store.storebankifsc);
	$('#update_bankcity_del').val(store.storebankcity);
	$('#update_bankbranch_del').val(store.storebankaddr);
	$('#share_refer_code').val(store.refer_code);*/
		//brand_id=user.brand_id;
	 //console.log('TEST'+data.data[0].store_name);
     localStorage.setItem('storeid',data.data[0].store_id);
    $('#username').val('');
    $('#password').val('');
    
    localStorage.setItem('usernamemloyal_ufi',uname);
    localStorage.setItem('userpassloyal_ufi',pwd);

    localStorage.setItem('store_id',store.store_id);
    localStorage.setItem('store_name',store.store_name);
    //localStorage.setItem('redeem_logic',store.redeem_logic);
    localStorage.setItem('store_members',store.store_members);
    localStorage.setItem('store_rank',store.store_rank);
	//localStorage.setItem('store_category',store.store_category);
    //localStorage.setItem('admin_id',store.admin_id);
    //localStorage.setItem('brand_id',store.brand_id);
	localStorage.setItem('district_ufi',store.district);
	localStorage.setItem('userdist_ufifilters',store.district);
	localStorage.setItem('storepoint_ufi',store.storepoints);
	localStorage.setItem('storepoint_r_ufi',store.Retailer_Balance_Points);
	localStorage.setItem('storemobile_ufifilters',store.storemobile);
	localStorage.setItem('storecode_ufi',store.storecode);
	//localStorage.setItem('secode',store.secode);

	//localStorage.setItem('isLive',store.isLive);



	
	//localStorage.setItem("refer_code_ck",store.refer_code);
    document.getElementById("user_name").innerHTML=store.store_name;
	document.getElementById("storenm").innerHTML=store.store_name;
	
    //document.getElementById("storedistrict").innerHTML=store.district;
    document.getElementById("user_id").innerHTML='GST No '+store.gstno;
	document.getElementById("user_id1").innerHTML='GST No '+store.gstno;
    document.getElementById("wallet_points").innerHTML=checkforundefinedPts(store.walletpoints);
	//document.getElementById("user_points").innerHTML=checkforundefinedPts(store.storepoints);

     //document.getElementById("user_points_ret").innerHTML=store.Retailer_Balance_Points;
    //document.getElementById("username_wnew").innerHTML=store.Store_mgr;
    //document.getElementById("userloc_wnew").innerHTML=store.district;
    document.getElementById("pointbal_bal").innerHTML=checkforundefinedPts(store.Retailer_Balance_Points);
    //document.getElementById("pointspass_ret1_dealer").innerHTML=checkforundefinedPts(store.storepoints);
	document.getElementById("pointspass_del1_dealer").innerHTML=checkforundefinedPts(store.walletpoints);
	document.getElementById("deal_pt").innerHTML=checkforundefinedPts(store.walletpoints);
    //document.getElementById("dealerid_panel").innerHTML='<img src="https://chart.googleapis.com/chart?cht=qr&chs=150x150&chld=L|1&chl='+store.store_id+'" class="img-responsive" alt=""/>';
	document.getElementById("dealerid_panel").innerHTML='<img src="https://chart.googleapis.com/chart?cht=qr&chs=150x150&chld=L|1&chl='+store.Store_mgr+'#Dealer#'+store.storecode+'" class="img-responsive" alt=""/>';

	//$('#user_id').css('display','none');
	//$('#user_id1').css('display','none');
	//$('#side_edit_profile').css('display','none');
	//alert('djdjjddjd');
	/*setting up profilepage*/
	document.getElementById("profile_name").innerHTML=store.storefirstname;
	//document.getElementById("profile_name").innerHTML=store.dispatchcontactperson;
	document.getElementById("profile_id").innerHTML='Mobile No '+store.storephone;
	
	document.getElementById("transferfromregid").innerHTML=store.storephone;
	$('#profile_join').css('display','none');
	document.getElementById("profile_isapproved").innerHTML= 'Verified';	

    localStorage.setItem("usermtype_ufifilters",localStorage.getItem('cattype'));
	console.log(localStorage.getItem('cattype'));
    if(localStorage.getItem('cattype')=='Dealer' || localStorage.getItem('cattype')=='dealer')
    {
		
    	$('#profilehead').css('display', 'block');
    	$('#userpoint').css('display', 'block');
    	$('#approveddigit').css('display', 'none');
    	$('#pointstransferpanel').css('display', 'block');
		$('#pointsrevokepanel').css('display', 'block');
    	$('#pointspasspanel').css('display', 'block');
    	$('#addcounterpanel').css('display', 'block');
    	$('#rewardspanel').css('display', 'none');
    	$('#rewardshis_panel').css('display', 'block');
    	$('#transferpanel').css('display', 'block');
    	$('#schemepanel').css('display', 'block');
    	$('#retailerapprovalpanel').css('display', 'none');
    	$('#counterapprovalpanel').css('display', 'none');
    	$('#historyapprovalpanel').css('display', 'none');
    	$('#referralpanel').css('display', 'none');
    	$('#tncpanel').css('display', 'block');
		$('#side_edit_profile').css('display','block');
        
		$('#dealer_2').css('display','none');
		$('#dealer_9').css('display','none');
		$('#dealer_10').css('display','none');
    }
    else
    {

    	document.getElementById("storenm").innerHTML=store.sename;
    	document.getElementById("user_id1").innerHTML='SE Code'+store.secode;
		//document.getElementById("username_wnew").innerHTML=store.sename;
    	$('#profilehead').css('display', 'none');
    	$('#userpoint').css('display', 'none');
    	$('#approveddigit').css('display', 'block');
    	$('#pointstransferpanel').css('display', 'none');
		$('#pointsrevokepanel').css('display', 'none');
    	$('#pointspasspanel').css('display', 'none');
    	$('#addcounterpanel').css('display', 'none');
    	$('#rewardspanel').css('display', 'none');
    	$('#rewardshis_panel').css('display', 'none');
    	$('#transferpanel').css('display', 'none');
    	$('#schemepanel').css('display', 'none');
    	$('#retailerapprovalpanel').css('display', 'block');
    	$('#counterapprovalpanel').css('display', 'block');
    	$('#historyapprovalpanel').css('display', 'block');
    	$('#referralpanel').css('display', 'block');
    	$('#tncpanel').css('display', 'none');
		$('#side_edit_profile').css('display','none');

		$('#dealer_1').css('display','none');
		$('#dealer_2').css('display','none');
		$('#dealer_3').css('display','none');
		$('#dealer_4').css('display','flex');
		$('#dealer_5').css('display','none');
		$('#dealer_6').css('display','none');
		$('#dealer_7').css('display','none');
		$('#dealer_8').css('display','flex');
		$('#dealer_9').css('display','flex');
		$('#dealer_10').css('display','flex');

		$('#pointspasspanel').css('display','none');
		$('#rewardspanel').css('display','none');
		$('#dealer_lpanel_1').css('display','none');
		$('#dealer_lpanel_2').css('display','block');
		$('#dealer_lpanel_3').css('display','none');
		$('#dealer_lpanel_4').css('display','none');
    }
    fetchdistrict1(store.storestate);

	var new_app=localStorage.getItem('latestApp');

  	if(new_app==null || new_app=='')
  		new_app='true';

	

     if(new_app=='true')
 	{

    $.mobile.changePage( "#dealerhomepage", { transition: "none"} );
    }

    else{
				console.log("in else");
				 $.mobile.changePage( "#downpage", { transition: "none"} );
	}
    //$.mobile.changePage( "#profilepage", { transition: "none"} );
   /*$( ":mobile-pagecontainer" ).pagecontainer( 
    "change", 
    "#homePage", 
    { reload : true, showLoadMsg : false } 
);*/
   }else{


				  toast('Authentication failed');
				  localStorage.removeItem('usernamemloyal_ufi');
				  localStorage.removeItem('userpassloyal_ufi');
				  /*$('#dealercodeBox1').val('');
				  $('#dealercodeBox2').val('');
				  $('#dealercodeBox3').val('');
				  $('#dealercodeBox4').val('');*/

				  $('#dealerusername').val('');
				  $('#dealerpassword').val('');

				   //$('#dealerusername').val(localStorage.getItem('usernamemloyal_ufi'));
		           $.mobile.changePage( "#page-login-dealer", { transition: "flip"} );	


				 
   }
    },
    error: function(xhr, textStatus, errorThrown) {
		
		//toast('dealer auth:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
  

   


   

 }
}



function updateElectrician()
{
		$('#userapprove').popup('close');
 
		var mobileno = $('#update_pmobile_elec').val();
		var ename =   $('#update_name_elec').val();

		
		var surname =   $('#update_surname_elec').val();
		var othermobile =  '';//$('#update_omobile_elec').val();
		//var ephoto = $('#cardimage_self_elec').val();
		//var eid = $('#cardimage_proof_elec').val();
		var mm ='';
		var dd ='';
		var yyyy = '';
		var birthday = $('#update_dob_elec1').val();

		
		if(birthday!='')
		{
			var dob = birthday.split('-');
			dd = dob.length == 3 ? dob[2] : '';
			mm = dob.length == 3 ? dob[1] : '';
			yyyy = dob.length == 3 ? dob[0] : '';

			
		   $('#update_dob_elec').val(yyyy+'-'+mm+'-'+dd);

           
		}
		else
		{
			var birthday = $('#update_dob_elec').val();
			if(birthday!='')
				{
				var dob = birthday.split('-');
				mm = dob.length == 3 ? dob[1] : '';
				dd = dob.length == 3 ? dob[0] : '';
				dd1 = dob.length == 3 ? dob[0] : '';

				yyyy = dob.length == 3 ? dob[2] : '';
				yyyy1 = dob.length == 3 ? dob[2] : '';

				 //  $('#update_dob_elec').val(yyyy+'-'+mm+'-'+dd);
				 
				 

				}

				

		}
		if(dd.length==4)
		{
			yyyy=dd1;
			dd=yyyy1;


		}


		var marriage =  $('input[name=update_marriage_elec]:checked').val();
		//var refcode = $('#update_ref_elec').val();
		var email = $('#update_email_elec').val();

		var flat = $('#update_flat_elec').val();
		var add = $('#update_address_elec').val();
		var state = $('#update_state_elec').val();
		var dist = $('#update_district_elec option:selected').text();
		var city = $('#update_city_elec').val();
		var town = '';
		var village = '';
		var tehsil = '';//$('#update_tehsil_elec').val();
		var pincode = $('#update_pin_elec').val();
    var storecode = $('#update_store_elec').val();
		//var bankname = $('#update_bankname_elec').val();
		var bankac = $('#update_bankac_elec').val();
		/*var bankifsc = $('#update_bankifsc_elec').val();
		var bankcity = $('#update_bankcity_elec').val();
		var bankbranch = $('#update_bankbranch_elec').val();*/
		
		
		var pancardno = $('#update_pan_elec').val();

        
		var ditrtobuy=$('#update_ditrtobuy_elec').val();
		var brandstobuy=$('#update_brandstobuy_elec').val();
		//var firmage=$('#update_firmage_elec').val();
		var firmage='';

		//var panimg = localStorage.getItem('panimg');
		//var panimgback = localStorage.getItem('panimg_back');
		//var adimgback = localStorage.getItem('adimg_back');
		
		//alert(panimg);
		var adharno = $('#update_adhar_elec').val();

		var adhimg = localStorage.getItem('adimg');
		//var gstno = $('#update_gst_elec1').val();
		var gstno = '';
		var filenm = localStorage.getItem('selfimg');
		//var filenmdoc = localStorage.getItem('docimg');
		//var shopimg = localStorage.getItem('shopimg');
		//var chqimg = localStorage.getItem('chqimg');
		


		if(typeof filenm == undefined || filenm == null)
			filenm = '';
		
	
        if($('#update_name_elec').val().trim()=='')
        {
                toast('Name cannot be blank');
                $('#update_name_elec').focus();
                $('#update_name_elec').scrollIntoView();
        }
        else if($('#update_surname_elec').val().trim()=='')
        {
                toast('Surname cannot be blank');
                $('#update_surname_elec').focus();
                $('#update_surname_elec').scrollIntoView();
        }
        else if($('#update_pmobile_elec').val().trim()=='')
        {
                toast('Mobile No cannot be blank');
                $('#update_pmobile_elec').focus();
                $('#update_pmobile_elec').scrollIntoView();
        }
        /*else if($('#update_omobile_elec').val().trim()=='')
        {
                toast('Paytm No cannot be blank');
                $('#update_omobile_elec').focus();
                $('#update_omobile_elec').scrollIntoView();
        }
        else if($('#update_dob_elec').val().trim()=='')
        {
                toast('DOB cannot be blank');
                $('#update_dob_elec').focus();
                $('#update_dob_elec').scrollIntoView();
        }
                
        else if($('#update_email_elec').val().trim()=='')
        {
                toast('Email cannot be blank');
                $('#update_email_elec').focus();
                $('#update_email_elec').scrollIntoView();
        }
         else if($('input[name=update_gender_elec]:checked').val()=='')
        {
                toast('Gender cannot be blank');
                $('#update_gender_elec').focus();
                $('#update_gender_elec').scrollIntoView();
        }
        else if($('#update_flat_elec').val().trim()=='')
        {
                        
                toast('Flat/Door cannot be blank');
                $('#update_flat_elec').focus();
                $('#update_flat_elec').scrollIntoView();
        }*/

        else if($('#update_address_elec').val().trim()=='')
        {
                        
                toast('Lane cannot be blank');
                $('#update_address_elec').focus();
                $('#update_address_elec').scrollIntoView();
        }

       /* else if($('#update_district_elec').val()=='')
        {
                        
                toast('District cannot be blank');
                $('#update_district_elec').focus();
                $('#update_district_elec').scrollIntoView();
        }
         else if($('#update_district_elec').val()==null)
        {
                        
                toast('District cannot be blank');
                $('#update_district_elec').focus();
                $('#update_district_elec').scrollIntoView();
        }*/
        else if($('#update_state_elec').val()==null)
        {
                        
                toast('Please select state');
                $('#update_state_elec').focus();
                $('#update_state_elec').scrollIntoView();
        }
         else if($('#update_pin_elec').val().trim()=='')
        {
                        
                toast('Pin cannot be blank');
                $('#update_pin_elec').focus();
                $('#update_pin_elec').scrollIntoView();
        }
        else if($('#update_city_elec').val()==null)
        {
                        
                toast('Please select city');
                $('#update_city_elec').focus();
                $('#update_city_elec').scrollIntoView();
        }
        else if($('#update_store_elec').val().trim()=='')
        {
                        
                toast('Distributor cannot be blank');
                $('#update_store_elec').focus();
                $('#update_store_elec').scrollIntoView();
        }
		/*else if($('#update_adhar_elec').val().trim()=='')
        {
                        
                toast('Please fill Aadhar Number');
                $('#update_adhar_elec').focus();
                $('#update_adhar_elec').scrollIntoView();
        }*/
        /*else if($('#update_adhar_elec').val().trim()=='' && $('#update_pan_elec').val().trim()=='')
        {
                        
                toast('Please fill either Aadhar Number or Pan Number');
                $('#update_adhar_elec').focus();
                $('#update_adhar_elec').scrollIntoView();
        }
		else if($('#update_pan_elec').val().trim()=='')
        {
                        
                toast('Please fill Pan Number');
                $('#update_pan_elec').focus();
                $('#update_pan_elec').scrollIntoView();
        }
        else if($('#update_bankname_elec').val()!='' || $('#update_bankac_elec').val()!='' || $('#update_bankifsc_elec').val()!='' || $('#update_bankcity_elec').val()!='' || $('#update_bankbranch_elec').val()!='')
		{
               if($('#update_bankname_elec').val().trim()=='')
			{
					toast('Please fill Bank Name');
					$('#update_bankname_elec').focus();
					$('#update_bankname_elec').scrollIntoView();
			} 
			else if($('#update_bankac_elec').val().trim()=='')
			{
							
					toast('Please fill Bank Ac');
					$('#update_bankac_elec').focus();
					$('#update_bankac_elec').scrollIntoView();
			}
			else if($('#update_bankifsc_elec').val().trim()=='')
			{
							
					toast('Please fill IFSC Code');
					$('#update_bankifsc_elec').focus();
					$('#update_bankifsc_elec').scrollIntoView();
			}
			else if($('#update_bankcity_elec').val().trim()=='')
			{
							
					toast('Please fill Bank City');
					$('#update_bankcity_elec').focus();
					$('#update_bankcity_elec').scrollIntoView();
			}
			else if($('#update_bankbranch_elec').val().trim()=='')
			{
							
					toast('Please fill Bank Branch');
					$('#update_bankbranch_elec').focus();
					$('#update_bankbranch_elec').scrollIntoView();
			}
			else if(chqimg=='')
			{
                toast('Please upload cancelled cheque image');
                $('#cardimage_chq_elec').focus();
                $('#cardimage_chq_elec').scrollIntoView();
			}
        }  */  
		else if(!checkemail('update_email_elec'))
        {
			//do nothing
        	
        }	
	else
	{

	$.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				'mobileno': mobileno,
				//'shop_name': shopname,
				'GSTNo': gstno,
				//'Shop_Establishment_Cert': estimg,
				//'PhotoofShop': shopimg,
				'FirstName': ename,
				//'other_mobile_no': othermobile,
				'Photo': filenm,
				//'PersonalID': filenmdoc,
				'FlatNo' : flat,
				'Lane': add,
				'City': city,
				'Town': town,
				//'Village': village,
				'PostalCode': pincode,
				'District': dist,
				'State': state,
				'email': email,
				//'WhatsAppNo':othermobile,
				'lastName':surname,
				'Tehsil':tehsil,
				//'BankName':bankname,
				'Bank_Ac_No':bankac,
				//'IFSC_code':bankifsc,
				//'Bank_City':bankcity,
				//'Bank_Branch_Address':bankbranch,
				'Aadhar_Card_No':adharno,
				'Aadhar_Card_Photo':adhimg,
				'Pan_card_no': pancardno,
				//'Pan_Card_Photo':panimg,
				//'GstPhoto':gstimg,
				//'Ref_code':refcode,
				'GSTNo':gstno,
				'dd':dd,
				'mm':mm,
				'yy':yyyy,
				'Membertype': 'Painter',
				'deviceid':reg_id,
				'devicetype':deviceType,
				//'Gender':gender,
				//'Cancelledcheque':chqimg,
				//'Aadhar_Card_Photo_2':adimgback,
				//'Pan_Card_Photo_2':panimgback
				'shop_name':'',
				'brands_to_buy':brandstobuy,
				'firm_age': firmage,
				'marritalstatus': marriage,
				'storecode':storecode
			},
			success: function(data, textStatus, xhr) {
				
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						//toast('Your profile has been updated successfully.');
						//toastscan('You can now start scanning the Painter QR Code on the product once your registration form is verified by our exectuive, your rewards will be credited to your paytm wallet to use.');
						//alert(user.isApproved);
						//if(user.isApproved=='UnApproved' || user.isApproved=='PENDING')
				       // {
				        	 $('#withoutscan').popup();
							 $('#withoutscan').popup("open");
				        	//toast('You can now start scanning the QR Code on the product once your registrtaion form is Verified by our executive, your rewards will be credited to your paytm wallet to use');
				      //  } 
						//user.name=ename;
						user.firstname=ename;
						user.lastname =surname;
						user.emailid=email;
						document.getElementById("user_name_home").innerHTML=user.firstname+' '+user.lastname;
						document.getElementById("ppic1").src = localStorage.getItem('selfimg');
						document.getElementById("cardImagemenu").src =localStorage.getItem('selfimg');
						
				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
		
				
				//$.mobile.changePage( "#homepage", {transition: "flip"} );
		         
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});


	}

}



function updateRetailer()
{

		//$('#userapprove_rtypeselection').popup('close');
		//$('#userapprove').popup('close');

		var mobileno = $('#update_pmobile_ret').val();
		var ename =   $('#update_name_ret').val();
		var surname =   $('#update_surname_ret').val();
		var othermobile =  '';//$('#update_omobile_ret').val();
		//var ephoto = $('#cardimage_self_ret').val();
		//var eid = $('#cardimage_proof_ret').val();
		var mm ='';
		var dd ='';
		var dd1 ='';
		var yyyy = '';
		var yyyy1 = '';
    var dd2='';
    var mm2='';
    var dd3='';
    var yyyy2='';
    var yyyy3='';
		var birthday = $('#update_dob_ret1').val();
		var marriage2 = $('#update_dom_ret1').val();
		
		if(birthday!='')
		{
			var dob = birthday.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			dd1 = dob.length == 3 ? dob[0] : '';

			yyyy = dob.length == 3 ? dob[2] : '';
			yyyy1 = dob.length == 3 ? dob[2] : '';

           $('#update_dob1').val(yyyy+'-'+mm+'-'+dd);

		}
		else
		{
			var birthday = $('#update_dob1').val();
			if(birthday!='')
			{
				var dob = birthday.split('-');
				mm = dob.length == 3 ? dob[1] : '';
				dd = dob.length == 3 ? dob[0] : '';
				dd1 = dob.length == 3 ? dob[0] : '';

				yyyy = dob.length == 3 ? dob[2] : '';
				yyyy1 = dob.length == 3 ? dob[2] : '';

				  // $('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
				 
				 

			}

		}
		if(dd.length==4)
		{
			yyyy=dd1;
			dd=yyyy1;


		}


		/* for marraiege date */
    
		if(marriage2!='')
		{
			var dom = marriage2.split('-');
			mm2 = dom.length == 3 ? dom[1] : '';
			dd2 = dom.length == 3 ? dom[0] : '';
			dd3 = dom.length == 3 ? dom[0] : '';

			yyyy2 = dom.length == 3 ? dom[2] : '';
			yyyy3 = dom.length == 3 ? dom[2] : '';

           $('#update_dom_ret').val(yyyy2+'-'+mm2+'-'+dd2);

		}
		else
		{
			var marriage2 = $('#update_dom_ret').val();
			if(marriage2!='')
			{
				var dom = marriage2.split('-');
				mm2 = dom.length == 3 ? dom[1] : '';
				dd2 = dom.length == 3 ? dom[0] : '';
				dd3 = dom.length == 3 ? dom[0] : '';

				yyyy2 = dom.length == 3 ? dom[2] : '';
				yyyy3 = dom.length == 3 ? dom[2] : '';

				// $('#update_dob1').val(yyyy+'-'+mm+'-'+dd); 

			}
      
		}
	if(dd2!='')
      {
      	if(dd2.length==4)
        {
          yyyy2=dd3;
          dd2=yyyy3;

        }
      }
		
		//var refcode = $('#update_ref_ret').val();
		var email = $('#update_email_ret').val();
		var marriage =  $('input[name=update_marriage_ret]:checked').val();
		var flat = $('#update_flat_ret').val();
		var add = $('#update_address_ret').val();
		var state = $('#update_state_ret').val();
    var storeid = $('#update_store_ret').val();
		//var dist = $('#update_district_ret option:selected').text();
		var city = $('#update_city_ret').val();
		var town = '';
		var village = '';
		var tehsil = '';//$('#update_tehsil_ret').val();
		var pincode = $('#update_pin_ret').val();

		/*var bankname = $('#update_bankname_ret').val();
		var bankac = $('#update_bankac_ret').val();
		var bankifsc = $('#update_bankifsc_ret').val();
		var bankcity = $('#update_bankcity_ret').val();
		var bankbranch = $('#update_bankbranch_ret').val();*/
		

		//var pancardno = $('#update_pan_ret').val();
		//var panimg = localStorage.getItem('panimg');
		var pancardno = '';
		var panimg = '';
		var adharno = $('#update_adhar_ret').val();
		//var adhimg = $('#cardimage_aadhar_ret').val();
		var gstno = $('#update_gst_ret').val();
		//var gstimg = $('#cardimage_gst_ret').val();

		

		var shopname = $('#update_shopname_ret').val();
		var shoptype = $('#update_shoptype_ret').val();
		//var shopestablish = $('#update_shopestablish_ret').val();
		//var ownername = $('#update_owner_ret').val();


		var ditrtobuy=$('#update_ditrtobuy_ret').val();
		var brandstobuy=$('#update_brandstobuy_ret').val();
		var firmage=$('#update_firmage_ret').val();

		var adhimg = localStorage.getItem('adimg');
		var gstimg = localStorage.getItem('gstimg');
		var filenm = localStorage.getItem('selfimg');
		//var filenmdoc = localStorage.getItem('docimg');
		//var shopimg = localStorage.getItem('shopimg');
		//var chqimg = localStorage.getItem('chqimg');
		//var estimg = localStorage.getItem('estimg');
		//var panimgback = localStorage.getItem('panimg_back');
		//var adimgback = localStorage.getItem('adimg_back');
		
		if(typeof filenm == undefined || filenm == null)
			filenm = '';
		
		if($('#update_name_ret').val().trim()=='')
        {
                toast('Name cannot be blank');
                $('#update_name_ret').focus();
                $('#update_name_ret').scrollIntoView();
        }
        else if($('#update_surname_ret').val().trim()=='')
        {
                toast('Surname cannot be blank');
                $('#update_surname_ret').focus();
                $('#update_surname_ret').scrollIntoView();
        }
        else if($('#update_pmobile_ret').val().trim()=='')
        {
                toast('Mobile No cannot be blank');
                $('#update_pmobile_ret').focus();
                $('#update_pmobile_ret').scrollIntoView();
        }
        /*else if($('#update_omobile_ret').val().trim()=='')
        {
                toast('Paytm No cannot be blank');
                $('#update_omobile_ret').focus();
                $('#update_omobile_ret').scrollIntoView();
        }

		/*else if($('#update_dob1').val().trim()=='')
        {
                toast('DOB cannot be blank');
                $('#update_dob1').focus();
                $('#update_dob1').scrollIntoView();
        }
        
        else if($('#update_email_ret').val().trim()=='')
        {
                toast('Email cannot be blank');
                $('#update_email_ret').focus();
                $('#update_email_ret').scrollIntoView();
        }
        else if($('input[name=update_gender_ret]:checked').val()=='')
        {
                toast('Gender cannot be blank');
                $('#update_gender_ret').focus();
                $('#update_gender_ret').scrollIntoView();
        }
        else if($('#update_flat_ret').val().trim()=='')
        {
                        
                toast('Flat/Door cannot be blank');
                $('#update_flat_ret').focus();
                $('#update_flat_ret').scrollIntoView();
        }*/

       /* else if($('#update_address_ret').val().trim()=='')
        {
                        
                toast('Lane cannot be blank');
                $('#update_address_ret').focus();
                $('#update_address_ret').scrollIntoView();
        }
        else if($('#update_district_ret').val()==null)
        {
                        
                toast('District cannot be blank');
                $('#update_district_ret').focus();
                $('#update_district_ret').scrollIntoView();
        }*/

            else if($('#update_state_ret').val()==null)
        {
                        
                toast('Please select state');
                $('#update_state_ret').focus();
                $('#update_state_ret').scrollIntoView();
        }
                else if($('#update_pin_ret').val().trim()=='')
        {
                        
                toast('Pin cannot be blank');
                $('#update_pin_ret').focus();
                $('#update_pin_ret').scrollIntoView();
        }
        else if($('#update_city_ret').val()==null)
        {
                        
                toast('Please select city');
                $('#update_city_ret').focus();
                $('#update_city_ret').scrollIntoView();
        }
		/*else if($('#update_shopname_ret').val()=='')
        {
                        
                toast('Please Enter Shop Name');
                $('#update_shopname_ret').focus();
                $('#update_shopname_ret').scrollIntoView();
        }
        else if($('#update_shoptype_ret').val()=='')
        {
                        
                toast('Please Enter Shop Type');
                $('#update_shoptype_ret').focus();
                $('#update_shoptype_ret').scrollIntoView();
        }
		else if($('#update_ditrtobuy_ret').val().trim()=='')
		{
				
				toast('Please fill Distributor');
				$('#update_ditrtobuy_ret').focus();
				$('#update_ditrtobuy_ret').scrollIntoView();
		}
		else if($('#update_gst_ret').val().trim()=='')
        {
			
        	toast('Please fill GST Number');
        	$('#update_gst_ret').focus();
        	$('#update_gst_ret').scrollIntoView();
        }
		else if($('#update_adhar_ret').val().trim()=='')
        {
			
        	toast('Please fill Aadhar Number');
        	$('#update_adhar_ret').focus();
        	$('#update_adhar_ret').scrollIntoView();
        }*/
		/*else if($('#update_pan_ret').val().trim()=='')
        {
			
        	toast('Please fill PAN Number');
        	$('#update_pan_ret').focus();
        	$('#update_pan_ret').scrollIntoView();
        }*/
        /*else if($('#update_adhar_ret').val().trim()=='' && $('#update_pan_ret').val().trim()=='')
        {
                        
                toast('Please fill either Aadhar Number or Pan Number');
                $('#update_adhar_ret').focus();
                $('#update_adhar_ret').scrollIntoView();
        }
        else if($('#update_bankname_ret').val()!='' || $('#update_bankac_ret').val()!='' || $('#update_bankifsc_ret').val()!='' || $('#update_bankcity_ret').val()!='' || $('#update_bankbranch_ret').val()!='')
		{
               if($('#update_bankname_ret').val().trim()=='')
			{
					toast('Please fill Bank Name');
					$('#update_bankname_ret').focus();
					$('#update_bankname_ret').scrollIntoView();
			} 
			else if($('#update_bankac_ret').val().trim()=='')
			{
							
					toast('Please fill Bank Ac');
					$('#update_bankac_ret').focus();
					$('#update_bankac_ret').scrollIntoView();
			}
			else if($('#update_bankifsc_ret').val().trim()=='')
			{
							
					toast('Please fill IFSC Code');
					$('#update_bankifsc_ret').focus();
					$('#update_bankifsc_ret').scrollIntoView();
			}
			else if($('#update_bankcity_ret').val().trim()=='')
			{
							
					toast('Please fill Bank City');
					$('#update_bankcity_ret').focus();
					$('#update_bankcity_ret').scrollIntoView();
			}
			else if($('#update_bankbranch_ret').val().trim()=='')
			{
							
					toast('Please fill Bank Branch');
					$('#update_bankbranch_ret').focus();
					$('#update_bankbranch_ret').scrollIntoView();
			}
			else if(chqimg=='')
			{
                toast('Please upload cancelled cheque image');
                $('#cardimage_chq_ret').focus();
                $('#cardimage_chq_ret').scrollIntoView();
			}
        }   */  
		
	/*else if(!checkemail('update_email_ret'))
        {
			//do nothing
        	
        }*/


	else
	{

	$.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				'mobileno': mobileno,
				//'shop_name': shopname,
				'GSTNo': gstno,
				//'Shop_Establishment_Cert': estimg,
				//'PhotoofShop': shopimg,
				'FirstName': ename,
				//'other_mobile_no': othermobile,
				'Photo': filenm,
				//'PersonalID': filenmdoc,
				'FlatNo' : flat,
				'Lane': add,
				'City': city,
				'Town': town,
				//'Village': village,
				'PostalCode': pincode,
				'District': '',
				'State': state,
				'email': email,
				//'WhatsAppNo':othermobile,
				'lastName':surname,
				'Tehsil':tehsil,
				//'BankName':bankname,
				//'Bank_Ac_No':bankac,
				//'IFSC_code':bankifsc,
				//'Bank_City':bankcity,
				//'Bank_Branch_Address':bankbranch,
				'Aadhar_Card_No': adharno,
				'Aadhar_Card_Photo':adhimg,
				'Pan_card_no': pancardno,
				'Pan_Card_Photo':panimg,
				'GstPhoto':gstimg,
				//'Ref_code':refcode,
				'GSTNo':gstno,
				'dd':dd,
				'mm':mm,
				'yyyy':yyyy,
				'dd1':dd2,
				'mm1':mm2,
				'yyyy1':yyyy2,
				'Membertype': 'Retailer',
				'deviceid':reg_id,
				'devicetype':deviceType,
				//'Gender':gender,
				//'Cancelledcheque':chqimg,
				//'Aadhar_Card_Photo_2':adimgback,
				//'Pan_Card_Photo_2':panimgback
				'shop_name':shopname,
				'brands_to_buy':brandstobuy,
				'firm_age':firmage,
				'marritalstatus': marriage,
                'storecd':storeid

			},
			success: function(data, textStatus, xhr) {

				
				
				if (data.indexOf("Success")>=0)
				{
					   
					  
						//if(user.isApproved=='UnApproved' || user.isApproved=='PENDING')
				        //{
							
				        	 $('#withoutscancou').popup();
							 $('#withoutscancou').popup("open");
				        	//toast('You can now start scanning the QR Code on the product once your registrtaion form is Verified by our executive, your rewards will be credited to your paytm wallet to use');
				        //} 
						user.firstname=ename;
						user.lastname =surname;
						user.emailid=email;
						document.getElementById("user_name_home").innerHTML=user.firstname+' '+user.lastname;
						document.getElementById("ppic1").src = localStorage.getItem('selfimg');
						document.getElementById("cardImagemenu").src =localStorage.getItem('selfimg');
						
				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
		
				
			//	$.mobile.changePage( "#homepage", {transition: "flip"} );
		        
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
	}

	//$('#withoutscan').popup();
	//$('#withoutscan').popup("open");

}

function updateDealer()
{

		var ename =   $('#update_name_del').val();
		var surname =   $('#update_surname_del').val();
		var mobileno = $('#update_pmobile_del').val();
		var othermobile =  '';//$('#update_omobile_del').val();
		var mm ='';
		var dd ='';
		var yyyy = '';
		var birthday = $('#update_dob_del').val();
		if(birthday!='')
		{
		var dob = birthday.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		}

		var email = $('#update_email_del').val();
		
		var flat = $('#update_flat_del').val();
		var add = $('#update_address_del').val();
		var state = $('#update_state_del').val();
		var dist = $('#update_district_del').val();
		var tehsil = '';//$('#update_tehsil_del').val();
		var city = $('#update_city_del').val();
		var pincode = $('#update_pin_del').val();

		/*var bankname = $('#update_bankname_del').val();
		var bankac = $('#update_bankac_del').val();
		var bankifsc = $('#update_bankifsc_del').val();
		var bankcity = $('#update_bankcity_del').val();
		var bankbranch = $('#update_bankbranch_del').val();
		var pancardno = $('#update_pan_del').val();
		//var refcode = $('#update_ref_del').val();


		var shopname = $('#update_shopname_del').val();
		var gstno = $('#update_gst_del').val();
		var shopestablish = $('#update_shopestablish_del').val();
		var ownername = $('#update_owner_del').val();

		var filenm = localStorage.getItem('selfimg');
		var filenmdoc = localStorage.getItem('docimg');
		var shopimg = localStorage.getItem('shopimg');*/
	
	/*if(mobileno=='' || othermobile=='' || add=='' || city=='0' || state=='0' || dist=='' || pincode=='')
	{
		toast('Please enter mandatory fields.');
	}*/
	if($('#update_name_del').val().trim()=='')
        {
        	toast('Name cannot be blank');
        	$('#update_name_del').focus();
        	$('#update_name_del').scrollIntoView();
        }
        else if($('#update_surname_del').val().trim()=='')
        {
        	toast('Surname cannot be blank');
        	$('#update_surname_del').focus();
        	$('#update_surname_del').scrollIntoView();
        }
        else if($('#update_pmobile_del').val().trim()=='')
        {
        	toast('Mobile No cannot be blank');
        	$('#update_pmobile_del').focus();
        	$('#update_pmobile_del').scrollIntoView();
        }
       /* else if($('#update_omobile_del').val().trim()=='')
        {
        	toast('Paytm No cannot be blank');
        	$('#update_omobile_del').focus();
        	$('#update_omobile_del').scrollIntoView();
        }
        else if($('#update_dob_del').val().trim()=='')
        {
        	toast('DOB cannot be blank');
        	$('#update_dob_del').focus();
        	$('#update_dob_del').scrollIntoView();
        }
        else if($('#update_email_del').val().trim()=='')
        {
        	toast('Email cannot be blank');
        	$('#update_email_del').focus();
        	$('#update_email_del').scrollIntoView();
        }*/
        else if($('#update_state_del').val()==null)
        {
                        
                toast('Please select state');
                $('#update_state_del').focus();
                $('#update_state_del').scrollIntoView();
        }
                else if($('#update_pin_del').val().trim()=='')
        {
                        
                toast('Pin cannot be blank');
                $('#update_pin_del').focus();
                $('#update_pin_del').scrollIntoView();
        }
                else if($('#update_city_del').val()==null)
        {
                        
                toast('Please select city');
                $('#update_city_del').focus();
                $('#update_city_del').scrollIntoView();
        }//$('#update_flat_del').val().trim()=='' || $('#update_address_del').val().trim()=='' ||
          else if($('#update_district_del').val()=='')
        {
                toast('Please enter mandatory fields');
        }
           		else if($('#update_district_del').val()==null)
        {
                toast('Please enter mandatory fields');
        }
	
	else if(mobileno.length!=10)
	{
		toast('Please check mobile no.');
	}
	else if(pincode.length != 6)
	{
		toast("You have entered an invalid pincode!");
	}
	else
	{

    
	$.ajax({
			url: SERVER2+'update_Dealer_json_api.asp',
			type: 'GET',
			dataType:'json',
			timeout: 30000,
		  	data: {
				
				'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'DealerName': store.store_name,
				'DealerCode': store.storecode,
				'DealerManager': ename,
				'DealerAddress': flat,
				'DealerLocation': add,
				'DealerCity': city,
				'DealerState': state,
				'DealerCountry': store.storecountry,
				'DealerZone': store.storezone,
				'DealerPostalcode': pincode,
				'DealerMobnumber': mobileno,
				'DealerPhonenumber': store.storephone,
				'DealerEmailId': email,
				'DealerDistrict': dist,
				'SEName': store.sename,
				'SEcode': store.secode,
				'BMName': store.bmname,
				'PanNo':store.panno,
				'GstIn':store.gstno,
				'DealerSurname':surname,
				'DealerDOBDay':dd,
				'DealerDOBmonth':mm,
				'DealerDOBYear':yyyy,
				'DealerFlatNo':flat,
				'DealerLane':add,
				'DealerTehsil':tehsil,
				'DealerPaytmNo':othermobile,
				'DealerBankName':bankname,
				'DealerBankAcNo':bankac,
				'DealerBankIFSC':bankifsc,
				'DealerBankCity':bankcity,
				'DealerBankBranchAdd':bankbranch
				
			},
			success: function(data, textStatus, xhr) {

				var profilecomplete = localStorage.getItem("profiledone_ufi");

				
				localStorage.setItem("profiledone_ufi","Yes");
				localStorage.setItem("profiletype_ufi","Dealer");
				localStorage.setItem("usermtype_ufifilters","Dealer");

				/*
				if (data.indexOf("Success")>=0)
				{
					   
					   
						toast('Your profile has been updated successfully.');

						user.name=ename;
						user.emailid=email;

						if(typeof profilecomplete==undefined || profilecomplete==null)
					{
						dealerauthenticate();
					}

				}
				else if(data=='Failed')
					toast('Update failed.');
				else*/
					//if(data.data.length>0)
						toast(data.data);

		
				
				$.mobile.changePage( "#dealerhomepage", {transition: "flip"} );
		         
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
	}
}


function updateCounterboy()
{
	   $('#userapprove').popup('close');
		var mobileno = $('#update_pmobile_cb').val();
		var ename =   $('#update_name_cb').val();
		var surname =   $('#update_surname_cb').val();
		var othermobile =  '';//$('#update_omobile_cb').val();
		//var ephoto = $('#cardimage_self_cb').val();
		//var eid = $('#cardimage_proof_cb').val();
   var mm ='';
   var dd ='';
   var dd1 ='';
   var yyyy = '';
   var yyyy1 = '';
    var dd2='';
    var mm2='';
    var dd3='';
    var yyyy2='';
    var yyyy3='';
		var birthday = $('#update_dob_cb1').val();
		var marriage2 = $('#update_dom_cb1').val();

		if(birthday!='')
		{
			var dob = birthday.split('-');
			dd = dob.length == 3 ? dob[2] : '';
			mm = dob.length == 3 ? dob[1] : '';
			yyyy = dob.length == 3 ? dob[0] : '';
			  $('#update_dob_cb').val(yyyy+'-'+mm+'-'+dd);

           
		}
		else
		{
			var birthday = $('#update_dob_cb').val();
			if(birthday!='')
				{
				var dob = birthday.split('-');
				mm = dob.length == 3 ? dob[1] : '';
				dd = dob.length == 3 ? dob[0] : '';
				dd1 = dob.length == 3 ? dob[0] : '';

				yyyy = dob.length == 3 ? dob[2] : '';
				yyyy1 = dob.length == 3 ? dob[2] : '';

				  // $('#update_dob_cb').val(yyyy+'-'+mm+'-'+dd);
				 
				 

				}

		}
		if(dd.length==4)
		{
			yyyy=dd1;
			dd=yyyy1;


		}


		/* for marraiege date */
    
		if(marriage2!='')
		{
			var dom = marriage2.split('-');
			mm2 = dom.length == 3 ? dom[1] : '';
			dd2 = dom.length == 3 ? dom[0] : '';
			dd3 = dom.length == 3 ? dom[0] : '';

			yyyy2 = dom.length == 3 ? dom[2] : '';
			yyyy3 = dom.length == 3 ? dom[2] : '';

           $('#update_dom_cb').val(yyyy2+'-'+mm2+'-'+dd2);

		}
		else
		{
			var marriage2 = $('#update_dom_cb').val();
			if(marriage2!='')
			{
				var dom = marriage2.split('-');
				mm2 = dom.length == 3 ? dom[1] : '';
				dd2 = dom.length == 3 ? dom[0] : '';
				dd3 = dom.length == 3 ? dom[0] : '';

				yyyy2 = dom.length == 3 ? dom[2] : '';
				yyyy3 = dom.length == 3 ? dom[2] : '';

				// $('#update_dob1').val(yyyy+'-'+mm+'-'+dd); 

			}
      
		}
	if(dd2!='')
      {
      	if(dd2.length==4)
        {
          yyyy2=dd3;
          dd2=yyyy3;

        }
      }




		//var refcode = $('#update_ref_cb').val();
		var email = $('#update_email_cb').val();

		var flat = $('#update_flat_cb').val();
		var add = $('#update_address_cb').val();
		var state = $('#update_state_cb').val();
		//var dist = $('#update_district_cb option:selected').text();
		var dist = '';
		var city = $('#update_city_cb').val();
		var town = '';
		var village = '';
		var tehsil = '';//$('#update_tehsil_cb').val();
		var pincode = $('#update_pin_cb').val();

		var storeid = $('#update_ret_cb').val();

		/*var bankname = $('#update_bankname_cb').val();
		var bankac = $('#update_bankac_cb').val();
		var bankifsc = $('#update_bankifsc_cb').val();
		var bankcity = $('#update_bankcity_cb').val();
		var bankbranch = $('#update_bankbranch_cb').val();*/
		
		
		//var pancardno = $('#update_pan_cb').val();
		var pancardno = '';
		//var panimg = localStorage.getItem('panimg');
		//alert(panimg);
		//var adharno = $('#update_adhar_cb').val();
		var adharno = '';

		//var adhimg = localStorage.getItem('adimg');
		//var gstno = $('#update_gst_cb').val();
		var gstno = '';
		var filenm = localStorage.getItem('selfimg');
		//var filenmdoc = localStorage.getItem('docimg');
		//var shopimg = localStorage.getItem('shopimg');
		var marriage = $('input[name=update_marriage_cb]:checked').val();
		//var shopname = $('#update_currwork_cb').val();
		//var ownermobile = $('#update_rmobile_cb').val();
		//var chqimg = localStorage.getItem('chqimg');

		if(typeof filenm == undefined || filenm == null)
			filenm = '';

		//var panimgback = localStorage.getItem('panimg_back');
		//var adimgback = localStorage.getItem('adimg_back');

		//var ditrtobuy=$('#update_ditrtobuy_cb').val();
		//var brandstobuy=$('#update_brandstobuy_cb').val();
		//var firmage=$('#update_firmage_cb').val();
		var ditrtobuy= '';
		var brandstobuy= '';
		var firmage='';
				
   
        if($('#update_name_cb').val().length == 0)
        {
                toast('Name cannot be blank');
                $('#update_name_cb').focus();
                $('#update_name_cb').scrollIntoView();
        }
        else if($('#update_surname_cb').val().trim()=='')
        {
                toast('Surname cannot be blank');
                $('#update_surname_cb').focus();
                $('#update_surname_cb').scrollIntoView();
        }
        else if($('#update_pmobile_cb').val().trim()=='')
        {
                toast('Mobile No cannot be blank');
                $('#update_pmobile_cb').focus();
                $('#update_pmobile_cb').scrollIntoView();
        }
        /*else if($('#update_omobile_cb').val().trim()=='')
        {
                toast('Other no cannot be blank');
                $('#update_omobile_cb').focus();
                $('#update_omobile_cb').scrollIntoView();
        }
        else if($('#update_dob_cb').val().trim()=='')
        {
                toast('DOB cannot be blank');
                $('#update_dob_cb').focus();
                $('#update_dob_cb').scrollIntoView();
        }
                
       else if($('input[name=update_gender_cb]:checked').val()=='')
        {
        	toast('Gender cannot be blank');
        	$('#update_gender_cb').focus();
        	$('#update_gender_cb').scrollIntoView();
        }
        else if($('#update_email_cb').val().trim()=='')
        {
                toast('Email cannot be blank');
                $('#update_email_cb').focus();
                $('#update_email_cb').scrollIntoView();
        }
        else if($('#update_flat_cb').val().trim()=='')
        {
                        
                toast('Flat/Door cannot be blank');
                $('#update_flat_cb').focus();
                $('#update_flat_cb').scrollIntoView();
        }*/

        else if($('#update_address_cb').val().trim()=='')
        {
                        
                toast('Lane cannot be blank');
                $('#update_address_cb').focus();
                $('#update_address_cb').scrollIntoView();
        }

        /*else if($('#update_district_cb').val()=='')
        {
                        
                toast('District cannot be blank');
                $('#update_district_cb').focus();
                $('#update_district_cb').scrollIntoView();
        }
         else if($('#update_district_cb').val()==null)
        {
                        
                toast('District cannot be blank');
                $('#update_district_cb').focus();
                $('#update_district_cb').scrollIntoView();
        }*/
        else if($('#update_state_cb').val()==null)
        {
                        
                toast('Please select state');
                $('#update_state_cb').focus();
                $('#update_state_cb').scrollIntoView();
        }
         else if($('#update_pin_cb').val().trim()=='')
        {
                        
                toast('Pin cannot be blank');
                $('#update_pin_cb').focus();
                $('#update_pin_cb').scrollIntoView();
        }
        else if($('#update_city_cb').val()==null)
        {
                        
                toast('Please select city');
                $('#update_city_cb').focus();
                $('#update_city_cb').scrollIntoView();
        }
		/*else if($('#update_adhar_cb').val().trim()=='')
		{
							
					toast('Please fill Aadhar No');
					$('#update_adhar_cb').focus();
					$('#update_adhar_cb').scrollIntoView();
		}
		else if($('#update_rmobile_cb').val().trim()=='')
		{
							
					toast('Please fill Owner Mobile No');
					$('#update_rmobile_cb').focus();
					$('#update_rmobile_cb').scrollIntoView();
		}
		else if(!checkemail('update_email_cb'))
        {
			//do nothing
        	
        }
        else if($('#update_adhar_cb').val().trim()=='' && $('#update_pan_cb').val().trim()=='')
        {
                        
                toast('Please fill either Aadhar Number or Pan Number');
                $('#update_adhar_cb').focus();
                $('#update_adhar_cb').scrollIntoView();
        }
		else if($('#update_pan_cb').val().trim()=='')
        {
                        
                toast('Please fill Pan Number');
                $('#update_pan_cb').focus();
                $('#update_pan_cb').scrollIntoView();
        }*/
       /*else if($('#update_bankname_cb').val()!='' || $('#update_bankac_cb').val()!='' || $('#update_bankifsc_cb').val()!='' || $('#update_bankcity_cb').val()!='' || $('#update_bankbranch_cb').val()!='')
		{
               if($('#update_bankname_cb').val().trim()=='')
			{
					toast('Please fill Bank Name');
					$('#update_bankname_cb').focus();
					$('#update_bankname_cb').scrollIntoView();
			} 
			else if($('#update_bankac_cb').val().trim()=='')
			{
							
					toast('Please fill Bank Ac');
					$('#update_bankac_cb').focus();
					$('#update_bankac_cb').scrollIntoView();
			}
			else if($('#update_bankifsc_cb').val().trim()=='')
			{
							
					toast('Please fill IFSC Code');
					$('#update_bankifsc_cb').focus();
					$('#update_bankifsc_cb').scrollIntoView();
			}
			else if($('#update_bankcity_cb').val().trim()=='')
			{
							
					toast('Please fill Bank City');
					$('#update_bankcity_cb').focus();
					$('#update_bankcity_cb').scrollIntoView();
			}
			else if($('#update_bankbranch_cb').val().trim()=='')
			{
							
					toast('Please fill Bank Branch');
					$('#update_bankbranch_cb').focus();
					$('#update_bankbranch_cb').scrollIntoView();
			}
			else if(chqimg=='')
			{
                toast('Please upload cancelled cheque image');
                $('#cardimage_chq_cb').focus();
                $('#cardimage_chq_cb').scrollIntoView();
			}
        } */    
	else
	{

	$.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
	 			
				'mobileno': mobileno,
				//'shop_name': shopname,
				'GSTNo': gstno,
				//'Shop_Establishment_Cert': estimg,
				//'PhotoofShop': shopimg,
				'FirstName': ename,
				//'other_mobile_no': othermobile,
				'Photo': filenm,
				//'PersonalID': filenmdoc,
				'FlatNo' : flat,
				'Lane': add,
				'City': city,
				'Town': town,
				//'Village': village,
				'PostalCode': pincode,
				'District': dist,
				'State': state,
				'email': email,
				//'WhatsAppNo':othermobile,
				'lastName':surname,
				'Tehsil':tehsil,
				//'BankName':bankname,
				//'Bank_Ac_No':bankac,
				//'IFSC_code':bankifsc,
				//'Bank_City':bankcity,
				//'Bank_Branch_Address':bankbranch,
				'Aadhar_Card_No':adharno,
				//'Aadhar_Card_Photo':adhimg,
				'Pan_card_no': pancardno,
				//'Pan_Card_Photo':panimg,
				//'GstPhoto':gstimg,
				//'Ref_code':refcode,
				'GSTNo':gstno,
				'dd':dd,
				'mm':mm,
				'yyyy':yyyy,
				'dd1':dd2,
				'mm1':mm2,
				'yyyy1':yyyy2,
				'Membertype': 'Mechanic',
				'deviceid':reg_id,
				'devicetype':deviceType,
				//'Gender':gender,
				//'Cancelledcheque':chqimg,
				//'Aadhar_Card_Photo_2':adimgback,
				//'Pan_Card_Photo_2':panimgback
				'storecd':storeid,
				'shop_name': ditrtobuy,
				'brands_to_buy':brandstobuy,
				'firm_age':firmage,
				'marritalstatus': marriage
					
			},
			success: function(data, textStatus, xhr) {

				
				
				if (data.indexOf("Success")>=0)
				{
					   
					   console.log(user.isApproved);

					   //if(user.isApproved=='UnApproved' || user.isApproved=='PENDING')
				       // {
				        	$('#withoutscancou').popup();
							 $('#withoutscancou').popup("open");
				        	//toast('You can now start scanning the QR Code on the product once your registrtaion form is Verified by our executive, your rewards will be credited to your paytm wallet to use');
				       // } 
					   
						//toast('Your profile has been updated successfully.');



						user.firstname=ename;
						user.lastname =surname;
						user.emailid=email;
						document.getElementById("user_name_home").innerHTML=user.firstname+' '+user.lastname;
						document.getElementById("ppic1").src = localStorage.getItem('selfimg');
						document.getElementById("cardImagemenu").src =localStorage.getItem('selfimg');

						

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
		
				
				//$.mobile.changePage( "#homepage", {transition: "flip"} );
		         
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});

	}
}

function showregpersonal()
{
		$("#registration_personal_info").css('display', 'block');
        $("#registration_address").css('display', 'none');
        $("#registration_bank_details").css('display', 'none');
        $("#registration_business_info").css('display', 'none');

        
        $("#addr_elec").css('display', 'none');
        $("#addr_ret").css('display', 'none');
        $("#addr_cb").css('display', 'none');
        $("#bank_elec").css('display', 'none');
        $("#bank_ret").css('display', 'none');
        $("#bank_cb").css('display', 'none');
        $("#busi_elec").css('display', 'none');
        $("#busi_ret").css('display', 'none');
        $("#busi_cb").css('display', 'none');

        var cattype = localStorage.getItem('cattype');
        if(cattype == 'Painter')
        {
        $("#personal_elec").css('display', 'block');
        $("#personal_ret").css('display', 'none');
        $("#personal_cb").css('display', 'none');

    	}
    	else if(cattype == 'Retailer')
    	{
        $("#personal_elec").css('display', 'none');
        $("#personal_ret").css('display', 'block');
        $("#personal_cb").css('display', 'none');
    	}
    	else if(cattype == 'Mechanic')
    	{
			$("#personal_elec").css('display', 'none');
			$("#personal_ret").css('display', 'none');
			$("#personal_cb").css('display', 'block');
    	}

}

function showregaddress()
{
		
        

        var cattype = localStorage.getItem('cattype');

        if(cattype == 'Painter')
        {

  

			

       
        if($('#update_name_elec1').val().trim()=='')
        {
        	toast('Name cannot be blank');
        	$('#update_name_elec1').focus();
        	$('#update_name_elec1').scrollIntoView();
        }
        else if($('#update_surname_elec1').val().trim()=='')
        {
        	toast('Surname cannot be blank');
        	$('#update_surname_elec1').focus();
        	$('#update_surname_elec1').scrollIntoView();
        }
        else if($('#update_pmobile_elec1').val().trim()=='')
        {
        	toast('Mobile No cannot be blank');
        	$('#update_pmobile_elec1').focus();
        	$('#update_pmobile_elec1').scrollIntoView();
        }
       /* else if($('#update_omobile_elec1').val().trim()=='')
        {
        	toast('Paytm No cannot be blank');
        	$('#update_omobile_elec1').focus();
        	$('#update_omobile_elec1').scrollIntoView();
        }
        else if($('#update_dob_elec1').val().trim()=='')
        {
        	toast('DOB cannot be blank');
        	$('#update_dob_elec1').focus();
        	$('#update_dob_elec1').scrollIntoView();
        }
		
        else if($('#update_email_elec1').val().trim()=='')
        {
        	toast('Email cannot be blank');
        	$('#update_email_elec1').focus();
        	$('#update_email_elec1').scrollIntoView();
        }
        else if( $('input[name=update_gender_elec1]:checked').val()=='')
        {
        	toast('Gender cannot be blank');
        	$('#update_gender_elec1').focus();
        	$('#update_gender_elec1').scrollIntoView();
        }
		else  if(!checkemail('update_email_elec1'))
        {
			//do nothing
        	
        }*/
		
		else
        {
			var bd=$('#update_dob_elec1').val();

			


		$('#update_dob_elec').val(bd);
        $("#registration_personal_info").css('display', 'none');
        $("#registration_address").css('display', 'block');
        $("#registration_bank_details").css('display', 'none');
        $("#registration_business_info").css('display', 'none');

        $("#addr_elec").css('display', 'block');
        $("#addr_ret").css('display', 'none');
        $("#addr_cb").css('display', 'none');
        $("#personal_elec").css('display', 'none');
        $("#personal_ret").css('display', 'none');
        $("#personal_cb").css('display', 'none');
        
        $("#bank_elec").css('display', 'none');
        $("#bank_ret").css('display', 'none');
        $("#bank_cb").css('display', 'none');
        $("#busi_elec").css('display', 'none');
        $("#busi_ret").css('display', 'none');
        $("#busi_cb").css('display', 'none');

    	}
    	}
    	else if(cattype == 'Retailer')
    	{

			var bd=$('#update_dob_ret1').val();

			


			$('#update_dob1').val(bd);

			var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_ret1').setAttribute("max", today);
			document.getElementById('update_dom_ret1').setAttribute("max", today);

		
			
    	if($('#update_name_ret1').val().trim()=='')
        {
        	toast('Name cannot be blank');
        	$('#update_name_ret1').focus();
        	$('#update_name_ret1').scrollIntoView();
        }
        else if($('#update_surname_ret1').val().trim()=='')
        {
        	toast('Surname cannot be blank');
        	$('#update_surname_ret1').focus();
        	$('#update_surname_ret1').scrollIntoView();
        }
        else if($('#update_pmobile_ret1').val().trim()=='')
        {
        	toast('Mobile No cannot be blank');
        	$('#update_pmobile_ret1').focus();
        	$('#update_pmobile_ret1').scrollIntoView();
        }
        /*else if($('#update_omobile_ret1').val().trim()=='')
        {
        	toast('Other No cannot be blank');
        	$('#update_omobile_ret1').focus();
        	$('#update_omobile_ret1').scrollIntoView();
        }
        else if($('#update_dob_ret1').val().trim()=='')
        {
        	toast('DOB cannot be blank');
        	$('#update_dob_ret1').focus();
        	$('#update_dob_ret1').scrollIntoView();
        }
        else if($('#update_email_ret1').val().trim()=='')
        {
        	toast('Email cannot be blank');
        	$('#update_email_ret1').focus();
        	$('#update_email_ret1').scrollIntoView();
        }
		
         else if( $('input[name=update_gender_ret1]:checked').val()=='')
        {
        	toast('Gender cannot be blank');
        	$('#update_gender_ret1').focus();
        	$('#update_gender_ret1').scrollIntoView();
        }*/
		
		/*else if(!checkemail('update_email_ret1'))
        {
			//do nothing
        	
        }*/
		else
        {
        $("#registration_personal_info").css('display', 'none');
        $("#registration_address").css('display', 'block');
        $("#registration_bank_details").css('display', 'none');
        $("#registration_business_info").css('display', 'none');

        $("#addr_elec").css('display', 'none');
        $("#addr_ret").css('display', 'block');
        $("#addr_cb").css('display', 'none');
        $("#personal_elec").css('display', 'none');
        $("#personal_ret").css('display', 'none');
        $("#personal_cb").css('display', 'none');
        
        $("#bank_elec").css('display', 'none');
        $("#bank_ret").css('display', 'none');
        $("#bank_cb").css('display', 'none');
        $("#busi_elec").css('display', 'none');
        $("#busi_ret").css('display', 'none');
        $("#busi_cb").css('display', 'none');

    	}
    	

    		
    	}
    	else if(cattype == 'Mechanic')
        {

			var bd=$('#update_dob_cb1').val();
			$('#update_dob_cb').val(bd);

			var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('update_dob_cb1').setAttribute("max", today);
			
			
        if($('#update_name_cb1').val().trim()=='')
        {
        	toast('Name cannot be blank');
        	$('#update_name_cb1').focus();
        	$('#update_name_cb1').scrollIntoView();
			//document.getElementById('update_name_cb1').scrollIntoView();
        }
        else if($('#update_surname_cb1').val().trim()=='')
        {
        	toast('Surname cannot be blank');
        	$('#update_surname_cb1').focus();
        	$('#update_surname_cb1').scrollIntoView();
        }
        else if($('#update_pmobile_cb1').val().trim()=='')
        {
        	toast('Mobile No cannot be blank');
        	$('#update_pmobile_cb1').focus();
        	$('#update_pmobile_cb1').scrollIntoView();
        }
        /*else if($('#update_omobile_cb1').val().trim()=='')
        {
        	toast('Other No cannot be blank');
        	$('#update_omobile_cb1').focus();
        	$('#update_omobile_cb1').scrollIntoView();
        }
        else if($('#update_dob_cb1').val().trim()=='')
        {
        	toast('DOB cannot be blank');
        	$('#update_dob_cb1').focus();
        	$('#update_dob_cb1').scrollIntoView();
        }
		else if( $('input[name=update_gender_cb1]:checked').val()=='')
        {
        	toast('Gender cannot be blank');
        	$('#update_gender_cb1').focus();
        	$('#update_gender_cb1').scrollIntoView();
        }
		else if($('#update_email_cb1').val().trim()=='')
        {
        	toast('Email cannot be blank');
        	$('#update_email_cb1').focus();
        	$('#update_email_cb1').scrollIntoView();
        }
		else if(!checkemail('update_email_cb1'))
        {
			//do nothing
        	
        }*/
		else
			{
				
				$("#registration_personal_info").css('display', 'none');
				$("#registration_address").css('display', 'block');
				$("#registration_bank_details").css('display', 'none');
				$("#registration_business_info").css('display', 'none');

				$("#addr_elec").css('display', 'none');
				$("#addr_ret").css('display', 'none');
				$("#addr_cb").css('display', 'block');
				$("#personal_elec").css('display', 'none');
				$("#personal_ret").css('display', 'none');
				$("#personal_cb").css('display', 'none');
				
				$("#bank_elec").css('display', 'none');
				$("#bank_ret").css('display', 'none');
				$("#bank_cb").css('display', 'none');
				$("#busi_elec").css('display', 'none');
				$("#busi_ret").css('display', 'none');
				$("#busi_cb").css('display', 'none');
			}
		

        }


}

function showregbank()
{
		

        var cattype = localStorage.getItem('cattype');
		
        if(cattype == 'Painter')
        {


 		/*if($('#update_flat_elec1').val().trim()=='')
        {
			
        	toast('Flat/Door cannot be blank');
        	$('#update_flat_elec1').focus();
        	$('#update_flat_elec1').scrollIntoView();
        }

		 if($('#update_address_elec1').val().trim()=='')
        {
			
        	toast('Lane cannot be blank');
        	$('#update_address_elec').focus();
        	$('#update_address_elec').scrollIntoView();
        }*/

		 if($('#update_district_elec1').val()=='')
        {
			
        	toast('District cannot be blank');
        	$('#update_district_elec1').focus();
        	$('#update_district_elec1').scrollIntoView();
        }

         if($('#update_district_elec1').val()==null)
        {
			
        	toast('District cannot be blank');
        	$('#update_district_elec1').focus();
        	$('#update_district_elec1').scrollIntoView();
        }

		

	    if($('#update_state_elec1').val()==null)
        {
			
        	toast('Please select state');
        	$('#update_state_elec1').focus();
        	$('#update_state_elec1').scrollIntoView();
        }
		else if($('#update_pin_elec1').val().trim()=='')
        {
			
        	toast('Pin cannot be blank');
        	$('#update_pin_elec1').focus();
        	$('#update_pin_elec1').scrollIntoView();
        }
		else if($('#update_city_elec1').val()==null)
        {
			
        	toast('Please select city');
        	$('#update_city_elec1').focus();
        	$('#update_city_elec1').scrollIntoView();
        }

	
		else
		{

			$("#registration_personal_info").css('display', 'none');
			$("#registration_address").css('display', 'none');
			$("#registration_bank_details").css('display', 'block');
			$("#registration_business_info").css('display', 'none');

			$("#personal_elec").css('display', 'none');
			$("#personal_ret").css('display', 'none');
			$("#personal_cb").css('display', 'none');
			$("#addr_elec").css('display', 'none');
			$("#addr_ret").css('display', 'none');
			$("#addr_cb").css('display', 'none');
			
				
			$("#bank_elec").css('display', 'block');
			$("#bank_ret").css('display', 'none');
			$("#bank_cb").css('display', 'none');
			$("#busi_elec").css('display', 'none');
			$("#busi_ret").css('display', 'none');
			$("#busi_cb").css('display', 'none');

		}
        
    	}
    	else if(cattype == 'Retailer')
    	{
    		
         if($('#update_flat_ret1').val().trim()=='')
        {
			
        	toast('Flat/Door cannot be blank');
        	$('#update_flat_ret1').focus();
        	$('#update_flat_ret1').scrollIntoView();
        }

		 if($('#update_address_ret1').val().trim()=='')
        {
			
        	toast('Lane cannot be blank');
        	$('#update_address_ret1').focus();
        	$('#update_address_ret1').scrollIntoView();
        }

		 if($('#update_district_ret1').val()=='')
        {
			
        	toast('District cannot be blank');
        	$('#update_district_ret1').focus();
        	$('#update_district_ret1').scrollIntoView();
        }

        if($('#update_district_ret1').val()==null)
        {
			
        	toast('District cannot be blank');
        	$('#update_district_ret1').focus();
        	$('#update_district_ret1').scrollIntoView();
        }

	    if($('#update_state_ret1').val()==null)
        {
			
        	toast('Please select state');
        	$('#update_state_ret1').focus();
        	$('#update_state_ret1').scrollIntoView();
        }
		else if($('#update_pin_ret1').val().trim()=='')
        {
			
        	toast('Pin cannot be blank');
        	$('#update_pin_ret1').focus();
        	$('#update_pin_ret1').scrollIntoView();
        }
		else if($('#update_city_ret1').val()==null)
        {
			
        	toast('Please select city');
        	$('#update_city_ret1').focus();
        	//$('#update_city_ret1').scrollIntoView();
        }
		
		else
		{

			$("#registration_personal_info").css('display', 'none');
			$("#registration_address").css('display', 'none');
			$("#registration_bank_details").css('display', 'block');
			$("#registration_business_info").css('display', 'none');

			$("#personal_elec").css('display', 'none');
			$("#personal_ret").css('display', 'none');
			$("#personal_cb").css('display', 'none');
			$("#addr_elec").css('display', 'none');
			$("#addr_ret").css('display', 'none');
			$("#addr_cb").css('display', 'none');
			
				
			$("#bank_elec").css('display', 'none');
			$("#bank_ret").css('display', 'block');
			$("#bank_cb").css('display', 'none');
			$("#busi_elec").css('display', 'none');
			$("#busi_ret").css('display', 'none');
			$("#busi_cb").css('display', 'none');

		}
        
    	}
    	else if(cattype == 'Mechanic')
        {


		/*if($('#update_flat_cb1').val().trim()=='')
        {
			
        	toast('Flat/Door cannot be blank');
        	$('#update_flat_cb1').focus();
        	$('#update_flat_cb1').scrollIntoView();
        }

		 if($('#update_address_cb1').val().trim()=='')
        {
			
        	toast('Lane cannot be blank');
        	$('#update_address_cb1').focus();
        	$('#update_address_cb1').scrollIntoView();
        }*/

		 if($('#update_district_cb1').val()=='')
        {
			
        	toast('District cannot be blank');
        	$('#update_district_cb1').focus();
        	$('#update_district_cb1').scrollIntoView();
        }

         if($('#update_district_cb1').val()==null)
        {
			
        	toast('District cannot be blank');
        	$('#update_district_cb1').focus();
        	$('#update_district_cb1').scrollIntoView();
        }

		

	    if($('#update_state_cb1').val()==null)
        {
			
        	toast('Please select state');
        	$('#update_state_cb1').focus();
        	$('#update_state_cb1').scrollIntoView();
        }
		else if($('#update_pin_cb1').val().trim()=='')
        {
			
        	toast('Pin cannot be blank');
        	$('#update_pin_cb1').focus();
        	$('#update_pin_cb1').scrollIntoView();
        }
		else if($('#update_city_cb1').val()==null)
        {
			
        	toast('Please select city');
        	$('#update_city_cb1').focus();
        	$('#update_city_cb1').scrollIntoView();
        }
		
		else
		{

			$("#registration_personal_info").css('display', 'none');
			$("#registration_address").css('display', 'none');
			$("#registration_bank_details").css('display', 'block');
			$("#registration_business_info").css('display', 'none');

			$("#personal_elec").css('display', 'none');
			$("#personal_ret").css('display', 'none');
			$("#personal_cb").css('display', 'none');
			$("#addr_elec").css('display', 'none');
			$("#addr_ret").css('display', 'none');
			$("#addr_cb").css('display', 'none');
			
				
			$("#bank_elec").css('display', 'none');
			$("#bank_ret").css('display', 'none');
			$("#bank_cb").css('display', 'block');
			$("#busi_elec").css('display', 'none');
			$("#busi_ret").css('display', 'none');
			$("#busi_cb").css('display', 'none');

		}
        
    	}


}

function showregbusiness()
{
		var chqimg = localStorage.getItem('chqimg');
		if(typeof chqimg == undefined || chqimg == null)
			chqimg = '';
		
        var cattype = localStorage.getItem('cattype');
        if(cattype == 'Painter')
        {
	     

		if($('#update_address_elec1').val().trim()=='')
        {
			
        	toast('Lane cannot be blank');
        	$('#update_address_elec').focus();
        	$('#update_address_elec').scrollIntoView();
        }

		/* if($('#update_district_elec1').val()=='')
        {
				toast('District cannot be blank');
				$('#update_district_elec1').focus();
				$('#update_district_elec1').scrollIntoView();
        }

         if($('#update_district_elec1').val()==null)
        {
				toast('District cannot be blank');
				$('#update_district_elec1').focus();
				$('#update_district_elec1').scrollIntoView();
        }*/
		if($('#update_state_elec1').val()==null)
        {
				toast('Please select state');
				$('#update_state_elec1').focus();
				$('#update_state_elec1').scrollIntoView();
        }
		else if($('#update_pin_elec1').val().trim()=='')
        {
				toast('Pin cannot be blank');
				$('#update_pin_elec1').focus();
				$('#update_pin_elec1').scrollIntoView();
        }
		else if($('#update_city_elec1').val()==null)
        {
				toast('Please select city');
				$('#update_city_elec1').focus();
				$('#update_city_elec1').scrollIntoView();
        }
        else
	        {
		        $("#busi_elec").css('display', 'block');
		        $("#busi_ret").css('display', 'none');
		        $("#busi_cb").css('display', 'none');
		        $("#registration_personal_info").css('display', 'none');
		        $("#registration_address").css('display', 'none');
		        $("#registration_bank_details").css('display', 'none');
		        $("#registration_business_info").css('display', 'block');

		        $("#personal_elec").css('display', 'none');
		        $("#personal_ret").css('display', 'none');
		        $("#personal_cb").css('display', 'none');
		        $("#addr_elec").css('display', 'none');
		        $("#addr_ret").css('display', 'none');
		        $("#addr_cb").css('display', 'none');
		        $("#bank_elec").css('display', 'none');
		        $("#bank_ret").css('display', 'none');
		        $("#bank_cb").css('display', 'none');
	    	}
    	}
    	else if(cattype == 'Retailer')
    	{
    	/*if($('#update_bankname_ret1').val()!='' || $('#update_bankac_ret1').val()!='' || $('#update_bankifsc_ret1').val()!='' || $('#update_bankcity_ret1').val()!='' || $('#update_bankbranch_ret1').val()!='')
		{
               if($('#update_bankname_ret1').val().trim()=='')
			{
					toast('Please fill Bank Name');
					$('#update_bankname_ret1').focus();
					$('#update_bankname_ret1').scrollIntoView();
			} 
			else if($('#update_bankac_ret1').val().trim()=='')
			{
							
					toast('Please fill Bank Ac');
					$('#update_bankac_ret1').focus();
					$('#update_bankac_ret1').scrollIntoView();
			}
			else if($('#update_bankifsc_ret1').val().trim()=='')
			{
							
					toast('Please fill IFSC Code');
					$('#update_bankifsc_ret1').focus();
					$('#update_bankifsc_ret1').scrollIntoView();
			}
			else if($('#update_bankcity_ret1').val().trim()=='')
			{
							
					toast('Please fill Bank City');
					$('#update_bankcity_ret1').focus();
					$('#update_bankcity_ret1').scrollIntoView();
			}
			else if($('#update_bankbranch_ret1').val().trim()=='')
			{
							
					toast('Please fill Bank Branch');
					$('#update_bankbranch_ret1').focus();
					$('#update_bankbranch_ret1').scrollIntoView();
			}
			else if(chqimg=='')
			{
                toast('Please upload cancelled cheque image');
                $('#cardimage_chq_ret1').focus();
                $('#cardimage_chq_ret1').scrollIntoView();
			}
        }  */
			/* if($('#update_flat_ret1').val().trim()=='')
        {
			
        	toast('Flat/Door cannot be blank');
        	$('#update_flat_ret1').focus();
        	$('#update_flat_ret1').scrollIntoView();
        }*/

		if($('#update_address_ret1').val().trim()=='')
        {
			
        	toast('Lane cannot be blank');
        	$('#update_address_ret1').focus();
        	$('#update_address_ret1').scrollIntoView();
        }

		 /*if($('#update_district_ret1').val()=='')
        {
			
        	toast('District cannot be blank');
        	$('#update_district_ret1').focus();
        	$('#update_district_ret1').scrollIntoView();
        }

         if($('#update_district_ret1').val()==null)
        {
			
        	toast('District cannot be blank');
        	$('#update_district_ret1').focus();
        	$('#update_district_ret1').scrollIntoView();
        }*/

	    if($('#update_state_ret1').val()==null)
        {
			
        	toast('Please select state');
        	$('#update_state_ret1').focus();
        	$('#update_state_ret1').scrollIntoView();
        }
		else if($('#update_pin_ret1').val().trim()=='')
        {
			
        	toast('Pin cannot be blank');
        	$('#update_pin_ret1').focus();
        	$('#update_pin_ret1').scrollIntoView();
        }
		else if($('#update_city_ret1').val()==null)
        {
			
        	toast('Please select city');
        	$('#update_city_ret1').focus();
        	//$('#update_city_ret1').scrollIntoView();
        }
	        else
	        {
		    	$("#busi_elec").css('display', 'none');
		        $("#busi_ret").css('display', 'block');
		        $("#busi_cb").css('display', 'none');
		        $("#registration_personal_info").css('display', 'none');
		        $("#registration_address").css('display', 'none');
		        $("#registration_bank_details").css('display', 'none');
		        $("#registration_business_info").css('display', 'block');

		        $("#personal_elec").css('display', 'none');
		        $("#personal_ret").css('display', 'none');
		        $("#personal_cb").css('display', 'none');
		        $("#addr_elec").css('display', 'none');
		        $("#addr_ret").css('display', 'none');
		        $("#addr_cb").css('display', 'none');
		        $("#bank_elec").css('display', 'none');
		        $("#bank_ret").css('display', 'none');
		        $("#bank_cb").css('display', 'none');	
		    }
    	}
    	else if(cattype == 'Mechanic')
    	{
    		

		 if($('#update_address_cb1').val().trim()=='')
        {
			
        	toast('Lane cannot be blank');
        	$('#update_address_cb1').focus();
        	$('#update_address_cb1').scrollIntoView();
        }
      /*
		 if($('#update_district_cb1').val()=='')
        {
			
        	toast('District cannot be blank');
        	$('#update_district_cb1').focus();
        	$('#update_district_cb1').scrollIntoView();
        }
         if($('#update_district_cb1').val()==null)
        {
			
        	toast('District cannot be blank');
        	$('#update_district_cb1').focus();
        	$('#update_district_cb1').scrollIntoView();
        }*/
		if($('#update_state_cb1').val()==null)
        {
			
        	toast('Please select state');
        	$('#update_state_cb1').focus();
        	$('#update_state_cb1').scrollIntoView();
        }
		else if($('#update_pin_cb1').val().trim()=='')
        {
			
        	toast('Pin cannot be blank');
        	$('#update_pin_cb1').focus();
        	$('#update_pin_cb1').scrollIntoView();
        }
		else if($('#update_city_cb1').val()==null)
        {
			
        	toast('Please select city');
        	$('#update_city_cb1').focus();
        	$('#update_city_cb1').scrollIntoView();
        }
	        else
	        {
	    		$("#busi_elec").css('display', 'none');
				$("#busi_ret").css('display', 'none');
				$("#busi_cb").css('display', 'block');
				$("#registration_personal_info").css('display', 'none');
		        $("#registration_address").css('display', 'none');
		        $("#registration_bank_details").css('display', 'none');
		        $("#registration_business_info").css('display', 'block');

		        $("#personal_elec").css('display', 'none');
		        $("#personal_ret").css('display', 'none');
		        $("#personal_cb").css('display', 'none');
		        $("#addr_elec").css('display', 'none');
		        $("#addr_ret").css('display', 'none');
		        $("#addr_cb").css('display', 'none');
		        $("#bank_elec").css('display', 'none');
		        $("#bank_ret").css('display', 'none');
		        $("#bank_cb").css('display', 'none');
		    }
    	}

}

function updateUser()
{
		var cattype = localStorage.getItem('cattype');
			
        if(cattype == 'Painter')
        {
			if($('#update_adhar_elec1').val().trim()=='')
			{
				
				toast('Please fill Aadhar Number');
				$('#update_adhar_elec1').focus();
				$('#update_adhar_elec1').scrollIntoView();
			}

			var pmob=$('#update_pmobile_elec1').val();
			var name=$('#update_name_elec1').val();
			var surname=$('#update_surname_elec1').val();
			//var omobile=$('#update_omobile_elec1').val();
			var marriage= $('input[name=update_marriage_elec1]:checked').val();
			

			$('#update_pmobile_elec').val(pmob);
			$('#update_name_elec').val(name);
			$('#update_surname_elec').val(surname);
			//$('#update_omobile_elec').val(omobile);
			$('#update_marriage_elec').val(marriage);
			
			//var ephoto = $('#cardimage_self_elec').val();
			//var eid = $('#cardimage_proof_elec').val();
			var mm ='';
			var dd ='';
			var yyyy = '';
			var birthday = $('#update_dob_elec1').val();

			if(birthday!='')
			{
			var dob = birthday.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			yyyy = dob.length == 3 ? dob[2] : '';
			$('#update_dob_elec').val(yyyy+'-'+mm+'-'+dd);
			
			}

			
			
			
			

			//var refc=$('#update_ref_elec1').val();
			var email=$('#update_email_elec1').val();
			var flat=$('#update_flat_elec1').val();

			var add=$('#update_address_elec1').val();
			var state=$('#update_state_elec1').val();
			var dist=$('#update_district_elec1').val();
			var city=$('#update_city_elec1').val();
			var tah='';//$('#update_tehsil_elec1').val();
			var pin=$('#update_pin_elec1').val();
		
			
			//$('#update_ref_elec').val(refc);
			$('#update_email_elec').val(email);

			$('#update_flat_elec').val(flat);
			$('#update_address_elec').val(add);
			$('#update_state_elec').val(state);
			$('#update_district_elec').val(dist);
			$('#update_city_elec').val(city);
			var town = '';
			var village = '';
			//$('#update_tehsil_elec').val('');
			$('#update_pin_elec').val(pin);

			//var bankname= $('#update_bankname_elec1').val();
			var bankac=$('#update_bankac_elec1').val();
			/*var bankifsc=$('#update_bankifsc_elec1').val();
			var	bankcity=$('#update_bankcity_elec1').val();
			var bankbranch=$('#update_bankbranch_elec1').val();

			$('#update_bankname_elec').val(bankname);
			$('#update_bankac_elec').val(bankac);
			$('#update_bankifsc_elec').val(bankifsc);
			$('#update_bankcity_elec').val(bankcity);
			$('#update_bankbranch_elec').val(bankbranch);*/
			
			var pan=$('#update_pan_elec1').val();
			var addhar=$('#update_adhar_elec1').val();
			//var gstno=$('#update_gst_elec1').val();
			var gstno= '';
			
			$('#update_pan_elec').val(pan);
			$('#update_adhar_elec').val(addhar);
			//$('#update_gst_elec').val(gstno);
			$('#update_bankac_elec').val(bankac);


			var ditrtobuy=$('#update_ditrtobuy_elec1').val();
			var brandstobuy=$('#update_brandstobuy_elec1').val();
			//var firmage=$('#update_firmage_elec1').val();
			var firmage='';

			$('#update_ditrtobuy_elec').val(ditrtobuy);
			$('#update_brandstobuy_elec').val(brandstobuy);
			//$('#update_firmage_elec').val(firmage);
		
		
		  
			//updateElectrician();
			$('#userapprove').popup('open');
    	}
		else if(cattype == 'Retailer')
        {
		/*	if($('#update_shopname_ret1').val().trim()=='')
			{
				toast('Please fill Shop Name');
				$('#update_shopname_ret1').focus();
				$('#update_shopname_ret1').scrollIntoView();
			}*/
			/*if($('#update_shoptype_ret1').val().trim()=='')
			{
				toast('Please fill Shop Type');
				$('#update_shoptype_ret1').focus();
				$('#update_shoptype_ret1').scrollIntoView();
			}
			else if($('#update_ditrtobuy_ret1').val().trim()=='')
			{
				
				toast('Please fill Distributor');
				$('#update_ditrtobuy_ret1').focus();
				$('#update_ditrtobuy_ret1').scrollIntoView();
			}
			else if($('#update_gst_ret1').val().trim()=='')
			{
				
				toast('Please fill GST Number');
				$('#update_gst_ret1').focus();
				$('#update_gst_ret1').scrollIntoView();
			}
			else if($('#update_pan_ret1').val().trim()=='')
			{
				
				toast('Please fill PAN Number');
				$('#update_pan_ret1').focus();
				$('#update_pan_ret1').scrollIntoView();
			}
			else if($('#update_adhar_ret1').val().trim()=='')
			{
				
				toast('Please fill Aadhar Number');
				$('#update_adhar_ret1').focus();
				$('#update_adhar_ret1').scrollIntoView();
			}*/

			var pmob=$('#update_pmobile_ret1').val();
			var name=$('#update_name_ret1').val();
			var surname=$('#update_surname_ret1').val();
			var omobile='';//$('#update_omobile_ret1').val();
			var marriage= $('input[name=update_marriage_ret1]:checked').val();

			

			$('#update_pmobile_ret').val(pmob);
			$('#update_name_ret').val(name);
			$('#update_surname_ret').val(surname);
			//$('#update_omobile_ret').val(omobile);
			$('#update_marriage_ret').val(marriage);

			
			//var ephoto = $('#cardimage_self_elec').val();
			//var eid = $('#cardimage_proof_elec').val();
			var mm ='';
			var dd ='';
			var yyyy = '';
			var birthday = $('#update_dob_ret1').val();
			if(birthday!='')
			{
			var dob = birthday.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			yyyy = dob.length == 3 ? dob[2] : '';
			$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
			}

            
			var mm2 ='';
			var dd2 ='';
			var yyyy2 = '';
			var marriage = $('#update_dom_ret1').val();
			if(marriage!='')
			{
			var dom = marriage.split('-');
			mm2 = dom.length == 3 ? dom[1] : '';
			dd2 = dom.length == 3 ? dom[0] : '';
			yyyy2 = dom.length == 3 ? dom[2] : '';
			$('#update_dom_ret').val(yyyy2+'-'+mm2+'-'+dd2);
			}
			
			

			//var refc=$('#update_ref_ret1').val();
			var email=$('#update_email_ret1').val();
			var flat=$('#update_flat_ret1').val();

			var add=$('#update_address_ret1').val();
			var state=$('#update_state_ret1').val();
			var dist=$('#update_district_ret1').val();
			var city=$('#update_city_ret1').val();
			var tah='';//$('#update_tehsil_ret1').val();
			var pin=$('#update_pin_ret1').val();
		  var storecode = $('#update_store_ret1').val();
			
			//$('#update_ref_ret').val(refc);
			$('#update_email_ret').val(email);

			$('#update_flat_ret').val(flat);
			$('#update_address_ret').val(add);
			$('#update_state_ret').val(state);
			$('#update_district_ret').val(dist);
			$('#update_city_ret').val(city);
			var town = '';
			var village = '';
			//$('#update_tehsil_ret').val(tah);
			$('#update_pin_ret').val(pin);
      $('#update_store_ret').val(storecode);

			/*var bankname= $('#update_bankname_ret1').val();
			var bankac=$('#update_bankac_ret1').val();
			var bankifsc=$('#update_bankifsc_ret1').val();
			var	bankcity=$('#update_bankcity_ret1').val();
			var bankbranch=$('#update_bankbranch_ret1').val();

			$('#update_bankname_ret').val(bankname);
			$('#update_bankac_ret').val(bankac);
			$('#update_bankifsc_ret').val(bankifsc);
			$('#update_bankcity_ret').val(bankcity);
			$('#update_bankbranch_ret').val(bankbranch);*/
			
			//var pan=$('#update_pan_ret1').val();
			var addhar=$('#update_adhar_ret1').val();
			var gst=$('#update_gst_ret1').val();
			var shopname=$('#update_shopname_ret1').val();
			//var shoptype=$('#update_shoptype_ret1').val();
			//var shopestablish=$('#update_shopestablish_ret1').val();
			//var shopowner=$('#update_owner_ret1').val();

			
			//$('#update_pan_ret').val(pan);
			$('#update_adhar_ret').val(addhar);
			$('#update_gst_ret').val(gst);
			$('#update_shopname_ret').val(shopname);
			//$('#update_shoptype_ret').val(shoptype);
			//$('#update_shopestablish_ret').val(shopestablish);
			//$('#update_owner_ret').val(shopowner);

			//localStorage.setItem("retaiter_type",shoptype);
			var ditrtobuy=$('#update_ditrtobuy_ret1').val();
			var brandstobuy=$('#update_brandstobuy_ret1').val();
			var firmage=$('#update_firmage_ret1').val();

			$('#update_marriage_ret').val(marriage);
			$('#update_ditrtobuy_ret').val(ditrtobuy);
			$('#update_brandstobuy_ret').val(brandstobuy);
			$('#update_firmage_ret').val(firmage);

			/*
			var gstimg = checkforundefined(localStorage.getItem('gstimg'));
			var panimg = checkforundefined(localStorage.getItem('panimg'));
			if(gstimg=='')
			{
					toast('Please upload GST image');
					$('#cardimage_gst_ret1').focus();
					$('#cardimage_gst_ret1').scrollIntoView();
			}
			else if(panimg=='')
			{
					toast('Please upload Pan image');
					$('#cardimage_proof_ret1').focus();
					$('#cardimage_proof_ret1').scrollIntoView();
			}

			*/
		  
			updateRetailer();
			//$('#userapprove_rtypeselection').popup('open');

    	}
    	if(cattype == 'Mechanic')
        {
			if($('#update_ret_cb1').val().trim()=='')
			{
				
				toast('Please select Retailer');
				$('#update_ret_cb1').focus();
				$('#update_ret_cb1').scrollIntoView();
			}

			var pmob=$('#update_pmobile_cb1').val();
			var name=$('#update_name_cb1').val();
			var surname=$('#update_surname_cb1').val();
			var omobile='';//$('#update_omobile_cb1').val();

			

			$('#update_pmobile_cb').val(pmob);
			$('#update_name_cb').val(name);
			$('#update_surname_cb').val(surname);
			//$('#update_omobile_cb').val(omobile);

			var storecode = $('#update_ret_cb1').val();
			$('#update_ret_cb').val(storecode);

			
			//var ephoto = $('#cardimage_self_elec').val();
			//var eid = $('#cardimage_proof_elec').val();
			var mm ='';
			var dd ='';
			var yyyy = '';
			var birthday = $('#update_dob_cb1').val();
			if(birthday!='')
			{
			var dob = birthday.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			yyyy = dob.length == 3 ? dob[2] : '';
			$('#update_dob_cb').val(yyyy+'-'+mm+'-'+dd);
			}
			
			

			//var refc=$('#update_ref_cb1').val();
			var email=$('#update_email_cb1').val();
			var marriage = $('input[name=update_marriage_cb1]:checked').val();
			
			var flat=$('#update_flat_cb1').val();

			var add=$('#update_address_cb1').val();
			var state=$('#update_state_cb1').val();
			//var dist=$('#update_district_cb1').val();
			var city=$('#update_city_cb1').val();
			var tah='';//$('#update_tehsil_cb1').val();
			var pin=$('#update_pin_cb1').val();
		
			
			//$('#update_ref_cb').val(refc);
			$('#update_marriage_cb').val(marriage);

			$('#update_email_cb').val(email);

			$('#update_flat_cb').val(flat);
			$('#update_address_cb').val(add);
			$('#update_state_cb').val(state);
			//$('#update_district_cb').val(dist);
			$('#update_city_cb').val(city);
			var town = '';
			var village = '';
			//$('#update_tehsil_cb').val(tah);
			$('#update_pin_cb').val(pin);

			/*var bankname= $('#update_bankname_cb1').val();
			var bankac=$('#update_bankac_cb1').val();
			var bankifsc=$('#update_bankifsc_cb1').val();
			var	bankcity=$('#update_bankcity_cb1').val();
			var bankbranch=$('#update_bankbranch_cb1').val();

			$('#update_bankname_cb').val(bankname);
			$('#update_bankac_cb').val(bankac);
			$('#update_bankifsc_cb').val(bankifsc);
			$('#update_bankcity_cb').val(bankcity);
			$('#update_bankbranch_cb').val(bankbranch);*/
			
			//var pan=$('#update_pan_cb1').val();
			var pan='';
			//var addhar=$('#update_adhar_cb1').val();
			var addhar='';
			//var gstno=$('#update_gst_cb1').val();
			var gstno='';
			//var shopname = $('#update_currwork_cb1').val();
			//var ownermobile = $('#update_rmobile_cb1').val();
			//$('#update_pan_cb').val(pan);
			//$('#update_adhar_cb').val(addhar);
			//$('#update_gst_cb').val(gstno);
			//$('#update_currwork_cb').val(shopname);
			//$('#update_rmobile_cb').val(ownermobile);


			//var ditrtobuy=$('#update_ditrtobuy_cb1').val();
			//var brandstobuy=$('#update_brandstobuy_cb1').val();
			//var firmage=$('#update_firmage_cb1').val();
			var firmage= '';

			//$('#update_ditrtobuy_cb').val(ditrtobuy);
			//$('#update_brandstobuy_cb').val(brandstobuy);
			//$('#update_firmage_cb').val(firmage);
		  
			//updateCounterboy();
			$('#userapprove').popup('open');

    	}


}

function approvesubmit_rtype(type)
{
	localStorage.setItem("retaiter_type",type);
	updateRetailer();
}

function approvesubmit()
{
	var cattype = localStorage.getItem('cattype');
       

        if(cattype == 'Painter')
        {
			updateElectrician();

		}
		else if(cattype == 'Retailer')
        {
			updateRetailer();
			
		}
		else if(cattype == 'Mechanic')
        {
			updateCounterboy();
		}
	
}

function approvecancel()
{
	$('#userapprove').popup('close');
}




$(document).on('pageshow', '#profilepage2', function (event, ui) {
	var etype=localStorage.getItem("usermtype_ufifilters");
 		if(etype=='Painter')
 		{
 			$('#electrician_profile1').css('display','block');
			$('#retailer_profile1').css('display','none');
			$('#counterboy_profile1').css('display','none');
			$('#dealer_profile1').css('display','none');
			try{
			$("#update_state_elec").selectmenu('refresh');
			$("#update_district_elec").selectmenu('refresh');

			var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;
			
			document.getElementById('update_dob_elec').setAttribute("max", today);


			}
			catch(err) 
			{	}
			
 		}
 		else if(etype=='Retailer')
 		{
 			$('#electrician_profile1').css('display','none');
			$('#retailer_profile1').css('display','block');
			$('#counterboy_profile1').css('display','none');
			$('#dealer_profile1').css('display','none');
			try{
			$("#update_state_ret").selectmenu('refresh');
			$("#update_district_ret").selectmenu('refresh');

			var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;
			
			document.getElementById('update_dob').setAttribute("max", today);
			}catch(err) 
			{	}
 		}
		else if(etype=='Mechanic')
 		{
 			$('#electrician_profile1').css('display','none');
			$('#retailer_profile1').css('display','none');
			$('#counterboy_profile1').css('display','block');
			$('#dealer_profile1').css('display','none');
			try{
			$("#update_state_elec").selectmenu('refresh');
			$("#update_district_elec").selectmenu('refresh');

			var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;
			
			document.getElementById('update_dob_cb').setAttribute("max", today);


			}
			catch(err) 
			{	}
			
 		}
 
		else if(etype=='Dealer' || etype=='dealer')
 		{
 			$('#electrician_profile1').css('display','none');
			$('#retailer_profile1').css('display','none');
			$('#counterboy_profile1').css('display','none');
			$('#dealer_profile1').css('display','block');
			try{
			$('#update_state_del').val(store.storestate);
			$("#update_state_del").selectmenu('refresh');
			var today = new Date();
			var dd = today.getDate()-1;
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;
			
			document.getElementById('update_dob_del').setAttribute("max", today);
			}catch(err) 
			{	}
			
 		}
});

$(document).on('pageshow', '#profilepage', function (event, ui) {

	/*$(document).on('change', '#emptype1', function (e, ui) {

		e.preventDefault();
		e.stopPropagation();

		var etype=$('#emptype1').val();

		 
 });*/
		$('#rdet_update_ref_cb1').innerHTML = '';
		$("#registration_personal_info").css('display', 'block');
        $("#registration_address").css('display', 'none');
        $("#registration_bank_details").css('display', 'none');
        $("#registration_business_info").css('display', 'none');

        
        $("#addr_elec").css('display', 'none');
        $("#addr_ret").css('display', 'none');
        $("#bank_elec").css('display', 'none');
        $("#bank_ret").css('display', 'none');
        $("#busi_elec").css('display', 'none');
        $("#busi_ret").css('display', 'none');

		setminDate();

 		var etype=localStorage.getItem("usermtype_ufifilters");
 		
 		if(etype=='Painter')
    	 {
			$("#personal_elec").css('display', 'block');
			$("#personal_ret").css('display', 'none');
			$("#personal_cb").css('display', 'none');
			$('#electrician_profile1').css('display','block');
			$('#retailer_profile1').css('display','none');
			$('#counterboy_profile1').css('display','none');
			$('#dealer_profile1').css('display','none');


			$('#update_name_elec').val(user.firstname+' '+user.lastname);
			$('#update_pmobile_elec').val(user.mobile);
			$('#update_email_elec').val(user.emailid);
			//$('#update_city_elec2').val(user.emailid);
			$('#update_district_elec').val(user.district);
			//$('#update_omobile_elec').val(user.other_mobile_no);
			$('#update_pin_elec').val(user.pin);
			$('#update_pan_elec').val(user.pancardno);
			//$('#update_ref_elec').val(user.referencecode);
			$('#update_address_elec').val(user.address_ck+' '+user.street_ck);

			$('#update_city_elec').val(user.city_ufi);
            //$("#update_city_elec").selectmenu('refresh');
			$('#update_state_elec').val(user.state_ck);
            //$("#update_state_elec").selectmenu('refresh');

			$('#update_pan_elec').val(user.pancardno);
			
			if(imageExists(versionurl+'uploads/'+user.photo))
			{
			//document.getElementById("cardimage_self_elec").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("ppichome").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			}
			
			//document.getElementById("cardimage_shop_elec").src = versionurl+'uploads/'+user.PhotoofShop;

			filenm=user.photo;
			//filenmdoc=user.doc;

	     }
		 else if(etype=='Retailer')
	     {
			$("#personal_elec").css('display', 'none');
			$("#personal_ret").css('display', 'block');
			$("#personal_cb").css('display', 'none');
			$('#electrician_profile1').css('display','none');
			$('#retailer_profile1').css('display','block');
			$('#counterboy_profile1').css('display','none');
			$('#dealer_profile1').css('display','none');
			 

			$('#update_name_ret').val(user.firstname+' '+user.lastname);
			$('#update_pmobile_ret').val(user.mobile);
			$('#update_pmobile_ret1').val(user.mobile);
			//$('#update_omobile_ret').val(user.other_mobile_no);
			//$('#update_shopname_ret').val(user.shopname);
			$('#update_cinno_ret').val(user.cinno);
			$('#update_gst_ret').val(user.gstno);
			$('#update_ditrtobuy_ret').val(user.ditrtobuy);
			//$('#update_shopestablish_ret').val(user.shopestablish);

			//$('#update_pan_ret').val(user.pancardno);
			
			$('#update_email_ret').val(user.emailid);
			$('#update_district_ret').val(user.district);
			$('#update_pin_ret').val(user.pin);
			$('#update_address_ret').val(user.address_ck);
			$('#update_city_ret').val(user.city_ufi);
            //$("#update_city_ret").selectmenu('refresh');
			$('#update_state_ret').val(user.state_ck);
            //$("#update_state_ret").selectmenu('refresh');

            if(imageExists(versionurl+'uploads/'+user.photo))
            {
			//document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("ppichome").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			}
			/*if(imageExists(versionurl+'uploads/'+user.doc1))
				document.getElementById("cardimage_proof_ret").src = versionurl+'uploads/'+user.doc1;
			if(imageExists(versionurl+'uploads/'+user.PhotoofShop))
				document.getElementById("cardimage_shop_ret").src = versionurl+'uploads/'+user.PhotoofShop;*/

			filenm=user.photo;
			//filenmdoc=user.doc;
            //filenmshop=user.PhotoofShop;
			
	     }
		 else if(etype=='Mechanic')
	     {
			$("#personal_elec").css('display', 'none');
			$("#personal_ret").css('display', 'none');
			$("#personal_cb").css('display', 'block');
			$('#electrician_profile1').css('display','none');
			$('#retailer_profile1').css('display','block');
			$('#counterboy_profile1').css('display','none');
			$('#dealer_profile1').css('display','none');


			//$('#update_name_cb').val(user.firstname+' '+user.lastname);
			$('#update_pmobile_cb').val(user.mobile);
			//$('#update_omobile_cb').val(user.other_mobile_no);
			$('#update_shopname_cb').val(user.shopname);
			$('#update_cinno_cb').val(user.cinno);

			//$('#update_pan_cb').val(user.pancardno);
			
			$('#update_email_cb').val(user.emailid);
			$('#update_district_cb').val(user.district);
			$('#update_pin_cb').val(user.pin);
			$('#update_address_cb').val(user.address_ck);
			$('#update_city_cb').val(user.city_ufi);
            //$("#update_city_cb").selectmenu('refresh');
			$('#update_state_cb').val(user.state_ck);
            //$("#update_state_cb").selectmenu('refresh');
			
            if(imageExists(versionurl+'uploads/'+user.photo))
            {
			//document.getElementById("cardimage_self_cb").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("ppichome").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			//document.getElementById("ppicprofile").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
			}
			//if(imageExists(versionurl+'uploads/'+user.doc))
				//document.getElementById("cardimage_proof_cb").src = versionurl+'uploads/'+user.doc;

			filenm=user.photo;
			//filenmdoc=user.doc;
            //filenmshop=user.PhotoofShop;
			
	     }
		 else if(etype=='Dealer')
	     {
			$('#electrician_profile1').css('display','none');
			$('#retailer_profile1').css('display','none');
			$('#counterboy_profile1').css('display','none');
			$('#dealer_profile1').css('display','block');
			
	     }

});




$(document).on('pageshow', '#homepage', function (event, ui) 
{
    
	document.getElementById("user_mobile_home").innerHTML='Mobile No '+user.mobile;

	document.getElementById("user_id_home_panel").innerHTML=user.mobile;
/*
		if(localStorage.getItem("retaiter_type")=='putty')
		{
		 document.getElementById("waldiv").css('display','none');
		}
		else
		{
			document.getElementById("waldiv").css('display','block');
		}
*/	
	var now = new Date();
	var dd = now.getDate();
	var mm = parseInt(now.getMonth())+1;
	var yyyy = now.getFullYear();

	
	/*if(typeof localStorage.getItem('footer'+dd+mm+yyyy) == 'undefined' || localStorage.getItem('footer'+dd+mm+yyyy) == null)
	{
	
	$.ajax({
            url: versionurl+'gm/getFooterImages1.php',
            type: 'GET',
            timeout: 30000,
			dataType:'json',
			async:false,
            data: {
                date: dd+'/'+mm+'/'+yyyy
            },
            success: function (data, textStatus, xhr) {

                console.log(JSON.stringify(data));
				var str ='';
						
				
				for(var i=0;i<data.length;i++)
					{
					
						str +='<img src="'+data[i].imageurl+'" class="img-responsive" alt=""/>';
					
					}
				
				localStorage.setItem('footer'+dd+mm+yyyy,str);
				$today = new Date();
				$yesterday = new Date($today);
				$yesterday.setDate($today.getDate() - 1); 


				
				var dd1 = $yesterday.getDate();
				var mm1 = parseInt($yesterday.getMonth())+1;
				var yyyy1 = $yesterday.getFullYear();
				localStorage.removeItem('footer'+dd1+mm1+yyyy1);
				$('#homepagefooter').html(str);
				$('#homepagefooter').trigger('destroy.owl.carousel');
				$('#homepagefooter').owlCarousel({
					loop:true,
					margin:0,
					nav:false,
					dots:true,
					autoplay:true,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						1000:{
							items:1
						}
					}
				});
				$('#homepagefooter').removeClass('owl-hidden');
			
			
            },
            error: function (xhr, textStatus, errorThrown) {
              
            }
        });
		}
	else
	{
		

		var str = localStorage.getItem('footer'+dd+mm+yyyy);
		$('#homepagefooter').html(str);
		$('#homepagefooter').trigger('destroy.owl.carousel');
		$('#homepagefooter').owlCarousel({
					loop:true,
					margin:0,
					nav:false,
					dots:true,
					autoplay:true,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						1000:{
							items:1
						}
					}
		});
		$('#homepagefooter').removeClass('owl-hidden');
	}*/
	

   if(localStorage.getItem("cattype")=='Painter')
   {
 
   		$('#mylistdiv').css('display','none');
   		$('#notificationsdiv').css('display','none');
		$('#counterdiv').css('display','none');
		$('#rewardstorediv').css('display','none');
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#pointspassbookpanel').css('display','none');
		$('#pointspassbookpanel_plumber').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#counterdivpanel').css('display','none');
		$('#voucherdivpanel').css('display','none');

		$('#walletdiv').css('display','none');


   }
   if(localStorage.getItem("cattype")=='Retailer')
   {
		$('#counterdiv').css('display','none');
		$('#counterdivpanel').css('display','none');
		$('#rewardshistpanel').css('display','none');

		/*if(localStorage.getItem("retaiter_type")=='Putty')
	    {
			$('#rewardstorediv').css('display','flex');
			$('#sales_data_main').css('display','none');
			
	    }
		else
	    {		
			$('#scandiv').css('display','none');
			$('#sales_data_main').css('display','flex');
	    }*/	

		$('#rewardstorediv').css('display','none');
		$('#sales_data_main').css('display','none');
		$('#scandiv').css('display','flex');

   }
   if(localStorage.getItem("usermtype_ufifilters")!='Retailer')
   {

   		/*$('#mylistdiv').css('display','none');
   		$('#rewardstorediv').css('display','none');
   		$('#counterdiv').css('display','none');
   		$('#notificationsdiv').css('display','none');
   		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#scanhistorypanel').css('display','none');
		$('#wallethistorypanel').css('display','none');*/

		$('#counterdiv').css('display','none');

   }
   if(localStorage.getItem("cattype")=='Mechanic')
   {
   	    $('#sales_data_main').css('display','none');
 		$('#mylistdiv').css('display','block');
   		$('#notificationsdiv').css('display','none');
		$('#counterdiv').css('display','none');
		$('#rewardstorediv').css('display','none');
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#pointspassbookpanel').css('display','none');
		$('#pointspassbookpanel_plumber').css('display','block');
		$('#scanhistorypanel').css('display','none');
		$('#wallethistorypanel').css('display','none');
		$('#counterdivpanel').css('display','none');
		$('#voucherdivpanel').css('display','none');

		$('#referdiv').css('display','flex');
		$('#referdiv2').css('display','none');



   }
   
});

$(document).on('pageshow', '#dealerhomepage', function (event, ui) 
{
		$('#dealerusername').val(localStorage.getItem("usernamemloyal_ufi"));
	    $('#dealer_mobileno').val(localStorage.getItem("usermobilemloyal_ufi"));
})

function closemenu()
{
	$( "#sidemenu" ).panel( "close" );
	$('#dealerusername').val(localStorage.getItem("usernamemloyal_ufi"));
	                           $('#dealer_mobileno').val(localStorage.getItem("usermobilemloyal_ufi"));
	                           
	                           var pass = localStorage.getItem("userpassloyal_ufi");
							    if(pass.length>=4)
						       {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#dealercodeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						        }
						        toast("Please wait..");
								dealerauthenticate1();
}
$(document).on('pageshow', '#dealerhomepage', function (event, ui) 
{

	try{
	$( "#sidemenu" ).panel( "close" );
	}catch(err) 
	{	
		console.log(err.toString());
	}


   
	var now = new Date();
	var dd = now.getDate();
	var mm = parseInt(now.getMonth())+1;
	var yyyy = now.getFullYear();

	//$('#homepagefooter').trigger('destroy.owl.carousel');

/*if(typeof localStorage.getItem('footer'+dd+mm+yyyy) == 'undefined' || localStorage.getItem('footer'+dd+mm+yyyy) == null)
	{
	$.ajax({
            url: versionurl+'gm/getFooterImages1.php',
            type: 'GET',
            timeout: 30000,
			dataType:'json',
			async:false,
            data: {
                date: dd+'/'+mm+'/'+yyyy
            },
            success: function (data, textStatus, xhr) {

                console.log(JSON.stringify(data));
				var str ='';
						
				
				for(var i=0;i<data.length;i++)
					{
					
						str +='<img src="'+data[i].imageurl+'" class="img-responsive" alt=""/>';
					
					}
				
				localStorage.setItem('footer'+dd+mm+yyyy,str);
				$today = new Date();
				$yesterday = new Date($today);
				$yesterday.setDate($today.getDate() - 1); 


				
				var dd1 = $yesterday.getDate();
				var mm1 = parseInt($yesterday.getMonth())+1;
				var yyyy1 = $yesterday.getFullYear();
				localStorage.removeItem('footer'+dd1+mm1+yyyy1);
				$('#dealerhomepagefooter').html(str);
				$('#dealerhomepagefooter').trigger('destroy.owl.carousel');
				$('#dealerhomepagefooter').owlCarousel({
					loop:true,
					margin:0,
					nav:false,
					dots:true,
					autoplay:true,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						1000:{
							items:1
						}
					}
				});
				$('#dealerhomepagefooter').removeClass('owl-hidden');
		//	document.getElementById("homepagefooter").innerHTML = str;
				
			
			//$('#homepagefooter').trigger('refresh.owl.carousel');	
			
            },
            error: function (xhr, textStatus, errorThrown) {
               // toast('Could not connect to Server, make sure you are connected to Internet');
            }
        });
	}
	else
	{
				var str = localStorage.getItem('footer'+dd+mm+yyyy);
				$('#dealerhomepagefooter').html(str);
				$('#dealerhomepagefooter').trigger('destroy.owl.carousel');
				$('#dealerhomepagefooter').owlCarousel({
					loop:true,
					margin:0,
					nav:false,
					dots:true,
					autoplay:true,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						1000:{
							items:1
						}
					}
				});
				$('#dealerhomepagefooter').removeClass('owl-hidden');
	}*/
	
   if(localStorage.getItem("cattype")=='SalesExecutive')
   {
 
   		//$('#dealer_block1').css('display','none');
//   		$('#dealer_block2').css('display','none');
//		$('#dealer_block3').css('display','block');
//		$('#dealer_block4').css('display','block');
		$('#profilehead').css('display', 'none');
    	$('#userpoint').css('display', 'none');
    	$('#approveddigit').css('display', 'block');
    	$('#pointstransferpanel').css('display', 'none');
    	$('#pointspasspanel').css('display', 'none');
    	$('#addcounterpanel').css('display', 'none');
    	$('#rewardspanel').css('display', 'none');
    	$('#rewardshis_panel').css('display', 'none');
    	$('#transferpanel').css('display', 'none');
    	$('#schemepanel').css('display', 'none');
    	$('#retailerapprovalpanel').css('display', 'block');
    	$('#counterapprovalpanel').css('display', 'block');
    	$('#historyapprovalpanel').css('display', 'block');
    	$('#referralpanel').css('display', 'block');
    	$('#tncpanel').css('display', 'none');
   }
   else
   {
   		//$('#dealer_block1').css('display','block');
//   		$('#dealer_block2').css('display','block');
//		$('#dealer_block3').css('display','none');
//		$('#dealer_block4').css('display','none');
		$('#profilehead').css('display', 'block');
    	$('#userpoint').css('display', 'block');
    	$('#approveddigit').css('display', 'none');
    	$('#pointstransferpanel').css('display', 'block');
    	$('#pointspasspanel').css('display', 'block');
    	$('#addcounterpanel').css('display', 'block');
    	$('#rewardspanel').css('display', 'none');
    	$('#rewardshis_panel').css('display', 'block');
    	$('#transferpanel').css('display', 'block');
    	$('#schemepanel').css('display', 'block');
    	$('#retailerapprovalpanel').css('display', 'none');
    	$('#counterapprovalpanel').css('display', 'none');
    	$('#historyapprovalpanel').css('display', 'none');
    	$('#referralpanel').css('display', 'none');
    	$('#tncpanel').css('display', 'block');
   }

  
   
});


$(document).on('pageinit', '#page-card', function (event, ui) {

     getContacts();
	 

    $(document).on('tap', '#getbarcodes', function (e, ui) {

        $.mobile.changePage( "#getbarcode", {transition: "slideup"} );
	  });
        
    	
	 localStorage.setItem("firsttime","");
	renderTemplatedetail('page-card');

 
 
});



function viewpunch(){
 
        $.mobile.changePage( "#page-card-punch", {transition: "flip"} );
  }

  $(document).on('pageinit', '#page-card-punch', function (event, ui) {

	

   
	
	renderTemplatedetail('page-card-punch');

 
 
});



function aboutprg(){
	    $("#navBdr").css('display', 'none');
        $("#navBdr_about").css('display', 'block');
        $("#navBdr_coupon").css('display', 'none');
        $("#navBdr_points").css('display', 'none');

		$("#MESSAGES").css('display', 'none');
		$("#ABOUT").css('display', 'block');
		$("#COUPONS").css('display', 'none');
		$("#POINTS").css('display', 'none');
		renderTemplatedetail('aboutus');
		//document.getElementById("barcontentplist").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span></a>';
        $.mobile.changePage( "#mloyalpg", {transition: "flip"} );
  }   

function showInbox(){
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	//document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	//document.getElementById("headername").innerHTML='Messages';
	//var main = document.getElementById("cardcontent");
	//main.style.display = 'none';
	$("#navBdr").css('display', 'block');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'none');
    $("#navBdr_points").css('display', 'none');

	$("#MESSAGES").css('display', 'block');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'none');
    $("#POINTS").css('display', 'none');
    
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('inbox', 'msg_history_json.asp');
	}
}
function showLoyalty1(){
	var frompage = "homepage";
	localStorage.setItem("pointpassfrom",frompage);
	showLoyalty();
}
function showLoyalty_ins(val)
{
	if(val=='pointspass_ret1')
	{
		$('#pointbal_bal').css('display','block');
		$('#db_wallet').css('display','none');
		document.getElementById("pointbal_head").innerHTML = 'Point Balance';
	}
	else if(val=='pointspass_del1')
	{
		$('#pointbal_bal').css('display','none');
		$('#db_wallet').css('display','block');
		document.getElementById("pointbal_head").innerHTML = 'My Wallet';
	}
	showLoyalty();
}
function showLoyalty()
{
	
	if(user.mobile==null || user.mobile=='')
	{
		$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	//document.getElementById("barcontentplist").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';
	/*document.getElementById("headername").innerHTML='Points';
	 var main = document.getElementById("cardcontent");
	main.style.display = 'none';*/
	  $("#navBdr1").css('display', 'block');
    $("#navBdr_details").css('display', 'none');
    $("#navBdr_membership").css('display', 'none');

    $("#POINTS").css('display', 'block');
    $("#membership").css('display', 'none');
    $("#details").css('display', 'none');

	//$.mobile.changePage( "#mloyalpg", { transition: "none"} );

	//$.mobile.changePage( "#mloyalpg", { transition: "none"} );

	if(localStorage.getItem("usermtype_ufifilters")=='Mechanic' || localStorage.getItem("usermtype_ufifilters")=='Painter')
    {
    	  $('#pointbal_bal').css('display','block');
		  $('#db_wallet').css('display','none');
		  document.getElementById("pointbal_head").innerHTML = 'Wallet Balance';
    }

    if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
    {
		$.mobile.changePage( "#point_balance", { transition: "none"} ); 
		document.getElementById("mloyalpg_header").innerHTML='My Wallet';
		//showTabContent('loyalty', 'points_history_json.asp');
		get_transactions_details();
	}
	else if(localStorage.getItem("usermtype_ufifilters")=='Painter')
    {
		$.mobile.changePage( "#point_balance", { transition: "none"} ); 
		document.getElementById("mloyalpg_header").innerHTML='My Point Balance';
		//showTabContent('loyalty', 'points_history_json.asp');
		get_transactions_details_cashback();
	}
	else
	{

		$.mobile.changePage( "#point_balance", { transition: "none"} ); 
		document.getElementById("mloyalpg_header").innerHTML='My Point Balance';
		//showTabContent('loyalty', 'points_history_json.asp');
		get_transactions_details();
	}
	}
}

function get_transactions_details()
{
		

	  $.ajax({
		url: SERVER2+'get_transactions_details_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		//console.log(JSON.stringify(data));

			var str='';

			if(data.data[0].msg=='No Records Found.')
			{
				toast('No Records Found.');
			}
			else
			{
				 for (var i = 0; i < data.data.length; i++)
				 {	
					
					var dt = data.data[i].BillDate;
					//var dt1 = dt[1].split(':');
                	str +='<div class="recent_transfer">';
			        str +='<p class="recent_date">'+dt+'</p>';
			        str +='<div class="primary_block"><div class="recent_block padding0_10px">';
			        str +='<div class="recent_user_icon"> <img src="assets/images/points_transfer_icon.png" class="img-responsive" alt=""/> </div>';
			        str +='<div class="recent_user_details">';
			       if(data.data[i].TransType == 'Revoke')
							str +='<p class="recent_detail_text">Points Revoked from '+data.data[i].Member_Name+'('+data.data[i].shop_name+').'
						else if(data.data[i].TransType == 'Redeem')
							str += '<p class="recent_detail_text">Points Redeemed from '+data.data[i].Member_Name+'('+data.data[i].shop_name+').'
						else if(data.data[i].TransType == 'Gift')
							str += '<p class="recent_detail_text">Points Gifted to '+data.data[i].Member_Name+'('+data.data[i].shop_name+').';
						else 
							str += '<p class="recent_detail_text">Cash Earned from UFI Filters.';
					    str += '<br>Cash Earned: '+data.data[i].Points+'<br>';
			        str += 'Invoice No. :'+data.data[i].BillNumber+'<br></p>';
					//str += dt1[0]+':'+dt1[1]+' '+dt[2]+'<br>';
					/*if(data.data[i].GiftToMobile=='919711090909')
						str += '</div><div class="recent_user_points"><h2>'+parseInt(data.data[i].Points)*4+'<span>Points</span></h2></div>';
					else
			        	str += '</div><div class="recent_user_points"><h2>'+data.data[i].Points+'<span>Points</span></h2></div>';*/
			       // str += '</div><div class="recent_user_points"><h2>'+data.data[i].Points+'<span>Points</span></h2></div>';
			        str += '</div></div></div>';
				 }

				 document.getElementById('transfersret').innerHTML=str;

			}
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
}

function get_transactions_details_cashback()
{
		

	  $.ajax({
		url: SERVER2+'get_cashback_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		//console.log(JSON.stringify(data));

			var str='';

			if(data.data[0].msg=='No Records Found.')
			{
				toast('No Records Found.');
			}
			else
			{
				 for (var i = 0; i < data.data.length; i++)
				 {	
					/*str+='<div class="customer">';

					str+='<div class="primary_block">';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Mobile Number</div><div class="ui-block-b"><span>'+data.data[i].Mobile+'</span></div></div>';
				   
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Coupon Code</div><div class="ui-block-b"><span>'+data.data[i].CouponCode+'</span></div></div>';
				   
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">CashBack</div><div class="ui-block-b"><span>'+checkforundefined(data.data[i].CashBack)+'</span></div></div>';
				   
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Date</div><div class="ui-block-b"><span>'+checkforundefined(data.data[i].CreatedOn)+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Coupon Value</div><div class="ui-block-b"><span>'+checkforundefined(data.data[i].couponvalue)+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Cashback Status</div><div class="ui-block-b"><span>'+checkforundefined(data.data[i].cashbackstatus)+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Item category</div><div class="ui-block-b"><span>'+checkforundefined(data.data[i].Item_category)+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Item group</div><div class="ui-block-b"><span>'+checkforundefined(data.data[i].Item_group)+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Paytm Status</div><div class="ui-block-b"><span>'+checkforundefined(data.data[i].PaytmStatus)+'</span></div></div>';

					//str+='<div class="ui-grid-b" style="background: floralwhite;"><div class="ui-block-a">Approval Mobile</div><div class="ui-block-b"><span>'+data.data[i].ApprovalMob+'</span></div></div>';

					//str+='<div class="ui-grid-b" ><div class="ui-block-a">Status</div><div class="ui-block-b"><select id=\'ordertype'+i+'\' name=\'ordertype'+i+'\' onchange=javascript:changeOrderstatus(\''+i+'\',\''+data.data[i].MobileNumber+'\',\''+data.data[i].ApprovalMob+'\');><option value="">-Select-</option><option value="Approve">Approve</option>><option value="Reject">Reject</option>></select></div></div>';

					str+='</div>';

					str+='</div>';*/

					if(data.data[i].PaytmStatus=="SUCCESS")
						{
						var dt = data.data[i].CreatedOn.split(' ');
						var dt1 = dt[1].split(':');
						str +='<div class="recent_transfer">';
						str +='<p class="recent_date">'+dt[0]+'</p>';
						str +='<div class="primary_block"><div class="recent_block padding0_10px">';
						str +='<div class="recent_user_icon"> <img src="assets/images/points_recieved_icon.png" class="img-responsive" alt=""/> </div>';
						str +='<div class="recent_user_details">';
						str +='<p class="recent_detail_text">Cashback Received from UFI Filters.<br>';
						str += dt1[0]+':'+dt1[1]+' '+dt[2]+'<br></p>';
						str += '</div><div class="recent_user_points"><h2>&#8377; '+data.data[i].CashBack+'</h2></div>';
						str += '</div></div></div>';
	    			}
				 }

				 document.getElementById('transfersret').innerHTML=str;

			}
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
}

function showLoyalty_filter(transactions)
{
	//alert('in loyaltyfilter');
	if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
    {
	$.mobile.changePage( "#point_balance", { transition: "none"} ); 
	document.getElementById("mloyalpg_header").innerHTML='My Wallet';
	//showTabContent('loyalty', 'points_history_json.asp');

	 if(typeof transactions == 'undefined' || transactions=='')
		transactions = 'Gift';

	// if(transactions=='All')
	//	 transactions = 'Gift';

    
	

		$.ajax({
          
			url: SERVER+'points_history_json.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			   'mno' : user.mobile
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			//console.log('Data:'+JSON.stringify(data));

			
				//Data:{"data":[{"Store_Id":231,"TransType":"Earn","Points ":"200","GiftToMobile":"","SaleAmount":"2000","bill_number":"6602DED5-5284-4D80-B854-2AF8F34AD0EB","Created_On":"10/7/2018 12:54:42 PM"}],"error":[]}
				$('#pointbal_bal').val(data.balance);

				var str = '<br/><div class="pts"><div><span class="wallet_heading">Wallet Balance</span>&#x20B9;' + localStorage.getItem('cashback') + '</div></div>';   
				//str += '<!--<p class="tpts">Total Points</p>-->';

				str += '<a href="javascript:showDetails();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="img/earned-points.png" alt="img" class="eIcon"><span>Earned Cash :' + localStorage.getItem('cashback') + '</span><span class="purchaseBtnTxt">My Earned History</span></a>';
				if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
				   {
					//localStorage.setItem("jsonobj",JSON.stringify(json.data));
					str += '<a href="javascript:bonusHistory('+data.balance+');" id="ptsEarn" class="ui-btn ui-corner-all"><img src="img/earned-points.png" alt="img" class="eIcon"><span>Earned Points :' + localStorage.getItem('dealerbonuspoints') + '</span><span class="purchaseBtnTxt">My Points History</span></a>';
				   }
				var str1 = '';
				
				if(transactions == 'Gift' || transactions == 'All'){
				
					for(var i=0;i<data.datadealerbonus.length;i++)
					{
						var dt = data.datadealerbonus[i].createdon.split(' ');
						var dt1 = dt[1].split(':');
						str1 +='<div class="recent_transfer">';
						str1 +='<p class="recent_date">'+dt[0]+'</p>';
						str1 +='<div class="primary_block"><div class="recent_block padding0_10px">';
						str1 +='<div class="recent_user_icon"> <img src="assets/images/points_transfer_icon.png" class="img-responsive" alt=""/> </div>';
						str1 +='<div class="recent_user_details">';
						str1 +='<p class="recent_detail_text">Points Received from '+data.datadealerbonus[i].dealer_Name+'<br>';
						if(json.datadealerbonus[i].SaleAmount== null || typeof json.datadealerbonus[i].SaleAmount == 'undefined' )
							json.datadealerbonus[i].SaleAmount = '';
						if(json.datadealerbonus[i].SaleAmount != '')
						str1 += 'Sale of Rs. '+data.datadealerbonus[i].SaleAmount+'<br>';
						str1 += 'Invoice No. '+data.datadealerbonus[i].bill_number+'<br>';
						str1 += dt1[0]+':'+dt1[1]+' '+dt[2]+'<br></p>';
						str1 += '</div><div class="recent_user_points"><h2>'+data.datadealerbonus[i].points+'<span>Points</span></h2></div>';
						str1 += '</div></div></div>';
						
					}
				}
				if(transactions == 'Revoke' || transactions == 'All'){
				
					for(var i=0;i<data.datadealerexpired.length;i++)
					{
						var dt = data.datadealerexpired[i].createdon.split(' ');
						var dt1 = dt[1].split(':');
						str1 +='<div class="recent_transfer">';
						str1 +='<p class="recent_date">'+dt[0]+'</p>';
						str1 +='<div class="primary_block"><div class="recent_block padding0_10px">';
						str1 +='<div class="recent_user_icon"> <img src="assets/images/points_transfer_icon.png" class="img-responsive" alt=""/> </div>';
						str1 +='<div class="recent_user_details">';
						str1 +='<p class="recent_detail_text">Points Revoked  By '+data.datadealerexpired[i].dealer_Name+'<br>';
						if(data.datadealerexpired[i].SaleAmount== null || typeof data.datadealerexpired[i].SaleAmount == 'undefined' )
							data.datadealerexpired[i].SaleAmount = '';
						if(data.datadealerexpired[i].SaleAmount != '')
						str1 += 'Sale of Rs. '+data.datadealerexpired[i].SaleAmount+'<br>';
						str1 += 'Invoice No. '+data.datadealerexpired[i].bill_number+'<br>';
						str1 += dt1[0]+':'+dt1[1]+' '+dt[2]+'<br></p>';
						str1 += '</div><div class="recent_user_points"><h2>'+data.datadealerexpired[i].points+'<span> Points</span></h2></div>';
						str1 += '</div></div></div>';

						
						
					}
				}
				if(transactions == 'Revoke' || transactions == 'All'){
				
					for(var i=0;i<data.datadealerexpired.length;i++)
					{
					
						str1 +='<div class="recent_transfer">';
						str1 +='<p class="recent_date">'+data.datadealerexpired[i].createdon+'</p>';
						str1 +='<div class="primary_block"><div class="recent_block padding0_10px">';
						str1 +='<div class="recent_user_icon"> <img src="assets/images/points_transfer_icon.png" class="img-responsive" alt=""/> </div>';
						str1 +='<div class="recent_user_details">';
						str1 +='<p class="recent_detail_text">Points Revoked  By  Dealer ';
						
						str1 += '</div><div class="recent_user_points"><h2>'+data.datadealerexpired[i].points+'<span> Points</span></h2></div>';
						str1 += '</div></div></div>';
						
					}
				}
				if(transactions == 'Redeem' || transactions == 'All'){
				
					for(var i=0;i<data.redeem.length;i++)
					{
					
						str1 +='<div class="recent_transfer">';
						str1 +='<p class="recent_date">'+data.redeem[i].billdate+'</p>';
						str1 +='<div class="primary_block"><div class="recent_block padding0_10px">';
						str1 +='<div class="recent_user_icon"> <img src="assets/images/points_transfer_icon.png" class="img-responsive" alt=""/> </div>';
						str1 +='<div class="recent_user_details">';
						str1 +='<p class="recent_detail_text">Points Redeemed  By  Retailer ';
						
						str1 += '</div><div class="recent_user_points"><h2>'+data.redeem[i].burn+'<span> Points</span></h2></div>';
						str1 += '</div></div></div>';
						
					}
				}
				
          		

       			
			
             
        document.getElementById('transfersret').innerHTML=str1;
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});
	}
	else
	{
		toast('Wallet is not valid for you');
	}
}
function showCoupons(){
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	/*document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	
	
	 var main = document.getElementById("cardcontent");
	 main.style.display = 'none';*/
	$("#navBdr1").css('display', 'none');
     $("#navBdr_details").css('display', 'none');
     $("#navBdr_membership").css('display', 'none');
	 $("#navBdr_coupon").css('display', 'block');

     $("#POINTS").css('display', 'none');
     //$("#membership").css('display', 'none');
     $("#details").css('display', 'none');
	 $("#COUPONS").css('display', 'block');
    document.getElementById("mloyalpg_header").innerHTML='Vouchers';
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('coupons', 'cpns_history_json.asp');
	}
}

function showGifts_cb(){
	if(user.mobile==null || user.mobile=='')
	{
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	/*document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	
	
	 var main = document.getElementById("cardcontent");
	 main.style.display = 'none';*/
	 $("#navBdr").css('display', 'none');
    $("#navBdr_about").css('display', 'none');
    $("#navBdr_coupon").css('display', 'block');
    $("#navBdr_points").css('display', 'none');

	$("#MESSAGES").css('display', 'none');
    $("#ABOUT").css('display', 'none');
    $("#COUPONS").css('display', 'block');
    $("#POINTS").css('display', 'none');
    document.getElementById("mloyalpg_header").innerHTML='Gift History';
	$.mobile.changePage( "#mloyalpg", { transition: "none"} ); 
	showTabContent('couponsused', 'cpns_history_json.asp');
	}
}


/*functions added on 010818*/

function showmembership()
{

	//user.mobile ='6666666666';

	if(user.mobile==null || user.mobile=='')
	{
		$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
		var cattype = localStorage.getItem('cattype');
			
        if(cattype == 'Painter')
        {
			//alert('user.isApproved'+user.isApproved+'....pendingprofile'+pendingprofile);
			if(user.isApproved=='PENDING')
			{
				$("#update_button1").attr("href", "javascript:updateElectrician();");
				$("#update_button1").removeClass("btn-disable");
				
			}
			else
			{
				//$("#update_button1").removeAttr("href");
				//$("#update_button1").addClass("btn-disable");

				$("#update_button1").attr("href", "javascript:updateElectrician();");
				$("#update_button1").removeClass("btn-disable");
				
				$("#cardimage_self_elec").prop("onclick", null).off("click");
				/*$("#cardimage_aadhar_elec").prop("onclick", null).off("click");
				$("#cardimage_aadhar_elec_back").prop("onclick", null).off("click");
				$("#cardimage_proof_elec").prop("onclick", null).off("click");
				*/
				     
	     
		 //document.getElementById('cardimage_aadhar_ret').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].Aadhar_Card_Photo_); }; 
		 if(typeof user.photo == undefined || typeof user.photo == 'undefined' || user.photo=='null' || user.photo==null)
				user.photo = '';
			/*if(user.photo=='')
			{
			document.getElementById('cardimage_self_elec').onclick = function () {}; 
			}
			else
			{
		 	 var ed_img1 = versionurl+'uploads/'+user.photo+'?'+Math.random();

			 document.getElementById('cardimage_self_elec').onclick = function () { openInWebView(ed_img1) }; 
			}*/

		  /*if(typeof user.adharphoto == undefined || typeof user.adharphoto == 'undefined' || user.adharphoto=='null' || user.adharphoto==null)
				user.adharphoto = '';
			if(user.adharphoto=='')
			{
			document.getElementById('cardimage_aadhar_elec').onclick = function () {}; 
			}
			else
			{
				
			 var ed_img2 = versionurl+'uploads/'+user.adharphoto+'?'+Math.random();
			 document.getElementById('cardimage_aadhar_elec').onclick = function () { openInWebView(ed_img2) }; 
			}

		    if(typeof user.adharphotoback == undefined || typeof user.adharphotoback == 'undefined' || user.adharphotoback=='null' || user.adharphotoback==null)
				user.adharphotoback = '';
			if(user.adharphotoback=='')
			{
			document.getElementById('cardimage_aadhar_elec_back').onclick = function () {}; 
			}
			else
			{
				
			 var ed_img3 = versionurl+'uploads/'+user.adharphotoback+'?'+Math.random();
			 document.getElementById('cardimage_aadhar_elec_back').onclick = function () { openInWebView(ed_img3) }; 
			}

		if(typeof user.panphoto == undefined || typeof user.panphoto == 'undefined' || user.panphoto =='null' || user.panphoto ==null)
				user.panphoto = '';
			if(user.panphoto=='')
			{
			document.getElementById('cardimage_proof_elec').onclick = function () {}; 
			}
			else
			{
				
			 var ed_img4 = versionurl+'uploads/'+user.panphoto+'?'+Math.random();
			 document.getElementById('cardimage_proof_elec').onclick = function () { openInWebView(ed_img4) }; 
			}*/

			}
		}
		else if(cattype == 'Retailer')
        {
            console.log(user.IsApproved_se);

			if(user.IsApproved_se=='Approved')
			{
				
			    $("#update_button2").attr("href", "javascript:updateRetailer();");
				$("#update_button2").removeClass("btn-disable");
				
			}
			else
			{
				/*$("#update_button2").removeAttr("href");
				$("#update_button2").addClass("btn-disable");
				$("#cardimage_self_ret").prop("onclick", null).off("click");*/

				$("#update_button2").attr("href", "javascript:updateRetailer();");
				$("#update_button2").removeClass("btn-disable");

				/*$("#cardimage_shop_ret").prop("onclick", null).off("click");
				$("#cardimage_gst_ret").prop("onclick", null).off("click");
				$("#update_shopestablish_ret").prop("onclick", null).off("click");
				$("#cardimage_self_ret").prop("onclick", null).off("click");
				$("#cardimage_aadhar_ret").prop("onclick", null).off("click");
				$("#cardimage_aadhar_ret_back").prop("onclick", null).off("click");
				$("#cardimage_proof_ret").prop("onclick", null).off("click");*/
				
				   
	     
		 //document.getElementById('cardimage_aadhar_ret').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].Aadhar_Card_Photo_); }; 
		if(typeof user.photo == undefined || typeof user.photo == 'undefined' || user.photo=='null' || user.photo==null)
				user.photo = '';
			/*if(user.photo=='')
			{
			document.getElementById('cardimage_self_ret').onclick = function () {};
			
			}
			else
			{
			 var ed_img1 = versionurl+'uploads/'+user.photo+'?'+Math.random();
			 document.getElementById('cardimage_self_ret').onclick = function () { openInWebView(ed_img1) }; 
			}*/

		  if(typeof user.adharphoto == undefined || typeof user.adharphoto == 'undefined' || user.adharphoto=='null' || user.adharphoto==null)
				user.adharphoto = '';
			/*if(user.adharphoto=='')
			{
			document.getElementById('cardimage_aadhar_ret').onclick = function () {}; 
			}
			else
			{
			 var ed_img2 = versionurl+'uploads/'+user.adharphoto+'?'+Math.random();
			 document.getElementById('cardimage_aadhar_ret').onclick = function () { openInWebView(ed_img2) }; 
			}

		if(typeof user.adharphotoback == undefined || typeof user.adharphotoback == 'undefined' || user.adharphotoback=='null' || user.adharphotoback==null)
				user.adharphotoback = '';
			if(user.adharphotoback=='')
			{
			document.getElementById('cardimage_aadhar_ret_back').onclick = function () {}; 
			}
			else
			{
			 var ed_img3 = versionurl+'uploads/'+user.adharphotoback+'?'+Math.random();
			 document.getElementById('cardimage_aadhar_ret_back').onclick = function () { openInWebView(ed_img3) }; 
			}*/

		if(typeof user.panphoto == undefined || typeof user.panphoto == 'undefined' || user.panphoto =='null' || user.panphoto ==null)
				user.panphoto = '';
			/*if(user.panphoto=='')
			{
			document.getElementById('cardimage_proof_ret').onclick = function () {}; 
			}
			else
			{
			 var ed_img4 = versionurl+'uploads/'+user.panphoto+'?'+Math.random();
			 document.getElementById('cardimage_proof_ret').onclick = function () { openInWebView(ed_img4) }; 
			}

		if(typeof user.PhotoofShop == undefined || typeof user.PhotoofShop == 'undefined' || user.PhotoofShop =='null' || user.PhotoofShop ==null)
				user.PhotoofShop = '';
			if(user.PhotoofShop=='')
			{
			document.getElementById('cardimage_shop_ret').onclick = function () {}; 
			}
			else
			{
			 var ed_img5 = versionurl+'uploads/'+user.PhotoofShop+'?'+Math.random();
			 document.getElementById('cardimage_shop_ret').onclick = function () { openInWebView(ed_img5) }; 
			}
		
		if(typeof user.shopestablish == undefined || typeof user.shopestablish == 'undefined' || user.shopestablish =='null' || user.shopestablish ==null)
				user.shopestablish = '';
			if(user.shopestablish=='')
			{
			document.getElementById('update_shopestablish_ret').onclick = function () {}; 
			}
			else
			{
			 var ed_img6 = versionurl+'uploads/'+user.shopestablish+'?'+Math.random();
			 document.getElementById('update_shopestablish_ret').onclick = function () { openInWebView(ed_img6) }; 
			}*/

			if(typeof user.gstphoto == undefined || typeof user.gstphoto == 'undefined' || user.gstphoto =='null' || user.gstphoto ==null)
				user.gstphoto = '';
			/*if(user.gstphoto=='')
			{
			document.getElementById('cardimage_gst_ret').onclick = function () {}; 
			}
			else
			{
			 var ed_img7 = versionurl+'uploads/'+user.gstphoto+'?'+Math.random();
			 document.getElementById('cardimage_gst_ret').onclick = function () { openInWebView(ed_img7) }; 
			}*/
				
			}
		}
		else if(cattype == 'Mechanic')
		{
			if(user.IsApproved_se=='Approved')
			{

				$("#update_button11").attr("href", "javascript:updateCounterboy();");
				$("#update_button11").removeClass("btn-disable");

				/*$("#cardimage_self_cb").prop("onclick", null).off("click");
				$("#cardimage_aadhar_cb").prop("onclick", null).off("click");
				$("#cardimage_aadhar_cb_back").prop("onclick", null).off("click");
				$("#cardimage_proof_cb").prop("onclick", null).off("click");*/

					     
		 //document.getElementById('cardimage_aadhar_ret').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].Aadhar_Card_Photo_); }; 
		 /*if(typeof user.photo == undefined || typeof user.photo == 'undefined' || user.photo=='null' || user.photo==null)
				user.photo = '';
			if(user.photo=='')
			{
			document.getElementById('cardimage_self_cb').onclick = function () {}; 
			}
			else
			{
			 var ed_img1 = versionurl+'uploads/'+user.photo+'?'+Math.random();
			 document.getElementById('cardimage_self_cb').onclick = function () { openInWebView(ed_img1) }; 
			}

		 if(typeof user.adharphoto == undefined || typeof user.adharphoto == 'undefined' || user.adharphoto=='null' || user.adharphoto==null)
				user.adharphoto = '';
			if(user.adharphoto=='')
			{
			document.getElementById('cardimage_aadhar_cb').onclick = function () {}; 
			}
			else
			{
			 var ed_img2 = versionurl+'uploads/'+user.adharphoto+'?'+Math.random();
			 document.getElementById('cardimage_aadhar_cb').onclick = function () { openInWebView(ed_img2) }; 
			}

		if(typeof user.adharphotoback == undefined || typeof user.adharphotoback == 'undefined' || user.adharphotoback=='null' || user.adharphotoback==null)
				user.adharphotoback = '';
			if(user.adharphotoback=='')
			{
			document.getElementById('cardimage_aadhar_cb_back').onclick = function () {}; 
			}
			else
			{
			 var ed_img3 = versionurl+'uploads/'+user.adharphotoback+'?'+Math.random();
			 document.getElementById('cardimage_aadhar_cb_back').onclick = function () { openInWebView(ed_img3) }; 
			}

		if(typeof user.panphoto == undefined || typeof user.panphoto == 'undefined' || user.panphoto =='null' || user.panphoto ==null)
				user.panphoto = '';
			if(user.panphoto=='')
			{
			document.getElementById('cardimage_proof_cb').onclick = function () {}; 
			}
			else
			{
			 var ed_img4 = versionurl+'uploads/'+user.panphoto+'?'+Math.random();
			 document.getElementById('cardimage_proof_cb').onclick = function () { openInWebView(ed_img4) }; 
			}*/

				
			}
			else
			{
				
				/*$("#update_button11").removeAttr("href");
				$("#update_button11").addClass("btn-disable");*/

				$("#update_button11").attr("href", "javascript:updateCounterboy();");
				$("#update_button11").removeClass("btn-disable");
				
			}
		}

		$.mobile.changePage( "#profilepage2", { transition: "none"} );
		
	
	}
}

function showDetails(){

	//alert('here');

    var str=''
	if(user.mobile==null || user.mobile=='')
	{
		
	$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
	/*document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span class="submenu_button_right" ><a href="javascript:showCoupons();"><div class="couponbx"><span class="age_4">'+user.cpns+' Coupons</span></div><img src="img/sci_coupons.png"/></span></a>';
	document.getElementById("headername").innerHTML='Coupons';
	
	 var main = document.getElementById("cardcontent");
	 main.style.display = 'none';*/
	 $("#navBdr1").css('display', 'none');
     $("#navBdr_details").css('display', 'block');
     $("#navBdr_membership").css('display', 'none');

     $("#POINTS").css('display', 'none');
     $("#membership").css('display', 'none');
     $("#details").css('display', 'block');
     $("#COUPONS").css('display', 'none');

	$.mobile.changePage( "#mloyalpg", { transition: "none"} );
	document.getElementById("mloyalpg_header").innerHTML='My Details';
	//user.isApproved = 'Approved';
	//showTabContent('details', 'details_history_json.asp');
	//https://ufifilters.mloyalretail.com/apis/get_casback_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno=9910049864
	var usersts = '';
	/*if(user.isBlocked == 'BLOCKED')
	   {
		usersts = user.isBlocked+'!';
	   }
	else
	   {
		usersts = user.isApproved+'!';
	   }*/

	   usersts = user.isApproved+'!';
	
	
	if(user.isApproved=='PENDING'){
	str ='<div class="user_status" id="userstatusdiv"><p class="font_500">Status</p><div class="current_status"><span class="verified">'+usersts+'</span></div></div>';
	str +=  '<div class="form-group text-center" >';
	str +=  '<h3 class="text-primary mt-0 mb-0 pt-10 pb-10 font_500">Pending Wallet</h3>'
	str += '<table class="table couter_list bg-dark scan_table">';
    str += '<thead class="table_header">';
    str += '<tr><th>Date</th><th>Cash Back Status</th><th>Scan Value</th></tr>';
    str += '</thead><tbody>';
	$.ajax({
			url: SERVER2+'member_coupon_redemption_details_api.asp',
			type: 'GET',
			timeout: 30000,
			dataType: 'json',
		  	data: {
				
				apiuid: 'MLOYALAPI',
				apipswd:'Ml0yalAP!2o14',
				mobileno: user.mobile
							
			},
			success: function(data, textStatus, xhr) {

				if(data.data.length<0)
				{
					
					str += 'No Data Found';
				}
				else
				{
					for(var i=0;i<data.data.length;i++)
					{
					
						var dt = data.data[i].RedeemDate.split(' ');
						var dt1 = dt[1].split(':');
						str += '<tr><td>'+dt[0]+'<br/>'+dt1[0]+':'+dt1[1]+' '+dt[2]+'</td>';
	    				str += '<td>Pending</td>';
	    				str += '<td>'+data.data[i].CouponRedeemValue+'</td></tr>';
	    		    	
    				}
				}
				str += '</tbody></table></div>';
			
	
				document.getElementById("details").innerHTML=str;

				
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});	

	}
	else if(user.isApproved=='REJECTED' || user.isBlocked=='BLOCKED')
	{
	
///////////////

var showpending=false;

	str='<div class="user_status" id="userstatusdiv"><p class="font_500">Status</p><div class="current_status"><span class="verified">'+usersts+'</span></div></div>';
	$.ajax({
			url: SERVER2+'get_casback_json_api.asp',
			type: 'GET',
			timeout: 30000,
			dataType: 'json',
		  	data: {
				
				apiuid: 'MLOYALAPI',
				apipswd:'Ml0yalAP!2o14',
				async:false,
				mobileno: user.mobile
							
			},
			success: function(data, textStatus, xhr) {

				//console.log("Anoop"+url);
				
				//{"data":[{ "Mobile":"9910049864","CouponCode":"onee1003","CashBack":"1","CreatedOn":"8/7/2018 9:46:21 PM"}]
				str='<div class="user_status" id="userstatusdiv"><p class="font_500">Status</p><div class="current_status"><span class="verified">'+usersts+'</span></div></div>';

				if(data.error.length>0)
				{
					showpending=true;
					str +='<div style="text-align:center;margin: 10px;font-size:14px;">No Cash Back Found</div>';
				}
				else
				{
					str +='<div class="timeline_cont" style="padding-top: 20px;">';
					var nooftwos = '0';
					var nooffives = '0';
					var nooftens = '0';
					for(var i=0;i<data.data.length;i++)
					{
						if(data.data[i].cashbackstatus=='SUCCESS')
						{
							if(data.data[i].CashBack == '2')
							{
								nooftwos = parseInt(nooftwos) + 1;
							}
							else if(data.data[i].CashBack == '5')
							{
								nooffives = parseInt(nooffives) + 1;
							}
							else if(data.data[i].CashBack == '10')
							{
								nooftens = parseInt(nooftens) + 1;
							}
						}
						/*str +='<div class="timeline_thread">';
						str +='<div class="t_icon"><img src="img/timeline_star.png" alt=""></div>';
						str +='<div class="t_desc"><span class="t_date">'+data.data[i].CreatedOn+'</span> You Have earned <strong>Rs. '+data.data[i].CashBack+' PayTm cashback</strong></div>';
						str +='</div>';*/
					}

					    str +='<div class="card cardvalue2" onclick="javascript:showScanHistory(2);">';
						//str +='<div class="t_icon"><img src="img/timeline_star.png" alt="">Cashback 2</div>';
						str +='<div class="card_left"><span>No of scans</span> '+nooftwos+'</div><div class="card_right"> <span>Redeem Value </span><div  class="inr_sym"><span>&#8377;</span> '+(2 * parseInt(nooftwos))+'</div></div>';
						str +='</div>';

						str +='<div class="card cardvalue5" onclick="javascript:showScanHistory(5);">';
						//str +='<div class="t_icon"><img src="img/timeline_star.png" alt="">Cashback 5</div>';
						str +='<div class="card_left"><span>No of scans </span>'+nooffives+'</div><div class="card_right"> <span>Redeem Value </span><div  class="inr_sym"><span>&#8377;</span> '+(5 * parseInt(nooffives))+'</div></div>';
						str +='</div>';

						str +='<div class="card cardvalue10" onclick="javascript:showScanHistory(10);">';
						//str +='<div class="t_icon"><img src="img/timeline_star.png" alt="">Cashback 10</div>';
						str +='<div class="card_left"><span>No of scans </span>'+nooftens+'</div><div class="card_right"> <span>Redeem Value </span><div  class="inr_sym"><span> &#8377;</span> '+(10 * parseInt(nooftens))+'</div></div>';
						str +='</div>';
					str +='</div>';
				}

				if(showpending==true)
				{

						str ='<div class="user_status" id="userstatusdiv"><p class="font_500">Status</p><div class="current_status"><span class="verified">'+usersts+'</span></div></div>';
	str +=  '<div class="form-group text-center" >';
	str +=  '<h3 class="text-primary mt-0 mb-0 pt-10 pb-10 font_500">Pending Wallet</h3>'
	str += '<table class="table couter_list bg-dark scan_table">';
    str += '<thead class="table_header">';
    str += '<tr><th>Date</th><th>Cash Back Status</th><th>Scan Value</th></tr>';
    str += '</thead><tbody>';
	$.ajax({
			url: SERVER2+'member_coupon_redemption_details_api.asp',
			type: 'GET',
			timeout: 30000,
			dataType: 'json',
		  	data: {
				
				apiuid: 'MLOYALAPI',
				apipswd:'Ml0yalAP!2o14',
				mobileno: user.mobile
							
			},
			success: function(data, textStatus, xhr) {

				if(data.data.length<0)
				{
					
					str += 'No Data Found';
				}
				else
				{
					for(var i=0;i<data.data.length;i++)
					{
					
						var dt = data.data[i].RedeemDate.split(' ');
						var dt1 = dt[1].split(':');
						str += '<tr><td>'+dt[0]+'<br/>'+dt1[0]+':'+dt1[1]+' '+dt[2]+'</td>';
	    				str += '<td>Pending</td>';
	    				str += '<td>'+data.data[i].CouponRedeemValue+'</td></tr>';
	    		    	
    				}
				}
				str += '</tbody></table></div>';
			
	
				document.getElementById("details").innerHTML=str;

				
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});	


				}
			    else
			    {
				str +=  '<div class="form-group text-center" >';
				str +=  '<h3 class="text-primary mt-0 mb-0 pt-10 pb-10 font_500">Failed Cash Back</h3>'
				str += '<table class="table couter_list bg-dark scan_table">';
				str += '<thead class="table_header">';
				str += '<tr><th>Date</th><th>Reason</th><th>Scan Value</th></tr>';
				str += '</thead><tbody>';
				$.ajax({
					url: SERVER2+'get_casback_json_api.asp',
					type: 'GET',
					timeout: 30000,
					dataType: 'json',
					data: {
						apiuid : 'MLOYALAPI',
						apipswd : 'Ml0yalAP!2o14',
						mobileno : user.mobile
									
					},
					success: function(data, textStatus, xhr) {

						if(data.data.length<0)
						{
							
							str += 'No Data Found';
						}
						else
						{
							for(var i=0;i<data.data.length;i++)
							{
							    if(data.data[i].cashbackstatus=='FAILURE')
								{
									    console.log(data.data[i].CouponCode);
									    console.log(str);

									    console.log(str.indexOf(data.data[i].CouponCode));

									    if(str.indexOf(data.data[i].CouponCode)==-1){
										var dt = data.data[i].CreatedOn.split(' ');
										var dt1 = dt[1].split(':');
										str += '<tr><td>'+dt[0]+'<br/>'+dt1[0]+':'+dt1[1]+' '+dt[2]+'</td>';
										//str += '<tr><td>'+data.data[i].CreatedOn+'</td>';
										str += '<td>'+data.data[i].PaytmStatus+'</td>';
										str += '<td>'+data.data[i].CashBack+'</td></tr>';
									}
								}
								
							}
						}
						str += '</tbody></table></div>';
						console.log(str);
						document.getElementById("details").innerHTML=str;
						
						},
						error: function(xhr, textStatus, errorThrown) {
							$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
						}
					});	
			    }
					},
					error: function(xhr, textStatus, errorThrown) {
						$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
					}
				});



//////////////

	   }
	
	else
	{
	str='<div class="user_status" id="userstatusdiv"><p class="font_500">Status</p><div class="current_status"><span class="verified">'+usersts+'</span></div></div>';
	$.ajax({
			url: SERVER2+'get_casback_json_api.asp',
			type: 'GET',
			timeout: 30000,
			dataType: 'json',
		  	data: {
				
				apiuid: 'MLOYALAPI',
				apipswd:'Ml0yalAP!2o14',
				mobileno: user.mobile
							
			},
			success: function(data, textStatus, xhr) {

				//console.log("Anoop"+url);
				
				//{"data":[{"Mobile":"9910049864","CouponCode":"onee1003","CashBack":"1","CreatedOn":"8/7/2018 9:46:21 PM"}]
				str='<div class="user_status" id="userstatusdiv"><p class="font_500">Status</p><div class="current_status"><span class="verified">'+usersts+'</span></div></div>';

				if(data.error.length>0)
				{
					str +='<div style="text-align:center;margin: 10px;font-size:14px;">No Cash Back Found</div>';
				}
				else
				{
					str +='<div class="timeline_cont" style="padding-top: 20px;">';
					var nooftwos = '0';
					var nooffives = '0';
					var nooftens = '0';
					for(var i=0;i<data.data.length;i++)
					{
						if(data.data[i].cashbackstatus=='SUCCESS')
						{
							if(data.data[i].CashBack == '2')
							{
								nooftwos = parseInt(nooftwos) + 1;
							}
							else if(data.data[i].CashBack == '5')
							{
								nooffives = parseInt(nooffives) + 1;
							}
							else if(data.data[i].CashBack == '10')
							{
								nooftens = parseInt(nooftens) + 1;
							}
						}
						/*str +='<div class="timeline_thread">';
						str +='<div class="t_icon"><img src="img/timeline_star.png" alt=""></div>';
						str +='<div class="t_desc"><span class="t_date">'+data.data[i].CreatedOn+'</span> You Have earned <strong>Rs. '+data.data[i].CashBack+' PayTm cashback</strong></div>';
						str +='</div>';*/
					}

					    str +='<div class="card cardvalue2" onclick="javascript:showScanHistory(2);">';
						//str +='<div class="t_icon"><img src="img/timeline_star.png" alt="">Cashback 2</div>';
						str +='<div class="card_left"><span>No of scans</span> '+nooftwos+'</div><div class="card_right"> <span>Redeem Value </span><div  class="inr_sym"><span>&#8377;</span> '+(2 * parseInt(nooftwos))+'</div></div>';
						str +='</div>';

						str +='<div class="card cardvalue5" onclick="javascript:showScanHistory(5);">';
						//str +='<div class="t_icon"><img src="img/timeline_star.png" alt="">Cashback 5</div>';
						str +='<div class="card_left"><span>No of scans </span>'+nooffives+'</div><div class="card_right"> <span>Redeem Value </span><div  class="inr_sym"><span>&#8377;</span> '+(5 * parseInt(nooffives))+'</div></div>';
						str +='</div>';

						str +='<div class="card cardvalue10" onclick="javascript:showScanHistory(10);">';
						//str +='<div class="t_icon"><img src="img/timeline_star.png" alt="">Cashback 10</div>';
						str +='<div class="card_left"><span>No of scans </span>'+nooftens+'</div><div class="card_right"> <span>Redeem Value </span><div  class="inr_sym"><span> &#8377;</span> '+(10 * parseInt(nooftens))+'</div></div>';
						str +='</div>';
					str +='</div>';
				}
			
				str +=  '<div class="form-group text-center" >';
				str +=  '<h3 class="text-primary mt-0 mb-0 pt-10 pb-10 font_500">Failed Cash Back</h3>'
				str += '<table class="table couter_list bg-dark scan_table">';
				str += '<thead class="table_header">';
				str += '<tr><th>Date</th><th>Reason</th><th>Scan Value</th></tr>';
				str += '</thead><tbody>';
				$.ajax({
					url: SERVER2+'get_casback_json_api.asp',
					type: 'GET',
					timeout: 30000,
					dataType: 'json',
					data: {
						apiuid : 'MLOYALAPI',
						apipswd : 'Ml0yalAP!2o14',
						mobileno : user.mobile
									
					},
					success: function(data, textStatus, xhr) {

						if(data.data.length<0)
						{
							
							str += 'No Data Found';
						}
						else
						{
							for(var i=0;i<data.data.length;i++)
							{
							    if(data.data[i].cashbackstatus=='FAILURE' || data.data[i].cashbackstatus=='PENDING')
								{
									    console.log(data.data[i].CouponCode);
									    console.log(str);

									    console.log(str.indexOf(data.data[i].CouponCode));

									    if(str.indexOf(data.data[i].CouponCode)==-1){
										var dt = data.data[i].CreatedOn.split(' ');
										var dt1 = dt[1].split(':');
										str += '<tr><td>'+dt[0]+'<br/>'+dt1[0]+':'+dt1[1]+' '+dt[2]+'</td>';
										//str += '<tr><td>'+data.data[i].CreatedOn+'</td>';
										str += '<td>'+data.data[i].PaytmStatus+'</td>';
										str += '<td>'+data.data[i].CashBack+'</td></tr>';
									}
								}
								
							}
						}
						str += '</tbody></table></div>';

						document.getElementById("details").innerHTML=str;

						},
						error: function(xhr, textStatus, errorThrown) {
							$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
						}
					});	
					},
					error: function(xhr, textStatus, errorThrown) {
						$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
					}
				});
}
	}
}


function showScanHistory(valueofcoupon)
{
	
	$.mobile.changePage( "#scan_history", { transition: "none"} );
	//https://ufifilters.mloyalretail.com/m/points_history_json.asp?mno=9717049993

	//https://ufifilters.mloyalretail.com/apis/get_casback_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno=9717049993
	var str='';

	
	str = '<table class="table couter_list bg-dark scan_table">';
    str += '<thead class="table_header">';
    str += '<tr><th>Date</th><th>Scanned Code</th><th>Item Group</th></tr>';
    str += '</thead><tbody>';
    
	$.ajax({
			url: SERVER2+'get_casback_json_api.asp',
			type: 'GET',
			timeout: 30000,
			dataType: 'json',
		  	data: {
				apiuid : 'MLOYALAPI',
				apipswd : 'Ml0yalAP!2o14',
				mobileno : user.mobile
							
			},
			success: function(data, textStatus, xhr) {
				
				console.log(data.data.length);
				if(data.data.length<0)
				{
					
					str += 'No Data Found';
				}
				else
				{
					var arr=new Array();
					
					for(var i=0;i<data.data.length;i++)
					{
						
					if(data.data[i].CashBack == valueofcoupon)
						{
							console.log("ddddd"+data.data[i].cashbackstatus);
							if(data.data[i].cashbackstatus!='FAILURE' && data.data[i].cashbackstatus!='PENDING')
								{
						var dt = data.data[i].CreatedOn.split(' ');
						var dt1 = dt[1].split(':');
						str += '<tr><td>'+dt[0]+'<br/>'+dt1[0]+':'+dt1[1]+' '+dt[2]+'</td>';
						//str += '<tr><td>'+data.data[i].CreatedOn+'</td>';
	    				str += '<td>XXXXXXXXXXX</td>';
	    				str += '<td>'+data.data[i].Item_group+'</td></tr>';

	    				arr.push(data.data[i].CreatedOn+'#'+data.data[i].CouponCode+'#'+data.data[i].itemcode); 
	    				localStorage.setItem('scanhistory',JSON.stringify(arr));
	    			          }
	    		    	}
    				}
				}
				str += '</tbody></table>';
		        
		        //$("#scan_history .ui-content").html(str);
				document.getElementById('scanhist').innerHTML=str;			
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});

    
				
    		
}

function showscanhistorydtwise()
{
	//alert(localStorage.getItem('scanhistory'));
	var fdt = $('#frmscan_dt').val().replace(/(^|-)0+/g, "$1"); // => "2-3";
	var edt = $('#toscan_dt').val().replace(/(^|-)0+/g, "$1"); // => "2-3"

    if(fdt!='')
	{
		var dob = fdt.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';


		fdt = mm+'/'+yyyy+'/'+dd;
	}

	 if(edt!='')
	{
		var dob = edt.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';


		edt =mm+'/'+yyyy+'/'+dd;
	}



	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	

    //var dd1 = dd+1;

	if(fdt == ''){
		fdt = mm+'/'+dd+'/'+yyyy;
		fdt=fdt.replace(/(^|-)0+/g, "$1"); // => "2-3";
	}
	if(edt == ''){
		edt = mm+'/'+dd+'/'+yyyy;
		edt=edt.replace(/(^|-)0+/g, "$1"); // => "2-3";
	}

	
	
	var arr = JSON.parse(localStorage.getItem('scanhistory'));

	console.log(arr);

	var str='';

	
	str = '<table class="table couter_list bg-dark scan_table">';
    str += '<thead class="table_header">';
    str += '<tr><th>Date</th><th>Scanned Code</th><th>Item Group</th></tr>';
    str += '</thead><tbody>';
   
	for(var i=0;i<arr.length;i++)
	{
		var arrj = arr[i].split('#');


		
	
		if(Date.parse(fdt)<=Date.parse((arr[0].substr(0,arr[0].indexOf(' ')))) && Date.parse((arr[0].substr(0,arr[0].indexOf(' ')))) <=Date.parse(edt))
		{
		str += '<tr><td>'+arrj[0]+'</td><td>XXXXXXXXXXX</td><td>'+arrj[2]+'</td></tr>';
		}
	}

	str += '</tbody></table>';
	document.getElementById('scanhist').innerHTML=str;	
}


function showcategories(){

    $.mobile.changePage( "#reward-cat", { transition: "none"} ); 
	showTabContent('reward-cat', 'categories_json.asp');
}
function showcatbrands(catid){
    $.mobile.changePage( "#reward-brand", { transition: "none"} ); 
	showTabContent('reward-brand', 'coupons_json.asp?cat_id='+catid);
}
function viewcart(){
	var main = document.getElementById("cardcontent");
	main.style.display = 'none';
	$.mobile.changePage( "#page-card", { transition: "none"} ); 
	  renderTemplate('viewcart',cart);
	  $("a[data-role='button']").button();

	 
}
function showFb(){
	document.getElementById("headername_social").innerHTML='Facebook'; 
    document.getElementById("barcontentsocial").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><a href="javascript:showFb();"><img src="img/refresh.png" class="mem_acc_icon"></a></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
	$.mobile.changePage( "#social", { transition: "none"} ); 
	showTabContentRSS('socialwall_facebook', json_fb);
}
function showTwitter(){
	document.getElementById("headername_social").innerHTML='Twitter';
	document.getElementById("barcontentsocial").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><a href="javascript:showTwitter();"><img src="img/refresh.png" class="mem_acc_icon"></a></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
	$.mobile.changePage( "#social", { transition: "none"} ); 
	showTabContentRSS('socialwall_twitter', RSS_twitter);
}
function showPinterest(){
	document.getElementById("headername_social").innerHTML='Pinterest';
	document.getElementById("barcontentsocial").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><a href="javascript:showPinterest();"><img src="img/refresh.png" class="mem_acc_icon"></a></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
    $.mobile.changePage( "#social", { transition: "none"} ); 
	showTabContentRSS('socialwall_pinterest', RSS_pinterest);
}
function showTumblr(){
	document.getElementById("headername_social").innerHTML='Tumblr';
	document.getElementById("barcontentsocial").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><a href="javascript:showTumblr();"><img src="img/refresh.png" class="mem_acc_icon"></a></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';      
	$.mobile.changePage( "#social", { transition: "none"} ); 
	showTabContentRSS('socialwall_tumblr', RSS_tumblr);
}
function showYoutube(){
	document.getElementById("headername_social").innerHTML='Video Gallery';	   
	document.getElementById("barcontentsocial").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><a href="javascript:showYoutube();"><img src="img/refresh.png" class="mem_acc_icon"></a></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
	$.mobile.changePage( "#social", { transition: "none"} ); 
	showTabContentRSS('socialwall_youtube', RSS_youtube);
}
function showInstagram(){
	document.getElementById("headername_social").innerHTML='Instagram';
	document.getElementById("barcontentsocial").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><a href="javascript:showInstagram();"><img src="img/refresh.png" class="mem_acc_icon"></a></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
	$.mobile.changePage( "#social", { transition: "none"} ); 
	showTabContentRSS('socialwall_instagram', RSS_instagram);
}

function showSpecial(category){
	
	var str = '';
	if((localStorage.getItem("usermtype_ufifilters")!='dealer' && localStorage.getItem("usermtype_ufifilters")!='SalesExecutive') && (user.mobile==null || user.mobile==''))
	{
		$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else if((localStorage.getItem("usermtype_ufifilters")=='dealer' || localStorage.getItem("usermtype_ufifilters")=='SalesExecutive') && (store.store_name==null || store.store_name==''))
	{
		$.mobile.changePage( "#page-login-dealer", { transition: "none"} ); 
	}
   	else
	{
    document.getElementById("wnewheader").innerHTML=category;
    $.mobile.changePage( "#whats_new_detail", { transition: "none"} );
	//document.getElementById("left-panel").panel( "close" );
	try{
	$( "#left-panel" ).panel( "close" );
	}catch(err) 
	{	}
//https://ufifilters.mloyalretail.com/m/specials_json.asp?memtype=Retailer&category=New%20Product	
	//showTabContent('specials', 'specials_json.asp');
	var memtype=localStorage.getItem("usermtype_ufifilters");
	/*if(localStorage.getItem("usermtype_ufifilters")=='Dealer')
		{
			memtype = 'Dealer';
		}
	else
		{
			memtype = 'Retailer';
		}*/
	$.ajax({
			url: SERVER+'specials_json.asp',
			type: 'GET',
			timeout: 30000,
			dataType:'json',
		  	data: {
				
				mno: user.mobile,
				memtype: memtype,
				category: category
							
			},
			success: function(data, textStatus, xhr) {

				//console.log(JSON.stringify(data));

				if(category=='New Product' || category == 'Latest Update')
				{
					str += '<div class="primary_section"><div class="primary_section_inner pt-30">';
					//str += '<div class="primary_block bg-dark-grey"><a href="#" class="points_bal_btn p_0">';						
					//str	+= '<div class="points_bal"><h4><strong>'+category+'</strong></h4></div><div class="points_arrow"><img src="assets/images/arrow.png" class="img-responsive" alt=""></div></a></div>';
				  if(data.length>0){	
					for(var i=0;i<data.length;i++)
					{
						if(data[i].longDesc=='undefined' || data[i].longDesc=='null' || data[i].longDesc==null || data[i].longDesc=='')
							data[i].longDesc = data[i].AdDesc;

						str += '<div class="primary_block"><a href="javascript:showUpdate_details(\''+data[i].AdName+'\',\''+data[i].AdDesc+'\',\''+data[i].longDesc+'\',\''+data[i].AdImgURL+'\');" class="what_new_item">';						
						str += '<div class="item_img"><img src="'+data[i].AdImgURL+'" class="img-responsive" alt=""></div>';
						str += '<div class="item_brief"><h4>'+data[i].AdName+'</h4><p>'+data[i].AdDesc+'</p></div>';
						str += '<div class="points_arrow"><img src="assets/images/arrow.png" class="img-responsive" alt=""></div></a></div>';
					}
				  }
				   else
					{
					   //str += 'No Data Available';

					    str += '<div class="primary_block"><a href="javascript:showUpdate_details(\'UFI-new-plant-agreement\',\'UFI-new-plant-agreement\',\'UFI-new-plant-agreement\',\'https://www.ufifilters.com/wp-content/uploads/2022/01/UFI-new-plant-agreement.jpg\');" class="what_new_item">';						
						str += '<div class="item_img"><img src="https://www.ufifilters.com/wp-content/uploads/2022/01/UFI-new-plant-agreement.jpg" class="img-responsive" alt=""></div>';
						str += '<div class="item_brief"><h4>UFI-new-plant-agreement</h4><p></p></div>';
						str += '<div class="points_arrow"><img src="assets/images/arrow.png" class="img-responsive" alt=""></div></a></div>';
					}
			        str += '</div></div>';	
				}
				else if(category == 'Showrooms')
				{
					str += '<div class="primary_section"><div class="primary_section_inner pt-30">';
					//str += '<div class="primary_section"><div class="primary_section_inner pt-30"><div class="primary_block bg-dark-grey"><a href="#" class="points_bal_btn p_0">';						
					//str	+= '<div class="points_bal"><h4><strong>'+category+'</strong></h4></div><div class="points_arrow"><img src="assets/images/arrow.png" class="img-responsive" alt=""></div></a></div>';
				   if(data.length>0){	
						for(var i=0;i<data.length;i++)
						{
							if(data[i].longDesc=='undefined' || data[i].longDesc=='null' || data[i].longDesc==null || data[i].longDesc=='')
								data[i].longDesc = data[i].AdDesc;

							str += '<div class="primary_block"><a href="javascript:showUpdate_showroom(\''+data[i].AdName+'\',\''+data[i].AdDesc+'\',\''+data[i].longDesc+'\',\''+data[i].AdImgURL+'\',\''+data[i].File_path2+'\',\''+data[i].File_path3+'\',\''+data[i].File_path4+'\',\''+data[i].File_path5+'\',\''+data[i].File_path6+'\',\''+data[i].File_path7+'\',\''+data[i].File_path8+'\',\''+data[i].File_path9+'\',\''+data[i].File_path10+'\');" class="what_new_item">';						
							str += '<div class="item_img"><img src="'+data[i].AdImgURL+'" class="img-responsive" alt=""></div>';
							str += '<div class="item_brief"><h4>'+data[i].AdName+'</h4><p>'+data[i].AdDesc+'</p></div>';
							str += '<div class="points_arrow"><img src="assets/images/arrow.png" class="img-responsive" alt=""></div></a></div>';
						}
				   }
				   else
					{
					   str += 'No Data Available';
					}

			        str += '</div></div>';	
				}
				else
				{
					//console.log(JSON.stringify(data));
					$.mobile.changePage( "#videos", { transition: "none"} );

					var vidurl= 'https://www.youtube.com/watch?v=OQ-PrjDmpuY';

							var vidcode=vidurl.substring(vidurl.indexOf('=')+1,vidurl.length);							
							str1 += '<div class="neg_offset"><iframe style="width: 100%; height: 250px" src="http://www.youtube.com/embed/'+vidcode+'?autoplay=1&loop=1&version=3&playlist='+vidcode+'" frameborder="0" allowfullscreen></iframe></div>';
							str1 += '<div class="primary_section_inner pt-30"><div class="primary_block">UFI FILTERS GLOBAL INDUSTRIAL FOOTPRINT';
							
							str1 += '</div></div>';
							document.getElementById('events').innerHTML = str1;
				}

				str3='';
				str2='';
				str1='';



			
	
				$("#whats_new_detail .ui-content").html(str);
				
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});

	}
	
}
function showSpecial_orig(category){
	
	var str = '';
	if((localStorage.getItem("usermtype_ufifilters")!='dealer' && localStorage.getItem("usermtype_ufifilters")!='SalesExecutive') && (user.mobile==null || user.mobile==''))
	{
		$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else if((localStorage.getItem("usermtype_ufifilters")=='dealer' || localStorage.getItem("usermtype_ufifilters")=='SalesExecutive') && (store.store_name==null || store.store_name==''))
	{
		$.mobile.changePage( "#page-login-dealer", { transition: "none"} ); 
	}
   	else
	{
    document.getElementById("wnewheader").innerHTML=category;
    $.mobile.changePage( "#whats_new_detail", { transition: "none"} );
	//document.getElementById("left-panel").panel( "close" );
	try{
	$( "#left-panel" ).panel( "close" );
	}catch(err) 
	{	}
//https://ufifilters.mloyalretail.com/m/specials_json.asp?memtype=Retailer&category=New%20Product	
	//showTabContent('specials', 'specials_json.asp');
	var memtype=localStorage.getItem("usermtype_ufifilters");
	/*if(localStorage.getItem("usermtype_ufifilters")=='Dealer')
		{
			memtype = 'Dealer';
		}
	else
		{
			memtype = 'Retailer';
		}*/
	$.ajax({
			url: SERVER+'specials_json.asp',
			type: 'GET',
			timeout: 30000,
			dataType:'json',
		  	data: {
				
				mno: user.mobile,
				memtype: memtype,
				category: category
							
			},
			success: function(data, textStatus, xhr) {

				//console.log(JSON.stringify(data));

				if(category=='New Product' || category == 'Latest Update')
				{
					str += '<div class="primary_section"><div class="primary_section_inner pt-30">';
					//str += '<div class="primary_block bg-dark-grey"><a href="#" class="points_bal_btn p_0">';						
					//str	+= '<div class="points_bal"><h4><strong>'+category+'</strong></h4></div><div class="points_arrow"><img src="assets/images/arrow.png" class="img-responsive" alt=""></div></a></div>';
				  if(data.length>0){	
					for(var i=0;i<data.length;i++)
					{
						if(data[i].longDesc=='undefined' || data[i].longDesc=='null' || data[i].longDesc==null || data[i].longDesc=='')
							data[i].longDesc = data[i].AdDesc;

						str += '<div class="primary_block"><a href="javascript:showUpdate_details(\''+data[i].AdName+'\',\''+data[i].AdDesc+'\',\''+data[i].longDesc+'\',\''+data[i].AdImgURL+'\');" class="what_new_item">';						
						str += '<div class="item_img"><img src="'+data[i].AdImgURL+'" class="img-responsive" alt=""></div>';
						str += '<div class="item_brief"><h4>'+data[i].AdName+'</h4><p>'+data[i].AdDesc+'</p></div>';
						str += '<div class="points_arrow"><img src="assets/images/arrow.png" class="img-responsive" alt=""></div></a></div>';
					}
				  }
				   else
					{
					   str += 'No Data Available';
					}
			        str += '</div></div>';	
				}
				else if(category == 'Showrooms')
				{
					str += '<div class="primary_section"><div class="primary_section_inner pt-30">';
					//str += '<div class="primary_section"><div class="primary_section_inner pt-30"><div class="primary_block bg-dark-grey"><a href="#" class="points_bal_btn p_0">';						
					//str	+= '<div class="points_bal"><h4><strong>'+category+'</strong></h4></div><div class="points_arrow"><img src="assets/images/arrow.png" class="img-responsive" alt=""></div></a></div>';
				   if(data.length>0){	
						for(var i=0;i<data.length;i++)
						{
							if(data[i].longDesc=='undefined' || data[i].longDesc=='null' || data[i].longDesc==null || data[i].longDesc=='')
								data[i].longDesc = data[i].AdDesc;

							str += '<div class="primary_block"><a href="javascript:showUpdate_showroom(\''+data[i].AdName+'\',\''+data[i].AdDesc+'\',\''+data[i].longDesc+'\',\''+data[i].AdImgURL+'\',\''+data[i].File_path2+'\',\''+data[i].File_path3+'\',\''+data[i].File_path4+'\',\''+data[i].File_path5+'\',\''+data[i].File_path6+'\',\''+data[i].File_path7+'\',\''+data[i].File_path8+'\',\''+data[i].File_path9+'\',\''+data[i].File_path10+'\');" class="what_new_item">';						
							str += '<div class="item_img"><img src="'+data[i].AdImgURL+'" class="img-responsive" alt=""></div>';
							str += '<div class="item_brief"><h4>'+data[i].AdName+'</h4><p>'+data[i].AdDesc+'</p></div>';
							str += '<div class="points_arrow"><img src="assets/images/arrow.png" class="img-responsive" alt=""></div></a></div>';
						}
				   }
				   else
					{
					   str += 'No Data Available';
					}

			        str += '</div></div>';	
				}
				else
				{
					//console.log(JSON.stringify(data));
					$.mobile.changePage( "#videos", { transition: "none"} );

					vidlen=data.length;
					
					for(var i=0;i<data.length;i++)
					{

						if(data[i].AdDesc.trim() == 'Events')
						{
							var vidurl=data[i].youtubevdo;

							var vidcode=data[i].youtubevdo.substring(data[i].youtubevdo.indexOf('=')+1,data[i].youtubevdo.length);
							
							
							str1 += '<div class="neg_offset"><iframe id=vid'+i+' style="width: 100%; height: 250px" src="http://www.youtube.com/embed/'+vidcode+'?autoplay=1&loop=1&version=3&playlist='+vidcode+'" frameborder="0" allowfullscreen></iframe></div>';
							str1 += '<div class="primary_section_inner pt-30"><div class="primary_block">'+data[i].AdName;
							
							str1 += '</div></div>';
							document.getElementById('events').innerHTML = str1;
							
						}
						else if(data[i].AdDesc.trim() == 'Advertisement')
						{
							var vidurl=data[i].youtubevdo;

							

							var vidcode=data[i].youtubevdo.substring(data[i].youtubevdo.indexOf('=')+1,data[i].youtubevdo.length);
							str2 += '<div class="neg_offset"><iframe id=vid'+i+' style="width: 100%; height: 250px" src="http://www.youtube.com/embed/'+vidcode+'?autoplay=1&loop=1&version=3&playlist='+vidcode+'" frameborder="0" allowfullscreen></iframe></div>';
							str2 += '<div class="primary_section_inner pt-30"><div class="primary_block">'+data[i].AdName;
							
							str2 += '</div></div>';

							
							document.getElementById('ad').innerHTML = str2;
							
						}
						else if(data[i].AdDesc.trim() == 'Products')
						{
							var vidurl=data[i].youtubevdo;

							var vidcode=data[i].youtubevdo.substring(data[i].youtubevdo.indexOf('=')+1,data[i].youtubevdo.length);

							
							
							str3 += '<div class="neg_offset"><iframe id=vid'+i+' style="width: 100%; height: 250px" src="http://www.youtube.com/embed/'+vidcode+'?autoplay=1&loop=1&version=3&playlist='+vidcode+'" frameborder="0" allowfullscreen></iframe></div>';
							str3 += '<div class="primary_section_inner pt-30"><div class="primary_block">'+data[i].AdName;
							
							str3 += '</div></div>';
							document.getElementById('product_tab').innerHTML = str3;
							//str3='';
						}

					}
					localStorage.setItem('eventdata',str1);
					localStorage.setItem('addata',str2);
					localStorage.setItem('proddata',str3);
				}

				str3='';
				str2='';
				str1='';



			
	
				$("#whats_new_detail .ui-content").html(str);
				
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});

	}
	
}

function showUpdate_details(aname,adesc,longdesc,aimg)
{
	clearUpdate_details();

	setTimeout(function(){ 

			document.getElementById("lupdate_mainheader").innerHTML= aname;
			document.getElementById("lupdate_innerheading").innerHTML= adesc;
			document.getElementById("lupdate_desc").innerHTML= longdesc;
			document.getElementById("lupdate_img").src = aimg;

			$.mobile.changePage( "#latest_update_details", { transition: "none"} );
							
	}, 800);

}


function clearUpdate_details()
{
		document.getElementById("lupdate_mainheader").innerHTML= 'Updates';
		document.getElementById("lupdate_innerheading").innerHTML= '';
		document.getElementById("lupdate_desc").innerHTML= '';
		document.getElementById("lupdate_img").src = 'assets/images/russia_tour_inner.jpg';
}

function showStores(){
	
	
	document.getElementById("barcontentstores").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><a href="javascript:getNearStores();"><span class="myacc">Find Nearby</span></a>';
	
	$.mobile.changePage( "#stores", { transition: "none"} );
	
	showTabContent('citylist', 'city_locator_json.asp');
	
	

}

function showUpdate_showroom(aname,adesc,longdesc,aimg,fpath2,fpath3,fpath4,fpath5,fpath6,fpath7,fpath8,fpath9,fpath10)
{
    document.getElementById("showroom-gallery").innerHTML = '';
	document.getElementById("showlbl").innerHTML = aname;
	
	var str = '';
	for(var i=2;i<=10;i++)
	{
		var fpathnew = eval('fpath'+i);
		//console.log(fpathnew);
		if(fpathnew != null && fpathnew != '')
		str+='<li data-thumb="'+fpathnew+'"> <img src="'+fpathnew+'" class="img-responsive" /> </li>';

		/*if(fpathnew != null && fpathnew != '')
		 {
		 	$('#showimg'+j).src = fpathnew; 
		 }*/
	}
	
    document.getElementById("showroom-gallery").innerHTML = str;
    
	$.mobile.changePage( "#showroom_details", { transition: "none"} );
}
function getCityId(id)
{
       city_id=id;
	   
	   $.mobile.changePage( "#stores", { transition: "none"} );
	  showTabContent('centre', 'store_locator_json.asp?city='+city_id);
	  
      
}


function showTabContent_Map(addr,ind) {
var url="http://delhidaredevilsadda.com/latlong.php";
 //console.log(url+'&addr='+addr);
	$.getJSON(
		url, {
		//page: url,
		addr : addr
	}, function (json) {
       //console.log("SSSS"+JSON.stringify(json));
	  
	    
		var lat,lng;
		try
		{
		lat=json.results[0].geometry.location.lat;
		lng=json.results[0].geometry.location.lng;	
		}
		catch (err)
		{
			lat="";
			lng="";
		}
        
		
		if(lat !="" && lng !="")
			{
			 drawMap(new google.maps.LatLng(lat, lng),ind);
			//openInWebView('http://maps.google.com/maps/api/staticmap?center='+lat+','+lng+'&zoom=14&amp;size=304x250&scale=2&amp;sensor=false&markers=color:green|'+lat+','+lng+'&key=AIzaSyCAAjJ5FAg8NmaZ9594yQXq-t1HzcgYocs&size=279x183');
			}
			else
			{
				alert("Location could not be traced");
			}
	}).error(function () {
		alert("Error: Could not connect to Server, make sure you are connected to Network");
	});
}

   function drawMap(latlng,index) {
	   
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
			

			var bounds = new google.maps.LatLngBounds();
        var map = new google.maps.Map(document.getElementById(index), myOptions);
        // Add an overlay to the map of current lat/lng
        var pinColor = "FE7569";
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                new google.maps.Size(21, 34),
                new google.maps.Point(0, 0),
                new google.maps.Point(10, 34));
        var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                new google.maps.Size(40, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 35));



        bounds.extend(latlng);
        var markercurr = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Current Position!!!',
            icon: pinImage,
            shadow: pinShadow

        });
        map.fitBounds(bounds);
    }



function showTabContent_Map1(addr) {
var url="http://maps.googleapis.com/maps/api/geocode/json";
	$.getJSON(
		url, {
		//page: url,
		latlng : addr,
		sensor : 'false'
	}, function (json) {
       //console.log("SSSS"+JSON.stringify(json.results[0].address_components[3]));
		
		for(var i=0;i<json.results[0].address_components.length;i++)
		{
		//console.log("SSSS"+JSON.stringify(json.results[0].address_components[i].types[0]));
		if(json.results[0].address_components[i].types[0]=='locality')
			{
        var cityname= json.results[0].address_components[i].long_name;
        if(cityarr.indexOf(cityname))
				{
			  var j = cityarr.indexOf(cityname);
			  getCityId(cityidarr[j]);
				}
			}
		}
		
		
		
		
	}).error(function () {
		alert("Error: Could not connect to Server, make sure you are connected to Network");
	});
}

function showTabContent(id, url) {
//console.log("url"+url);
var tabserver='';
if(id=='rewardstore' || id=='reward-cat' || id=='reward-brand')
	{
	tabserver = SERVER3;
	}
else
	{
	
	tabserver =SERVER ;
	}
	$.getJSON(
		tabserver+url, {
		//page: url,
		mno : user.mobile
	}, function (json) {
       //console.log("SSSS"+JSON.stringify(json));
			
		renderTemplate(id, json);
	}).error(function () {
		alert("Error: Could not connect to Server, make sure you are connected to Network");
	});
}

function openInWebView(url)
{
	var ref = window.open(url, '_blank', 'location=yes,toolbar=yes');
}

function openInWebViewold(url)
	{
	
    
		  cordova.ThemeableBrowser.open(url, '_blank', {
               backButtonCanClose: true,
    statusbar: {
        color: '#293B7A'
    },
    toolbar: {
        height: 78,
        color: '#293B7A'
    },
    title: {
        color: '#ffffff',
  staticText: '', 
        showPageTitle: false
    },
    backButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'left',
        event: ''
    },
    forwardButton: {
        wwwImage: '',
        wwwImagePressed: '',
        align: 'center',
        event: ''
    },
    closeButton: {
        wwwImage: 'img/leftMenu_back.png',
        wwwImagePressed: 'img/leftMenu_back.png',
        align: 'left',
  marginLeft: '16px',
        event: ''
    },
    customButtons: [
        {
            image: 'share',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
           /* {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }*/
        ]
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    //alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    //alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    //alert(e.url);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});


	}
function passJson(obj) {
    console.log(obj);
}

function renderTemplate(pageID, json) {
	var str = '';
	var str1 = '';
	var oth = document.getElementById("othercontent");
    var main = document.getElementById("cardcontent");

	//console.log('pageID'+pageID);
	switch (pageID) {
	case 'loyalty':
		console.log('jsonloyalty:'+JSON.stringify(json));

	$('#pointbal_bal').val(json.balance);

		/*str += '<br/><div class="pts"><div><span class="wallet_heading">Wallet Balance</span>&#x20B9;' + localStorage.getItem('cashback') + '</div></div>';   
        //str += '<!--<p class="tpts">Total Points</p>-->';

        str += '<a href="javascript:showDetails();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="img/earned-points.png" alt="img" class="eIcon"><span>Earned Cash :' + localStorage.getItem('cashback') + '</span><span class="purchaseBtnTxt">My Earned History</span></a>';
        if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
           {
			//localStorage.setItem("jsonobj",JSON.stringify(json.data));
           	str += '<a href="javascript:bonusHistory('+json.balance+');" id="ptsEarn" class="ui-btn ui-corner-all"><img src="img/earned-points.png" alt="img" class="eIcon"><span>Earned Points :' + localStorage.getItem('dealerbonuspoints') + '</span><span class="purchaseBtnTxt">My Points History</span></a>';
           }
           var str1 ='';
           for(var i=0;i<json.datadealerbonus.length;i++)
		{
			var dt = json.datadealerbonus[i].createdon.split(' ');
			
			var dt1 = dt[1].split(':');
			str1 +='<div class="recent_transfer">';
			str1 +='<p class="recent_date">'+dt[0]+'</p>';
			str1 +='<div class="primary_block"><div class="recent_block padding0_10px">';
			str1 +='<div class="recent_user_icon"> <img src="assets/images/points_transfer_icon.png" class="img-responsive" alt=""/> </div>';
			str1 +='<div class="recent_user_details">';
			str1 +='<p class="recent_detail_text">Points Received from '+json.datadealerbonus[i].dealer_Name+'<br>';
			if(json.datadealerbonus[i].SaleAmount== null || typeof json.datadealerbonus[i].SaleAmount == 'undefined' )
				json.datadealerbonus[i].SaleAmount = '';
			if(json.datadealerbonus[i].SaleAmount != '')
			str1 += 'Sale of Rs. '+json.datadealerbonus[i].SaleAmount+'<br>';
			str1 += 'Invoice No. '+json.datadealerbonus[i].bill_number+'<br>';
			str1 += dt1[0]+':'+dt1[1]+' '+dt[2]+'<br></p>';
			
			str1 += '</div><div class="recent_user_points"><h2>'+json.datadealerbonus[i].points+'<span>Points</span></h2></div>';
			str1 += '</div></div></div>';
        }

		for(var i=0;i<json.datadealerexpired.length;i++)
					{
						var dt = json.datadealerexpired[i].createdon.split(' ');
						var dt1 = dt[1].split(':');
						str1 +='<div class="recent_transfer">';
						str1 +='<p class="recent_date">'+dt[0]+'</p>';
						str1 +='<div class="primary_block"><div class="recent_block padding0_10px">';
						str1 +='<div class="recent_user_icon"> <img src="assets/images/points_transfer_icon.png" class="img-responsive" alt=""/> </div>';
						str1 +='<div class="recent_user_details">';
						str1 +='<p class="recent_detail_text">Points Revoked  By '+json.datadealerexpired[i].dealer_Name+'<br>';
						if(json.datadealerexpired[i].SaleAmount== null || typeof json.datadealerexpired[i].SaleAmount == 'undefined' )
							json.datadealerexpired[i].SaleAmount = '';
						if(json.datadealerexpired[i].SaleAmount != '')
							str1 += 'Sale of Rs. '+json.datadealerexpired[i].SaleAmount+'<br>';
						str1 += 'Invoice No. '+json.datadealerexpired[i].bill_number+'<br>';
						str1 += dt1[0]+':'+dt1[1]+' '+dt[2]+'<br></p>';
						str1 += '</div><div class="recent_user_points"><h2>'+json.datadealerexpired[i].points+'<span> Points</span></h2></div>';
						str1 += '</div></div></div>';

						
						
					}
			for(var i=0;i<json.redeem.length;i++)
					{
					
						str1 +='<div class="recent_transfer">';
						str1 +='<p class="recent_date">'+json.redeem[i].billdate+'</p>';
						str1 +='<div class="primary_block"><div class="recent_block padding0_10px">';
						str1 +='<div class="recent_user_icon"> <img src="assets/images/points_transfer_icon.png" class="img-responsive" alt=""/> </div>';
						str1 +='<div class="recent_user_details">';
						str1 +='<p class="recent_detail_text">Points Redeemed  By  Retailer ';
						
						str1 += '</div><div class="recent_user_points"><h2>'+json.redeem[i].burn+'<span> Points</span></h2></div>';
						str1 += '</div></div></div>';
						
					}
		
        document.getElementById('transfersret').innerHTML=str1;*/
        //str += '<div id="ptsRedeemdiv"><a href="javascript:redeemHistory();" id="ptsRedeem" class="ui-btn ui-corner-all"><img src="img/redeemed-points.png" alt="img" class="rIcon"><span>Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></a></div>';
		//str += '<a href="#" id="ptsEarn1" class="ui-btn ui-corner-all"><img src="img/earned-points.png" alt="img" class="eIconT"><span class="ernPt1">Earned Points :' + json.earnpoints + '</span><span class="rdmPt1">Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt1">My Purchase History</span></a>';
		
		str += '<div id="purchaseHistory" style="display:none;">';
		for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">EARNED CASH <span class="ptsRed">'+json.data[i].earn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].earn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';
		if(typeof json.datadealerbonus != undefined && json.datadealerbonus != null)
		{
		str += '<div id="bonusHistory" style="display:none;">';
		for(var i=0;i<json.datadealerbonus.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">EARNED POINTS <span class="ptsRed">'+json.datadealerbonus[i].points+'</span></span>  <span class="cap_date">'+json.datadealerbonus[i].createdon+'</span></caption>';
			//str +='<tbody><tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].earn+'</td></tr></tbody>';
			str +='</table><br/>';
		}
		str +='</div>';
		}

		str += '<div id="redeemHistory" style="display:none;">';
        for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
		    str +='<caption><span style="float:left;">REDEEM POINTS <span class="ptsRed">'+json.data[i].burn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].burn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
	    str +='</div>';

	   

        document.getElementById('transfersret').innerHTML=str; 
		
		if(localStorage.getItem("usermtype_ufifilters")=='Painter')
	    {
			$('#ptsRedeemdiv').css('display','none');
	    }

		break;
	case 'specials':
		//console.log(JSON.stringify(json));
		
		if(json.length=='0')
		{
			str +='No schemes available..';
		}
		else
		{

			for (var i=0;i<json.length;i++ )
			{
			
			  //console.log('Video:'+json[i].AdVideoURL);
			    if(json[i].AdVideoURL=='' || json[i].AdVideoURL==null  || json[i].AdVideoURL=='null')
				{
					 str += '<div class="specials7"><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p><img src='+SERVER+json[i].AdImgURL+'  style="  width: 90%;  height: auto;  padding: 5px;  text-align: center;"></img><br/><hr/></div></div>';
				}
				else
				{
					 //console.log('Img:'+json[i].AdVideoURL);
					 str += '<div class="specials7"><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p><video width="320" height="240" controls="controls" poster='+SERVER+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video><br/><hr/></div></div>';
				}
			}

		}

        
		document.getElementById("spec").innerHTML=str;  
		
		break;
	case 'coupons':
		str = '';


        if (json.data.length == 0) 
		 {
                str = 'No Vouchers Found';
         }
		else
	    {
			for(var i=0;i<json.data.length;i++)
			{
			
			str += '<div class="ui-grid-a">';
			str += '<div class="ui-block-a" style="width:15%;"><img src="img/couponsp.png" class="msgImg"/></div>';
			str += '<div class="ui-block-b" style="width:85%;">';
			str += '<div class="MsgBlk"><a href="#headline"><span class="MsgBdr">';
			//str += '<span class="MsgBdr"><span class="msghdr">DM-ufifilters</span><span class="msgTime"> '+json.data[i].issueddate+'</span>'; 
			str += '<span class="msgTxt"><div class="coupon-box"><div class="coupon-box-scissor"></div><div><span class="bold">Coupon Code : '+json.data[i].couponcode+'</span> | <span class="red">'+json.data[i].couponstatus+'</span></div><div>Coupon Details: '+json.data[i].offername+'</div>	<div class="coupon-box-date">[ Issued On: '+json.data[i].issueddate+' | Valid till: '+json.data[i].validtill+']</div></div></span>';
			str += '</span></a></div></div></div>';

			//str+='<div id="prdctlist" class="primary_section_inner pt-30">';
			
			//str += '<div class="primary_block"><a href="#"><div class="ui-grid-a boucher"><div class="ui-block-a"><img src="assets/images/voucher.png" class="img-responsive" alt=""></div><div class="ui-block-b">'+json.data[i].couponcode+'</div><div class="ui-block-b">'+json.data[i].offername+'</div><div class="ui-block-b">'+json.data[i].couponcode+'</div></div></a></div>';

			}
		}
		//str += '</ul>';
		document.getElementById("COUPONS").innerHTML=str;
		break;
	case 'couponsused':
		str = '';


        if (json.data.length == 0) 
		 {
                str = 'No Vouchers Found';
         }
		else
	    {
			for(var i=0;i<json.data.length;i++)
			{
			if(json.data[i].couponstatus == 'Expired' || json.data[i].couponstatus == 'Redeem')
				{
			str += '<div class="ui-grid-a">';
			str += '<div class="ui-block-a" style="width:15%;"><img src="img/couponsp.png" class="msgImg"/></div>';
			str += '<div class="ui-block-b" style="width:85%;">';
			str += '<div class="MsgBlk"><a href="#headline"><span class="MsgBdr">';
			//str += '<span class="MsgBdr"><span class="msghdr">DM-UFILTE</span><span class="msgTime"> '+json.data[i].issueddate+'</span>'; 
			str += '<span class="msgTxt"><div class="coupon-box"><div class="coupon-box-scissor"></div><div><span class="bold">Coupon Code : '+json.data[i].couponcode+'</span> | <span class="red">'+json.data[i].couponstatus+'</span></div><div>Coupon Details: '+json.data[i].offername+'</div>	<div class="coupon-box-date">[ Issued On: '+json.data[i].issueddate+' | Valid till: '+json.data[i].validtill+']</div></div></span>';
			str += '</span></a></div></div></div>';

			//str+='<div id="prdctlist" class="primary_section_inner pt-30">';
			
			//str += '<div class="primary_block"><a href="#"><div class="ui-grid-a boucher"><div class="ui-block-a"><img src="assets/images/voucher.png" class="img-responsive" alt=""></div><div class="ui-block-b">'+json.data[i].couponcode+'</div><div class="ui-block-b">'+json.data[i].offername+'</div><div class="ui-block-b">'+json.data[i].couponcode+'</div></div></a></div>';
				}
			}
		}
		//str += '</ul>';
		document.getElementById("COUPONS").innerHTML=str;
		break;
	case 'inbox':
		
		//console.log('json'+JSON.stringify(json));
		
		 str +=' <ul data-role="listview" data-inset="true" id="MsgUl">';
		 for(var i=0;i<json.length;i++ )
		{
		str += '<li data-icon="false">';
        str += '<div class="ui-grid-a"><div class="ui-block-a" style="width:15%;">';
		str += '<img src="img/open.png" class="msgImg"/>';
        str += '</div><div class="ui-block-b" style="width:85%;">';
        str += '<div class="MsgBlk"><span class="MsgBdr">';
        str += '<span class="msghdr">DM-UFILTE</span><span class="msgTime">'+json[i].msgtime+'</span>';
		str += '<span class="msgDate">' + json[i].msgdate + '</span>';
        str += '<span class="msgTxt">'+json[i].msg+'</span>';
        str += '</span></div></div></div></li>';
		/* str += '<div class="ui-grid-a msg_cont"><div class="ui-block-a wid20"></div>';
		 str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw"><img src="img/logo.png" class="img_blogo"></span><br/>';
		 str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">'+json[i].msgdate+' '+json[i].msgtime+'</span><br/></div>';
		 str += '<div class="ui-block-b wid40"><div class="flt_rght">';
		
		 str += '</div></div></div><hr class="style-one">';
		 str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json[i].msg;
		 str += '</span></div></div></div></div>';
		 
		 str += '</div></div><br/><br/>';*/
		}
		
		str +='</ul>';
		document.getElementById("MESSAGES").innerHTML=str;
		break;

	/*case 'centre':
		 //console.log('inside centre');
	     console.log('json'+JSON.stringify(json));
		
		str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="ul_locator_sub">';
		for (var i=0;i<json.length;i++ )
		{
			var storecontact=json[i].storephone;
			var custcare=json[i].CustomerCare;
			if(storecontact==null)
				storecontact='';
			if(custcare==null)
				custcare='';
	     str += '<li data-icon="false" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;">'+json[i].storename+','+json[i].storelocation+'<br/><span class="callout1">'+json[i].storeaddress+'</span><br/><br/><a href="tel:'+storecontact+'\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+storecontact+'</a><a href="tel:'+custcare+'\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].CustomerCare+'</a><a href="javascript:showTabContent_Map(\''+json[i].storeaddress+'\');" data-role="button" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></li>';
		//str += '<li data-icon="false" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;">'+json[i].storename+','+json[i].storelocation+'<br/><span class="callout1">'+json[i].storeaddress+'</span><br/><br/><a href="tel:'+json[i].storephone+'\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a><a href="javascript:showTabContent_Map(\''+json[i].storeaddress+'\');" data-role="button" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></li>';
        //str += '<li data-icon="false"><span class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</span><br/><span class="callout1">'+json[i].storeaddress+'</span><br/><div class="ui-grid-a"><div class="ui-block-a"><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a></div><div class="ui-block-b"><a href="#" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></div></div></li>';
		//str += '<div class="center-box"><div class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</div><div class="callout1">'+json[i].storeaddress+'<br/><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" data-role="button" rel="external">'+json[i].storephone+'</a></div></div>';
		}
		str += '</ul>';
		document.getElementById("stor").innerHTML=str;
		
		 $('#ul_locator_sub').listview();
		break;*/

		case 'centre':
   //console.log('inside centre');
      //console.log('json'+JSON.stringify(json));
  
  str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="ul_locator_sub">';
  for (var i=0;i<json.length;i++ )
  {
   var storecontact=json[i].storephone;
   var custcare=json[i].CustomerCare;
   if(storecontact==null)
    storecontact='';
   if(custcare==null)
    custcare='';

   if(json[i].storename.indexOf('Email Admin')==0)
   continue;
   
  
      str += '<li data-icon="false" style="margin-top: 5px;margin-bottom: 5px;">'+json[i].storename+','+json[i].storelocation+'<br/><span class="callout1">'+json[i].storeaddress+'</span><br/><br/>';
   if(storecontact!='')
   {
   str += '<a href="tel:'+storecontact+'\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+storecontact+'</a>';
   }
  if(custcare!='')
   {
   str +='<a href="tel:'+custcare+'\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+json[i].CustomerCare+'</a>';
   }
  str +='<div  id=map-canvas'+i+' style="height:300px;width:400px;"></li>';



  
  
  //alert(str);
  //str += '<li data-icon="false" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;">'+json[i].storename+','+json[i].storelocation+'<br/><span class="callout1">'+json[i].storeaddress+'</span><br/><br/><a href="tel:'+json[i].storephone+'\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a><a href="javascript:showTabContent_Map(\''+json[i].storeaddress+'\');" data-role="button" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></li>';
        //str += '<li data-icon="false"><span class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</span><br/><span class="callout1">'+json[i].storeaddress+'</span><br/><div class="ui-grid-a"><div class="ui-block-a"><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a></div><div class="ui-block-b"><a href="#" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></div></div></li>';
  //str += '<div class="center-box"><div class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</div><div class="callout1">'+json[i].storeaddress+'<br/><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" data-role="button" rel="external">'+json[i].storephone+'</a></div></div>';
  
  }
  //str +='<div  id=map-canvas'+i+' style="height:250px;width:250px;">';
  str += '</ul>';
  
  document.getElementById("stor").innerHTML=str;
  for (var i=0;i<json.length;i++ )
  {
   if(json[i].storename.indexOf('Email Admin')==0)
   continue;
   
      showTabContent_Map(json[i].storeaddress,i);
  }
   $('#ul_locator_sub').listview();
  break;
		
	case 'defstore':
		//console.log('inside default store'+user.def_store);
	    // console.log('json'+JSON.stringify(json));
		//str +='<div  style="text-align:center;width:100%;"><img src="img/c-logo.png" width="137" height="44" /></div>';
		str += '<h2 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Default Store : '+user.def_store+'</h2>';
		str += '<a href="#citylist" data-role="button" data-theme="reset" class="ios">View All Stores</a>';
		str += '<h3 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Other Stores in your city</h3><h3></h3>';
		//$("#" + pageID + " .ui-content").html(str);
		$("#" + pageID + " .ui-content").html(str+$.render[pageID](json));
		$("a[data-role='button']").button();
		break;
	case 'citylist':
		//console.log('inside citylist');
	    //console.log('json'+JSON.stringify(json));
		
        str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator" id="ul_locator">';
		for (var i=0;i<json.data.length;i++ )
		{
			cityidarr[i]=json.data[i].cityid;
			cityarr[i]=json.data[i].cityname;
		//str +='<a href="javascript:getCityId('+json.data[i].cityid+');" data-role="button"  data-theme="reset" class="ios">'+json.data[i].cityname+'</a>'
		str += '<li data-icon="false"><a href="javascript:getCityId('+json.data[i].cityid+');" class="ui-btn ui-icon-location ui-btn-icon-left ui-shadow ui-corner-all">'+json.data[i].cityname+'</a></li>';
		}
		str += '</ul>';
		document.getElementById("stor").innerHTML=str;
		  
        $('#ul_locator').listview();
		//$("a[data-role='button']").button();
		break;

	case 'merchandise':
	  //console.log(JSON.stringify(json));
	  
	  /*str += '<h3>Merchandise</h3>';


	  for (var i=0;i<json.length;i++ )
	  {
			
	   str += '<div><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p><video width="320" height="240"  poster='+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video><br/><hr/> <a href="#" data-role="button" id="forgot_button">Order</a></div></div>';

	  }


	  $("#" + pageID + " .ui-content").html(str);*/
	  break;
case 'categorylist':
   //console.log(JSON.stringify(json));

  //str = str +'<div class="subheading_t" style="font-size:14px;"><div style="color:#555555;">Welcome '+user.firstname+'</div><div class="submenu_button_right" ><img src="img/coupons.png" style="height:26px;width:auto;"></div></div>';
  str +='<img src="img/rstore.png" style="width:97%;height:auto;"><br/>';
  //str +='<div id="rss_desc1"><ul>';
 // str +='<ul>';
  // for (var i=0;i<json.length;i++ )
  //{
  //str +='<li><a href="javascript:getCatDetails('+json[i].Catid+');" data-theme="reset" class="ios" style="background: url(../img/shop_categoryList.png);height: 78px;color:#000;">'+json[i].CatName+'</a></li>';
  //str +='<li class="s_cn"><a href="javascript:getCatDetails('+json[i].Catid+');" style="background-image: url(../img/s_cn.png);color:#000;text-align:center;">'+json[i].CatName+'</a></li>';
  //}
 // str +='</ul>';
  //str +='</ul></div>';
  $("#" + pageID + " .ui-content").html(str);

  $("a[data-role='button']").button();
   break;
	  case 'rewardsmain':
		
		 $("#" + pageID + " .ui-content").html(str);
		break;
	  case 'viewcart':
		
		//str += '<div class="cartinfo">You have '+json.cartdata.length+' items in your cart</div>';
		
		str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="cartlist">';
        for (var i=0;i<json.cartdata.length;i++ )
		{
		
		
		str += '<li data-icon="delete" data-iconpos="right" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;line-height:90px;"><img src='+json.cartdata[i].url+' style="width: 100px;height: 100px;padding: 5px;"/>'+json.cartdata[i].BrandName+' Offer,Cost:Rs. '+json.cartdata[i].BrandValue+'<br/><span class="callout1">'+json.cartdata[i].BrandDescription+'</span></li>';
        																																					   
																																							   
		
		//	str +='<li><div class="li-img"><img src='+json.cartdata[i].url+' /></div><div class="li-text"><h4 class="li-head">'+json.cartdata[i].BrandName+' Offer,Cost:Rs. '+json.cartdata[i].BrandValue+'</h4><br/><p class="li-sub">'+json.cartdata[i].BrandDescription+'</p></div></li>';
            
		}
		str += '</ul>';
		
		str += '<br clear="all" /><a href="#" data-role="button" id="view_cart" class="btnclass">Redeem</a>';
		//console.log("str herrrrrr"+str);
		oth.innerHTML=str; oth.style.display = 'block';  
		 $('#cartlist').listview();
		 $('#view_cart').button();
		break;

	case 'rewardstore':
    
  
       
	  jsonary = json.data;
  
  // str += '<div class="ui-content rsbanner"><span class="vouchers"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" class="vouchers" id="vouchers"'+i+'/></a></span><img src="img/featured.png" class="rs_b1" /></div>';
          
  for (var i=0;i<json.data.length;i++ )
  {

   if(json.data[i].BrandDescription=='Featured')
   {
   
   str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src='+json.data[i].url+' class="rs_b1" /></div>';
   }
   else
   {

   
   //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
   str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><div class="amount_date"> <b>Rs. '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</div></div>';
   
   str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
   

   str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
   str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
   str += '<div class="ui-block-b wid40"><div class="flt_rght">';
   //str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
   str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
   str += '</div></div></div><hr class="style-one">';
   str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
   str += '</span></div></div></div></div>';
   str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
 //  str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   }

 
  }
  //str +='Coming Soon';
  
   oth.innerHTML=str; oth.style.display = 'block';  
    break;
 case 'reward-cat':
   str +='<ul data-role="listview" id="ul_reward-cat" class="ul_shop" data-icon="false" data-iconpos="none">';
   for(var i=0;i<json.data.length;i++)
  {
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showcatbrands('+json.data[i].catid+');" class="lt_shop_a"><h2>'+json.data[i].catname+'</h2></a></li>';
  }
 str +='</ul>';
 //str +='Coming Soon';
    $("#" + pageID + " .ui-content").html(str);
    $('#ul_reward-cat').listview();
   break;
   case 'reward-brand':
   for (var i=0;i<json.data.length;i++ )
  {

   if(json.data[i].BrandDescription=='Featured')
   {
   
   str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src='+json.data[i].url+' class="rs_b1" /></div>';
   }
   else
   {

   
   //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
   str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><span class="amount_date"> <b>Rs. '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</span></div>';
   
   str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
   

   str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
   str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
   str += '<div class="ui-block-b wid40"><div class="flt_rght">';
  // str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
   str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
   str += '</div></div></div><hr class="style-one">';
   str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
   str += '</span></div></div></div></div>';
   str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
   //str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   }

 
  }
            $("#" + pageID + " .ui-content").html(str);
   break;
			
    case 'socialwall_youtube':
		
		//str += '<a href=\"javascript:loadDataGal(\''+gallery_cat+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><span><img src=\"img/cheer/refresh.png\" /></span></a></div>';
		
		for (var i=0;i<json.length;i++ )
		{
			//console.log(JSON.stringify(json[i]));
        if(json[i].link!='')
			{

			//console.log(json[i].link[1].href);
			//console.log(json[i].link[1].href.indexOf("videos/")+7);

			//console.log(json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/")+7,json[i].link[1].href.indexOf("/related")));
			

			 str1="http://www.youtube.com/embed/"+json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/")+7,json[i].link[1].href.indexOf("/related"));
			 //console.log(str1);
			
			
				
			   	str += '<div id="rss_desc"><div><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title.t+'</span><HR>';
				
				
					str +='<iframe width="95%" height="240" src='+str1+' frameborder="0" allowfullscreen=""></iframe>';
					str +='<br/>'+json[i].content.t;
					
				 
				  str += '</div></div>';
				
				
			}
		}

		
        document.getElementById("contensocial").innerHTML=str;
		break;
		case 'socialwall_facebook':
		//console.log(JSON.stringify(json));

		 

		for (var i=0;i<json.length;i++ )
		{
        
         if(json[i].link!='')
			{
		      
				
				str += '<div class="ui-grid-a msg_cont"><div class="ui-block-a wid20"></div>';
		        str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw"><img src="img/logo.png" class="img_blogo"></span><br/>';
		        str += '<span class="sub1header">'+json[i].title+'</span><br/><span class="sub2header">'+jQuery.timeago(json[i].pubDate)+'</span><br/></div>';
		        //str += '<div class="ui-block-b wid40"><div class="flt_rght"><a href="javascript:likeMessagefb(\''+json[i].id+'\',\''+i+'\');" data-role="button"><span id="likingfb'+i+'"><img src="img/msg_up.png"></span></a>';
		        str += '<div class="ui-block-b wid40"><div class="flt_rght">';
				str += '<span><a href="javascript:shareMessage(\''+json[i].guid+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
		        str += '</div></div></div><hr class="style-one">';
		        str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json[i].description;
		        str += '</span></div></div></div></div>';
		       // str += '<div class="ui-grid-solo msg_like_comt"><span class="msg_arr"><img src="img/msg_arr.png"></span><div class="rs_lk_cmt">';
		        //str += '<span class="msg_lke"><img src="img/msg_dn_up.png">250 Likes</span>';
				//str += '</div></div>';
				str += '</div></div><br/><br/>';
		
			}
		}
        
        document.getElementById("contensocial").innerHTML=str;
		break;
		case 'socialwall_twitter':
		//console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
        
         if(json[i].link!='')
			{
		
				var str1 = 
				
				
				str += '<div class="ui-grid-a msg_cont"><div class="ui-block-a wid20"></div>';
		        str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw"><img src="img/logo.png" class="img_blogo"></span><br/>';
		        str += '<span class="sub1header">'+json[i].title+'</span><br/><span class="sub2header">'+jQuery.timeago(new Date(json[i].pubDate))+'</span><br/></div>';
		        //str += '<div class="ui-block-b wid40"><div class="flt_rght"><a href="javascript:likeMessagetw(\''+json[i].id+'\',\''+i+'\');" data-role="button"><span id="likingtw'+i+'"><img src="img/msg_up.png"></span></a>';
				str += '<div class="ui-block-b wid40"><div class="flt_rght">';
		        str += '<span><a href="javascript:shareMessage(\''+json[i].description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
		        str += '</div></div></div><hr class="style-one">';
		        str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json[i].description;
		        str += '</span></div></div></div></div>';
		        //str += '<div class="ui-grid-solo msg_like_comt"><span class="msg_arr"><img src="img/msg_arr.png"></span><div class="rs_lk_cmt">';
		        //str += '<span class="msg_lke"><img src="img/msg_dn_up.png">250 Likes</span>';
				//str += '</div></div>';
				str +='</div></div><br/><br/>';
					
				
				
			}
		}
        
        
        document.getElementById("contensocial").innerHTML=str;
		break;

		case 'socialwall_pinterest':
		//console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
        
         if(json[i].link!='')
			{
		
					
				
				str += '<div class="ui-grid-a msg_cont"><div class="ui-block-a wid20"><img src="img/logo.png" class="img_blogo"></div>';
		        str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+brandname+'</span><br/>';
		        str += '<span class="sub1header">'+json[i].title+'</span><br/><span class="sub2header">'+jQuery.timeago(json[i].publishedDate)+'</span><br/></div>';
		        //str += '<div class="ui-block-b wid40"><div class="flt_rght"><a href="javascript:likeMessagepin(\''+json[i].link+'\',\''+i+'\');" data-role="button"><span id="likingpin'+i+'"><img src="img/msg_up.png"></span></a>';
		        str += '<div class="ui-block-b wid40"><div class="flt_rght">';
				str += '<span><a href="javascript:shareMessage(\''+json[i].link+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
		        str += '</div></div></div><hr class="style-one">';
		        str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json[i].content;
		        str += '</span></div></div></div></div>';
		        ///str += '<div class="ui-grid-solo msg_like_comt"><span class="msg_arr"><img src="img/msg_arr.png"></span><div class="rs_lk_cmt">';
		        //str += '<span class="msg_lke"><img src="img/msg_dn_up.png">250 Likes</span>';
				//str += '</div></div>';
				str += '</div></div><br/><br/>';
		
			}
		}
        
        
        document.getElementById("contensocial").innerHTML=str;
		break;
		case 'socialwall_tumblr':
		//console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
        
         if(json[i].link!='')
			{
		
				str += '<div id="rss_desc"><div><img src="img/ddsmall.jpg"><div style=\"margin: -50px 5px 20px 60px;\"><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title+'</span><br/><span style="font-size:11px;color:#999999;"></span></div><HR><div style=\"margin: 10px 10px 10px -20px;\" class="content-responsive">'+json[i].description+'</div><HR><a href=\"javascript:playvideo(\''+json[i].link+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><div class=\"see-all\">See All</div></a></div></div>';
				
		
			}
		}
        
        document.getElementById("contensocial").innerHTML=str;
		break;
		case 'socialwall_instagram':
		//console.log(JSON.stringify(json));
		/*for (var i=0;i<json.length;i++ )
		{
        
         if(json[i].link!='')
			{
		
				str += '<div id="rss_desc"><div><img src="img/ddsmall.jpg"><div style=\"margin: -50px 5px 20px 60px;\"><span style=\"color:#0D3C84;font-size:12px;font-weight:bold;\">'+json[i].title+'</span><br/><span style="font-size:11px;color:#999999;"></span></div><HR><div style=\"margin: 10px 10px 10px -20px;\" class="img-responsive1">'+json[i].description+'</div><HR><a href=\"javascript:playvideo(\''+json[i].link+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><div class=\"see-all\">See All</div></a></div></div>';
				
		
			}
		}*/
  str +=' <div class="ui-grid-solo">';
  for (var i=0;i<json.length;i++)
  {
  
     str +='<div>';
  str +='<img style="border: 10px solid #ED1C24;text-align: center;width: 95%;height: auto;" src="'+json[i].image.url+'" onclick=\"playvideo( \''+json[i].link+'\')\"/>';
  str +='</div>';
  }
  str +='</div>';
		
        document.getElementById("contensocial").innerHTML=str;
		break;
		case 'popuppage4':

       
		for(var i=0;i<json.data.length;i++)
		
		{

		str += '<ul data-role="listview" data-inset="true" class="listPpup ui-listview ui-listview-inset ui-corner-all ui-shadow" data-icon="false">';
		str += '<li class="ui-li-has-thumb ui-first-child ui-last-child"><a href="#" class="ui-btn"><img src="img/rstar.jpg"/>';
		str += '<h2>'+json.data[i].offername+'</h2><p>Coupon Code : '+json.data[i].couponcode+'</p></a>';
		str += '</li></ul>';
		

               
		
		}
		 $("#" + pageID + " .ui-content").html(str);
		break;
		


	}
}


function renderTemplatedetail(pageID) {
var str = '';



	switch (pageID) {
		
		case 'aboutus':
			document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
		    var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
		    document.getElementById("cardid").innerHTML = uuu;
		    document.getElementById("valid").innerHTML = 'Valid Thru:'+user.validity;
			document.getElementById("tpoint").innerHTML = 'POINTS :' +user.balance;
			document.getElementById("barimg").innerHTML = '<img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+user.mobile+'&choe=UTF-8" style="margin-top:5%;"/>';
			
			break;

		case 'page-card':
			
			document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
			//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
		    document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
			var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
		    document.getElementById("cardid").innerHTML = uuu;
		    document.getElementById("valid").innerHTML = 'Valid Thru:'+user.validity;
			var ustr = user.balance;
			var tstr = '';
			if(ustr.length<=8)
		   {
             for (var k=0;k<(8-ustr.length); k++)
			{
			tstr += '<span class="bdrht" style="">0</span>';
			}
		   }
			for (var j=0;j<ustr.length; j++)
			{
			tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
			}
			
			document.getElementById("tpoint").innerHTML = tstr;
			document.getElementById("barimg").innerHTML = '<img src="http://delhidaredevilsadda.com/barcode.php?text='+user.mobile+'" style="padding:5px;border: solid 1px #ffffff;border-radius: 1px;background:#ffffff;" />';

			document.getElementById("headername").innerHTML='Membership';
			 
			break;


			case 'page-card-punch':
			
			/*document.getElementById("barcontentpunch").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
			//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
		    document.getElementById("cardnamepunch").innerHTML = user.firstname+' '+user.lastname;
			var pstr='';
			 for (var k1=0;k1<1; k1++)
			{
			pstr += '<span style="color:#ffffff;"><br><br>Punch Card Not Activated.</span>';
			}
			console.log("pstr"+pstr);
            document.getElementById("card_punches").innerHTML =pstr;
			var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
		   
			var ustr = user.balance;
			var tstr = '';
			if(ustr.length<=8)
		   {
             for (var k=0;k<(8-ustr.length); k++)
			{
			tstr += '<span class="bdrht" style="">0</span>';
			}
		   }
			for (var j=0;j<ustr.length; j++)
			{
			tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
			}
			
			document.getElementById("tpointpunch").innerHTML = tstr;
			
			document.getElementById("headernamepunch").innerHTML='Membership';*/


						document.getElementById("barcontentpunch").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
			//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
		    document.getElementById("cardnamepunch").innerHTML = user.firstname+' '+user.lastname;
			var pstr='<span style="color:#ffffff;"><br><br>';
			//console.log("user.visit_frequency)"+user.visit_frequency);
            //user.visit_frequency='2';
			//console.log("parseInt(user.visit_frequency)"+parseInt(user.visit_frequency));
			 for (var k1=0;k1<parseInt(user.visit_frequency); k1++)
			{
			pstr += '<img src="img/star11.png"/>';
			}
			 for (var k1=0;k1<10-parseInt(user.visit_frequency); k1++)
			{
			pstr += '<img src="img/star.png"/>';
			}
			pstr +='</span>'
			//console.log("pstr"+pstr);



            document.getElementById("card_punches").innerHTML =pstr;
			var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
		   
			var ustr = user.balance;
			var tstr = '';
			if(ustr.length<=8)
		   {
             for (var k=0;k<(8-ustr.length); k++)
			{
			tstr += '<span class="bdrht" style="">0</span>';
			}
		   }
			for (var j=0;j<ustr.length; j++)
			{
			tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
			}
			
			document.getElementById("tpointpunch").innerHTML = tstr;
			
			document.getElementById("headernamepunch").innerHTML='Membership';
			break;

		    case 'shop':
            str +='<ul data-role="listview" id="ul_shop" class="ul_shop" data-icon="false" data-iconpos="none">';
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S1\');" class="lt_shop_a"><h2>Khazana</h2></a></li>';
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S2\');" class="lt_shop_a"><h2>Grain of Salt</h2></a></li>';
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S3\');" class="lt_shop_a"><h2>Options</h2></a></li>';
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S4\');" class="lt_shop_a"><h2>Sura Vie By TYC</h2></a></li>';
			str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S5\');" class="lt_shop_a"><h2>The Yellow Chilli</h2></a></li>';
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S6\');" class="lt_shop_a"><h2>Gold Leaf</h2></a></li>';
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S7\');" class="lt_shop_a"><h2>Jimmy Hu</h2></a></li>';
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S8\');" class="lt_shop_a"><h2>Signature</h2></a></li>';
			str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S9\');" class="lt_shop_a"><h2>The Brooklyn Shuffle</h2></a></li>';
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S10\');" class="lt_shop_a"><h2>Hong Kong</h2></a></li>'
            //str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S5\');" class="lt_shop_a"><h2>Travel</h2></a></li>';
			//str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S6\');" class="lt_shop_a"><h2>Home</h2></a></li>';
			//str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S7\');" class="lt_shop_a"><h2>Gifts</h2></a></li>';
            //str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S8\');" class="lt_shop_a"><h2>Corporate Order</h2></a></li>';
			str +='</ul>';
			
            $("#" + pageID + " .ui-content").html(str);
    $('#ul_shop').listview();
   break;
   case 'popuppagecard':
			
			
		    document.getElementById("cardnamepop").innerHTML = user.firstname+' '+user.lastname;
			var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
		    document.getElementById("cardidpop").innerHTML = uuu;
		    document.getElementById("validpop").innerHTML = 'Valid Thru:'+user.validity;
			var ustr = user.balance;
			var tstr = '';
			if(ustr.length<=8)
		   {
             for (var k=0;k<(8-ustr.length); k++)
			{
			tstr += '<span class="bdrht" style="">0</span>';
			}
		   }
			for (var j=0;j<ustr.length; j++)
			{
			tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
			}
			
			document.getElementById("tpointpop").innerHTML = tstr;
			document.getElementById("barimgpop").innerHTML = '<img src="http://delhidaredevilsadda.com/barcode.php?text='+user.mobile+'" style="padding:5px;border: solid 1px #ffffff;border-radius: 1px;background:#ffffff;" />';

			
			break;

	}
	}



function likeMessage(msg,i)
{
	
	$('#liking'+i).html('<img src="img/msg_dn_down.png">');
	//document.getElementById('liking'+i).innerHTML='<a href="javascript:likeMessage(\''+json[i].msg+'\',\''+i+'\');" data-role="button"><img src="img/msg_share.png"></a>';
}

function likeMessage_coupons(msg,i)
{
	
	$('#likingcoupon'+i).html('<img src="img/msg_dn_down.png">');
	//document.getElementById('liking'+i).innerHTML='<a href="javascript:likeMessage(\''+json[i].msg+'\',\''+i+'\');" data-role="button"><img src="img/msg_share.png"></a>';
}

function likeMessage_loyalty(msg,i)
{
	
	$('#likingloyalty'+i).html('<img src="img/msg_dn_down.png">');
	//document.getElementById('liking'+i).innerHTML='<a href="javascript:likeMessage(\''+json[i].msg+'\',\''+i+'\');" data-role="button"><img src="img/msg_share.png"></a>';
}
function likeMessage_rewards(msg,i)
{
	
	$('#likingrewards'+i).html('<img src="img/msg_dn_down.png">');
	//document.getElementById('liking'+i).innerHTML='<a href="javascript:likeMessage(\''+json[i].msg+'\',\''+i+'\');" data-role="button"><img src="img/msg_share.png"></a>';
}
function likeMessagefb(msg,i)
{
	$('#likingfb'+i).html('<img src="img/msg_dn_down.png">');
}
function likeMessagetw(msg,i)
{
	$('#likingtw'+i).html('<img src="img/msg_dn_down.png">');
}
function likeMessagepin(msg,i)
{
	$('#likingpin'+i).html('<img src="img/msg_dn_down.png">');
}

function shareMessagefb(msg)
{
	//window.plugins.socialsharing.share(msg,'Gini & Jony');
	window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(msg, null /* img */, null /* url */, brandname, function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
}

function shareMessagetw(msg)
{
	//window.plugins.socialsharing.share(msg,'Gini & Jony');
      window.plugins.socialsharing.shareViaTwitter(msg);
}
function shareMessage(msg)
{
	window.plugins.socialsharing.share(msg,brandname);
}

function showTabContentRSS(id, url) {
  if(url==json_fb)
	{

  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json.item);

     

          localStorage.setItem('facebook_hnd',JSON.stringify(json.item));
     

    

       }).error(function () {
		 try{
			 renderTemplate(id,JSON.parse(localStorage.getItem('facebook_hnd')));
		 }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );
 
}
if(url==RSS_youtube)
{

  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json.feed.entry);

     

          localStorage.setItem('youtube_hnd',JSON.stringify(json.feed.entry));
     

    

       }).error(function () {
		   try{
			 renderTemplate(id,JSON.parse(localStorage.getItem('youtube_hnd')));
		   }
		   catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}
else if(url==RSS_twitter)
{


  $.getJSON(
     url, {
     
       }, function (json) {

      
         //renderTemplate(id, json.responseData.feed.entries);
			renderTemplate(id, json.channel.item);
     

        //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
       localStorage.setItem('twitter_hnd',JSON.stringify(json.channel.item));

    

       }).error(function () {
		   try{
		   }catch(err)
		   {
			   renderTemplate(id,JSON.parse(localStorage.getItem('twitter_hnd')));
		   }
         alert("Error: Could not connect to Server, make sure you are connected to Network");
        }
   );


}
else if(url==RSS_pinterest)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         renderTemplate(id, json.responseData.feed.entries);
			
     

          localStorage.setItem('pinterest_hnd',JSON.stringify(json.responseData.feed.entries));
       

    

       }).error(function () {
		   try{
			    renderTemplate(id,JSON.parse(localStorage.getItem('pinterest_hnd')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );
 

}
else if(url==RSS_tumblr)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         //renderTemplate(id, json.responseData.feed.entries);
			renderTemplate(id, json.channel.item);
     

        //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
       localStorage.setItem('tumblr_hnd',JSON.stringify(json.channel.item));

    

       }).error(function () {
		   try{
			   renderTemplate(id,JSON.parse(localStorage.getItem('tumblr_hnd')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}
else if(url==RSS_instagram)
{

 
  $.getJSON(
     url, {
     
       }, function (json) {

      
         //renderTemplate(id, json.responseData.feed.entries);
			renderTemplate(id, json.channel.item);
     

        //  localStorage.setItem('twitter',JSON.stringify(json.responseData.feed.entries));
       localStorage.setItem('instagram_hnd',JSON.stringify(json.channel.item));

    

       }).error(function () {
		   try{
			   renderTemplate(id,JSON.parse(localStorage.getItem('instagram_hnd')));
		   }catch(err)
		   {
         alert("Error: Could not connect to Server, make sure you are connected to Network");
		   }
        }
   );


}



 
}

function playvideo(url)
{
	
	//window.plugins.videoPlayer.play("https://www.youtube.com/watch?v=en_sVVjWFKk");
	openInWebView(url); 

}
function showpopuppage1()
{
	
	var mainpop = document.getElementById('mainpop'); 
    mainpop.style.display = 'block';
	var smallImage = document.getElementById('getbarimage');
    smallImage.style.display = 'none';
	var smallImage1 = document.getElementById('getmobcoupon');
    smallImage1.style.display = 'none';
	$.mobile.changePage( "#popuppage1", { transition: "slide"} ); 

}
function showbarcode()
{   var mainpop = document.getElementById('mainpop'); 
    mainpop.style.display = 'none';
	var smallImage = document.getElementById('getbarimage');
    smallImage.style.display = 'block';
	smallImage.style.margin='0 auto';
	smallImage.src = "http://delhidaredevilsadda.com/barcode.php?text="+user.balance;
	var smallImage1 = document.getElementById('getmobcoupon');
    smallImage1.style.display = 'none';
	
}

function mobilecoupon()
{
	var mainpop = document.getElementById('mainpop'); 
    mainpop.style.display = 'none';
	var smallImage = document.getElementById('getbarimage');
    smallImage.style.display = 'none';
	var smallImage1 = document.getElementById('getmobcoupon');
    smallImage1.style.display = 'block';
	$.ajax({
			url: SERVER+'get_active_voucher_api.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				mobileno: user.mobile,
				
							
			},
			success: function(data, textStatus, xhr) {

				//console.log("Anoop"+url);
				
				
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						smallImage1.innerHTML = '<div>You will shortly receive a sms with your mobile coupon</div>';
						

				}
			
	
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
	
}

function showRewards1(){
	try{
		popupCloseRight1.remove();
	}catch(err) 
	{	}
		showRewards();
}


function showHomeold(){
 $.mobile.changePage( "#page-card", { transition: "none"} ); 
 var oth = document.getElementById("othercontent");
 var main = document.getElementById("cardcontent");  
 oth.style.display = 'none';
 main.style.display = 'block';
 try{
	$( "#left-panel" ).panel( "close" );
	}catch(err) 
	{	}
	
 document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
 document.getElementById("headername").innerHTML='Membership';	
}

function showHome1()
{
alert("sssss");
 $("#scan_details").popup( "close" );
 showhome();
	
}

function receivedEvent(id) {
       

 var push = PushNotification.init({ "android": {"senderID": "757926616774"}});
                     push.on('registration', function(data) {
                     
					 reg_id=data.registrationId;
					 //alert(reg_id);
                     });
          
                     push.on('notification', function(data) {
						//alert(data.message);
					 
						//showInbox();
                     });
          
                     push.on('error', function(e) {
						//alert(e);
                     }
					);
    }

function getContacts(){


 try{
 var optFilter = new ContactFindOptions();
 optFilter.filter = "";  // to return all contacts
 optFilter.multiple = true; // return multiple results
 var fields = [navigator.contacts.fieldType.name,navigator.contacts.fieldType.phoneNumbers];
 
 // get all contacts
 navigator.contacts.find(fields,gcsSuccess, gcsError, optFilter);
 }
 catch(err)
 {
     txt="There was an error loading contacts.\n\n"; 
     txt+="Error description: " + err.message + "\n\n"; 
    // alert(txt); 
    
 }
}

/* get all contacts success */
function gcsSuccess(contacts){
 
 //alert("Contact sync start"+contacts.length);
 if( contacts.length != 0 ){
  // get formatted names and sort
  var names = new Array();
  var contactnos = new Array();
  
  
  for(var i=0; i<contacts.length; ++i){


   if( contacts[i].phoneNumbers == null )
            continue;

   
   
               
           
            
 

   
   if(contacts[i].name){
    var pname = contacts[i].displayName != null ? contacts[i].displayName: "No name";
     names.push(pname);
    
    }

   // display phone numbers
     if (contacts[i].phoneNumbers){
                              var pNumber = contacts[i].phoneNumbers[0].value; 
      
          contactnos.push(pNumber);
     

     }
   
  }
  names.sort();


  
 var contactstr='<label for="choosefrnd" class="select">Choose Friend:</label><select name="choosefrnd" id="choosefrnd"  onchange="if (this.selectedIndex) doSomething(this.selectedIndex);">';
  for(var i=0; i<names.length; ++i){
   contactstr += '<option value='+contactnos[i]+'>'+names[i]+'</option>';
  }
   contactstr += '</select>';

   //alert(contactstr);
   document.getElementById("allContacts").innerHTML=contactstr;

 } else document.getElementById("allContacts").innerHTML='No Contact';
}

/* get all contacts error */
function gcsError(contactError){
 navigator.notification.alert('Contacts Error');
}

function getContactno(i)
{
$('#search-mobile').val(phonenos.get(i));

}
function doSomething(str)
{
 
 var e = document.getElementById("choosefrnd");
    var strmob = e.options[e.selectedIndex].value;

 $('#giftmno').val(strmob);
 
}
function addincart(i)
{
	ids.push(i);
	cart.cartdata.push({ 
   "index":i,
   "url" : SERVER1+jsonary[i].brand_logo,
   "BrandId" : jsonary[i].brand_id,
   "BrandName" : jsonary[i].brand_name,
   "BrandValue" : jsonary[i].gift_voucher_value,
   "BrandDescription":jsonary[i].brand_description,
   "Validity":jsonary[i].end_date,
    });
   
  indexary.push(jsonary[i].brand_id);
  
  $('#cartval').html(ids.length);
}


 $(document).on('tap', '#view_cart', function (e, ui) {

        checkout();
 
 
});


function checkout(){
   var offers='';
  for (var i=0;i<cart.cartdata.length;i++ )
  {
        offers = offers + cart.cartdata[i].BrandId + ',';
  }
  
        offers = offers.substring(0,offers.length-1);

  $.ajax({
    url: SERVER3+'complete.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'text', //xml/html/script/json/jsonp
    data: {'mobileno': user.mobile, 'offers': offers,'redeemval':'0'},
    success: function(data, textStatus, xhr) {
   
	
    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		showHome();
		
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: data+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");
    	
    },
    error: function(xhr, textStatus, errorThrown) {
	
	
	alert('Could not connect to Server, make sure you are connected to Internet');
   
    }
  });
 
}

function getVoucher(id,val){

  
  
  $.ajax({
    url: SERVER3+'complete.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'text', //xml/html/script/json/jsonp
    data: {'mobileno': user.mobile, 'offers': id,'redeemval':val},
    success: function(data, textStatus, xhr) {
   
	
    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		showHome();
		
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: data+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");
    	
    },
    error: function(xhr, textStatus, errorThrown) {
	
	
	alert('Could not connect to Server, make sure you are connected to Internet');
   
    }
  });
 
}

function showPOPup()
{

	var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		showHome();
		
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: 'Please wait...'+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    

    $popUp.popup('open').trigger("create");

}

 function showShop(){

    openInWebView('https://www.zomato.com/');
    /*$.mobile.changePage( "#shop", { transition: "none"} ); 
    renderTemplatedetail('shop');
  $.mobile.changePage( "#innershop", {transition: "none"} );
  var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
  var the_width = $(window).width();
  var str1='';
  str1='<embed src="http://www.latin-quarters.com/" width='+the_width+' height='+the_height+' /></embed>';
  //$("#innershop .ui-content").html(str1);
  document.getElementById("barcontentinnershop").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';
  $("#innerdata").html(str1);*/
}

function giftfriend(){
  var to_mob=$('#giftmno').val();
  var val=$('#giftpt').val();
  $.ajax({
    url: SERVER+'gift_points_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'text', //xml/html/script/json/jsonp
    data: {'mobileno': user.mobile, 'tomobileno': to_mob,'gift_points':val},
    success: function(data, textStatus, xhr) {
   
	
    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();
        ids.length = 0;
		cart.cartdata.length = 0;
		indexary.length = 0;
		showHome();
		
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: data+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");
    	
    },
    error: function(xhr, textStatus, errorThrown) {
	
	
	alert('Could not connect to Server, make sure you are connected to Internet');
   
    }
  });
 
}

function showRecharge()
{

	var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlayTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#3B7BEE'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: 'Coming Soon...'+'\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");

}

function RewardsNA()
{

	var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlayTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        
		
		
        
    }).css({
            'width': '270px',
            'height': '200px',
            'padding': '5px',
			'text-shadow':'none',
			//'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
			'background': '#69534A'
    });
    //create a title for the popup
    $("<h2/>", {
        text: "Response!"
    }).appendTo($popUp);

    //create a message for the popup

		 $("<p/>", {
		
				 text: 'RewardStore is coming soon.\n'
		

		 }).appendTo($popUp);
	
  
    //create a back button
    //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back"
    }).buttonMarkup({
        inline: false,
        mini: false,
        theme: "b",
        icon: "back"
    }).appendTo($popUp);

    $popUp.popup('open').trigger("create");

}

$(document).bind('keydown', function(event) {

  if (event.keyCode == 27) { // 27 = 'Escape' keyCode (back button)
    event.preventDefault();
  }
});

function refer_Share()
{
	var sharecode = $('#share_refer_code').val();
	var sharetxt  = 'Download UFI Filters App. Your Referal Code is: '+sharecode;
    
	window.plugins.socialsharing.share( sharetxt, null, 'https://taghash.co/shareimg/ufifilters.jpg', 'https://ufifilters.mloyalretail.com/mapp');
}

function shareApp()
{
	window.plugins.socialsharing.share('Hi, Join UFI Filters Rewards.', null, 'https://taghash.co/shareimg/ufifilters.jpg', 'https://ufifilters.mloyalretail.com/mapp');
}

function rateApp()
{
	var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
		     if (deviceType=='iPad' || deviceType=='iPhone') 
			 {
                //window.open('itms-apps://itunes.apple.com/us/app/domainsicle-domain-name-search/id511364723?ls=1&mt=8');
				window.open('https://ufifilters.mloyalretail.com/mapp');
			 } 
		     else if (deviceType=='Android')
			 {
                window.open("market://details?id=com.mobiquest.ufifilters","_system");
             }
		    else if (deviceType=='BlackBerry')
			{
                //window.open('http://appworld.blackberry.com/webstore/content/<applicationid>');
				window.open('http://180.179.218.225:82/mloyalbb.jsp?brandname='+brandname);
            }
}

// onSuccess Geolocation
    //
    function onGeoSuccess(position) {
       /* var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + new Date(position.timestamp)          + '<br />';*/
	 var latlng = position.coords.latitude+','+position.coords.longitude;
	 showTabContent_Map1(latlng);
							
    }

    // onError Callback receives a PositionError object
    //
    function onGeoError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

function getNearStores(){
     navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
	 
}

function showPopuppage4(){
$.mobile.changePage( "#popuppage4", { transition: "slide"} ); 
	showTabContent('popuppage4', 'cpns_history_json.asp');
	
	
}

$(document).on('pageinit', '#feedback', function (event, ui) {
//$('#login').live('pageinit',function(event){
	$('#feed_firstname').val(user.firstname);
	$('#feed_lastname').val(user.lastname);
	$('#feed_mobile').val(user.mobile);
	$('#feed_email').val(user.emailid);
	loadLocation();
	//$('#login_button').live('tap', function(e){
		//document.getElementById("barcontentfeed").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
		
		$(document).on('tap', '#submit_button_feedback', function (e, ui) {
		e.preventDefault();
		e.stopPropagation();
	
		var productsquality = $('input[name="radio-choice-a"]:checked').val();
		var experience = $('input[name="radio-choice-b"]:checked').val();
		var staffbehaviour = $('input[name="radio-choice-c"]:checked').val();
		var productsvariety = $('input[name="radio-choice-d"]:checked').val();
		var reference = $('input[name="radio-choice-e"]:checked').val();
		var comeback = $('input[name="radio-choice-f"]:checked').val();
		//var music = $('input[name="radio-choice-g"]:checked').val();
        var suggestion=$('#feed_suggestion').val();
		var fname=$('#feed_firstname').val();
		var mobile=$('#feed_mobile').val();
		var email=$('#feed_email').val();
		var address=$('#feed_address').val();
		var birthday = $('#feed_dob').val();
        var anniversary = $('#feed_doa').val();
		var bill_loc = $('#bill_loc').val();


		var dob = birthday.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[2] : '';
		var yyyy = dob.length == 3 ? dob[0] : '';
		
 		var doa = anniversary.split('-');
		var mm1 = doa.length == 3 ? dob[1] : '';
		var dd1 = doa.length == 3 ? dob[2] : '';
		var yyyy1 = doa.length == 3 ? dob[0] : '';
		
		

        if(fname=='' || mobile==''){
		  toast('Please enter mandatory fields!');
		}else{


			$.ajax({
			url: SERVER+'feedback_json.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {


				'MobileNo': mobile,
				'FirstName': fname,
				'LastName': '',
				'EmailId': email,       
				'StoreId': bill_loc,    
				'Var1': productsquality,   
				'Var2': experience,     
				'Var3': staffbehaviour, 
				'Var4': productsvariety,    
				'Var5': reference,      
				'Var6': address,     
				'Var7': dd,        
				'Var8': mm,             
				'Var9': yyyy,
				'Var10': dd1,
				'Var11': mm1,           
				'Var12': yyyy1,
				'Var13': suggestion,
				'Var14': comeback,
				'Var15': '',
				'Var16': '',
				'Var17': '',
				'Var18': '',
				'Var19': '',
				'Var20': ''	
				
					
				
			},
			success: function(data, textStatus, xhr) {
				
				    
					
				$('#feedback_response_msg').html(data);

				$.mobile.changePage( "#feedback_response", {transition: "flip"} );
				$('input[name="radio-choice-a"]').attr('checked', false);
				$('input[name="radio-choice-a"]').prop('checked',false);
				$('input[name="radio-choice-b"]').attr('checked', false);
				$('input[name="radio-choice-b"]').prop('checked',false);
				$('input[name="radio-choice-c"]').attr('checked', false);
				$('input[name="radio-choice-c"]').prop('checked',false);
				$('input[name="radio-choice-d"]').attr('checked', false);
				$('input[name="radio-choice-d"]').prop('checked',false);
				$('input[name="radio-choice-e"]').attr('checked', false);
				$('input[name="radio-choice-e"]').prop('checked',false);
				$('input[name="radio-choice-f"]').attr('checked', false);
				$('input[name="radio-choice-f"]').prop('checked',false);
				//$('input[name="radio-choice-g"]').attr('checked', false);
				//$('input[name="radio-choice-g"]').prop('checked',false);
				//$('input[name="radio-choice-h"]').attr('checked', false);
				//$('input[name="radio-choice-h"]').prop('checked',false);
				$('#feed_suggestion').val('');
				$('#feed_firstname').val('');
				$('#feed_email').val('');
				$('#feed_address').val('');
			    $('#feed_dob').val('');
				$('#feed_doa').val('');
				//$('#mobile').val('');
				$('#bill_loc').val('');
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
		}
	});
	
});

function showshoplinks(str)
{
 $.mobile.changePage( "#innershop", {transition: "flip"} );
 var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
 var the_width = $(window).width();
 var str1='';
	if(str=='S1')
	{
	//openInWebView('http://www.damilano.com/women');
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=1" width='+the_width+' height='+the_height+' /></embed>';
	}
	else if(str=='S2')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=5" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/men');
	}
	else if(str=='S3')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=7" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/leather-accessories');
	}
	else if(str=='S4')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=9" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/business-essentials');
	}
	else if(str=='S5')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=11" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/travel');
	}
	else if(str=='S6')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=4" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/home-195');
	}
	else if(str=='S7')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=6" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/');
	}
    else if(str=='S8')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=8" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/');

	}
	else if(str=='S9')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=10" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/');
	}
    else if(str=='S10')
	{
	str1='<embed src="http://skrestaurants.com/brandpage.aspx?bid=12" width='+the_width+' height='+the_height+' /></embed>';
	//openInWebView('http://www.damilano.com/');

	}

	document.getElementById("barcontentinnershop").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';
    $("#innerdata").html(str1);
 //$("#innershop .ui-content").html(str1);
}
$(document).on('pageshow', '#page-card', function (event, ui) {
//alert($(window).height());
/*var the_height = ($(window).height());
$(this).height($(window).height()).find('[data-role="content"]').height(the_height);*/

});
$(document).on('pageshow', '#page-card1', function (event, ui) {
//alert($(window).height());
/*var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
$(this).height($(window).height()).find('[data-role="content"]').height(the_height);*/

});
$(document).on('pageshow', '#page-card-punch', function (event, ui) {
//alert($(window).height());
/*var the_height = ($(window).height());
$(this).height($(window).height()).find('[data-role="content"]').height(the_height);*/

});
$(document).on('pageshow', '#page-card-punch1', function (event, ui) {
//alert($(window).height());
var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
$(this).height($(window).height()).find('[data-role="content"]').height(the_height);

});
$(document).on('pageshow', '#social', function (event, ui) {
//alert($(window).height());
var the_height = ($(window).height());
$(this).height($(window).height()).find('[data-role="content"]').height(the_height);

});
$(document).on('pageshow', '#social1', function (event, ui) {
//alert($(window).height());
var the_height = ($(window).height() - $(this).find('[data-role="header"]').height());
$(this).height($(window).height()).find('[data-role="content"]').height(the_height);

});

function showFbNew(){

	
	openInWebView('https://www.facebook.com/UFIFiltersGroup');

  
}

function showTwitterNew(){

    openInWebView('https://twitter.com/UFIFiltersGroup');
  
}

function showInstagramNew(){

    openInWebView('http://www.instagram.com/ufi_filters/');
  
}

function showYoutubeNew(){

    openInWebView('https://www.youtube.com/channel/UCcOUaq9ZTr4LnaG6OWtoKUg');
  
}

function showPinterestNew(){
	
	openInWebView('https://www.pinterest.com/');
}

function showGplus(){
	
	openInWebView('https://plus.google.com/');
}

function showShop11(){

  openInWebView('https://hil.in/');
   
}

function loadLocation()
{
     var cityid='';
	 $.ajax({
   url: SERVER+'store_locator_json.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'city': cityid},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
  
   //called when successful
   
        var listItems= "";
			listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E;color:#000000;' selected='selected'>-Select Distributor*-</option>";
        for (var i = 0; i < data.length; i++)
			{
               listItems+= "<option value='" + data[i].storecode + "'>" + data[i].storename + "</option>";
            } 
      //$("#textinput-selstore").html(listItems);
      $("#update_store_elec").html(listItems);
      $("#update_store_ret").html(listItems);
      $("#update_store_ret1").html(listItems);
	  $("#bill_loc").html(listItems);
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
		// $('#login-msg').html('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
	 
	 
}

function loadLocation_retlist()
{
     var cityid='';
	 $.ajax({
   url: SERVER2+'get_retailers_data_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'apiuid': 'MLOYALUFIAPI','apipswd': 'Ml0yalUFIAP!2!'},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
  
   //called when successful
   
        var listItems= "";
			listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E;color:#000000;' selected='selected'>-Select Retailer*-</option>";
        for (var i = 0; i < data.data.length; i++)
			{
               listItems+= "<option value='" + data.data[i].storeCode + "'>" + data.data[i].FirstName +' '+data.data[i].LastName + "</option>";
            } 
      //$("#textinput-selstore").html(listItems);
      $("#update_ret_cb").html(listItems);
      $("#update_ret_cb1").html(listItems);
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
		// $('#login-msg').html('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
	 
	 
}

function updateRlist(str)
{

	var mobile = $('#'+str).val();

	//if(mobile.length==10)
	//{
		$.ajax({
	   url: SERVER2+'get_retailers_data_json_api.asp',
	   type: 'GET',
	   timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALUFIAPI','apipswd': 'Ml0yalUFIAP!2!','mobileno':mobile},
		complete: function(xhr, textStatus) {
	   //called when complete
		},
		success: function(data, textStatus, xhr) {
	  
	   //called when successful

	     if(data.data.length>=0)
		 {
	   
			var listItems= "";
				listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E;color:#000000;' selected='selected'>-Select Retailer*-</option>";
			for (var i = 0; i < data.data.length; i++)
				{
				   listItems+= "<option value='" + data.data[i].storeCode + "'>" + data.data[i].FirstName +' '+data.data[i].LastName + "</option>";
				} 
		  //$("#textinput-selstore").html(listItems);
		  $("#update_ret_cb").html(listItems);
		  $("#update_ret_cb1").html(listItems);

		 }
	   
	   
		},
		error: function(xhr, textStatus, errorThrown) {
			// $('#login-msg').html('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	//}
}

function drawMap(latlng,index) {
    
        var myOptions = {
            zoom: 2,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP 
        };
   

   var bounds = new google.maps.LatLngBounds();
        var map = new google.maps.Map(document.getElementById('map-canvas'+index), myOptions);
        // Add an overlay to the map of current lat/lng
        var pinColor = "FE7569";
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                new google.maps.Size(21, 34),
                new google.maps.Point(0, 0),
                new google.maps.Point(10, 34));
        var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
                new google.maps.Size(40, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 35));



        bounds.extend(latlng);
        var markercurr = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Current Position!!!',
            icon: pinImage,
            shadow: pinShadow

        });
        map.fitBounds(bounds);
    }

	
	function purchaseHistory()

{
	var pop = document.getElementById('purchaseHistory');
	if(pop.style.display=='block')
		pop.style.display = 'none';
    else
		pop.style.display = 'block';
   var pop1 = document.getElementById('redeemHistory');
		pop1.style.display = 'none';
	var pop2 = document.getElementById('bonusHistory');
		pop2.style.display = 'none';
}

function bonusHistory(bal)
{
	/*var pop = document.getElementById('bonusHistory');
	if(pop.style.display=='block')
		pop.style.display = 'none';
    else
		pop.style.display = 'block';
    var pop1 = document.getElementById('redeemHistory');
		pop1.style.display = 'none';
	var pop2 = document.getElementById('purchaseHistory');
		pop2.style.display = 'none';*/
		
		$.mobile.changePage( "#point_balance", { transition: "none"} ); 
		document.getElementById('pointbal_head').innerHTML = 'Point Balance';
		document.getElementById('pointbal_bal').innerHTML = bal;

}

function redeemHistory()
{
	var pop = document.getElementById('redeemHistory');
	if(pop.style.display=='block')
		pop.style.display = 'none';
    else
		pop.style.display = 'block';
	var pop1 = document.getElementById('purchaseHistory');
		pop1.style.display = 'none';
	var pop2 = document.getElementById('bonusHistory');
		pop2.style.display = 'none';
}

var toast = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.97,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#E30620",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(2500)
            .fadeOut(400, function () {
                $(this).remove();
            });
}


var toastscan = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.97,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#E30620",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(2500)
            .fadeOut(1000, function () {
                $(this).remove();
            });
}

/*function submitDetails()
{
        console.log("In submitDetails");
	    e.preventDefault();
		e.stopPropagation();
	
		var fname=$('#dtl_name').val();
		var mobile=$('#dtl_mobile').val();
		var email=$('#dtl_email').val();
		var kidsbirthday = $('#dtl_dob').val();
		var gender = $('input[name="dtl_gender"]:checked').val();
		var loc=$('#dtl_loc').val();


		var dob = kidsbirthday.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[2] : '';
		var yyyy = dob.length == 3 ? dob[0] : '';

}*/


function hasCameraPermission() {
    //alert("kkkk");

    cordova.plugins.barcodeScanner.hasPermission(
      function(result) {
        // if this is 'false' you probably want to call 'requestCameraPermission' now
        alert(result);
      }
    )
  }

  function requestCameraPermission() {
    // no callbacks required as this opens a popup which returns async
    cordova.plugins.barcodeScanner.requestPermission();
  }



function showScan(){

  
  scanval='';

var bcode='TBBNY212AR';

//var bcode='GIFT_09704_Purist=Water Bottle';



			scanval=bcode;
			
			$('#barcodeno').val('XXXXXXXX');

			

			 $.mobile.changePage( "#scan_redeem", { transition: "none"} );


			    $("#scan1").css('display', 'block');
			    $("#scanapp").css('display', 'none');
			    $("#scanpen").css('display', 'none');
			    $("#scaninv").css('display', 'none');
			    $("#scanred").css('display', 'none');
			    $("#scanun").css('display', 'none');

				 


/*





 
  if(user.isApproved=='REJECTED' || user.isBlocked=='BLOCKED' || user.isLive=='0')
	{
	  toast('You cannot use this feature as your profile has been rejected or blocked or state is not live yet.');
	}
	else
	{
	try{
		$('#scan_details').popup('Close');
		$('#scan_details_gift').popup('Close');
	}
	catch(err)
	{
		
	}


	$.mobile.changePage( "#scanpage", { transition: "none"} ); 
    QRScanner.show();
    QRScanner.scan(displayContents);
 
    function displayContents(err, text){
      if(err){
        alert("Scan Failed!");
      } else {
        // The scan completed, display the contents of the QR code:
             
        //QRScanner.hide(function(status){});
	
		var sound = document.getElementById("audio");
        sound.play()


       		var bcode=text;

			scanval=bcode;
			
			$('#barcodeno').val('XXXXXXXX');
			$('#barcodeno_gift').val('XXXXXXXX');

			if(scanval.substring(0,4).toUpperCase() =='GIFT')
			{

				 $.mobile.changePage( "#scan_gift", { transition: "none"} );

				 $("#scan1gift").css('display', 'block');
			     $("#scangiftsu").css('display', 'none');
			     $("#scangiftas").css('display', 'none');
			     $("#scangiftf").css('display', 'none');
			   


			}
			else
			{

			   $.mobile.changePage( "#scan_redeem", { transition: "none"} );

			    $("#scan1").css('display', 'block');
			    $("#scanapp").css('display', 'none');
			    $("#scanpen").css('display', 'none');
			    $("#scaninv").css('display', 'none');
			    $("#scanred").css('display', 'none');
			    $("#scanun").css('display', 'none');
			}

			

		    //scanphoto();


			showGeolocation();


        //document.getElementById('vouchercode').value=text;   
        try{
        QRScanner.hide(function(status){});
        }catch(error)
        {
         QRScanner.destroy(function(status){});   
        }



      }
    }
  


}

 

*/
	
}

function submitScan()
{

	toast('Your limit for the day has been exhausted..Please try tomorrow');

	/*var now = new Date();
	var dd = now.getDate();
	var mm = parseInt(now.getMonth())+1;
	var yyyy = now.getFullYear();

	var checkamt=0;

	console.log('local'+localStorage.getItem(dd+'-'+mm+'-'+yyyy));

	if(localStorage.getItem(dd+'-'+mm+'-'+yyyy)!=null)
	checkamt=parseInt(localStorage.getItem(dd+'-'+mm+'-'+yyyy));

	console.log('checkamt'+checkamt);	
   if(parseInt(checkamt)<5000)
   {
	if(user.isApproved=='Approved' || user.isApproved=='PENDING')
	{

    $('#pwait').html("Please wait!");
	var barcode=scanval;//$('#barcodeno').val();
	//var billno=$('#refbillno').val();
	//console.log("bcode:"+barcode);
	

	if(barcode==''){
          toast('Please Enter Mandatory Fields!');
		}
	else{

//alert('https://ufifilters.mloyalretail.com/redeem_promo_cpns_er_new.asp?mobileno='+user.mobile+'&ccode='+barcode+'&scode=HO-001&billno=&email='+user.emailid+'&latitude=&longitude=');
		
			//https://ufifilters.mloyalretail.com/redeem_promo_cpns_er_new.asp?mobileno=99XXXXXXXX&ccode=onee1003&scode=HO-001&billno=Test-001&email=XXXXX@XXXX.XXX&isvalidate=1
		

						$.ajax({
						url: SERVER1+'redeem_promo_cpns_er_new.asp',
						type: 'GET',
                        timeout: 30000,
						data: {

							'mobileno': user.mobile,
							'ccode': barcode,
							'scode': 'HO-001',
							'billno': '',
							'email': user.emailid,
							'isvalidate':'1',
							'latitude': user.latitude_ck,
							'logitude': user.longitude_ck
								
						},
						success: function(data, textStatus, xhr) {
							$('#pwait').html('');
								
								if(data.indexOf("Coupon code is not valid")>=0)
								{
									//toast('Coupon code is not valid.');
									$('#barcodeno').val('');
									//scanval='';
									//$.mobile.changePage( "#scan_redeem", { transition: "none"} );
			
									$("#scan1").css('display', 'none');
								    $("#scanapp").css('display', 'none');
								    $("#scanpen").css('display', 'none');
								    $("#scaninv").css('display', 'block');
								    $("#scanred").css('display', 'none');
									
								}

								else if(data.indexOf("Un Autorized")>=0)
								{
									//toast('Coupon code is not valid.');
									$('#barcodeno').val('');
									//scanval='';
									//$.mobile.changePage( "#scan_redeem", { transition: "none"} );
			
									$("#scan1").css('display', 'none');
								    $("#scanapp").css('display', 'none');
								    $("#scanpen").css('display', 'none');
								    $("#scaninv").css('display', 'none');
								    $("#scanred").css('display', 'none');
								     $("#scanun").css('display', 'block');
									
								}
								else if(data.indexOf("Coupon code already redeemed")>=0)
								{
									//toast('Coupon code is not valid.');
									$('#barcodeno').val('');
									//scanval='';
									//$.mobile.changePage( "#scan_redeem", { transition: "none"} );
			
									$("#scan1").css('display', 'none');
								    $("#scanapp").css('display', 'none');
								    $("#scanpen").css('display', 'none');
								    $("#scaninv").css('display', 'none');
								    $("#scanred").css('display', 'block');

								   
									
								}
								else
								{
									var elems = data.split(':');



									 var scan_now=localStorage.getItem(dd+'-'+mm+'-'+yyyy);
								    if(scan_now==null)
								    	scan_now='0';


									var tot_scan=parseInt(elems[1])+parseInt(scan_now);

									//var tot_scan=parseInt('1000')+parseInt(scan_now);

									localStorage.setItem(dd+'-'+mm+'-'+yyyy,tot_scan)
									
									//toastscan(elems[0]+'<br/>Issued Cashback:'+elems[1]+'<br/>Total Cashback:'+elems[2]+'<br/>Total Points'+elems[3]);
									$('#barcodeno').val('');
									scanval='';

									//$.mobile.changePage( "#scan_redeem", { transition: "none"} );
									if(user.isApproved == 'PENDING')
									{

										$("#scan1").css('display', 'none');
									    $("#scanapp").css('display', 'none');
									    $("#scanpen").css('display', 'block');
									    $("#scaninv").css('display', 'none');
									    $("#scanred").css('display', 'none');
									    document.getElementById("scanpentxt").innerHTML = 'Your My Wallet has been credited with Rs.'+elems[1]+'.Your PayTm Wallet will be credited when your registration will be verified';
									}
									else
									{
								        $("#scan1").css('display', 'none');
									    $("#scanapp").css('display', 'block');
									    $("#scanpen").css('display', 'none');
									    $("#scaninv").css('display', 'none');
									    $("#scanred").css('display', 'none');
								        
											
										if(elems[1]=='2')
										{
										document.getElementById("scansuccess").src = "assets/images/card_bg_2.png";
										}
										else if(elems[1]=='5')
										{
										document.getElementById("scansuccess").src = "assets/images/card_bg_5.png";
										}
										else if(elems[1]=='10')
										{
										document.getElementById("scansuccess").src = "assets/images/card_bg_10.png";
										}
									}

									$('#username').val(localStorage.getItem("usernameufifilters"));
									var pass = localStorage.getItem("passwordufifilters");
										 if(pass.length>=4)
										   {
										   var i=4;
										   while(i>0)
													  {
														$('#codeBox'+i).val(parseInt(pass%10));
														i--;
														pass = parseInt(pass/10);
														
													  }
											}
										  
										   user.mobile=localStorage.getItem("usernameufifilters");
										   
										
											authenticate2();
								}
            

						},
						error: function(xhr, textStatus, errorThrown) {
							$('#pwait').html('');
							toast('Could not connect to Server, make sure you are connected to Internet');
						}
					});
					
		}
	}
   }
   else
   {

   	 toast('Your limit for the day has been exhausted..Please try tomorrow');

   }*/
}

function submitScangift(){


		


    $('#pwaitgift').html("Please wait!");
	var barcode=scanval;//$('#barcodeno').val();
	//var billno=$('#refbillno').val();
	//console.log("bcode:"+barcode);
	

	if(barcode==''){
          toast('Please Enter Mandatory Fields!');
		}
	else{


//alert('https://ufifilters.mloyalretail.com/redeem_promo_cpns_er_new.asp?mobileno='+user.mobile+'&ccode='+barcode+'&scode=HO-001&billno=&email='+user.emailid+'&latitude=&longitude=');
		
			//https://ufifilters.mloyalretail.com/redeem_promo_cpns_er_new.asp?mobileno=99XXXXXXXX&ccode=onee1003&scode=HO-001&billno=Test-001&email=XXXXX@XXXX.XXX&isvalidate=1
				

						$.ajax({
						url: SERVER2+'validate_static_coupon_json_api.asp',
						type: 'GET',
                        timeout: 30000,
						data: {

							'mobileno': user.mobile,
							'apiuid': 'MLOYALAPI',
							'apipswd': 'Ml0yalAP!2o14',
							'voucher': barcode,
							'store_code': 'HO-001',
							'billno':barcode,
							'latitude': user.latitude_ck,
							'logitude': user.longitude_ck
								
						},
						success: function(data, textStatus, xhr) {
							$('#pwaitgift').html('');
								
								if(data.indexOf("Coupon is not valid")>=0)
								{
									//toast('Coupon code is not valid.');
									$('#barcodenogift').val('');
									//scanval='';
									//$.mobile.changePage( "#scan_redeem", { transition: "none"} );
			
									  $("#scan1gift").css('display', 'none');
			   						  $("#scangiftsu").css('display', 'none');
			    					  $("#scangiftas").css('display', 'none');
			    					  $("#scangiftf").css('display', 'block');
			   
									
								}
								else if(data.indexOf("Coupon Already Redeemed")>=0)
								{
									//toast('Coupon code is not valid.');
									$('#barcodenogift').val('');
									//scanval='';
									//$.mobile.changePage( "#scan_redeem", { transition: "none"} );
			
			
									  $("#scan1gift").css('display', 'none');
			   						  $("#scangiftsu").css('display', 'none');
			    					  $("#scangiftas").css('display', 'block');
			    					  $("#scangiftf").css('display', 'none');
									
								}
								else
								{


									$('#barcodenogift').val('');
									//scanval='';
									//$.mobile.changePage( "#scan_redeem", { transition: "none"} );
			
			
									  $("#scan1gift").css('display', 'none');
			   						  $("#scangiftsu").css('display', 'block');
			    					  $("#scangiftas").css('display', 'none');
			    					  $("#scangiftf").css('display', 'none');
									

									
								
									
								}
            

						},
						error: function(xhr, textStatus, errorThrown) {
							$('#pwait').html('');
							toast('Could not connect to Server, make sure you are connected to Internet');
						}
					});
					
		}
	
}

function showScan2_orig()
{
 
    /*if(user.isApproved=='REJECTED')
	{
	  toast('You cannot use this feature as your profile has been rejected or blocked.');
	}
	else
	{*/
	


	cordova.plugins.barcodeScanner.scan(
			   function (result) {
				  /*toast("We got a barcode\n" +
						"Result: " + result.text + "\n" +
						"Format: " + result.format + "\n" +
						"Cancelled: " + result.cancelled);*/

					var bcode=result.text;
					//toast('code is:'+bcode);

				$.ajax({
          
					url: SERVER2+'coupon_validation_json_api.asp',
					type: 'GET',
					timeout: 300000,
					dataType: "json",
					data: {
							
						'apiuid': 'MLOYALAPI',
						'apipswd': 'Ml0yalAP!2o14',
						'coupon_code':bcode,
						'scode': localStorage.getItem('storecode_ufi'),
						'ref_bill_number': '123123'
							
						},
					
					success: function(data, textStatus, xhr) {
						
					//console.log('Data:'+JSON.stringify(data));

					if(data.data!='')
					{
						toast(data.data);
					}
					else
					{
						toast(data.error);
					}
						gobackfromscan();   
					 },
					error: function(xhr, textStatus, errorThrown) {
						 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
						}
					 
				});

			  },
			  function (error) {
				  alert("Scanning failed: " + error);
			  },
			  {
				  preferFrontCamera : false, // iOS and Android
				  showFlipCameraButton : true, // iOS and Android
				  showTorchButton : true, // iOS and Android
				  torchOn: false, // Android, launch with the torch switched on (if available)
				  saveHistory: true, // Android, save scan history (default false)
				  prompt : "Place the code inside the scan area", // Android
				  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
				  formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
				  orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
				  disableAnimations : true, // iOS
				  disableSuccessBeep: false // iOS and Android
			  }
		   );


//}

	
}



$(document).on('pageshow', '#products', function (event, ui) {

document.getElementById("barcontentprmain").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';

});
$(document).on('pageshow', '#float', function (event, ui) {

document.getElementById("barcontentfloat").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';

});

$(document).on('pageshow', '#safety', function (event, ui) {

document.getElementById("barcontentsafety").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';

});
$(document).on('pageshow', '#safetytypemain', function (event, ui) {

document.getElementById("barcontentsafetytm").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';

});


function showSafety(stype){
	
	if(stype=='sf1')
	{
		$("#sf1").css('display', 'block');
		$("#sf2").css('display', 'none');
		$("#sf3").css('display', 'none');
		$.mobile.changePage("#safetytypemain", {transition: "none"});
	}
	else if(stype=='sf2')
	{
		$("#sf1").css('display', 'none');
		$("#sf2").css('display', 'block');
		$("#sf3").css('display', 'none');
		$.mobile.changePage("#safetytypemain", {transition: "none"});
	}
	else
	{	
		$("#sf1").css('display', 'none');
		$("#sf2").css('display', 'none');
		$("#sf3").css('display', 'block');
		$.mobile.changePage("#safetytypemain", {transition: "none"});
	}
	
}

function showEvents(){
	openInWebView('http://www.hngfloat.com/events.html');
}

function showUpdates(){
    toast('Upcoming...');
    $.mobile.changePage("#updates", {transition: "none"});
    if(localStorage.getItem('def_store')=='HnG Rajkot')
    {
        //do nothing
    }
    else
    {
	document.getElementById("barcontentupdates").innerHTML='<img src="img/batch_mem.png" class="batch_mem_new"><span class="mem_wel_msg_new">Hi '+user.firstname+'!</span></a>';
    }
	

}

function senddata(activity)
{
 //console.log("In senddata");
 var uname = localStorage.getItem('usernamehng');
 
  $.ajax({
   //url: SERVER+'mloyallogin_json.asp', //login.php
   url: SERVER+'mloyalactivity_json.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'username': uname,'activity':activity},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
  
   //called when successful
   if(data.status=='success'){

	   //$('#tot_points').html(data.balance);
	  //console.log("In success"+JSON.stringify(data));
   // user.balance = data.balance;
   
   }
    },
    error: function(xhr, textStatus, errorThrown) {
 //$.mobile.changePage( "#homepage", { transition: "slide"} );
   //$('#login-msg').html('wtf: '+textStatus+': '+errorThrown); 
  // $('#login-msg').html('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
 

}
function showredeempage(retailerpoints,mechanicpoints,mechanicmobileno)
{
$('#burn_points_ret').val(retailerpoints);
$('#burn_points_mec').val(mechanicpoints);
$('#mobileno_mec').val(mechanicmobileno);
		//$("#popuppaymenttype").popup("close");
	$("#burnpointsdiv_ret").css('display', 'block');
	$("#passcodediv_ret").css('display', 'none');
	$("#burnpointsdiv_mec").css('display', 'block');
	$("#passcodediv_ret").css('display', 'none');

	//document.getElementById("barcontentbgp1").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';
	$.mobile.changePage( "#paybypointsboth");
}
function showRedemption()
{

		//$("#popuppaymenttype").popup("close");
	$("#burnpointsdiv").css('display', 'block');
	$("#passcodediv").css('display', 'none');

	//document.getElementById("barcontentbgp1").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';
	$.mobile.changePage( "#paybypoints");
}

function paybyPoints(burn_points)
{

	var rpoints = $('#'+burn_points+'').val();
	var store_code = checkforStorecode(user.store_code);
  var mob = user.mobile;
  if(burn_points == 'burn_points_mec')
  {
    mob = $('#mobileno_mec').val();
  }
  else
  {
    mob = user.mobile;
  }
	if(rpoints=='')
	{
		toast('Please enter points to be reedemed');
	}
	else
	{

	 $.ajax({
		 url: SERVER2+'burn_points_json_api.asp',
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: {

			     'apiuid': 'MLOYALUFIAPI',   
				 'apipswd': 'Ml0yalUFIAP!2!',
				 'scode': store_code,
				 'mobileno': mob,
				 'redeem_points': rpoints,
				 'status': '1'
		 
		 },

		success: function(data, textStatus, xhr) {
		
				//console.log('JSONDATA:'+JSON.stringify(data));
				if(data.error.length>0)
				{
					toast(data.error);
					$('#burn_points').val('');
				}
				else
				{

					toast(data.data);

					/*var smsbody=data.sms[0].CustPasscodeSMS;

					var getotptoend=smsbody.substr(smsbody.indexOf('code')+6,smsbody.length);

					var getotp=getotptoend.substr(0,getotptoend.indexOf('"'));*/

                    //var smsbody=data.sms[0].CustPasscodeSMS;

					//var getotp=smsbody.substr(0, 6);
					
					//console.log('getotp:'+getotp);
					if(burn_points == 'burn_points')
					{
					//	$("#burnpointsdiv").css('display', 'none');
						$("#passcodediv").css('display', 'block');
					}
					else if(burn_points == 'burn_points_ret')
					{
					//	$("#burnpointsdiv_ret").css('display', 'none');
						$("#retredeemblk").css('display', 'none');
						$("#passcodediv_ret").css('display', 'block');
					}
					else if(burn_points == 'burn_points_mec')
					{
					//	$("#burnpointsdiv_mec").css('display', 'none');
          
						$("#mecredeemblk").css('display', 'none');
						$("#passcodediv_mec").css('display', 'block');
					}
					//$.mobile.changePage( "#paybypoints");
					//$('#hidden_otp').val(getotp);
				}

		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	}
}

function paybypointsMain(burn_points,burn_points_ref_bill,burn_passcode,hidden_otp)
{

	var bpoints = $('#'+burn_points+'').val();
	var bpass = $('#'+burn_passcode+'').val();
	var ref_bill_number = $('#'+burn_points_ref_bill+'').val();
    var store_code = checkforStorecode(user.store_code);
	var bpass_sms= $('#'+hidden_otp+'').val();
  var mob = user.mobile;
  if(burn_points == 'burn_points_mec')
  {
    mob = $('#mobileno_mec').val();
  }
  else
  {
    mob = user.mobile;
  }
	/*if(bpass == bpass_sms)
    {*/

	if(bpass=='' || ref_bill_number=='')
	{
		toast('Please enter Passcode/Ref Bill No.');
	}
	else
	{

	
		$.ajax({
		 url: SERVER2+'burn_points_json_api.asp',
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json', //xml/html/script/json/jsonp
		 data: {

				 'apiuid': 'MLOYALUFIAPI',   
				 'apipswd': 'Ml0yalUFIAP!2!',
				 'scode': store_code,
				 'mobileno': mob,
				 'redeem_points': bpoints,
				 'passcode': bpass,
				 'ref_bill_number': ref_bill_number,
				 'send': '1'
		 
		 },

		success: function(data, textStatus, xhr) {
			
				//console.log('JSONDATA:'+JSON.stringify(data));
				if(data.error.length>0)
				{
					toast(data.error);
					if(burn_points == 'burn_points')
					{
					$('#burn_passcode').val('');
					$('#burn_points_ref_bill').val('');
					}
					else if(burn_points == 'burn_points_ret')
					{
					$('#burn_passcode_ret').val('');
					$('#burn_points_ref_bill_ret').val('');
					}
					else if(burn_points == 'burn_points_mec')
					{
					$('#burn_passcode_mec').val('');
					$('#burn_points_ref_bill_mec').val('');
					}
				}
				else
				{

					toast(data.data);
					if(burn_points == 'burn_points')
					{
					$('#burn_passcode').val('');
					$('#burn_points').val('');
					$('#burn_points_ref_bill').val('');
					}
					else if(burn_points == 'burn_points_ret')
					{
					$('#burn_passcode_ret').val('');
					$('#burn_points_ret').val('');
					$('#burn_points_ref_bill_ret').val('');
					}
					else if(burn_points == 'burn_points_mec')
					{
					$('#burn_passcode_mec').val('');
					$('#burn_points_mec').val('');
					$('#burn_points_ref_bill_mec').val('');
					}

					var cattype = localStorage.getItem('cattype');

					if(cattype=='Mechanic' || cattype=='Retailer')
					{
						
	                         $('#username').val(localStorage.getItem("usernameufifilters"));
	                         var pass = localStorage.getItem("passwordufifilters");
	                         if(pass.length>=4)
						     {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#codeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						      }
						     

							  setTimeout( function() {
								    authenticate();
								}, 2000);  // 2 seconds

					}
					else
					{

							   $('#dealerusername_se').val(localStorage.getItem("usernamemloyal_ufi"));
	                           $('#dealer_mobileno_se').val(localStorage.getItem("usermobilemloyal_ufi"));
	                           //$('#dealerpassword').val(localStorage.getItem("userpassloyal_ufi"));
	                           var pass = localStorage.getItem("userpassloyal_ufi");
							   if(pass.length>=4)
						       {
						       /*var i=4;
						       while(i>0)
						                  {
						                    $('#dealercodeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }*/
										 $('#dealerpassword_se').val(pass);
						        }
						        
								setTimeout( function() {
								    dealerauthenticate_se();
								}, 2000);  // 2 seconds
					}
				}

		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	}
    
    /*}
    else
	{
		  toast('Authentication failed');
		  $('#burn_passcode').val('');
		  //$.mobile.changePage( "#paybypoints");

	}*/
}


function showPOPup()
{

    var $popUp = $("<div/>").popup({
        dismissible: false,
        theme: "b",
        overlyaTheme: "b",
        transition: "pop"
    }).on("popupafterclose", function () {
        //remove the popup when closing

        $(this).remove();

		//redeemNow();
        


    }).css({
        'width': '270px',
        'height': '200px',
        'padding': '5px',
        'text-shadow': 'none',
        //'background': '#58b7e4 url(\'../img/background-1024x600.jpg\') 50% 50% no-repeat fixed'
        'background': 'rgb(93, 120, 167)'
    });
    //create a title for the popup
    $("<p/>", {
        text: ""
    }).appendTo($popUp);

    //create a message for the popup

    $("<p/>", {
        html:  '  <div class="ptsrdm" id="storename"></div><div id="oform"> <div class="ui-grid-solo"><input type="number" id="rvalue" name="rvalue" placeholder="Points to be redeemed" value=""  /></div> <div > <a href="javascript:redeemRequest();" id="submit_button_redeem" data-inline="true" class="btnclass1">Redeem Request</a></div></div><div id=rmsg></div><div id=rform><input type="text" id="otp" name="otp" placeholder="Coupon Code" value=""  /><div > <a href="javascript:redeemNow();" id="submit_button_redeem1" data-inline="true" class="btnclass1">Redeem Now</a></div>'


    }).appendTo($popUp);

	  //create a back button
    $("<a>", {
        text: "Close",
            "data-rel": "back",
			"class":"ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right"
    }).buttonMarkup({
        inline: false,
        mini: false,
       
	    
       
    }).appendTo($popUp);



    //create a back button


    $popUp.popup('open').trigger("create");

}

function showRetailer(){
	
	/*if(user.mobile==null || user.mobile=='')
	{
		$.mobile.changePage( "#myaccount", { transition: "none"} );
	}
	else
	{

		if(localStorage.getItem("usermtype_ufifilters")=='Painter')
	    {
			toast('Painter not authorised for retailer referral');
	    }
		else
		{

			//document.getElementById("barcontentrefer").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';
			$('#rtype').val('Retailer');

			$.mobile.changePage( "#referpg", { transition: "none"} );

		}

	}*/

	$.mobile.changePage( "#referal_code", { transition: "none"} );
}

function showElectrician(){

	/*if(user.mobile==null || user.mobile=='')
	{
		$.mobile.changePage( "#myaccount", { transition: "none"} );
	}
	else
	{

		if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
	    {
			toast('Retailer not authorised for Painter referral');
	    }
		else
		{

			$('#rtype').val('Painter');

			$.mobile.changePage( "#referpg", { transition: "none"} );

		}

	}*/

	$.mobile.changePage( "#referal_code", { transition: "none"} ); 
}

function refer()
{
  
  //console.log(user.mobile +" "+ user.firstname);
  var referral_mobile = user.mobile;
  var referral_name =  user.firstname;

  //var rtype = $('#rtype').val();

  var referred_mobile1 = $('#rmobile1').val();
  var referred_name1 =  $('#rname1').val();
  var referred_mobile2 = $('#rmobile2').val();
  var referred_name2 =  $('#rname2').val();
  var referred_mobile3 = $('#rmobile3').val();
  var referred_name3 = $('#rname3').val();
  var referred_mobile4 = $('#rmobile4').val();
  var referred_name4 =  $('#rname4').val();
  var referred_mobile5 = $('#rmobile5').val();
  var referred_name5 =  $('#rname5').val();
  var referred_mobile6 = $('#rmobile6').val();
  var referred_name6 =  $('#rname6').val();
  var referred_mobile7 = $('#rmobile7').val();
  var referred_name7 =  $('#rname7').val();
  var referred_mobile8 = $('#rmobile8').val();
  var referred_name8 =  $('#rname8').val();
  var referred_mobile9 = $('#rmobile9').val();
  var referred_name9 =  $('#rname9').val();
  var referred_mobile10 = $('#rmobile10').val();
  var referred_name10 =  $('#rname10').val();

  if(referred_mobile1=='' || referred_name1=='' )
	{
		toast('Please enter referred details');
	}
  else if(referred_mobile1.length!=10)
	{
		toast('Please check mobile no.');
	}
  else
	{

		  $('#rmobile1').val('');
		  $('#rname1').val('');
		  $('#rmobile2').val('');
		  $('#rname2').val('');
		  $('#rmobile3').val('');
		  $('#rname3').val('');
		  $('#rmobile4').val('');
		  $('#rname4').val('');
		  $('#rmobile5').val('');
		  $('#rname5').val('');
		  $('#rmobile6').val('');
		  $('#rname6').val('');
		  $('#rmobile7').val('');
		  $('#rname7').val('');
		  $('#rmobile8').val('');
		  $('#rname8').val('');
		  $('#rmobile9').val('');
		  $('#rname9').val('');
		  $('#rmobile10').val('');
		  $('#rname10').val('');

	toast('Thank you for referring').
	$.mobile.changePage( "#homepage", { transition: "none"} );
	referReset();	
  /*  $.ajax({
     url: 'https://ufifilters.mloyalretail.com/APIS/referral_api.asp',
     type: 'GET',
     timeout: 50000,
     dataType: 'html', //xml/html/script/json/jsonp
     data: {
    
				'apiuid': 'MLOYALAPI',   
				'apipswd': 'Ml0yalAP!2o14',     
				'referral_mobile': referral_mobile, 
				'referral_name': referral_name,    
				'referred_mobile1': referred_mobile1,      
				'referred_name1': referred_name1,     
				'referred_mobile2': referred_mobile2,        
				'referred_name2': referred_name2,             
				'referred_mobile3': referred_mobile3,
				'referred_name3': referred_name3,
				'referred_mobile4': referred_mobile4,      
				'referred_name4': referred_name4,
				'referred_mobile5': referred_mobile5,      
				'referred_name5': referred_name5,
				'referred_mobile6': referred_mobile6,      
				'referred_name6': referred_name6,
				'referred_mobile7': referred_mobile7,      
				'referred_name7': referred_name7,
				'referred_mobile8': referred_mobile8,      
				'referred_name8': referred_name8,
				'referred_mobile9': referred_mobile9,      
				'referred_name9': referred_name9,
				'referred_mobile10': referred_mobile10,      
				'referred_name10': referred_name10
	
			},
   
    success: function(data, textStatus, xhr) {

				//console.log('JSONDATA:'+JSON.stringify(data));
				toast(JSON.stringify(data));
   
				$.mobile.changePage( "#homepage", { transition: "none"} );

				referReset();

    },
    error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });*/

 }

}

function referReset()
{
				
				$('#rmobile1').val('');
				$('#rname1').val('');
				$('#rmobile2').val('');
				$('#rname2').val('');
				$('#rmobile3').val('');
				$('#rname3').val('');
				$('#rmobile4').val('');
				$('#rname4').val('');
				$('#rmobile5').val('');
				$('#rname5').val('');
				$('#rmobile6').val('');
				$('#rname6').val('');
				$('#rmobile7').val('');
				$('#rname7').val('');
				$('#rmobile8').val('');
				$('#rname8').val('');
				$('#rmobile9').val('');
				$('#rname9').val('');
				$('#rmobile10').val('');
				$('#rname10').val('');

}

var counter = 2;

var limit = 5;

function addInput(divName){

         if (counter > limit)  {

              toast("You have reached the limit of adding records");

         }

         else {

                var newdiv = document.createElement('div');

			    var str ='';

				str +='<div class="ui-grid-solo" style="width:80%;margin:0 auto;">';
				str +='<div class="ui-block-a">';
				str +='<input type="number" id="sales_bill_amount'+counter+'" class="approval_comment" placeholder="Bill Amount*" data-role="none" />';
				str +='<span class="billw">*Amount should be net of GST</span>';
				str +='</div>';
				str +='</div>';
				str +='<div class="ui-grid-solo" style="width:80%;margin:0 auto;">';
				str +='<div class="ui-block-a">';
				str +='<select id="sales_prod_cat'+counter+'" name="sales_prod_cat'+counter+'" class="profile_input pro_cate" data-role="none">';
				str +='<option value="0">--Product Category*--</option>';
				str +='<option value="cPVC">cPVC</option>';
				str +='<option value="uPVC">uPVC</option>';
				str +='<option value="SWR">SWR</option>';
				str +='</select>';
				str +='</div>';
				str +='</div>';

                newdiv.innerHTML = str;

                document.getElementById(divName).appendChild(newdiv);

                counter++;

         }

 }

 function showBooklet(){
	
	 var pdfLoc='http://103.25.128.61/projects/taghash/hngevents/booklet/HNG_booklet.pdf';

	 var ref = window.open(pdfLoc, '_system', 'location=yes');
	 ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
     ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
     ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
     ref.addEventListener('exit', function(event) { alert(event.type); });

}

function showRewardsnew()
{
    showCategory();
	//showProductsold('0','All');
	$.mobile.changePage( "#myrewards", { transition: "none"} );
}

function slide_this(e){
	console.log(e);
	$(e).next(".faq_text").slideToggle("fast");
}
function showRewards()
{
	
isGiftStore = false;

if(user.isApproved=='REJECTED' || user.isLive=='0'  || store.isLive=='0')
{
	toast('You cannot use this feature as your profile has been rejected or blocked or this state is not live.');
}
else
{
 var rewardsurl='';

 var etype = localStorage.getItem("cattype");

 if(etype=='dealer' || etype=='Dealer')
 {
	rewardsurl=SERVER3+'categories_dealer_json_api.asp';
 }
 /*else if(etype == 'Mechanic')
 {
	rewardsurl=SERVER3+'categories_counterboy_json_api.asp';
 }*/
 else
 {
	rewardsurl=SERVER3+'categories_json_api.asp';
 }

	  $.ajax({
		 url: rewardsurl,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		 success: function(data, textStatus, xhr) {
					 
					 
				//console.log('JSONDATA:'+JSON.stringify(data));
				var str = '';
				//str +='<div class="primary_section">';
				//str +='<div class="primary_section_inner pt-30">';
					
				for(var i=0;i<data.data.length;i++)
				{
		
					str +='<a href="javascript:toggleDiv(\'catpro'+data.data[i].catid+'\', \'catbtn'+data.data[i].catid+'\')" class="primary_block text-decoration_none bg-grey" id="catbtn'+data.data[i].catid+'">';
					//str +='<a href="javascript:showProductsold(\''+data.data[i].catid+'\',\''+data.data[i].catname+'\');" class="points_bal_btn p_0">';	
					str +='<div class="points_bal_btn p_0 right">';	
					str +='<div class="points_bal">';
					str +='<h4><strong>'+data.data[i].catname+'</strong></h4>';
					str +='</div>';						
					str +='<div class="points_arrow"><img src="assets/images/arrow_green.png" class="img-responsive" alt=""></div>';
					str +='</div>';
				  	str +='</a>';
					str +='<div id="catpro'+data.data[i].catid+'"  class="reward_content"></div>';

					addProducts(data.data[i].catid,data.data[i].catname);
					
				}
				//str +='</div>';	
				//str +='</div>';

				document.getElementById("rewards_div").innerHTML=str;	
				$.mobile.changePage( "#reward_store", { transition: "none"} );
				     
		},
		error: function(xhr, textStatus, errorThrown) {
			    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	}
	 

}
function toggleDiv(str,tg)
{
    $('#'+tg+'').find(".right").toggleClass("down");
   // $(".catinnerhdr").slideUp("fast");
	$('#'+str+'').slideToggle("fast");
   // $(".catheader").removeClass("bg_toggle");
    //$('#'+tg+'').toggleClass("bg_toggle");
}


function addProducts(catid,catname)
{
	  selcid = catid;
	  selcname = catname;
	  try{
		$( "#Menu_sidebar" ).panel( "close" );
		}catch(err) 
		{	}
		
		var brandsurl='';

		 var etype = localStorage.getItem("cattype");

		 if(etype=='dealer' || etype=='Dealer')
		 {
			brandsurl=SERVER3+'brands_dealer_json_api.asp';
		 }
		 /*else if(etype == 'Mechanic')
		 {
			brandsurl=SERVER3+'brands_counterboy_json_api.asp';
		 }*/
		 else
		 {
			brandsurl=SERVER3+'brands_json_api.asp';
		 }

	   $.ajax({
		 url: brandsurl,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { 'cat_id': catid },
		 success: function(data, textStatus, xhr) {
					 
				//console.log('ProductsData:'+JSON.stringify(data));
				
				var str = '';

				for(var i=0;i<data.data.length;i++)
				{
					var surl='';
							 if(etype=='dealer' || etype=='Dealer')
							{
							   surl=SERVER3+'all_products_dealer_json.asp?cat_id='+catid+'&b_id='+data.data[i].brand_id;
							
							}
							/*else if(etype == 'Mechanic')
							 {	
								surl=SERVER3+'all_products_counterboy_json.asp?cat_id='+catid+'&b_id='+data.data[i].brand_id;
							 }*/
							 else
							 {
								 surl=SERVER3+'all_products_json.asp?cat_id='+catid+'&b_id='+data.data[i].brand_id;
							
							 }
							var pointval='';
							var pointdate='';
							var product_id='';

								   $.ajax({
									 url: surl,
									 type: 'GET',
									 timeout: 50000,
									 dataType: 'json',
									 async:false,
									 

									success: function(data1, textStatus, xhr) {

										console.log(JSON.stringify(data1));
											
											
											if(data1.data.length!=0){
												pointval = data1.data[0].GiftVoucherValue;
												pointdate=data1.data[0].GiftVoucherEndDate;
												product_id=data1.data[0].ProductId;
											}
											else
											{
												pointval='';
												pointdate='';
											}

											//console.log(pointval);

								
											
									},
									error: function(xhr, textStatus, errorThrown) {
												toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
									}
								  });
					/*str +='<div class="primary_block">';
					//str +='<a href="javascript:showProducts(\''+data.data[i].brand_id+'\',\''+data.data[i].brand_name+'\',\''+data.data[i].brand_logo+'\',\''+data.data[i].brand_description+'\',\''+data.data[i].Gift_Voucher_Value+'\');" class="reward_item">';
					str +='<a href="#" class="reward_item">';
					str +='<div class="reward_img"><img src='+data.data[i].brand_logo+' class="img-responsive" alt=""/></div>';
					str +='<div class="reward_brief">';
					str +='<p>'+data.data[i].brand_name+'</p>';
					str +='<h2 class="item_rewards">'+data.data[i].Gift_Voucher_Value+'<span>Points</span></h2>';
					str +='</div>';
			  	    str +='</a>';
					str +='</div>';*/


											var bname=data.data[i].brand_name.replace(/["']/g, '');
											var bdesc=data.data[i].brand_description.replace(/["']/g, '');
											var blogo=data.data[i].brand_logo.replace(/\\/g, "/");
											var brand_id=data.data[i].brand_id;
											str +='<div class="primary_block bb1">';
											if(pointval!=''){
												str +='<a href="javascript:showRewardDetails(\''+product_id+'\',\''+blogo+'\',\''+bname+'\',\''+bdesc+'\',\''+pointval+'\',\''+brand_id+'\')" class="reward_item">';						
											}
											else
											{
												str +='<a href="" class="reward_item">';						
											
											}
											str +='	<div class="reward_img"><img src='+data.data[i].brand_logo+' class="img-responsive" alt=""/></div>';
											str +='	<div class="reward_brief">';
											str +='	<p>'+data.data[i].brand_name+'</p>';
											if(pointval!=''){
											str +='	<h2 class="item_rewards">'+pointval+'<span >Points</span></h2>';
											}
											else
											{
												str +='	<h4>Product Not Available<span></span></h4>';
											}

											str +='	</div>';
											str +='</a>';
											str +='</div>';
					
				}

				document.getElementById("catpro"+catid).innerHTML=str;
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

function showCategory()
{
	'use strict';	
	   $.ajax({
		 url: SERVER3+'categories_json_api.asp',
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		success: function(data, textStatus, xhr) {
					 
				//console.log('JSONDATA:'+JSON.stringify(data));
				
                var str = '';
					str +='<div class="primary_section">';
					str +='<div class="primary_section_inner pt-30">';
					//str1 = '<li><a href="javascript:showProducts(\'0\',\'All\');">All</a></li>';
				for(var i=0;i<data.data.length;i++)
				{
					
								
					str +='<div class="primary_block bg-grey">';
					str +='<a href="javascript:showProductsold(\''+data.data[i].catid+'\',\''+data.data[i].catname+'\');" class="points_bal_btn p_0">';						
					str +='<div class="points_bal">';
					str +='<h4><strong>'+data.data[i].catname+'</strong></h4>';
					str +='</div>';						
				  	str +='</a>';
					str +='</div>';	
					
				}
				str +='</div>';	
				str +='</div>';	

                document.getElementById("rewardscat_div").innerHTML=str;	
				$.mobile.changePage( "#rewardscat", { transition: "none"} );
                
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	  
}


function showProductsold(cid,cname)
{  

	selcid = cid;
	selcname = cname;

	//document.getElementById("cat_header_name").innerHTML=cname;
	document.getElementById("prdctlist").innerHTML='';
	$.mobile.changePage( "#myrewards");

	try{
	$( "#Menu_sidebar" ).panel( "close" );
	}catch(err) 
	{	}
	
	var brandsurl='';

	 var etype = localStorage.getItem("cattype");

	 if(etype=='dealer' || etype=='Dealer')
	 {
		brandsurl=SERVER3+'brands_dealer_json_api.asp';
	 }
	 else if(etype == 'Mechanic')
	 {
		brandsurl=SERVER3+'brands_counterboy_json_api.asp';
	 }
	 else
	 {
		brandsurl=SERVER3+'brands_json_api.asp';
	 }

	   $.ajax({
		 url: brandsurl,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { 'cat_id': cid },

		success: function(data, textStatus, xhr) {
					 
				//console.log('ProductsData:'+JSON.stringify(data));
				
				var str = '';
				    

				for(var i=0;i<data.data.length;i++)
				{
					//get Gift_Voucher_Value from other api

					console.log(cid);
					console.log(data.data[i].brand_id);
							var surl='';
							 if(etype=='dealer' || etype=='Dealer'){
	 
							   surl=SERVER3+'all_products_dealer_json.asp?cat_id='+cid+'&b_id='+data.data[i].brand_id;
							console.log(surl);
							}
							else if(etype == 'Mechanic')
							 {	
								surl=SERVER3+'all_products_counterboy_json.asp?cat_id='+cid+'&b_id='+data.data[i].brand_id;
							 }
							 else
							 {
								 surl=SERVER3+'all_products_json.asp?cat_id='+cid+'&b_id='+data.data[i].brand_id;
							
							 }
							var pointval='';
							var pointdate='';
							var product_id='';

								   $.ajax({
									 url: surl,
									 type: 'GET',
									 timeout: 50000,
									 dataType: 'json',
									 async:false,
									 

									success: function(data1, textStatus, xhr) {

										console.log(JSON.stringify(data1));
											
											
											if(data1.data.length!=0){
												pointval = data1.data[0].GiftVoucherValue;
												pointdate=data1.data[0].GiftVoucherEndDate;
												product_id=data1.data[0].ProductId;
											}
											else
											{
												pointval='';
												pointdate='';
											}

											//console.log(pointval);

								
											
									},
									error: function(xhr, textStatus, errorThrown) {
												toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
									}
								  });


											var bname=data.data[i].brand_name.replace(/["']/g, '');
											var bdesc=data.data[i].brand_description.replace(/["']/g, '');
											var blogo=data.data[i].brand_logo.replace(/\\/g, "/");

											var brandid=data.data[i].brand_id;

											str +='<div class="primary_block">';
											if(pointval!=''){
											str +='<a href="javascript:showRewardDetails(\''+product_id+'\',\''+blogo+'\',\''+bname+'\',\''+bdesc+'\',\''+pointval+'\',\''+brandid+'\')" class="reward_item">';		
											}
											else
											{
												str +='<a href="" class="reward_item">';						
											
											}
											str +='	<div class="reward_img"><img src='+data.data[i].brand_logo+' class="img-responsive" alt=""/></div>';
											str +='	<div class="reward_brief">';
											str +='	<p>'+data.data[i].brand_name+'</p>';
											if(pointval!=''){
											str +='	<h2 class="item_rewards">'+pointval+'<span >Points</span></h2>';
											}
											else
											{
												str +='	<h4>Product Not Available<span></span></h4>';
											}

											str +='	</div>';
											str +='</a>';
											str +='</div>';
					
					
				}

				   
				
				document.getElementById("prdctlist").innerHTML=str;
				//$('body').removeClass('ui-loading');
	
				
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}
function changepointval(q,ptval)
{
	q = $('#detailqty').val();
	//alert('here'+q);
	q = parseInt(q)*parseInt(ptval);
	//alert(q);
	document.getElementById("pro_points").innerHTML= q+'<span>Points</span>';
}

function showRewardDetails(bid,blogo,bname,bdesc,gvalue,brandid)
{
	
	var etype = localStorage.getItem("cattype");

	/*if(isGiftStore == true)
	{
		document.getElementById("qtydivision").style.display = 'none';
		document.getElementById("reward_division").style.display = 'none';
		document.getElementById("gift_division1").style.display = 'block';
	}
	else
	{*/
		document.getElementById("reward_division").style.display = 'block';
		document.getElementById("gift_division1").style.display = 'none';
		document.getElementById("pro_input_box").style.display = 'none';
		
	//}

	document.getElementById("pro_txt").innerHTML=bname;

    document.getElementById('pro_img').innerHTML= '<img src='+blogo+' class="img-responsive" alt="brandlogo"/>';

	document.getElementById("pro_desc").innerHTML='<h3 class="text-primary mt-0">Description</h3><p>'+bdesc+'</p>';

	document.getElementById("pro_points").innerHTML= gvalue+'<span>Points</span>';

	document.getElementById("select_qty").innerHTML = '<select id="detailqty" data-role="none" onchange="javascript:changepointval(\''+this.value+'\',\''+gvalue+'\');"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>';

	 document.getElementById("rewlink").onclick = function() {
				redeemProduct(bid,brandid,gvalue);
				return false;
		 };
    document.getElementById("giftlink1").onclick = function() {
				sendOTP(bid);
				return false;
		 };
    localStorage.setItem('gval',gvalue);
	$.mobile.changePage( "#reward_details", { transition: "none"} );



}

function sendOTP(pid)
{
	//https://ufifilters.mloyalretail.com/apis/get_counterboy_coupon_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno=9999999999&offerid=XX
	$.ajax({
			 url: SERVER2+'get_counterboy_coupon_json_api.asp',
			 type: 'GET',
			 timeout: 50000,
			 dataType: 'json',
			 data: { 'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile, 'offerid': pid,'ownermobno':user.owner_mobileno},

			success: function(data, textStatus, xhr) {
						 
					console.log('Data:'+JSON.stringify(data));
			    if(data.error!='')
				    {
						toast(data.error);
					}
					else
					{
										
				document.getElementById("gift_division1").style.display = 'none';	
				document.getElementById("gift_division2").style.display = 'block';	
				document.getElementById("otpbox").style.display = 'block';	

				toast("OTP has been sent to your mobile number.Please enter otp to proceed");

				document.getElementById("giftlink2").onclick = function() {
				verifyOTP(pid);
				return false;
				};
					}
					   
			},
			error: function(xhr, textStatus, errorThrown) {
						toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			}
		  });
}

function verifyOTP(pid)
{
	//https://ufifilters.mloyalretail.com/apis/get_counterboy_coupon_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno=9999999999&offerid=XX&otp=XXXX
	var otp = $('#pro_otp').val();
	$.ajax({
			 url: SERVER2+'get_counterboy_coupon_json_api.asp',
			 type: 'GET',
			 timeout: 50000,
			 dataType: 'json',
			 data: { 'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile, 'offerid': pid ,'otp': otp,'ownermobno':user.owner_mobileno},

			 

			success: function(data, textStatus, xhr) {
						 
					console.log('Data:'+JSON.stringify(data));
					//toast(data.data);
					console.log(data.error);
					
							$('#rewardsuccesstext').innerHTML = 'Your reward is on the way...';
							$('#rewardnotext').innerHTML = 'Coupon Code';
							$.mobile.changePage( "#reward_redeem_success", { transition: "none"} );					
							var trackno='';
								try
								{
									trackno=data.data.substr(data.data.indexOf('#')+1,data.data.length);
									
								}
								catch (err)
								{
								}

								$('#rettrack').val(trackno);
					   
			},
			error: function(xhr, textStatus, errorThrown) {
						toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			}
		  });
}



function redeemProduct(pid,brandid,pvalue)
{

	 var etype = localStorage.getItem("cattype");
	 var qty = $('#detailqty').val();

	 if(etype=='dealer' || etype=='Dealer')
	 {
		if(store.storemobile==null || store.storemobile=='')
		{
				$.mobile.changePage( "#page-login-dealer", { transition: "none"} );
				toast('Please login..');
		}
		else
		{

			$.ajax({
			url: SERVER3+'redeem_rewards_dealer_bybrand_json_api.asp',
			 type: 'GET',
			 timeout: 50000,
			 dataType: 'json',
			 data: { 'mobile': store.storemobile, 'brand_Id': brandid, 'storeid': store.store_id, 'qty': qty, 'product_value' : pvalue},

			success: function(data, textStatus, xhr) {
						 
					//console.log('Data:'+JSON.stringify(data));
					//toast(data.data);
					if(data.data=='Your loyalty points are not sufficient for redemption.')
					$.mobile.changePage( "#reward_redeem_fail", { transition: "none"} );
					else if (data.error.indexOf('Product quantity is not available')>=0)
					{
						document.getElementById('failqty').innerText = data.error;
						$.mobile.changePage( "#reward_redeem_failqty", { transition: "none"} );
					}
					else
					{
						var trackno='';
						try
						{
							trackno=data.data.substr(data.data.indexOf('#')+1,data.data.length);
							
						}
						catch (err)
						{
						}

						$('#rettrack').val(trackno);
					    $.mobile.changePage( "#reward_redeem_success", { transition: "none"} );

							   $('#dealerusername').val(localStorage.getItem("usernamemloyal_ufi"));
	                           $('#dealer_mobileno').val(localStorage.getItem("usermobilemloyal_ufi"));
	                           
	                           var pass = localStorage.getItem("userpassloyal_ufi");
							   if(pass.length>=4)
						       {
						          /*var i=4;
						          while(i>0)
						                  {
						                    $('#dealercodeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }*/

									$('#dealerpassword').val(pass);
						        }
						        
								dealerauthenticate1();

					}
					
					   
			},
			error: function(xhr, textStatus, errorThrown) {
						toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			}
		  });
		}

	 }
	 /*else if(etype == 'Mechanic')
	 {
		if(user.mobile==null || user.mobile=='')
		{
				$.mobile.changePage( "#myaccount", { transition: "none"} );
				toast('Please login..');
		}
		else
		{

			$.ajax({
			 url: SERVER3+'redeem_rewards_bybrand_counterboy_json_api.asp',
			 type: 'GET',
			 timeout: 50000,
			 dataType: 'json',
			  data: { 'mobile': user.mobile, 'brand_Id': brandid, 'qty': qty, 'product_value' : pvalue},

			success: function(data, textStatus, xhr) {
						 
					//console.log('Data:'+JSON.stringify(data));
					//toast(data.data);
					
					
					if(data.data=='Your loyalty points are not sufficient for redemption.')
					$.mobile.changePage( "#reward_redeem_fail", { transition: "none"} );
					else if (data.error.indexOf('Product quantity is not available')>=0)
					{
						document.getElementById('failqty').innerText = data.error;
						$.mobile.changePage( "#reward_redeem_failqty", { transition: "none"} );
					}
					else{
						var trackno='';
						try
						{
							trackno=data.data.substr(data.data.indexOf('#')+1,data.data.length);
							
						}
						catch (err)
						{
						}

						$('#rettrack').val(trackno);
						$.mobile.changePage( "#reward_redeem_success", { transition: "none"} );

						$('#username').val(localStorage.getItem("usernameufifilters"));
	                    var pass = localStorage.getItem("passwordufifilters");
	                         if(pass.length>=4)
						       {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#codeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						        }
	                          
							   user.mobile=localStorage.getItem("usernameufifilters");
							   
							
								authenticate2();
							
							
						
						
						
							
					}
					
					   
			},
			error: function(xhr, textStatus, errorThrown) {
						toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			}
		  });
		}
	 }*/
	 else
	 {
		if(user.mobile==null || user.mobile=='')
		{
				$.mobile.changePage( "#myaccount", { transition: "none"} );
				toast('Please login..');
		}
		else
		{

			$.ajax({
			 url: SERVER3+'redeem_rewards_bybrand_json_api.asp',
			 type: 'GET',
			 timeout: 50000,
			 dataType: 'json',
			  data: { 'mobile': user.mobile, 'brand_Id': brandid, 'qty': qty, 'product_value' : pvalue},

			success: function(data, textStatus, xhr) {
						 
					//console.log('Data:'+JSON.stringify(data));
					//toast(data.data);
					
					
					if(data.data=='Your loyalty points are not sufficient for redemption.')
					$.mobile.changePage( "#reward_redeem_fail", { transition: "none"} );
					else if (data.error.indexOf('Product quantity is not available')>=0)
					{
						document.getElementById('failqty').innerText = data.error;
						$.mobile.changePage( "#reward_redeem_failqty", { transition: "none"} );
					}
					else{
						var trackno='';
						try
						{
							trackno=data.data.substr(data.data.indexOf('#')+1,data.data.length);
							
						}
						catch (err)
						{
						}

						$('#rettrack').val(trackno);
						$.mobile.changePage( "#reward_redeem_success", { transition: "none"} );

						$('#username').val(localStorage.getItem("usernameufifilters"));
	                    var pass = localStorage.getItem("passwordufifilters");
	                         if(pass.length>=4)
						       {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#codeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						        }
	                          
							   user.mobile=localStorage.getItem("usernameufifilters");
							   
							
							  //authenticate2();	
							  authenticate();	
					}
					
					   
			},
			error: function(xhr, textStatus, errorThrown) {
						toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			}
		  });
		}

	 }


}

function redeemProductold(pid)
{

if(user.mobile==null || user.mobile=='')
{
		$.mobile.changePage( "#myaccount", { transition: "none"} );
		toast('Please login..');
}
else
{

	$.ajax({
		 url: SERVER3+'redeem_rewards_dealer_json_api.asp',
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { mobile: user.mobile, Prod_Id: pid },

		success: function(data, textStatus, xhr) {
					 
				//console.log('Data:'+JSON.stringify(data));
				//toast(data.data);
				if(data.data=='Your loyalty points are not sufficient for redemption.')
				$.mobile.changePage( "#reward_redeem_fail", { transition: "none"} );
				else
				$.mobile.changePage( "#reward_redeem_success", { transition: "none"} );
				
				   
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

}

function loadStores()
{

 document.getElementById("barcontentstorepg").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';
 $.mobile.changePage( "#storepg", { transition: "none"} );

 $.ajax({
   url: SERVER+'store_locator_json.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'city': ''},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {

   
        var listItems= "";
			listItems+= "<option value='0'>--Select--</option>";
        for (var i = 0; i < data.length; i++)
			{
				if(data[i].storename!='Email Admin' && data[i].storename!='ONLINE')
			    {
					listItems+= "<option value='" + data[i].storecode + "'>" + data[i].storename + "</option>";
			    }

             } 

	  $("#store_loc").html(listItems);
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
	 
	 
}

function viewCoupons()
{  
	
	var scode = $('#store_loc').val();

	if(scode=='0')
	{
		toast('Please select store');
	}
	else
	{
	   $.ajax({
		 url: SERVER2+'coupon_active_json.asp',
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { storecode:scode },

		success: function(data, textStatus, xhr) {
					 
				//console.log('CouponsData:'+JSON.stringify(data));
				
				var str = '';

				if (data.data.length == 0) 
				{
					str = 'No Coupons Found';
				}
				else
			    {

					for(var i=0;i<data.data.length;i++)
					{
						str += '<div>';
						str += '<div class="coupon active">';
						str += '<h2 class="coupon_code">'+data.data[i].coupon_code+'</h2>';
						//str += '<h3 class="validity">Valid Till : <span>'+json.data[i].validtill+'</span></h3>';
						//str += '<h3 class="coupon_no">Coupon Detail : '+json.data[i].offername+'</h3>';
						str += '<div class="tnc"><a href="#" class="tnclink ui-link">T&amp;C*</a></div>';
						str += '<div class="qr_code"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+data.data[i].coupon_code+'&choe=UTF-8" style="padding:5px;"/></div>';
						str += '<div class="coupon_state "></div>';
						str += '</div></div>';
					}
				}
				
				document.getElementById("storecouponsdiv").innerHTML=str;  
				document.getElementById("barcontentcouponspg").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';
				$.mobile.changePage( "#couponspg", { transition: "none"} );
	
				
		},
		error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	}
}

function uploadFromGallery() 
{
    document.getElementById('contest_status').innerHTML="";
	navigator.camera.getPicture(uploadPhoto, onFail, { quality: 50,
		destinationType: navigator.camera.DestinationType.FILE_URI,
		sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true
	});
  //  document.getElementById('contest_status').innerHTML="Please wait";
   
}



function showContestpg()
{
	if(user.mobile==null || user.mobile=='')
	{
		toast('Please login to participate');
		$.mobile.changePage( "#myaccount", { transition: "none"} ); 
	}
	else
	{
		document.getElementById("barcontentcotest").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span>';
		$.mobile.changePage( "#contestpg", { transition: "none"} );
	}
	
}


function imageExists(image_url){

   /* var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;*/

	return true;

	



}


function openetypePopup()
{
	$('#etype').popup();
	$('#etype').popup("open");

}


/* uploading image to server */

			function uploadFromGallery() {

				//$("#popupcapturetype").popup("close");

				navigator.camera.getPicture(uploadPhoto, onFail, { quality: 50,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true
				});

			}

		 function uploadprofileGallery() {

			    try{
				$("#optionspop").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhoto, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true
				});

			}


		 /* function capturePhoto() {

				$("#optionspop").popup();
				$("#optionspop").popup("open");
           }*/
		  
		  //function capturePhotonew() {
			function capturePhoto() {
			 /* try{
				$("#optionspop").popup("close");
				}catch(err) 
				{	}*/

	          navigator.camera.getPicture(uploadPhoto, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true });
           }

		   function failPhoto(message) 
			{
				toast('Image upload failed. Please try afrer sometime: ' + message.code);
			    localStorage.removeItem('selfimg');
			    document.getElementById('cardimage_self_elec').src = "";
				document.getElementById('cardimage_self_ret').src = "";
				document.getElementById('cardimage_self_cb').src = "";
				document.getElementById('cardimage_self_cb1').src = "";
				document.getElementById('cardimage_self_elec1').src = "";
				document.getElementById('cardimage_self_ret1').src = "";
		   }

           function capturePhotonew2() {

			  try{
				$("#optionspop2").popup("close");
				}catch(err) 
				{	}

	          navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true });
           }

		   function failPhoto2(message) 
			{
				toast('Image upload failed. Please try afrer sometime: ' + error.code);
			   localStorage.removeItem('panimg');
			   localStorage.removeItem('docimg');
			   document.getElementById('cardimage_proof_elec').src = "";
			   document.getElementById('cardimage_proof_ret').src = "";
			   document.getElementById('cardimage_proof_cb').src = "";
			   document.getElementById('cardimage_proof_elec1').src = "";
			   document.getElementById('cardimage_proof_ret1').src = "";
			   document.getElementById('cardimage_proof_cb1').src = "";
				
		   }

           function uploadprofileGallery2() {

			    try{
				$("#optionspop2").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true
				});

			}

		   function capturePhoto2() {

	         // navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
	            $("#optionspop2").popup();
				$("#optionspop2").popup("open");
           }

		   
			function uploadPhoto(imageURI) {

				var b_Image = document.getElementById('cardimage_self_elec');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;

				//localStorage.setItem('selfimg',imageURI);

				var b_Image1 = document.getElementById('cardimage_self_ret');
				b_Image1.style.display = 'block';
				b_Image1.src = imageURI;

				
				var b_Image3 = document.getElementById('cardimage_self_cb');
				b_Image3.style.display = 'block';
				b_Image3.src = imageURI;

				var b_Image31 = document.getElementById('cardimage_self_cb1');
				b_Image31.style.display = 'block';
				b_Image31.src = imageURI;


				var b_Image11 = document.getElementById('cardimage_self_elec1');
				b_Image11.style.display = 'block';
				b_Image11.src = imageURI;

				var b_Image12 = document.getElementById('cardimage_self_ret1');
				b_Image12.style.display = 'block';
				b_Image12.src = imageURI;

				var b_Image22 = document.getElementById('dealer_ppic_main');
				b_Image22.style.display = 'block';
				b_Image22.src = imageURI;

				var b_Image23 = document.getElementById('dealer_ppic_panel');
				b_Image23.style.display = 'block';
				b_Image23.src = imageURI;

				var b_Image24 = document.getElementById('cardImagemenu');
				b_Image24.style.display = 'block';
				b_Image24.src = imageURI;

				var b_Image25 = document.getElementById('ppicprofile');
				b_Image25.style.display = 'block';
				b_Image25.src = imageURI;

				var b_Image26 = document.getElementById('ppichome');
				b_Image26.style.display = 'block';
				b_Image26.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='profile_'+user.mobile;
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				filenm=options.fileName+".jpg";

				localStorage.setItem('selfimg',filenm);


				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

                
                var statusDom;
                var statusDomdiv;
				var cattype = localStorage.getItem('cattype');

				
				if(cattype=='Retailer')
				{
					// if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
						if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_self_ret1_status");
						statusDomdiv=document.getElementById("cardimage_self_ret1_status_div");

					}else{
						statusDom=document.getElementById("cardimage_self_ret_status");
						statusDomdiv=document.getElementById("cardimage_self_ret_status_div");
					}
				}
				else if(cattype=='Painter')
				{

					 //if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
						 if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_self_elec1_status");
						statusDomdiv=document.getElementById("cardimage_self_elec1_status_div");
					}
					else{
						statusDom=document.getElementById("cardimage_self_elec_status");
						statusDomdiv=document.getElementById("cardimage_self_elec_status_div");
					}
				}
				else if(cattype=='Mechanic')
				{
					 // if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
						 if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_self_cb1_status");
						statusDomdiv=document.getElementById("cardimage_self_cb1_status_div");
					}
					else{
						statusDom=document.getElementById("cardimage_self_cb_status");
						statusDomdiv=document.getElementById("cardimage_self_cb_status_div");
					}
				}
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					 
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
							// statusDom.getElementsByTagName('span')[0].innerHTML = perc;
							
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  

     				      
    			}
    			
				};

				//$("#wait").css("display","block"); // hide it initially
					
				ft.upload(imageURI, encodeURI(versionurl+"upload_bill_new.php"), win, failPhoto, options, true);
				//profileuploaded = true;
			}


			function uploadPhoto2(imageURI) {

				/*var b_Image = document.getElementById('cardimage_proof_elec');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;*/

				//localStorage.setItem('panimg',imageURI);

				var b_Image2 = document.getElementById('cardimage_proof_ret');
				b_Image2.style.display = 'block';
				b_Image2.src = imageURI;

			
				/*var b_Image3 = document.getElementById('cardimage_proof_cb');
				b_Image3.style.display = 'block';
				b_Image3.src = imageURI;

				var b_Image11 = document.getElementById('cardimage_proof_elec1');
				b_Image11.style.display = 'block';
				b_Image11.src = imageURI;*/

				var b_Image12 = document.getElementById('cardimage_proof_ret1');
				b_Image12.style.display = 'block';
				b_Image12.src = imageURI;

				/*var b_Image22 = document.getElementById('cardimage_proof_del2');
				b_Image22.style.display = 'block';
				b_Image22.src = imageURI;
				*/
				/*var b_Image13 = document.getElementById('cardimage_proof_cb1');
				b_Image13.style.display = 'block';
				b_Image13.src = imageURI;*/


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='mydoc_'+user.mobile;
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				filenmdoc=options.fileName+".jpg";

				localStorage.setItem('panimg',filenmdoc);
				localStorage.setItem('docimg',filenmdoc);


				

				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();


				         var statusDom;
				         var statusDomdiv;
				var cattype = localStorage.getItem('cattype');
				if(cattype=='Retailer')
				{
					 // if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
						 if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_proof_ret1_status");
						statusDomdiv=document.getElementById("cardimage_proof_ret1_status_div");
					}else{
						statusDom=document.getElementById("cardimage_proof_ret_status");
						statusDomdiv=document.getElementById("cardimage_proof_ret_status_div");
					}
				}
				else if(cattype=='Painter')
				{
					//if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
						if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_proof_elec1_status");
						statusDomdiv=document.getElementById("cardimage_proof_elec1_status_div");
					}else{
						statusDom=document.getElementById("cardimage_proof_elec_status");
						statusDomdiv=document.getElementById("cardimage_proof_elec_status_div");
					}
				}
				else if(cattype=='Mechanic')
				{
					 //if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
					   if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_proof_cb1_status");
						statusDomdiv=document.getElementById("cardimage_proof_cb1_status_div");
					}else{
						statusDom=document.getElementById("cardimage_proof_cb_status");
						statusDomdiv=document.getElementById("cardimage_proof_cb_status_div");
					}
				}
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						

       						 if(perc=='100'){

       						 	localStorage.setItem('panimg',filenmdoc);
							 	localStorage.setItem('docimg',filenmdoc);
							}
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}
       						 
   				 } else {
     				  

     				      
    			}
    			
				};


	  
				
				
				ft.upload(imageURI, encodeURI(versionurl+"upload_bill_new.php"), win, failPhoto2, options, true);
			}

			
			function uploadPhotoShop()
		   {
			   navigator.camera.getPicture(uploadPhotoshopcall, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true });
		   }

			function failPhotoShop(error) 
			{
				toast('Image upload failed. Please try afrer sometime: ' + error.code);
				localStorage.removeItem('shopimg');
				document.getElementById('cardimage_shop_ret').src = "";
				document.getElementById('cardimage_shop_ret1').src = "";
			}

			function uploadPhotoshopcall(imageURI) {

				var b_Image = document.getElementById('cardimage_shop_ret');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;

				

				var b_Image11 = document.getElementById('cardimage_shop_ret1');
				b_Image11.style.display = 'block';
				b_Image11.src = imageURI;

				

				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='shop_'+user.mobile;
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'amanora/ufifilters/'+options.fileName;
				filenmshop=options.fileName+".jpg";

				

				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

					         var statusDom;
					         var statusDomdiv;
				var cattype = localStorage.getItem('cattype');
				if(cattype=='Retailer')
				{
					// if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
					if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_shop_ret1_status");
						statusDomdiv=document.getElementById("cardimage_shop_ret1_status_div");
					}else{
						statusDom=document.getElementById("cardimage_shop_ret_status");
						statusDomdiv=document.getElementById("cardimage_shop_ret_status_div");
					}
				}
			
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 if(perc=='100')
       						 	localStorage.setItem('shopimg',filenmshop);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							  try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}
       						 
   				 } else {
     				  

     				      
    			}
    			
				};


	  
				
				ft.upload(imageURI, encodeURI(versionurl+"upload_bill_new.php"), win, failPhotoShop, options, true);
			}



			function capturePhoto3() {

	         // navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
	            $("#optionspop3").popup();
				$("#optionspop3").popup("open");
           }

           function capturePhoto4() {

	         // navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
	            $("#optionspop4").popup();
				$("#optionspop4").popup("open");
           }

            function capturePhotonew3() {

			  try{
				$("#optionspop3").popup("close");
				}catch(err) 
				{	}

	          navigator.camera.getPicture(uploadPhoto3, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
           }

           function uploadprofileGallery3() {

			    try{
				$("#optionspop3").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhoto3, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
				});

			}

			function failPhoto3(error) 
			{
				toast('Image upload failed. Please try afrer sometime: ' + error.code);
				localStorage.rempveItem('adimg');
				document.getElementById('cardimage_aadhar_elec').src = "";
				document.getElementById('cardimage_aadhar_ret').src = "";
				document.getElementById('cardimage_aadhar_cb').src = "";
				document.getElementById('cardimage_aadhar_elec1').src = "";
				document.getElementById('cardimage_aadhar_ret1').src = "";
				document.getElementById('cardimage_aadhar_cb1').src = "";
			}

			function uploadPhoto3(imageURI) {

				

				var b_Image = document.getElementById('cardimage_aadhar_elec');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;
				
				var b_Image2 = document.getElementById('cardimage_aadhar_ret');
				b_Image2.style.display = 'block';
				b_Image2.src = imageURI;


				/*var b_Image2 = document.getElementById('cardimage_aadhar_del');
				b_Image2.style.display = 'block';
				b_Image2.src = imageURI;
				
				var b_Image3 = document.getElementById('cardimage_aadhar_cb');
				b_Image3.style.display = 'block';
				b_Image3.src = imageURI;*/
			   

				var b_Image11 = document.getElementById('cardimage_aadhar_elec1');
				b_Image11.style.display = 'block';
				b_Image11.src = imageURI;

				var b_Image12 = document.getElementById('cardimage_aadhar_ret1');
				b_Image12.style.display = 'block';
				b_Image12.src = imageURI;

				/*var b_Image22 = document.getElementById('cardimage_proof_del2');
				b_Image22.style.display = 'block';
				b_Image22.src = imageURI;
				
				var b_Image13 = document.getElementById('cardimage_aadhar_cb1');
				b_Image13.style.display = 'block';
				b_Image13.src = imageURI;*/


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='myaadhar_'+user.mobile;

				

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;

				
				filenmdoc=options.fileName+".jpg";


				localStorage.setItem('adimg',filenmdoc);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

						         var statusDom;
						         var statusDomdiv;
				var cattype = localStorage.getItem('cattype');
				if(cattype=='Retailer')
				{
					// if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
					if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_aadhar_ret1_status");
						statusDomdiv=document.getElementById("cardimage_aadhar_ret1_status_div");
					}else{
						statusDom=document.getElementById("cardimage_aadhar_ret_status");
						statusDomdiv=document.getElementById("cardimage_aadhar_ret_status_div");
					}
				}
				else if(cattype=='Painter')
				{
					//if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
						if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_aadhar_elec1_status");
						statusDomdiv=document.getElementById("cardimage_aadhar_elec1_status_div");
					}else{
						statusDom=document.getElementById("cardimage_aadhar_elec_status");
						statusDomdiv=document.getElementById("cardimage_aadhar_elec_status_div");
					}
				}
				else if(cattype=='Mechanic')
				{
					// if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
					if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_aadhar_cb1_status");
						statusDomdiv=document.getElementById("cardimage_aadhar_cb1_status_div");
					}else{
						statusDom=document.getElementById("cardimage_aadhar_cb_status");
						statusDomdiv=document.getElementById("cardimage_aadhar_cb_status_div");
					}
				}
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 if(perc=='100')
       						 	localStorage.setItem('adimg',filenmdoc);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  

     				      
    			}
    			
				};


	  
				
				ft.upload(imageURI, encodeURI(versionurl+"upload_bill_new.php"), win, failPhoto3, options, true);
			}

			function capturePhoto8() {

	         // navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
	            $("#optionspop8").popup();
				$("#optionspop8").popup("open");
           }

		   function capturePhotonew8() {

			  try{
				$("#optionspop8").popup("close");
				}catch(err) 
				{	}

	          navigator.camera.getPicture(uploadPhoto8, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true });
           }

           function uploadprofileGallery8() {

			    try{
				$("#optionspop8").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhoto8, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true
				});

			}

			function failPhoto8(error) 
			{
				toast('Image upload failed. Please try afrer sometime: ' + error.code);
				localStorage.removeItem('adimg_back');
				document.getElementById('cardimage_aadhar_elec_back').src = "";
				document.getElementById('cardimage_aadhar_ret_back').src = "";
				document.getElementById('cardimage_aadhar_cb_back').src = "";
				document.getElementById('cardimage_aadhar_elec1_back').src = "";
				document.getElementById('cardimage_aadhar_ret1_back').src = "";
				document.getElementById('cardimage_aadhar_cb1_back').src = "";
			}

			function uploadPhoto8(imageURI) {

				

				var b_Image = document.getElementById('cardimage_aadhar_elec_back');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;
				
				var b_Image2 = document.getElementById('cardimage_aadhar_ret_back');
				b_Image2.style.display = 'block';
				b_Image2.src = imageURI;


				/*var b_Image2 = document.getElementById('cardimage_aadhar_del');
				b_Image2.style.display = 'block';
				b_Image2.src = imageURI;
				*/
				var b_Image3 = document.getElementById('cardimage_aadhar_cb_back');
				b_Image3.style.display = 'block';
				b_Image3.src = imageURI;
			   

				var b_Image11 = document.getElementById('cardimage_aadhar_elec1_back');
				b_Image11.style.display = 'block';
				b_Image11.src = imageURI;

				var b_Image12 = document.getElementById('cardimage_aadhar_ret1_back');
				b_Image12.style.display = 'block';
				b_Image12.src = imageURI;

				/*var b_Image22 = document.getElementById('cardimage_proof_del2');
				b_Image22.style.display = 'block';
				b_Image22.src = imageURI;
				*/
				var b_Image13 = document.getElementById('cardimage_aadhar_cb1_back');
				b_Image13.style.display = 'block';
				b_Image13.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='myaadhar_back_'+user.mobile;

				

				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;

				
				filenmdoc=options.fileName+".jpg";
				localStorage.setItem('adimg_back',filenmdoc);
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

								         var statusDom;
								         var statusDomdiv;
				var cattype = localStorage.getItem('cattype');
				if(cattype=='Retailer')
				{
					// if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
						if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_aadhar_ret1_back_status");
						statusDomdiv=document.getElementById("cardimage_aadhar_ret1_back_status_div");
					}else{
						statusDom=document.getElementById("cardimage_aadhar_ret_back_status");
						statusDomdiv=document.getElementById("cardimage_aadhar_ret_back_status_div");
					}
				}
				else if(cattype=='Painter')
				{
					// if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
						if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_aadhar_elec1_back_status");
						statusDomdiv=document.getElementById("cardimage_aadhar_elec1_back_status_div");
					}else{
						statusDom=document.getElementById("cardimage_aadhar_elec_back_status");
						statusDomdiv=document.getElementById("cardimage_aadhar_elec_back_status_div");
					}
				}
				else if(cattype=='Mechanic')
				{
					//if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
					if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_aadhar_cb1_back_status");
						statusDomdiv=document.getElementById("cardimage_aadhar_cb1_back_status_div");
					}else{
						statusDom=document.getElementById("cardimage_aadhar_cb_back_status");
						statusDomdiv=document.getElementById("cardimage_aadhar_cb_back_status_div");
					}
				}
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}
       						 
   				 } else {
     				  

     				      
    			}
    			
				};


				
				ft.upload(imageURI, encodeURI(versionurl+"upload_bill_new.php"), win, failPhoto8, options, true);
			}

			function capturePhotonew4() {

			  try{
				$("#optionspop4").popup("close");
				}catch(err) 
				{	}

	          navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true });
           }

           function uploadprofileGallery4() {

			    try{
				$("#optionspop4").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
				});

			}

			function failPhoto4(error) 
			{
				toast('Image upload failed. Please try afrer sometime: ' + error.code);
				localStorage.removeItem('gstimg');
				document.getElementById('cardimage_gst_ret').src = "";
				document.getElementById('cardimage_gst_ret1').src = "";
			}

			function uploadPhoto4(imageURI) {

				/*var b_Image = document.getElementById('cardimage_gst_elec');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;*/

				//localStorage.setItem('gstimg',imageURI);

				var b_Image2 = document.getElementById('cardimage_gst_ret');
				b_Image2.style.display = 'block';
				b_Image2.src = imageURI;

				
				/*
				var b_Image3 = document.getElementById('cardimage_gst_cb');
				b_Image3.style.display = 'block';
				b_Image3.src = imageURI;*/

				/*var b_Image11 = document.getElementById('cardimage_gst_elec1');
				b_Image11.style.display = 'block';
				b_Image11.src = imageURI;*/

				var b_Image12 = document.getElementById('cardimage_gst_ret1');
				b_Image12.style.display = 'block';
				b_Image12.src = imageURI;

				/*var b_Image22 = document.getElementById('cardimage_proof_del2');
				b_Image22.style.display = 'block';
				b_Image22.src = imageURI;

				var b_Image13 = document.getElementById('cardimage_proof_cb2');
				b_Image13.style.display = 'block';
				b_Image13.src = imageURI;*/


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='mygst_'+user.mobile;
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				filenmdoc=options.fileName+".jpg";

				//alert('filenmdoc:'+filenmdoc);

				localStorage.setItem('gstimg',filenmdoc);
				
				


				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

						         var statusDom;
						         var statusDomdiv;
				var cattype = localStorage.getItem('cattype');
				if(cattype=='Retailer')
				{
					 //if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
						if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_gst_ret1_status");
						statusDomdiv=document.getElementById("cardimage_gst_ret1_status_div");
					}else{
						statusDom=document.getElementById("cardimage_gst_ret_status");
						statusDomdiv=document.getElementById("cardimage_gst_ret_status_div");
					}
				}
			
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;


       						 if(perc==-'100')
       						 	localStorage.setItem('gstimg',filenmdoc);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}
       						 
   				 } else {
     				  

     				      
    			}
    			
				};


				
				ft.upload(imageURI, encodeURI(versionurl+"upload_bill_new.php"), win, failPhoto4, options, true);
			}


			

			function capturePhoto5() {

	         // navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
	            $("#optionspop5").popup();
				$("#optionspop5").popup("open");
           }

           function capturePhotonew5() {

			  try{
				$("#optionspop5").popup("close");
				}catch(err) 
				{	}

	          navigator.camera.getPicture(uploadPhoto5, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true });
           }

           function uploadprofileGallery5() {

			    try{
				$("#optionspop5").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhoto5, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true
				});

			}

			function uploadPhoto5(imageURI) {

				var b_Image = document.getElementById('cardimage_chq_elec');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;

				//localStorage.setItem('gstimg',imageURI);

				var b_Image2 = document.getElementById('cardimage_chq_ret');
				b_Image2.style.display = 'block';
				b_Image2.src = imageURI;

				
				
				var b_Image3 = document.getElementById('cardimage_chq_cb');
				b_Image3.style.display = 'block';
				b_Image3.src = imageURI;

				var b_Image11 = document.getElementById('cardimage_chq_elec1');
				b_Image11.style.display = 'block';
				b_Image11.src = imageURI;

				var b_Image12 = document.getElementById('cardimage_chq_ret1');
				b_Image12.style.display = 'block';
				b_Image12.src = imageURI;

				var b_Image13 = document.getElementById('cardimage_chq_cb1');
				b_Image13.style.display = 'block';
				b_Image13.src = imageURI;

				/*var b_Image22 = document.getElementById('cardimage_proof_del2');
				b_Image22.style.display = 'block';
				b_Image22.src = imageURI;

				var b_Image13 = document.getElementById('cardimage_proof_cb2');
				b_Image13.style.display = 'block';
				b_Image13.src = imageURI;*/


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='mychq_'+user.mobile;
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				filenmdoc=options.fileName+".jpg";
				localStorage.setItem('chqimg',filenmdoc);
				


				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

										         var statusDom;
										         var statusDomdiv;
				var cattype = localStorage.getItem('cattype');
				if(cattype=='Retailer')
				{
					// if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
						if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_chq_ret1_status");
						statusDomdiv=document.getElementById("cardimage_chq_ret1_status_div");
					}else{
						statusDom=document.getElementById("cardimage_chq_ret_status");
						statusDomdiv=document.getElementById("cardimage_chq_ret_status_div");
					}
				}
				else if(cattype=='Painter')
				{
					// if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
					if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_chq_elec1_status");
						statusDomdiv=document.getElementById("cardimage_chq_elec1_status_div");
					}else{
						statusDom=document.getElementById("cardimage_chq_elec_status");
						statusDomdiv=document.getElementById("cardimage_chq_elec_status_div");
					}
				}
				else if(cattype=='Mechanic')
				{
					// if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
					if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("cardimage_chq_cb1_status");
						statusDomdiv=document.getElementById("cardimage_chq_cb1_status_div");
					}else{
						statusDom=document.getElementById("cardimage_chq_cb_status");
						statusDomdiv=document.getElementById("cardimage_chq_cb_status_div");
					}
				}
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  

     				      
    			}
    			
				};

				
				ft.upload(imageURI, encodeURI(versionurl+"upload_bill_new.php"), win, fail, options, true);
			}

			function capturePhoto6() {

	         // navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
	            $("#optionspop6").popup();
				$("#optionspop6").popup("open");
           }

           function capturePhotonew6() {

			  try{
				$("#optionspop6").popup("close");
				}catch(err) 
				{	}

	          navigator.camera.getPicture(uploadPhoto6, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true });
           }

           function uploadprofileGallery6() {

			    try{
				$("#optionspop6").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhoto6, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true
				});

			}

			function failPhoto6(error) 
			{
				toast('Image upload failed. Please try afrer sometime: ' + error.code);
				
				localStorage.removeItem('estimg');
				document.getElementById('update_shopestablish_ret').src = "";
				document.getElementById('update_shopestablish_ret1').src = "";
			}

			function uploadPhoto6(imageURI) {

				var b_Image2 = document.getElementById('update_shopestablish_ret');
				b_Image2.style.display = 'block';
				b_Image2.src = imageURI;

				var b_Image12 = document.getElementById('update_shopestablish_ret1');
				b_Image12.style.display = 'block';
				b_Image12.src = imageURI;

				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='mychq_'+user.mobile;
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				filenmdoc=options.fileName+".jpg";
				localStorage.setItem('estimg',filenmdoc);
				


				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

							         var statusDom;
							         var statusDomdiv;
				var cattype = localStorage.getItem('cattype');
				if(cattype=='Retailer')
				{
					// if(localStorage.getItem('firsttime')==null || localStorage.getItem('firsttime')=='false'){
					if($.mobile.activePage.is('#profilepage')){
						statusDom=document.getElementById("update_shopestablish_ret1_status");
						statusDomdiv=document.getElementById("update_shopestablish_ret1_status_div");
					}else{
						statusDom=document.getElementById("update_shopestablish_ret_status");
						statusDomdiv=document.getElementById("update_shopestablish_ret_status_div");
					}
				}
			
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}
       						 
   				 } else {
     				  

     				      
    			}
    			
				};

				 
				ft.upload(imageURI, encodeURI(versionurl+"upload_bill_new.php"), win, failPhoto6, options, true);
			}


			function capturePhoto7() {

	         // navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
	            $("#optionspop7").popup();
				$("#optionspop7").popup("open");
           }

           function capturePhotonew7() {

			  try{
				$("#optionspop7").popup("close");
				}catch(err) 
				{	}

	          navigator.camera.getPicture(uploadPhoto7, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true });
           }

           function uploadprofileGallery7() {

			    try{
				$("#optionspop7").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhoto7, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true
				});

			}

			function uploadPhoto7(imageURI) {

				var b_Image2 = document.getElementById('dealer_ppic_panel');
				b_Image2.style.display = 'block';
				b_Image2.src = imageURI;

				var b_Image12 = document.getElementById('dealer_ppic_main');
				b_Image12.style.display = 'block';
				b_Image12.src = imageURI;

				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='dealer_'+store.storemobile;
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				filenmdoc=options.fileName+".jpg";
				localStorage.setItem('dealerimg',filenmdoc);
				
				

				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();
				 
				ft.upload(imageURI, encodeURI(versionurl+"upload_bill_new.php"), win, fail, options, true);
			}


			function capturePhotonew9() {

			  try{
				$("#optionspop9").popup("close");
				}catch(err) 
				{	}

	          navigator.camera.getPicture(uploadPhoto9, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true });
           }

           function uploadprofileGallery9() {

			    try{
				$("#optionspop9").popup("close");
				}catch(err) 
				{	}

				navigator.camera.getPicture(uploadPhoto9, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
				});

			}

		   function capturePhoto9() {

	         // navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI });
	            $("#optionspop9").popup();
				$("#optionspop9").popup("open");
           }

		   function uploadPhoto9(imageURI) {

				var b_Image = document.getElementById('cardimage_proof_elec_back');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;

				//localStorage.setItem('panimg',imageURI);

				var b_Image2 = document.getElementById('cardimage_proof_ret_back');
				b_Image2.style.display = 'block';
				b_Image2.src = imageURI;

			
				var b_Image3 = document.getElementById('cardimage_proof_cb_back');
				b_Image3.style.display = 'block';
				b_Image3.src = imageURI;

				var b_Image11 = document.getElementById('cardimage_proof_elec1_back');
				b_Image11.style.display = 'block';
				b_Image11.src = imageURI;

				var b_Image12 = document.getElementById('cardimage_proof_ret1_back');
				b_Image12.style.display = 'block';
				b_Image12.src = imageURI;

				/*var b_Image22 = document.getElementById('cardimage_proof_del2');
				b_Image22.style.display = 'block';
				b_Image22.src = imageURI;
				*/
				var b_Image13 = document.getElementById('cardimage_proof_cb1_back');
				b_Image13.style.display = 'block';
				b_Image13.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='mydoc_back'+user.mobile;
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				filenmdoc=options.fileName+".jpg";


				localStorage.setItem('panimg_back',filenmdoc);
				localStorage.setItem('docimg_back',filenmdoc);

				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();
				
				
				ft.upload(imageURI, encodeURI(versionurl+"upload_bill_new.php"), win, fail, options, true);
			}


			function win(r) {
				//toast("Image uploaded successfully!");
				//$("#wait").css("display","none"); // hide it initially
				 
			}

			function fail(error) {
				toast("There was an error uploading image");
				//$("#wait").css("display","none"); // hide it initially
				
			}

			function onFail(message) {
				toast('Failed because: ' + message);
			}

function showemplist()
{

	var cattype = localStorage.getItem('cattype');
	
	if(cattype=='Mechanic' || cattype=='Retailer')
	{

		$.mobile.changePage( "#emplist_new", { transition: "none"} );

		document.getElementById('emplistheader_new').innerHTML = cattype +' Approvals';

	  $.ajax({
		url: SERVER2+'get_pending_transactions_details_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALUFIAPI','apipswd':'Ml0yalUFIAP!2!','mobileno': user.mobile,'transtype':'Pending'},
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		//console.log(JSON.stringify(data));

			var str='';

			if(data.data[0].msg=='No Records Found.')
			{
				toast('No Records Found.');
			}
			else
			{
				 for (var i = 0; i < data.data.length; i++)
				 {	
					str+='<div class="customer">';

					str+='<div class="primary_block">';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Mobile Number</div><div class="ui-block-b"><span>'+data.data[i].MobileNumber+'</span></div></div>';
				   
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Bill Number</div><div class="ui-block-b"><span>'+data.data[i].BillNumber+'</span></div></div>';
				   
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Bill Amount</div><div class="ui-block-b"><span>'+data.data[i].BillAmount+'</span></div></div>';
				   
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Bill Date</div><div class="ui-block-b"><span>'+data.data[i].BillDate+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Trans Type</div><div class="ui-block-b"><span>'+data.data[i].TransType+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Approval Mobile</div><div class="ui-block-b"><span>'+data.data[i].ApprovalMob+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block" ><div class="ui-block-a">Status</div><div class="ui-block-b"><select id=\'ordertype'+i+'\' name=\'ordertype'+i+'\' onchange=javascript:changeOrderstatus(\''+i+'\',\''+data.data[i].MobileNumber+'\',\''+data.data[i].ApprovalMob+'\'); class="app_sel"><option value="">-Select-</option><option value="Approve">Approve</option>><option value="Reject">Reject</option>></select></div></div>';
					
					str+='<div id="appr_otp_div'+i+'" style="display:none;">';
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">OTP</div><div class="ui-block-b"><input type="password" id="approval_otp'+i+'" class="additional_control_read_otp" data-role="none" /></div></div>';
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a"></div><div class="ui-block-b"><a href="javascript:submitOrderstatus(\''+i+'\',\''+data.data[i].MobileNumber+'\',\''+data.data[i].ApprovalMob+'\');" class="btn_primary btn_aaprov mt-20 ui-link">Submit</a></div></div>';
					str+='</div>';

					str+='</div>';

					str+='</div>';
				 }

				 document.getElementById("name_list_new").innerHTML=str;

			}
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
	}
	else if(cattype=='dealer')
	{

		$.mobile.changePage( "#emplist_new", { transition: "none"} );

		document.getElementById('emplistheader_new').innerHTML = 'Dealer Approvals';

	  $.ajax({
		url: SERVER2+'get_pending_transactions_details_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALUFIAPI','apipswd':'Ml0yalUFIAP!2!','scode': store.storecode,'transtype':'Pending'},
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		//console.log(JSON.stringify(data));

			var str='';

			if(data.data[0].msg=='No Records Found.')
			{
				toast('No Records Found.');
			}
			else
			{
				 for (var i = 0; i < data.data.length; i++)
				 {	
					str+='<div class="customer">';

					str+='<div class="primary_block">';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Mobile Number</div><div class="ui-block-b"><span>'+data.data[i].MobileNumber+'</span></div></div>';
				   
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Bill Number</div><div class="ui-block-b"><span>'+data.data[i].BillNumber+'</span></div></div>';
				   
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Bill Amount</div><div class="ui-block-b"><span>'+data.data[i].BillAmount+'</span></div></div>';
				   
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Bill Date</div><div class="ui-block-b"><span>'+data.data[i].BillDate+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Trans Type</div><div class="ui-block-b"><span>'+data.data[i].TransType+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Approval Mobile</div><div class="ui-block-b"><span>'+data.data[i].ApprovalMob+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block" ><div class="ui-block-a">Status</div><div class="ui-block-b"><select id=\'ordertype'+i+'\' name=\'ordertype'+i+'\' onchange=javascript:changeOrderstatus(\''+i+'\',\''+data.data[i].MobileNumber+'\',\''+data.data[i].ApprovalMob+'\'); class="app_sel"><option value="">-Select-</option><option value="Approve">Approve</option>><option value="Reject">Reject</option>></select></div></div>';
					
					str+='<div id="appr_otp_div'+i+'" style="display:none;">';
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">OTP</div><div class="ui-block-b"><input type="password" id="approval_otp'+i+'" class="additional_control_read_otp" data-role="none" /></div></div>';
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a"></div><div class="ui-block-b"><a href="javascript:submitOrderstatus(\''+i+'\',\''+data.data[i].MobileNumber+'\',\''+data.data[i].ApprovalMob+'\');" class="btn_primary btn_aaprov mt-20 ui-link">Submit</a></div></div>';
					str+='</div>';

					str+='</div>';

					str+='</div>';
				 }

				 document.getElementById("name_list_new").innerHTML=str;

			}
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
	}

}

function changeOrderstatus(orderid,mobile,appr_mobile)
{
	var status =$('#ordertype'+orderid).val();

	if(status=='' || status==null || status=='undefined')
	{
		$("#appr_otp_div"+orderid).css('display', 'none');
	}
	else
	{

		$("#appr_otp_div"+orderid).css('display', 'block');
	}
}

function submitOrderstatus(orderid,mobile,appr_mobile)
{
	//alert(orderid);

   if(mobile.startsWith('91'))
   {
		
		mobile=mobile.substr(2,mobile.length);

	}

var status = $('#ordertype'+orderid).val();

var otp = $('#approval_otp'+orderid).val();

if(otp=='' || otp==null || otp=='undefined')
{
	toast('Please enter OTP');
}
else
{

 $.ajax({
   
    url: SERVER2+'chk_trans_approval_otp_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'apiuid': 'MLOYALUFIAPI','apipswd':'Ml0yalUFIAP!2!','mobileno': mobile,'apprvlmob': appr_mobile, 'otp': otp , 'status': status},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
		console.log('Data2:'+JSON.stringify(data));


				if(data.error!='')
				{
					toast(data.error);
			    }
				else
				{
					toast(data.data);

					var cattype = localStorage.getItem('cattype');
					console.log(cattype);
					if(cattype=='Mechanic' || cattype=='Retailer')
					{
						
	                         $('#username').val(localStorage.getItem("usernameufifilters"));
	                         var pass = localStorage.getItem("passwordufifilters");
	                         if(pass.length>=4)
						       {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#codeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						        }
						      
						authenticate();

					}
					else
					{
						dealerauthenticate();
					}
				}
       
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });
}

}

function showemplist_old(member_type,status)
{
	//https://ufifilters.mloyalretail.com/APIs/get_district_member_json_byse_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&se_code=AM3-SE001
   if(status=='UnApproved')
	   status=null;
   $.mobile.changePage( "#emplist", { transition: "none"} );	
   document.getElementById('emplistheader').innerHTML = member_type +' Approvals';
   var str='';
    document.getElementById("name_list").innerHTML=str;
   $.ajax({
   //url: SERVER2+'get_member_by_owner_json_api.asp', //login.php
   url: SERVER2+'get_district_member_json_byse_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
   data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','se_code':localStorage.getItem("secode")},
    //data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','district':localStorage.getItem("district_ufi"),'store_code':localStorage.getItem('storecode_ufi')},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
  
   //called when successful
   
   //var data = {"data":[{"Mobileno":"8700393344","FirstName":"Abhinav","LastName":"Khanna","Gender":null,"District":"noida","PanCardNo":"122233","ElectricianId":null,"MemberCategory":"Mechanic","HomeNo":"","Floor_flat":"noida","Building":null,"Street":null,"Town":"","City":"Noida","Country":null,"PostalCode":"201014","Email":"","Dobday":"  ","Dobmonth":"  ","Dobyear":"    ","Doaday":null,"Doamonth":null,"Doayear":null,"IsApproved":"Approved","RefCode":null,"Village":"","State":"UP","PersonalId":"","ShopName":"","GstNo":null,"ShopEstablishmentCert":null,"CinNo":""},{"Mobileno":"9015085390","FirstName":"Aadiytya","LastName":"Kapoor","Gender":null,"District":"Noida","PanCardNo":"","ElectricianId":null,"MemberCategory":"Mechanic","HomeNo":"","Floor_flat":"","Building":null,"Street":null,"Town":"","City":"Noida","Country":null,"PostalCode":"","Email":"","Dobday":null,"Dobmonth":null,"Dobyear":null,"Doaday":null,"Doamonth":null,"Doayear":null,"IsApproved":"UnApproved","RefCode":null,"Village":"","State":"","PersonalId":"","ShopName":"","GstNo":null,"ShopEstablishmentCert":null,"CinNo":""},{"Mobileno":"9111111111","FirstName":"Bhupendra","LastName":"Chaudhary","Gender":null,"District":"Noida","PanCardNo":"1111111111","ElectricianId":null,"MemberCategory":"Retailer","HomeNo":"123456789","Floor_flat":"Sector 63","Building":null,"Street":null,"Town":"","City":"Noida","Country":null,"PostalCode":"201301","Email":"test@mobiquest.com","Dobday":null,"Dobmonth":null,"Dobyear":null,"Doaday":null,"Doamonth":null,"Doayear":null,"IsApproved":"UnApproved","RefCode":null,"Village":"","State":"Uttar Pradesh","PersonalId":"","ShopName":"My Shop","GstNo":"GST123456789","ShopEstablishmentCert":"1989","CinNo":null},{"Mobileno":"9634327026","FirstName":"Bhupesh","LastName":"Kumar","Gender":null,"District":"Noida","PanCardNo":"23046486","ElectricianId":null,"MemberCategory":"Mechanic","HomeNo":"656864","Floor_flat":"C22","Building":null,"Street":null,"Town":"","City":"Noida","Country":null,"PostalCode":"201301","Email":"anshul@mobiquest.com","Dobday":null,"Dobmonth":null,"Dobyear":null,"Doaday":null,"Doamonth":null,"Doayear":null,"IsApproved":"UnApproved","RefCode":null,"Village":"","State":"UP","PersonalId":"","ShopName":"34","GstNo":null,"ShopEstablishmentCert":null,"CinNo":"848jf"},{"Mobileno":"9646440154","FirstName":"Chetan","LastName":"Arora","Gender":null,"District":"Noida","PanCardNo":"3268494668","ElectricianId":null,"MemberCategory":"Mechanic","HomeNo":"456","Floor_flat":"C21","Building":null,"Street":null,"Town":"","City":"Noida","Country":null,"PostalCode":"201301","Email":"sourav@mobiquest.com","Dobday":null,"Dobmonth":null,"Dobyear":null,"Doaday":null,"Doamonth":null,"Doayear":null,"IsApproved":"UnApproved","RefCode":null,"Village":"","State":"UP","PersonalId":"","ShopName":"34","GstNo":null,"ShopEstablishmentCert":null,"CinNo":"3748"},{"Mobileno":"9992676722","FirstName":"Madhavi","LastName":"Singh","Gender":null,"District":"Noida","PanCardNo":"2031946461867","ElectricianId":null,"MemberCategory":"Retailer","HomeNo":"","Floor_flat":"Noida","Building":null,"Street":null,"Town":"","City":"Noida","Country":null,"PostalCode":"201301","Email":"amol@mohiquest.com","Dobday":null,"Dobmonth":null,"Dobyear":null,"Doaday":null,"Doamonth":null,"Doayear":null,"IsApproved":"UnApproved","RefCode":null,"Village":"","State":"UP","PersonalId":"","ShopName":"12","GstNo":"37384940183","ShopEstablishmentCert":"","CinNo":null},{"Mobileno":"1234567890","FirstName":"","LastName":"","Gender":null,"District":"noida","PanCardNo":"122233","ElectricianId":null,"MemberCategory":"Mechanic","HomeNo":"","Floor_flat":"noida","Building":null,"Street":null,"Town":"","City":"Noida","Country":null,"PostalCode":"201014","Email":"","Dobday":"  ","Dobmonth":"  ","Dobyear":"    ","Doaday":null,"Doamonth":null,"Doayear":null,"IsApproved":"Approved","RefCode":null,"Village":"","State":"UP","PersonalId":"","ShopName":"","GstNo":null,"ShopEstablishmentCert":null,"CinNo":""}],"error":[]};
   //var data2 =[{"albhabet":"A"},{"albhabet":"B"},{"albhabet":"C"},{"albhabet":"D"},{"albhabet":"E"},{"albhabet":"F"},{"albhabet":"G"},{"albhabet":"H"},{"albhabet":"I"},{"albhabet":"J"},{"albhabet":"K"},{"albhabet":"L"},{"albhabet":"M"},{"albhabet":"N"},{"albhabet":"O"},{"albhabet":"P"},{"albhabet":"Q"},{"albhabet":"R"},{"albhabet":"S"},{"albhabet":"T"},{"albhabet":"U"},{"albhabet":"V"},{"albhabet":"W"},{"albhabet":"X"},{"albhabet":"Y"},{"albhabet":"Z"},{"albhabet":"#"}];

  // console.log(JSON.stringify(data));

      
        for (var j = 0; j < data.data.length; j++)
		{
			  //str +='<div id="'+data2[i].albhabet.toLowerCase()+'" class="main_link">'+data2[i].albhabet+'</div>';
			  /*str +='<div class="table-responsive">';
			  str +='<table class="table couter_list bg-dark">';
			  str +='<thead class="table_header"><th>Name</th><th>Phone No.</th><th>Active</th></thead>';
			  for (var j = 0; j < data.data.length; j++)
			  {
				  var cname =  formatName(data.data[j].FirstName.toLowerCase());
				if(cname!='' && cname!=undefined && cname!='undefined'&& cname!=null && cname!='null')
				  {
					//if(cname.charAt(0)==data2[i].albhabet.toLowerCase())
					  //{
						  var add= checkforundefined(data.data[j].HomeNo)+' '+checkforundefined(data.data[j].Floor_flat)+' '+checkforundefined(data.data[j].Building)+' '+checkforundefined(data.data[j].Street)+' '+checkforundefined(data.data[j].Town);
						  str+='<tr><td><a href="javascript:memberDetails(\''+capitalizeFirstLetter(removeHash(cname))+'\',\''+checkforundefined(data.data[j].LastName)+'\',\''+data.data[j].MemberCategory+'\',\''+data.data[j].Mobileno+'\',\''+add+'\',\''+checkforundefined(data.data[j].IsApproved)+'\');" data-rel="popup"  data-position-to="window" data-transition="pop" class="list_link" >';
						
						
						str += capitalizeFirstLetter(removeHash(cname))+' '+checkforundefined(data.data[j].LastName);
						str +='<span class="member_role">'+data.data[j].MemberCategory+', '+checkforundefined(data.data[j].City)+'</span>';
					    str +='</h3>';
						str +='</a></td>';
						str+='<td><a href="tel:'+checkforundefined(data.data[j].Mobileno)+'" class="list_link">'+checkforundefined(data.data[j].Mobileno)+'</a></td>';
						str+='<td>'+checkforundefined(data.data[j].IsApproved)+'</td>';
						str+='</tr>';

					 // }
				  }*/
				console.log('data.data[j].MemberCategory',data.data[j].MemberCategory,'data.data[j].SE_IsApproved',data.data[j].SE_IsApproved);
				if(data.data[j].MemberCategory == member_type)
				{  
                
				if(data.data[j].SE_IsApproved==status)
				{

				var cname =  formatName(data.data[j].FirstName.toLowerCase());
				if(cname!='' && cname!=undefined && cname!='undefined'&& cname!=null && cname!='null')
				  {
					//if(cname.charAt(0)==data2[i].albhabet.toLowerCase())
					//  {
						console.log("ssss"+data.data[j]);
						var add= 'Floor/Flat :'+checkforundefined(data.data[j].Floor_flat)+'</br>Lane '+checkforundefined(data.data[j].Street)+'</br>';
						//str +='<div>';
												
                       // str +='</div>';
                        //str +='<div class="ui-grid-solo">';

                      /*if(data.data[j].PanCardNo==null || data.data[j].PanCardNo=='' )
									str +='<div class="primary_block" onclick="javascript:showAppMsg()">';
					   else*/
									str +='<div class="primary_block" onclick="javascript:showMember(\''+data.data[j].Mobileno+'\')">';
						if(data.data[j].MemberCategory == 'Mechanic')
                        {
						str +='<span class="member_role"> <a href="javascript:mydelete(\''+data.data[j].Mobileno+'\');"><img src="assets/images/delete_icon.png" class="delete_icon"></a> </span>';
						}

						//str +='<div class="caption_inner"><a href="javascript:memberDetails(\''+capitalizeFirstLetter(removeHash(cname))+'\',\''+checkforundefined(data.data[j].LastName)+'\',\''+data.data[j].MemberCategory+'\',\''+data.data[j].Mobileno+'\',\''+add+'\',\''+checkforundefined(data.data[j].IsApproved)+'\');"></a> </div>';
                        if(data.data[j].MemberCategory == 'Retailer')
                        {
						str +='<div class="ui-grid-solo">';
                        str +='<div class="ui-block-a">';	
                        str +='<div class="approval_block"><img src="assets/images/retailer_shop_name_icon.png" class="location_icon"/><span class="customer_name">'+data.data[j].ShopName+'</span></div>';
						str +='</div>';
						
						str +='</div>';
						}
						 else
                        {

								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/retailer_shop_name_icon.png" class="location_icon"/><span class="customer_name">'+data.data[j].WorkingShopName+'</span></div>';
								str +='</div>';
								
								str +='</div>';
						}
						//str +='<div class="description">';
						str +='<div class="ui-grid-a">';
                        str +='<div class="ui-block-a">';
						str +='<div class="approval_block">';
						str +='<img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name">'+capitalizeFirstLetter(removeHash(cname))+' '+checkforundefined(data.data[j].LastName)+'</span> ';
						str +='</div>';
						str +='</div>';
						str +='<div class="ui-block-b">';	
						//str +='<div class="approval_block"><a href = "javascript:deactivatemember(\''+data.data[j].Mobileno+'\',\''+member_type+'\',\''+status+'\');">Deactivate</a></div>';
						str +='</div>';
						str +='</div>';
						str +='<div class="ui-grid-solo">';
                        str +='<div class="ui-block-a">';						
						str +='<div class="approval_block">';
						str +='<img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/> <span class="member_role">'+add+'City : '+checkforundefined(data.data[j].City)+'</br>District : '+checkforundefined(data.data[j].District)+'</br>State : '+checkforundefined(data.data[j].StateName)+'-'+checkforundefined(data.data[j].PostalCode)+'</span>';
					
						str +='</div>';
						str +='</div>';
						str +='</div>';
					    //str +='</div>';
						//str +='</div>';
						//str +='</div>';
						str +='<div class="approval_contacts">';
						str +='<div class="ui-grid-a">';
                        str +='<div class="ui-block-a">';
                        str +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_calling">'+data.data[j].Mobileno+'</span></div>';
						str +='</div>';						
                        str +='<div class="ui-block-b">';

						  
						 if(data.data[j].SE_IsApproved=='Approved')

							str +='<div class="approval_block"><img src="assets/images/verify_icon.png" class="location_icon"/></div>';
                        
						 else if (data.data[j].SE_IsApproved=='Reject')
						  
							str +='<div class="approval_block"><img src="assets/images/reject.png" class="location_icon"/></div>';
                         
						 else
							 str +='<div class="approval_block"><img src="assets/images/unverify.png" class="location_icon"/></div>';
                         
                        //str +='<div class="approval_block"><img src="assets/images/retailer_map_icon.png" class="location_icon"/><span class="approval_map">View Map</span></div>';
						str +='</div>';
						str +='</div>';
						str +='<div class="ui-grid-a">';
						str +='<div class="ui-block-a">';
                        str +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">'+data.data[j].Email+'</span></div>';
                      
                         if(data.data[j].IsApproved=='UnApproved')
					    str +='<div class="approval_block">Branch Approval<span class="member_role">Pending</span></div>';
                       	else
                       	str +='<div class="approval_block">Branch Approval<span class="member_role">'+data.data[j].IsApproved+'</span></div>';
                       	


                       	
 						if(data.data[j].MemberCategory == 'Mechanic')
                        {
                        	if(data.data[j].Dealer_Store==''){
								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Owner Retailer</span></div>';
								str +='</div>';
								
								str +='</div>';

								

								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Retailer Name : '+data.data[j].Retailer_Name+'</span></div>';
								str +='</div>';
								
								str +='</div>';

								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Retailer Mobile : '+data.data[j].Owner_mobileno+'</span></div>';
								str +='</div>';
								
								str +='</div>';
							}
							else
							{
								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Owner Dealer</span></div>';
								str +='</div>';
								
								str +='</div>';


								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Dealer Firm Name : '+data.data[j].Dealer_Store+' </span></div>';
								str +='</div>';
								
								str +='</div>';

								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Dealer Name : '+data.data[j].Dealer_Manager+' </span></div>';
								str +='</div>';
								
								str +='</div>';

								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Dealer Mobile : '+data.data[j].Owner_mobileno+'</span></div>';
								str +='</div>';
								
								str +='</div>';


							}
						}

						str +='<div class="approval_block">Pan Card:<span class="member_role">'+data.data[j].PanCardNo+'</span></div>';
                       
						
                        str +='<div class="approval_block">Registration Date:<span class="member_role">'+data.data[j].created_on+'</span></div>';
                       
						str +='</div>';
                        str +='</div>';
                        str +='</div>';
                        str +='</div>';
                        
					//  }
				  }
				}
				}
				else if(member_type=='')
				{
				if(data.data[j].SE_IsApproved==status)
				{

				var cname =  formatName(data.data[j].FirstName.toLowerCase());
				if(cname!='' && cname!=undefined && cname!='undefined'&& cname!=null && cname!='null')
				  {
					//if(cname.charAt(0)==data2[i].albhabet.toLowerCase())
					//  {
						console.log(data.data[j]);
						var add= 'Floor/Flat :'+checkforundefined(data.data[j].Floor_flat)+'</br>Lane '+checkforundefined(data.data[j].Street)+'</br>';
						
						//str +='<div>';

						console.log(add);
												
                       // str +='</div>';
                        //str +='<div class="ui-grid-solo">';
						if(status=='Approved' || status=='Reject')
							str +='<div class="primary_block">';
						else{
								/*
								if(data.data[j].PanCardNo==null || data.data[j].PanCardNo=='' )
									str +='<div class="primary_block" onclick="javascript:showAppMsg()">';
								else*/
									str +='<div class="primary_block" onclick="javascript:showMember(\''+data.data[j].Mobileno+'\')">';
									 

						}

						str +='<div class="approval_block"><span class="customer_name">'+data.data[j].MemberCategory+'</span></div>';
						
						
						//str +='<div class="caption_inner"><a href="javascript:memberDetails(\''+capitalizeFirstLetter(removeHash(cname))+'\',\''+checkforundefined(data.data[j].LastName)+'\',\''+data.data[j].MemberCategory+'\',\''+data.data[j].Mobileno+'\',\''+add+'\',\''+checkforundefined(data.data[j].IsApproved)+'\');"></a> </div>';
                         if(data.data[j].MemberCategory == 'Retailer')
                        {
						str +='<div class="ui-grid-solo">';
                        str +='<div class="ui-block-a">';	
                        str +='<div class="approval_block"><img src="assets/images/retailer_shop_name_icon.png" class="location_icon"/><span class="customer_name">'+data.data[j].ShopName+'</span></div>';
						str +='</div>';
						
						str +='</div>';
						}
						 else
                        {

								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/retailer_shop_name_icon.png" class="location_icon"/><span class="customer_name">'+data.data[j].WorkingShopName+'</span></div>';
								str +='</div>';
								
								str +='</div>';
						}
						//str +='<div class="description">';
						str +='<div class="ui-grid-a">';
                        str +='<div class="ui-block-a">';
						str +='<div class="approval_block">';
						str +='<img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name">'+capitalizeFirstLetter(removeHash(cname))+' '+checkforundefined(data.data[j].LastName)+'</span> ';
						
						str +='</div>';
						str +='</div>';
						str +='<div class="ui-block-b">';	
						//str +='<div class="approval_block"><a href = "javascript:deactivatemember(\''+data.data[j].Mobileno+'\',\''+member_type+'\',\''+status+'\');">Deactivate</a></div>';
						str +='</div>';
						str +='</div>';
						str +='<div class="ui-grid-solo">';
                        str +='<div class="ui-block-a">';						
						str +='<div class="approval_block">';
						
						str +='<img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/> <span class="member_role">'+add+'City : '+checkforundefined(data.data[j].City)+'</br>District : '+checkforundefined(data.data[j].District)+'</br>State : '+checkforundefined(data.data[j].StateName)+'-'+checkforundefined(data.data[j].PostalCode)+'</span>';
						str +='</div>';
						str +='</div>';
						str +='</div>';
					    //str +='</div>';
						//str +='</div>';
						//str +='</div>';
						str +='<div class="approval_contacts">';
						str +='<div class="ui-grid-a">';
                        str +='<div class="ui-block-a">';
                        str +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_calling">'+data.data[j].Mobileno+'</span></div>';
						str +='</div>';						
                        str +='<div class="ui-block-b">';

						  
						 if(data.data[j].SE_IsApproved=='Approved')

							str +='<div class="approval_block"><img src="assets/images/verify_icon.png" class="location_icon"/></div>';
                        
						 else if (data.data[j].SE_IsApproved=='Reject')
						  
							str +='<div class="approval_block"><img src="assets/images/reject.png" class="location_icon"/></div>';
                         
						 else
							 str +='<div class="approval_block"><img src="assets/images/unverify.png" class="location_icon"/></div>';
                         
                        //str +='<div class="approval_block"><img src="assets/images/retailer_map_icon.png" class="location_icon"/><span class="approval_map">View Map</span></div>';
						str +='</div>';
						str +='</div>';
						str +='<div class="ui-grid-a">';
						str +='<div class="ui-block-a">';
                        str +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">'+data.data[j].Email+'</span></div>';
                         if(data.data[j].IsApproved=='UnApproved')
					    str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Branch Approval: Pending</span></div>';
                       	else
                       	str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Branch Approval: '+data.data[j].IsApproved+'</span></div>';
                       	
                         
  
 						if(data.data[j].MemberCategory == 'Mechanic')
                        {
                        	if(data.data[j].Dealer_Store==''){
								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Owner Retailer</span></div>';
								str +='</div>';
								
								str +='</div>';

								

								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Retailer Name : '+data.data[j].Retailer_Name+'</span></div>';
								str +='</div>';
								
								str +='</div>';

								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Retailer Mobile : '+data.data[j].Owner_mobileno+'</span></div>';
								str +='</div>';
								
								str +='</div>';
							}
							else
							{
								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Owner Dealer</span></div>';
								str +='</div>';
								
								str +='</div>';


								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Dealer Firm Name : '+data.data[j].Dealer_Store+' </span></div>';
								str +='</div>';
								
								str +='</div>';

								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Dealer Name : '+data.data[j].Dealer_Manager+' </span></div>';
								str +='</div>';
								
								str +='</div>';

								str +='<div class="ui-grid-solo">';
		                        str +='<div class="ui-block-a">';	
		                        str +='<div class="approval_block"><img src="assets/images/side_tnc.png" class="location_icon"/><span class="approval_email">Dealer Mobile : '+data.data[j].Owner_mobileno+'</span></div>';
								str +='</div>';
								
								str +='</div>';


							}
						}

						str +='<div class="approval_block">Pan Card:<span class="member_role">'+data.data[j].PanCardNo+'</span></div>';
                       
						 str +='<div class="approval_block"<span class="member_role">'+data.data[j].created_on+'</span></div>';
                       

						str +='</div>';
                        str +='</div>';
                        str +='</div>';
                        str +='</div>';
                        
					//  }
				  }
				}
				}		   
			  } 
                      
					   //str +='</table>';
					   //str +='</div>';
       // } 
     
	  //$("#emplist .ui-content").html(str);
	  document.getElementById("name_list").innerHTML=str;
   
   
    },
    error: function(xhr, textStatus, errorThrown) {

    }
  });
  
}

function showAppMsg()
{
	toast('Mandatory field Pancard is missing!');
}

function deactivatemember(mobno,membertype,status)
{
	//https://ufifilters.mloyalretail.com/apis/reactivate_member_json_api.asp?mobileno=9818747077&isActive=0
	$.ajax({
    url: SERVER2+'reactivate_member_json_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'text',
    data: {'mobileno':mobno,'isActive':'0'},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
      console.log("HERE");
       showemplist(membertype,'UnApproved')
    },
    error: function(xhr, textStatus, errorThrown) {

    }
  });
}

function addCounter()
{
  var count =0;

  var nocounter=0;

   var ownermob='';

var etype = localStorage.getItem("cattype");
console.log("etype"+etype);
	 if(etype=='dealer' || etype=='Dealer')
	 {
		ownermob=store.storemobile;
		nocounter=parseInt(store.nocounter);

	 }
	 else
	 {
		 ownermob=user.mobile;
		 nocounter=parseInt(user.nocounter);
		
	 }


  $.ajax({
    url: SERVER2+'get_member_by_owner_json_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','store_code': localStorage.getItem('storecode_ufi'),'district':localStorage.getItem("district_ufi")},
	//data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','owner_mobile':ownermob},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
   
        var str = '';
        
        for (var i = 0; i < data.data.length; i++)
		{
			if(data.data[i].MemberCategory == 'Mechanic' || data.data[i].MemberCategory == 'Painter')
            {
              	count = count+1;
            }
		} 
        
		//alert('count'+count);
		if(count<nocounter)
		{
			//$.mobile.changePage( "#addcounterpg1", { transition: "none"} );
			showcounterboylist();
			

		}
		else
		{
			
			var b_Image13 = document.getElementById('addnewcounter');
				b_Image13.style.display = 'none';

			//toast('You have already added the maximum limit of 10 Counter Boys to your list. Please contact your branch for further assistance. Team UFI Filters.');
			
			showcounterboylist();
		}
    },
    error: function(xhr, textStatus, errorThrown) {

    }
  });
	
}

function showcounterboylist()
{
   $.mobile.changePage( "#addcounterpg1", { transition: "none"} );	

   var str='';

  var ownermob='';

var etype = localStorage.getItem("cattype");

	 if(etype=='dealer' || etype=='Dealer')
	 {
		ownermob=store.storemobile;
	 }
	 else
	 {
		 ownermob=user.mobile;
		
	 }

console.log('here');
  $.ajax({
    url: SERVER2+'get_member_by_owner_json_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    //data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','owner_mobile':'9654493334'},
	data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','store_code': localStorage.getItem('storecode_ufi'),'district':localStorage.getItem("district_ufi")},
    complete: function(xhr, textStatus) {
   //called when complete
    }, success: function(data, textStatus, xhr) {

	//console.log(JSON.stringify(data));

        var str = '';
        
			  str +='<div class="table-responsive">';
			  str +='<table class="table couter_list bg-dark">';
			  str +='<thead class="table_header"><th>Name</th><th>Phone No.</th><th>Active</th></thead>';
			  for (var j = 0; j < data.data.length; j++)
			  {
				  //if(data.data[j].MemberCategory == 'Mechanic' || data.data[j].MemberCategory == 'Painter')
				 // {

					  var cname =  formatName(data.data[j].FirstName.toLowerCase());
					  if(cname!='' && cname!=undefined && cname!='undefined'&& cname!=null && cname!='null')
					  {
							var add= checkforundefined(data.data[j].HomeNo)+' '+checkforundefined(data.data[j].Floor_flat)+' '+checkforundefined(data.data[j].Building)+' '+checkforundefined(data.data[j].Street)+' '+checkforundefined(data.data[j].Town);
							str+='<tr><td><a href="javascript:memberDetails1(\''+capitalizeFirstLetter(removeHash(cname))+'\',\''+checkforundefined(data.data[j].LastName)+'\',\''+data.data[j].MemberCategory+'\',\''+data.data[j].Mobileno+'\',\''+add+'\',\''+checkforundefined(data.data[j].IsApproved)+'\');" data-rel="popup"  data-position-to="window" data-transition="pop" class="list_link" >';
							
							
							str += capitalizeFirstLetter(removeHash(cname))+' '+checkforundefined(data.data[j].LastName);
							str +='<span class="member_role">'+checkforundefined(data.data[j].City)+'</span>';
							str +='</h3>';
							str +='</a></td>';
							str+='<td><a href="tel:'+checkforundefined(data.data[j].Mobileno)+'" class="list_link">'+checkforundefined(data.data[j].Mobileno)+'</a></td>';
							if(etype=='dealer' || etype=='Dealer')
	 						{
		 							if(data.data[j].IsApproved=='UnApproved'){
	 								if(checkforundefined(data.data[j].SE_IsApproved)!='')
	 								{

	 									str+='<td>'+checkforundefined(data.data[j].SE_IsApproved)+ ' By SE</td>';

	 								}
	 								else
	 								{
	 								if(checkforundefined(data.data[j].Dealer_IsApproved)!='')
	 									str+='<td>'+checkforundefined(data.data[j].Dealer_IsApproved)+ ' By Me</td>';
	 							    else
	 							    	str+='<td>'+checkforundefined(data.data[j].IsApproved)+'</td>';
	 							    }
	 							
	 							}
	 							else{
	 								str+='<td>'+checkforundefined(data.data[j].IsApproved)+'</td>';
	 							}

	 						}
	 						else
	 						{
	 							if(data.data[j].IsApproved=='UnApproved'){
	 								if(checkforundefined(data.data[j].SE_IsApproved)!='')
	 								{

	 									str+='<td>'+checkforundefined(data.data[j].SE_IsApproved)+ ' By SE</td>';

	 								}
	 								else
	 								{
	 								if(checkforundefined(data.data[j].Retailer_IsApproved)!='')
	 									str+='<td>'+checkforundefined(data.data[j].Retailer_IsApproved)+ ' By Me</td>';
	 							    else
	 							    	str+='<td>'+checkforundefined(data.data[j].IsApproved)+'</td>';
	 							    }
	 							
	 							}
	 							else{
	 								str+='<td>'+checkforundefined(data.data[j].IsApproved)+'</td>';
	 							}

	 						}
							
							str+='</tr>';
						 
					  }
				 // }
						   
			  } 
                      
					   str +='</table>';
					   str +='</div>';
       
	  document.getElementById("name_list1").innerHTML=str;
   
   
    },
    error: function(xhr, textStatus, errorThrown) {

    }
  });
  
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function formatName(str)
{
	if(typeof str==undefined || str=='undefined'|| str==null || str=='null' || str=='')
    {
        str='#';
    }
        return str;
}

function removeHash(str)
{
	return str.replace('#','');
}

function memberDetails(fname,lname,cat,mob,add,status)
{

	clearFileds();

	setTimeout(function(){ 

			document.getElementById("mname").innerHTML= fname+' '+lname;
			document.getElementById("mdesignation").innerHTML= cat;
			document.getElementById("mcontact").innerHTML= '<a href="'+mob+'" class="mship_pop_contact">'+mob+'</a>';
			document.getElementById("madd").innerHTML= add;
			document.getElementById("member_name").value= fname+' '+lname;
			document.getElementById("member_contact").value= mob;

			if(status=='Approved')
			{
				$("#approve_btn").css('display', 'block');
				$("#unapproved_btn").css('display', 'none');
			}
			else
			{
				$("#approve_btn").css('display', 'none');
				$("#unapproved_btn").css('display', 'block');

			}
			
			$('#member_details').popup();
			$('#member_details').popup("option", "transition", "pop");
			$('#member_details').popup("open");
							
	}, 800);

}

function memberDetails1(fname,lname,cat,mob,add,status)
{

	clearFileds();

	setTimeout(function(){ 

			document.getElementById("mname1").innerHTML= fname+' '+lname;
			document.getElementById("mdesignation1").innerHTML= cat;
			document.getElementById("mcontact1").innerHTML= '<a href="'+mob+'" class="mship_pop_contact">'+mob+'</a>';
			document.getElementById("madd1").innerHTML= add;
			document.getElementById("member_name1").value= fname+' '+lname;
			document.getElementById("member_contact1").value= mob;

			if(status=='Approved')
			{
				$("#approve_btn1").css('display', 'block');
				$("#unapproved_btn1").css('display', 'none');
			}
			else
			{
				$("#approve_btn1").css('display', 'none');
				$("#unapproved_btn1").css('display', 'block');

			}
			
			$('#member_details1').popup();
			$('#member_details1').popup("option", "transition", "pop");
			$('#member_details1').popup("open");
							
	}, 800);

}

function clearFileds()
{
	document.getElementById("mname").innerHTML= '';
	document.getElementById("mdesignation").innerHTML= '';
	document.getElementById("mcontact").innerHTML= '';
	document.getElementById("madd").innerHTML= '';

	document.getElementById("mname1").innerHTML= '';
	document.getElementById("mdesignation1").innerHTML= '';
	document.getElementById("mcontact1").innerHTML= '';
	document.getElementById("madd1").innerHTML= '';
}


function showemplistold()
{
   $.mobile.changePage( "#emplist", { transition: "none"} );
   
   var str='';
   $.ajax({
   url: SERVER2+'get_district_member_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','district':localStorage.getItem("userdist_ufifilters"),'se_mobile':user.mobile},
    complete: function(xhr, textStatus) {
		//called when complete
    },
    success: function(data, textStatus, xhr) {
  
   //called when successful
   
        var str = '';
        for (var i = 0; i < data.data.length; i++)
			{
	
              str +='<div class="store_details">';
			  str +='<h3>Name : '+checkforundefined(data.data[i].FirstName)+' '+checkforundefined(data.data[i].LastName)+'</h3>';
			  str +='<h4>Type : '+data.data[i].MemberCategory+'</h4>';
			  str +='<h4>Contact No : '+data.data[i].Mobileno+'</h4>';
			  str +='<h4>State : '+checkforundefined(data.data[i].State)+'</h4>';
			  str +='<h4>District : '+checkforundefined(data.data[i].District)+'</h4>';
			  str +='<h4>City : '+checkforundefined(data.data[i].City)+'</h4>';
			  str +='</div>';       
                       
             } 
     
	 
	  $("#emplist .ui-content").html(str);
   
   
    },
    error: function(xhr, textStatus, errorThrown) {

    }
  });
  
}


function checkforundefined(str)
{
    if(typeof str==undefined || str=='undefined'|| str==null || str=='null')
    {
        str='';
    }
        return str;
}

function checkforundefinedPts(str)
{
    if(typeof str==undefined || str=='undefined'||str==null||str=='null' ||str=='')
    {
        str='0';
    }
        return str;
}

function checkforStorecode(str)
{
    if(typeof str==undefined || str=='undefined'|| str==null || str=='null' || str=='')
    {
        str='MAPP-001';
    }
        return str;
}

$(document).on('pageshow', '#addcounterpg1', function (event, ui) {
//$(document).on('pageshow', '#emplist', function (event, ui) {

 $(document).on('onClick', '#counter_button1', function (e, ui) {

	 var ownermob='';
	 var firmname='';

var etype = localStorage.getItem("cattype");

	 if(etype=='dealer' || etype=='Dealer')
	 {
		ownermob=store.storemobile;
		firmname=store.store_name;
	 }
	 else
	 {
		 ownermob=user.mobile;
		 firmname=user.shopname;
		
	 }
	

     e.preventDefault();
	 e.stopPropagation();
	 var mob = $('#cmobile1').val();
	  var fname = $('#cname1').val();
	 
	 if(mob==''){
		 toast('Please enter mobile number');
	 }
	 else if(mob.length==10){
		if(checkUserexist('cmobile1','cb'))
		 {
		 	console.log("ddddddddddd");
         $.ajax({
            
			url: SERVER+'forgot_pswd_cb.asp?mobileno='+mob,

             type: 'GET',
			
			timeout: 300000,
            dataType: "html",
            
			
			success: function(data, textStatus, xhr) {
			
			//console.log("Data:"+JSON.stringify(data));

			 if(data.toLowerCase()=='success'){
				// toast('A Verification Code along with link has been sent to counter boy mobile.Please check SMS.');
				toast('A Verification Code along with link has been sent to counter boy mobile.Please check SMS.');
				
			  	 $.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				mobileno: mob,
				FirstName:fname,
				Shop_Name: '',
				CINNo: '',
				other_mobile_no: '',
				Photo: '',
				PersonalID: '',
				Address: '',
				City: '',
				Town: '',
				Village: '',
				PostalCode: '',
				District: '',
				State: '',
				Email: '',
				Pan_card_no: '',
				working_shopname:firmname,
				Membertype: 'Mechanic',
				owner_mobileno: ownermob
				
			},
			success: function(data, textStatus, xhr) {

				
				
				
				if (data.indexOf("Success")>=0)
				{
					   
				toast('Please ask Painter to complete his profile');

				}
				else if(data=='Failed')
					//toast('Profile addition failed.');
				
					$('#counterstatus').html('Profile addition failed.Please try after some time');
				
				//$.mobile.changePage( "#homepage", {transition: "flip"} );
				if(localStorage.getItem('cattype') == 'dealer')
					{
						$.mobile.changePage( "#dealerhomepage", { transition: "none"} );
					}
				else
					{
						$.mobile.changePage( "#homepage", { transition: "none"} );	
					}
		        $('#cmobile1').val(''); 
		        $('#cname1').val('');
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
              }
			  else{
				toast(mob+' is not registered, please try after sometime.');
				
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
		});
	 }
  }else{
   toast('Please enter 10 digits mobile number');
  }
	 })
});

function addcboy(mob)
{

	 var ownermob='';
	 var firmname='';

var etype = localStorage.getItem("cattype");

	 if(etype=='dealer' || etype=='Dealer')
	 {
		ownermob=store.storemobile;
		firmname=store.store_name;
	 }
	 else
	 {
		 ownermob=user.mobile;
		 firmname=user.shopname;
		
	 }
//alert('ownermob'+ownermob+'firmname'+firmname);
	//alert('inaddcboy');
    
	 var mob = $('#cmobile1').val();
	  var fname = $('#cname1').val();
	
	       $.ajax({
            
			url: SERVER+'forgot_pswd_cb.asp?mobileno='+mob,

             type: 'GET',
			
			timeout: 300000,
            dataType: "html",
            
			
			success: function(data, textStatus, xhr) {
			
			//console.log("Data:"+JSON.stringify(data));

			 if(data.toLowerCase()=='success'){
				// toast('A Verification Code along with link has been sent to counter boy mobile.Please check SMS.');
				toast('A Verification Code along with link has been sent to counter boy mobile.Please check SMS.');
				
			  	 $.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				mobileno: mob,
				FirstName:fname,
				Shop_Name: '',
				CINNo: '',
				other_mobile_no: '',
				Photo: '',
				PersonalID: '',
				Address: '',
				City: '',
				Town: '',
				Village: '',
				PostalCode: '',
				District: '',
				State: '',
				Email: '',
				Pan_card_no: '',
				working_shopname:firmname,
				Membertype: 'Mechanic',
				owner_mobileno: ownermob
				
			},
			success: function(data, textStatus, xhr) {

				
				
				
				if (data.indexOf("Success")>=0)
				{
					   
				toast('Please ask Painter to complete his profile');

				}
				else if(data=='Failed')
					//toast('Profile addition failed.');
				
					$('#counterstatus').html('Profile addition failed.Please try after some time');
				
				//$.mobile.changePage( "#homepage", {transition: "flip"} );
				if(localStorage.getItem('cattype') == 'dealer')
					{
						$.mobile.changePage( "#dealerhomepage", { transition: "none"} );
					}
				else
					{
						$.mobile.changePage( "#homepage", { transition: "none"} );	
					}
		        $('#cmobile1').val(''); 
		        $('#cname1').val('');
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
	          }
			  else{
				toast(mob+' is not registered, please try after sometime.');
				
			 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
		});
  
}


$(document).on('pageshow', "#dealerhomepage, #homepage", "#dealerhomepage_se", function() {
	$(".dashboard_carousel").owlCarousel({
		items:1,
		loop:true,
		margin:0,
		merge:true,
		nav:false,
		dots:true,
		autoplay:true,
		autoWidth:false,
		navText: ['<','>']
	});
	$(".reward_carousel").owlCarousel({
		items:1,
		loop:true,
		margin:0,
		merge:true,
		nav:false,
		dots:true,
		autoplay:true,
		autoWidth:false,
		navText: ['<','>']
	});
});


function showNotifications()
{

//var noofnotifications=0;

if(typeof user.mobile==undefined || typeof user.mobile=='undefined' || user.mobile==null || user.mobile=='null')
{
    user.mobile='';
}

 else
 {
 	$.mobile.changePage( "#notificationspg", {transition: "none"} );
//https://ufifilters.mloyalretail.com/apis/app_notification_offer_json_api.asp?mobileno=XXXXXXXXXX&apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14

 $.ajax({
   //url: SERVER2+'app_notification_offer_json_api.asp',
    url:SERVER+'msg_history_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'mno': user.mobile},
    //data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile},
    complete: function(xhr, textStatus) {
		//called when complete
    },
    success: function(json, textStatus, xhr) {
        
		//console.log('JsonDataN:'+JSON.stringify(data));
		var str='';

		 /*for(var i=0;i<data.data.length;i++ )
		 {

			var myoffer= data.data[i].OfferName;*/

			/*if(myoffer.indexOf("Birthday Offer")>=0 || myoffer.indexOf("Bday Offer")>=0 || myoffer.indexOf("birthday offer")>=0 || myoffer.indexOf("bday offer")>=0)
			 {
				str += '<div class="ui-grid-solo" onClick="javascript:showbdayPage();">';
				str += '<span class="NotifyBdr">';
				str += '<span class="notifyhdr">'+data.data[i].OfferName+'<span style="color:#ED2A2E;font-size: 12px;">  Avail Now</span></span>';
				str += '<span class="msgDate">'+data.data[i].OfferCreatedOn+'</span>';
				str += '<span class="NotifyTxt">'+data.data[i].OfferSMSText+'</span>';
				str += '</span></div>';
			 }
			 else
			 {*/
				/*str += '<div class="ui-grid-solo">';
				str += '<span class="NotifyBdr">';
				str += '<span class="notifyhdr">'+data.data[i].OfferName+'</span>';
				str += '<span class="msgDate">'+data.data[i].OfferCreatedOn+'</span>';
				str += '<span class="NotifyTxt">'+data.data[i].OfferSMSText+'</span>';
				str += '</span></div>';*/
			 //}
			
		
		// }
		 str +=' <ul data-role="listview" data-inset="true" id="MsgUl">';
		 for(var i=0;i<json.length;i++ )
		{
			 if(json[i].msg.indexOf('OTP is')==-1)
			{
			str += '<li data-icon="false">';
			str += '<div class="ui-grid-a"><div class="ui-block-a" style="width:15%;">';
			str += '<img src="img/open.png" class="msgImg"/>';
			str += '</div><div class="ui-block-b" style="width:85%;">';
			str += '<div class="MsgBlk"><span class="MsgBdr">';
			str += '<span class="msghdr">DM-UFILTE</span><span class="msgTime">'+json[i].msgtime+'</span>';
			str += '<span class="msgDate">' + json[i].msgdate + '</span>';
			str += '<span class="msgTxt">'+json[i].msg+'</span>';
			str += '</span></div></div></div></li>';
			}
		}
		str += '</ul>';
		

		document.getElementById("notify_div").innerHTML=str;
   
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 }

}

function showNotifications_dealer()
{

//var noofnotifications=0;

if(typeof user.mobile==undefined || typeof user.mobile=='undefined' || user.mobile==null || user.mobile=='null')
{
    user.mobile='';
}

 else
 {
 	$.mobile.changePage( "#notificationspg_dealer", {transition: "none"} );
//https://ufifilters.mloyalretail.com/apis/app_notification_offer_json_api.asp?mobileno=XXXXXXXXXX&apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14

 $.ajax({
   //url: SERVER2+'app_notification_offer_json_api.asp',
    url:SERVER+'msg_history_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'mno': user.mobile},
    //data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile},
    complete: function(xhr, textStatus) {
		//called when complete
    },
    success: function(json, textStatus, xhr) {
        
		//console.log('JsonDataN:'+JSON.stringify(data));
		var str='';

		// for(var i=0;i<data.data.length;i++ )
		// {

			//var myoffer= data.data[i].OfferName;

			/*if(myoffer.indexOf("Birthday Offer")>=0 || myoffer.indexOf("Bday Offer")>=0 || myoffer.indexOf("birthday offer")>=0 || myoffer.indexOf("bday offer")>=0)
			 {
				str += '<div class="ui-grid-solo" onClick="javascript:showbdayPage();">';
				str += '<span class="NotifyBdr">';
				str += '<span class="notifyhdr">'+data.data[i].OfferName+'<span style="color:#ED2A2E;font-size: 12px;">  Avail Now</span></span>';
				str += '<span class="msgDate">'+data.data[i].OfferCreatedOn+'</span>';
				str += '<span class="NotifyTxt">'+data.data[i].OfferSMSText+'</span>';
				str += '</span></div>';
			 }
			 else
			 {*/
				/*str += '<div class="ui-grid-solo">';
				str += '<span class="NotifyBdr">';
				str += '<span class="notifyhdr">'+data.data[i].OfferName+'</span>';
				str += '<span class="msgDate">'+data.data[i].OfferCreatedOn+'</span>';
				str += '<span class="NotifyTxt">'+data.data[i].OfferSMSText+'</span>';
				str += '</span></div>';*/
			 //}
			
		
		// }
		
		 str +=' <ul data-role="listview" data-inset="true" id="MsgUl">';
		 for(var i=0;i<json.length;i++ )
		{
		str += '<li data-icon="false">';
        str += '<div class="ui-grid-a"><div class="ui-block-a" style="width:15%;">';
		str += '<img src="img/open.png" class="msgImg"/>';
        str += '</div><div class="ui-block-b" style="width:85%;">';
        str += '<div class="MsgBlk"><span class="MsgBdr">';
        str += '<span class="msghdr">DM-UFILTE</span><span class="msgTime">'+json[i].msgtime+'</span>';
		str += '<span class="msgDate">' + json[i].msgdate + '</span>';
        str += '<span class="msgTxt">'+json[i].msg+'</span>';
        str += '</span></div></div></div></li>';
    	}
        str += '</ul>';

		document.getElementById("notify_div_dealer").innerHTML=str;
   
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 }

}


function showNotifications1()
{

var noofnotifications=0;

if(typeof user.mobile==undefined || typeof user.mobile=='undefined' || user.mobile==null || user.mobile=='null')
{
    user.mobile='';
}
else
{

 var mylist = JSON.parse(localStorage.getItem("notificationlist_ufi"))||[];

 $.ajax({
   url: SERVER2+'app_notification_offer_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile},
    complete: function(xhr, textStatus) {
		//called when complete
    },
    success: function(data, textStatus, xhr) {
        
		//console.log('JsonDataN:'+JSON.stringify(data));
		var str='';

		 for(var i=0;i<data.data.length;i++ )
		 {

			var myoffer= data.data[i].OfferName;

            for(var j=0;j<mylist.length;j++)
			{
			 var elem = mylist[j];
			 
			 if(elem.indexOf(myoffer)<=-1)
				{
				
				mylist.push(myoffer+'|1');
				localStorage.setItem("notificationlist_ufi",JSON.stringify(mylist));
			
				}
				var em = elem.split('|');
				if(em[1] == '1')
				{
				   noofnotifications = noofnotifications + 1; 
				}
			
			}		
		
		 }
		   //console.log('badge_count:'+noofnotifications);
		   
		   if(noofnotifications>=1)
			{
				$("#badge_count").css('display', 'block');
				$('#badge_count').text(noofnotifications);
			}
   
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 }

}



function showGeolocation1()
{
	user.latitude_ck='';
	user.longitude_ck='';

	if (navigator.geolocation)
	{
        navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);
    } 
	else
	{
        toast('Location could not be traced..');
    }
	
}

function showGeolocation()
{
 cordova.plugins.locationAccuracy.request(
          function() {
            console.log("testhigh success");
            setTimeout(function() {
              getPosition();
            }, 1500);
          },
          function() {
            console.log("error");
          },
          cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY
        );
}
function getPosition() {
         navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);
}


function geolocationSuccess(position) 
{
		//var latlng = position.coords.latitude+','+position.coords.longitude;

		
		
		user.latitude_ck = position.coords.latitude;
		user.longitude_ck = position.coords.longitude;

		
}

   
function geolocationError(error) {
        toast('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
}

function logOut()
{
	//$.mobile.changePage( "#selectcategorypage", { transition: "none"} );
	//$.mobile.changePage( "#slidepage", { transition: "none"} );
	//user.mobile='';

	localStorage.removeItem('usernamemloyal_ufi');
	localStorage.removeItem('usermobilemloyal_ufi');
	localStorage.removeItem('profiledone_ufi');
	localStorage.removeItem('usercin_ufifilters');
	localStorage.removeItem('profiledone_ufifilters');
	
	var cattype = localStorage.getItem('cattype');
	if(cattype=='dealer')
	{
		document.getElementById("dealer_headlbl").innerHTML= 'Distributor/Wholesaler';
		//$.mobile.changePage( "#page-forgot-password_dealer", { transition: "none"} );
		$.mobile.changePage( "#selectcategorypage", { transition: "none"} );
	}
	else if(cattype=='SalesExecutive')
	{
		//document.getElementById("dealer_headlbl").innerHTML= 'Sales Executive';
		//$.mobile.changePage( "#page-forgot-password_se", { transition: "none"} );
		$.mobile.changePage( "#selectcategorypage", { transition: "none"} );
	}
	else
	{
		//$.mobile.changePage( "#page-forgot-password", { transition: "none"} );
		$.mobile.changePage( "#selectcategorypage", { transition: "none"} );
	}
	localStorage.removeItem('userpassloyal_ufi');
	localStorage.removeItem('district_ufi');

	localStorage.removeItem('usernameufifilters');
	localStorage.removeItem('passwordufifilters');
	localStorage.removeItem('cattype');
	localStorage.removeItem('SMSMNO');
	localStorage.removeItem('userdist_ufifilters');
	localStorage.removeItem('usermtype_ufifilters');
	localStorage.removeItem('profiletype_ufi');
	localStorage.removeItem('is_approved_ufifilters');
	localStorage.removeItem('created_on_ufifilters');
	localStorage.removeItem('id');
	localStorage.removeItem('useradd_ufifilters');
	localStorage.removeItem('userphoto_ufifilters');
	localStorage.removeItem('usershoppic_ufifilters');
	localStorage.removeItem('userstate');
	localStorage.removeItem('refer_code_ck');

	$('#codeBox1').val('');
	$('#codeBox2').val('');
	$('#codeBox3').val('');
	$('#codeBox4').val('');
	//localStorage.clear();

	user.mobile='';

}

function ValidateEmail(email)   
{  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))  
  {  
    return (true);  
  }  
    //toast("You have entered an invalid email address!");  
    return (false);
}

function checkpin(str)
{
	var str1 = $('#'+str).val();

	if(str1.length==6)
	{
		return (true);
		
	}
	toast('Invalid Pin');
	$('#'+str).val('');
	return (false);
}

function checkaadhar(str)
{
	var str1 = $('#'+str).val();

	if(str1.length==12)
	{
		//checkproofvalidity('AADHAR',str);
		return (true);
		
	}
	toast('Invalid Aadhar Card No');
	$('#'+str).val('');
	return (false);
}
function checkpan(str)
{
	var str1 = $('#'+str).val();
	var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
	if(regpan.test(str1))
	{
		//checkproofvalidity('PAN',str);
		return(true);
	}
	toast('Invalid Pan No');
	$('#'+str).val('');
	return (false);
}


function checkgst(str)
{
	var str1 = $('#'+str).val();
	var regpan = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
	if(regpan.test(str1))
	{
		//checkproofvalidity('GST',str);
		return(true);
	}
	toast('Invalid GSTIN');
	$('#'+str).val('');
	return (false);
}

function checkgst_new(str,str2)
{
	var str1 = $('#'+str).val().toUpperCase();
	
	var regpan = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
	if(regpan.test(str1))
	{
		//checkproofvalidity('GST',str);
		return(true);
	}
	toast('Invalid GSTIN');
	$('#'+str).val('');
	return (false);
}

function checkgst_ret(str1,str2)
{

  var unino = $('#'+str1).val().toUpperCase();
  var pan   = $('#'+str2).val().toUpperCase();

  var res = unino.substr(2, 10);
  if(pan!=res)
  {
		toast("Wrong GSTIN Number...!");
		return (false);
  }
  else
  {
		toast("GST Number is matched.");
		return(true);
  }
}

function checkemail(str)
{
	var str1 = $('#'+str).val();
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str1))  
  {  
    return (true);  
  }  
    toast("You have entered an invalid email address!"); 
	$('#'+str).val('');
    return (false);
}
function checkonlytext(str)
{
	var str1 = $('#'+str).val();
	
	if (/^[a-zA-Z]*$/g.test(str1))  
	  { 
	   return (true);  
	  }  
	  $('#'+str).val('');
   toast("You have entered an invalid character!");
     return (false);

}

function checkbankac(str)
{
	var str1 = $('#'+str).val();

	if(str1.length<=20)
	{
		return (true);
		
	}
	toast('Invalid A/c No');
	$('#'+str).val('');
	return (false);
}
function checkifsc(str)
{
	var str1 = $('#'+str).val();

	if(str1.length==11)
	{
		return (true);
		
	}
	toast('Invalid IFSC Code');
	$('#'+str).val('');
	return (false);
}

function checkmobile(mob)
{
	var mobile = $('#'+mob).val();
	//alert(mobile);
	//alert(mobile.match('[0-9]{10}'));*/
	
    //var filter = /^[6-7][0-9-+]+$/;
    //if (filter.test(mobile)) {
    var firstelem = mobile.charAt(0);

    if(parseInt(firstelem)>5 && parseInt(firstelem)<10 && mobile.length==10)
    {
        return true;
    }
    else {
		
		//for development purpose only
		
		//$.mobile.changePage( "#transferpointspg1", { transition: "slide"} );
		
		//for development purpose only
		
    	alert("Please put valid 10 digit mobile number");
        $('#'+mob).val('');
        return false;
		
		//for development purpose only
		
		
    }
}
function checkmobile_retsales(mtype)
{
	var mobile = $('#ret_mob_no').val();
	//alert(mobile);
	//alert(mobile.match('[0-9]{10}'));*/
	
    //var filter = /^[6-7][0-9-+]+$/;
    //if (filter.test(mobile)) {
    var firstelem = mobile.charAt(0);

    if(parseInt(firstelem)>5 && parseInt(firstelem)<10 && mobile.length==10)
    {
		getUsername_ret(mobile,mtype);
        return true;

    }
    else 
	{
		
		//for development purpose only
		
		//$.mobile.changePage( "#transferpointspg1", { transition: "slide"} );
		
		//for development purpose only
		
    	toast("Please put valid 10 digit mobile number");
        $('#ret_mob_no').val('');
		$('#ret_mob_name').val('');
        return false;
		
		//for development purpose only
		
		
    }
}

function gobackfromprofile()
{
	if(localStorage.getItem('cattype') == 'dealer' || localStorage.getItem('cattype') == 'SalesExecutive')
	{
		$.mobile.changePage( "#dealerhomepage", { transition: "none"} );
	}
	else
	{


$('#username').val(localStorage.getItem("usernameufifilters"));
		                       var pass = localStorage.getItem("passwordufifilters");
	                         if(pass.length>=4)
						       {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#codeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						        }
	                          // $('#password_myacc').val(localStorage.getItem("passwordufifilters"));
							   user.mobile=localStorage.getItem("usernameufifilters");
							   //console.log("in ready");
						
						authenticate();
					

		/*if(!pendingprofile)
			$.mobile.changePage( "#homepage", { transition: "none"} );
		else
		{


			toast('Please complete your profile to get approved');
			$.mobile.changePage( "#profilepage2", { transition: "none"} );
		}
		*/
	}
}
function gobackfromrewards()
{
	if(localStorage.getItem('cattype') == 'dealer')
	{
		$.mobile.changePage( "#dealerhomepage", { transition: "none"} );
	}
	else if(localStorage.getItem('cattype') == 'SalesExecutive')
	{
		$.mobile.changePage( "#dealerhomepage_se", { transition: "none"} );
	}
	else
	{
		$.mobile.changePage( "#homepage", { transition: "none"} );	
	}
}

function gobackfromtnc()
{
	var pass = '';
	var cattype = localStorage.getItem('cattype');
	if(cattype == 'Painter' || cattype == 'Retailer' || cattype == 'Mechanic')
		pass = localStorage.getItem('passwordufifilters');
	else if(cattype=='Dealer' ||  cattype=='dealer')
		pass = localStorage.getItem('userpassloyal_ufi');

	if(typeof pass == undefined || pass == null)
		pass = '';
	if(pass != '')
	{
		if(localStorage.getItem('cattype') == 'dealer' || localStorage.getItem('cattype') == 'SalesExecutive')
		{
			$.mobile.changePage( "#dealerhomepage", { transition: "none"} );
		}
		else
		{
			$.mobile.changePage( "#homepage", { transition: "none"} );	
		}
	}
	else
	{
		if(localStorage.getItem('cattype') == 'dealer')
		{
			document.getElementById("dealer_headlbl").innerHTML= 'Distributor/Wholesaler';
			$.mobile.changePage( "#page-forgot-password_dealer", { transition: "none"} );
		}
		else if(localStorage.getItem('cattype') == 'SalesExecutive')
		{
			$.mobile.changePage( "#page-forgot-password_se", { transition: "none"} );
		}
		else
		{
			$.mobile.changePage( "#page-forgot-password", { transition: "none"} );
		}

		
	}
}

function showScannew()
{
	if(localStorage.getItem('cattype') == 'dealer')
	{
		$.mobile.changePage( "#dealerhomepage", { transition: "none"} );
	}
	else if((localStorage.getItem('cattype') == 'Retailer'))
	{
		$.mobile.changePage( "#scanpage_ret", { transition: "none"} );	
	}
	else if((localStorage.getItem('cattype') == 'Painter'))
	{
		$.mobile.changePage( "#scanpage_painter", { transition: "none"} );	
	}
	else
	{
		$.mobile.changePage( "#homepage", { transition: "none"} );	
	}
}

function gobackfromscan()
{
	
        /*try{
        QRScanner.hide(function(status){});
        }catch(error)
        {
         QRScanner.destroy(function(status){});   
        }*/

	if(localStorage.getItem('cattype') == 'dealer')
	{
		$.mobile.changePage( "#dealerhomepage", { transition: "none"} );
	}
	else if( localStorage.getItem('cattype') == 'SalesExecutive')
	{
		$.mobile.changePage( "#dealerhomepage_se", { transition: "none"} );
	}
	else
	{
		$.mobile.changePage( "#homepage", { transition: "none"} );	
	}
}


function transferpoints(ttype)
{
	$.mobile.changePage( "#transferpointspg", { transition: "none"} );
	//alert(ttype);
	if(ttype == 'Gift')
	{
	document.getElementById("transferhead").innerHTML = 'Transfer';
	$("#giftbtn").css("display","block");
	$("#revokebtn").css("display","none");
	}
	else if(ttype == 'Revoke')
	{
	document.getElementById("transferhead").innerHTML = 'Revoke';
	$("#revokebtn").css("display","block");
	$("#giftbtn").css("display","none");
	}
}

function showdealeremplist()
{

  $.mobile.changePage( "#dealeremplist", { transition: "none"} );	
  var str='';
   
  $.ajax({
   url: SERVER2+'get_district_member_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
	data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','district':localStorage.getItem("district_ufi")},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
  
   //called when successful
   //console.log(JSON.stringify(data));
        var str = '';
        for (var i = 0; i < data.data.length; i++)
			{
			  
              str +='<div class="store_details">';
			  str +='<h3><span>Name : '+checkforundefined(data.data[i].FirstName)+' '+checkforundefined(data.data[i].LastName)+'</span><span style="float:right;" ><img src="img/opt_icon.png" style="width:25px" class="opt" onclick="javascript:optionsPopup(\''+data.data[i].Mobileno+'\',\''+data.data[i].Email+'\',\''+data.data[i].MemberCategory+'\',\''+checkforundefined(data.data[i].FirstName)+'\',\''+checkforundefined(data.data[i].LastName)+'\',\''+data.data[i].HomeNo+'\',\''+data.data[i].ElectricianId+'\',\''+data.data[i].Floor_flat+'\',\''+data.data[i].City+'\',\''+data.data[i].PostalCode+'\',\''+data.data[i].District+'\',\''+data.data[i].State+'\',\''+data.data[i].PanCardNo+'\',\''+data.data[i].RefCode+'\',\''+data.data[i].ShopName+'\',\''+checkforundefined(data.data[i].GstNo)+'\',\''+checkforundefined(data.data[i].ShopEstablishmentCert)+'\',\''+checkforundefined(data.data[i].CinNo)+'\');"/></span></h3>';
			  str +='<h4>Type : '+data.data[i].MemberCategory+'</h4>';
			  str +='<h4 class="contact_number">Contact No : <a href="tel:'+data.data[i].Mobileno+'">'+data.data[i].Mobileno+'</a></h4>';
			  str +='<h4 class="contact_email">Email ID : <a href="mailto:'+data.data[i].Email+'">'+data.data[i].Email+'</a></h4>';
			  str +='<h4>State : '+checkforundefined(data.data[i].State)+'</h4>';
			  str +='<h4>District : '+checkforundefined(data.data[i].District)+'</h4>';
			  str +='<h4>City : '+checkforundefined(data.data[i].City)+'</h4>';
			  /*str +='<table data-role="none" class="ui-responsive" id="tbl">'; 
			  str +='<tbody>';
			  str +='<tr><td>Type</td><td>'+checkforundefined(data.data[i].monthlyTarget)+'</td></tr>';
			  str +='<tr><td>Claimed</td><td>'+checkforundefined(data.data[i].achievedTarget)+'</td></tr>';
			  str +='<tr><td>Validated</td><td>'+checkforundefined(data.data[i].achievedApprovedTarget)+'</td></tr>';
			  str +='</tbody></table>';*/
			  str +='</div>';       
                       
             } 
     
	 
	  $("#dealeremplist .ui-content").html(str);
   
   
    },
    error: function(xhr, textStatus, errorThrown) {

    }
  });
  
}
function optionsPopup(mob,email,cat,fname,lname,othermob,eid,add,city,pincode,dist,state,pancardno,refcode,shopname,gstno,shopestablish,cin)
{
//alert('here in optionpop');
	var str='';

	str+='<ul>';
	str+='<li><a href="javascript:myEdit(\''+mob+'\',\''+email+'\',\''+cat+'\',\''+fname+'\',\''+lname+'\',\''+othermob+'\',\''+eid+'\',\''+add+'\',\''+city+'\',\''+pincode+'\',\''+dist+'\',\''+state+'\',\''+pancardno+'\',\''+refcode+'\',\''+shopname+'\',\''+gstno+'\',\''+shopestablish+'\',\''+cin+'\');">Edit</a></li>';
	str+='<li><a href="javascript:myApprove(\''+mob+'\');">Approve</a></li>';
	str+='<li><a href="javascript:mydisApprove(\''+mob+'\');">Unapprove</a></li>';
	//str+='<li><a href="javascript:myDelete(\''+mob+'\',\''+email+'\',\''+cat+'\',\''+fname+'\',\''+lname+'\');">Delete</a></li>';
	str+='</ul>';

	document.getElementById("tap_options1").innerHTML=str;

	$("#optionspop1").popup();
	$("#optionspop1").popup("open");
}

function myEdit(mob,email,cat,fname,lname,othermob,eid,add,city,pincode,dist,state,pancardno,refcode,shopname,gstno,shopestablish,cin)
{

	if(cat=='Painter')
	{

		$('#mobile1').val(mob);
		$('#email1').val(email);
		$('#fname1').val(fname);
		$('#lname1').val(lname);
		$('#type1').val(cat);

		$('#othermobile1').val(othermob);
		$('#eid1').val(eid);
		$('#address1').val(add);
		$('#city1').val(city);
		$('#pincode1').val(pincode);
		$('#dist1').val(dist);
		$('#state1').val(state);
		$('#pancardno1').val(pancardno);
		$('#refcode1').val(refcode);

		document.getElementById("btntype1").innerHTML= '<a href="javascript:editcounterboy(\''+cat+'\');" id="counter_button1" class="btnclass2">Submit</a>';

		$.mobile.changePage( "#editcounterpg1", { transition: "none"} );

	}
	else if(cat=='Retailer' || cat=='Dealer')
	{
		$('#mobile2').val(mob);
		$('#email2').val(email);
		$('#fname2').val(fname);
		$('#lname2').val(lname);
		$('#type2').val(cat);

		$('#othermobile2').val(othermob);
		$('#eid2').val(eid);
		$('#address2').val(add);
		$('#city2').val(city);
		$('#pincode2').val(pincode);
		$('#dist2').val(dist);
		$('#state2').val(state);
		$('#pancardno2').val(pancardno);
		$('#refcode2').val(refcode);

		$('#shopname2').val(shopname);
		$('#gstno2').val(gstno);
		$('#shopestablish2').val(shopestablish);
		$('#cin2').val(cin);


		document.getElementById("btntype2").innerHTML= '<a href="javascript:editcounterboy(\''+cat+'\');" id="counter_button1" class="btn btn_primary">Submit</a>';

		$.mobile.changePage( "#editcounterpg2", { transition: "none"} );
	}
	else if(cat=='Mechanic')
	{
		$('#mobile2').val(mob);
		$('#email2').val(email);
		$('#fname2').val(fname);
		$('#lname2').val(lname);
		$('#type2').val(cat);

		$('#othermobile2').val(othermob);
		$('#eid2').val(eid);
		$('#address2').val(add);
		$('#city2').val(city);
		$('#pincode2').val(pincode);
		$('#dist2').val(dist);
		$('#state2').val(state);
		$('#pancardno2').val(pancardno);
		$('#refcode2').val(refcode);

		$('#shopname2').val(shopname);
		$('#gstno2').val(gstno);
		$('#shopestablish2').val(shopestablish);
		$('#cin2').val(cin);


		document.getElementById("btntype2").innerHTML= '<a href="javascript:editcounterboy(\''+cat+'\');" id="counter_button1" class="btn btn_primary">Submit</a>';

		$.mobile.changePage( "#editcounterpg2", { transition: "none"} );
	}

}


function myApprove(mdiv)
{
	var mob = $('#'+mdiv).val();
	var cattype = localStorage.getItem('cattype');
	$.ajax({
//https://ufifilters.mloyalretail.com/apis/approve_member_json_api.asp?mobileno=9818747077&isApproved=1&isApprovedBy=RETAILER
	   url: SERVER2+'approve_member_json_api.asp',
	   type: 'GET',
	   timeout: 50000,
		//dataType: 'json',
		data: {'mobileno': mob, 'IsApproved': '1' ,'isApprovedBy': cattype},
		complete: function(xhr, textStatus) {
	   //called when complete
		},
		success: function(data, textStatus, xhr) {
	  
			 //console.log('Data:'+JSON.stringify(data));

			  if(data.toLowerCase()=='success')
			  {
				 toast('Approved sucessfully');
              }
			  else
			  {
				 toast('Error in approval');
			  }

			  //$("#optionspop1").popup("close");
			  gobackfromrewards();
	   
		},
		error: function(xhr, textStatus, errorThrown) {
			toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
   
	
}
function mydisApprove(mdiv)
{
	var mob = $('#'+mdiv).val();
	var cattype = localStorage.getItem('cattype');
	$.ajax({
//https://ufifilters.mloyalretail.com/apis/approve_member_json_api.asp?mobileno=9818747077&isApproved=1&isApprovedBy=RETAILER
	   url: SERVER2+'approve_member_json_api.asp',
	   type: 'GET',
	   timeout: 50000,
		//dataType: 'json',
	    data: {'mobileno': mob, 'IsApproved': '0' ,'isApprovedBy': cattype},
		complete: function(xhr, textStatus) {
	   //called when complete
		},
		success: function(data, textStatus, xhr) {
	  
			 //console.log('Data:'+JSON.stringify(data));

			  if(data.toLowerCase()=='success')
			  {
				 toast('Unapproved sucessfully');
              }
			  else
			  {
				 toast('Error in disapproval');
			  }

			  //$("#optionspop1").popup("close");
			  gobackfromrewards();
	   
		},
		error: function(xhr, textStatus, errorThrown) {
			toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
   
	
}
function mydelete1(mdiv)
{
	var mobno = $('#'+mdiv).val();
	mydelete(mobno);
}
function mydelete(mobno)
{
	
	//https://ufifilters.mloyalretail.com/apis/reactivate_member_json_api.asp?mobileno=9818747077&isActive=0
	$.ajax({
    url: SERVER2+'reactivate_member_json_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'text',
    data: {'mobileno':mobno,'isActive':'0'},
    complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {
      console.log("HERE");
      if(data.toLowerCase()=='success')
		{
			toast('Deleted sucessfully');
        }
	  else
		{
			toast('Error in deleting');
		}
	  gobackfromrewards();
    },
    error: function(xhr, textStatus, errorThrown) {

    }
  });
}

/*function myDelete(mob,cat,fname,lname)
{
	$('#mobile1').val(mob);
	$('#email1').val(email);
	$('#fname1').val(fname);
	$('#lname1').val(lname);
	$('#type1').val(cat);

	document.getElementById("btntype").innerHTML= '<a href="javascript:deletecounterboy();" id="counter_button3" class="btnclass2">Delete</a>';

	$.mobile.changePage( "#editcounterpg", { transition: "none"} );
}*/

function editcounterboy(cat)
{

  if(cat=='Painter')
  {
		var mobileno = $('#mobile1').val();
		var ename =   $('#fname1').val()+' '+ $('#lname1').val();
		var othermobile =  $('#othermobile1').val();
		var ephoto = '';
		var eid = $('#eid1').val();
		var add = $('#address1').val();
		var city = $('#city1').val();
		var town = '';
		var village = '';
		var pincode = $('#pincode1').val();
		var dist = $('#dist1').val();
		var state = $('#state1').val();
		var email = $('#email1').val();
		var pancardno = $('#pancardno1').val();
		var refcode = $('#refcode1').val();

	if(ValidateEmail(email) === false)
    {
		toast("You have entered an invalid email address!");
    }
	else if(pincode.length != 6)
	{
		toast("You have entered an invalid pincode!");
	}
	else
	{
    
	$.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				'mobileno': mobileno,
				'ElectricianName': ename,
				'other_mobile_no': othermobile,
				'Photo': ephoto,
				'Electrician_ID': eid,
				'Address': add,
				'City': city,
				'Town': town,
				'Village': village,
				'PostalCode': pincode,
				'District': dist,
				'State': state,
				'Email': email,
				'Pan_card_no': pancardno,
				'Ref_code': refcode,
				'Membertype': 'Painter'
				
			},
			success: function(data, textStatus, xhr) {

				
				localStorage.setItem("profiledone_ufi","Yes");
				localStorage.setItem("profiletype_ufi","Painter");
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						toast('Your profile has been updated successfully.');

						user.name=ename;
						user.emailid=email;

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
		
				
				$.mobile.changePage( "#dealerhomepage", {transition: "flip"} );
		         
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
}
	}

  else if(cat=='Retailer')
  {
		var mobileno = $('#mobile2').val();
		var ownername =   $('#fname2').val()+' '+ $('#lname2').val();
		var othermobile =  $('#othermobile2').val();
		var ephoto = '';
		var eid = $('#eid2').val();
		var add = $('#address2').val();
		var city = $('#city2').val();
		var town = '';
		var village = '';
		var pincode = $('#pincode2').val();
		var dist = $('#dist2').val();
		var state = $('#state2').val();
		var email = $('#email2').val();
		var pancardno = $('#pancardno2').val();
		var refcode = $('#refcode2').val();

		var shopname = $('#shopname2').val();
		var gstno = $('#gstno2').val();
		var shopestablish = $('#shopestablish2').val();
		//var ownername = $('#update_owner1').val();
		var shopimg = '';

    if(ValidateEmail(email) === false)
    {
		toast("You have entered an invalid email address!");
    }
	else if(pincode.length != 6)
	{
		toast("You have entered an invalid pincode!");
	}
	else
	{
    
	$.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				
				'mobileno': mobileno,
				'Shop_Name': shopname,
				'GSTNo': gstno,
				'Shop_Establishment_Cert': shopestablish,
				'PhotoofShop': shopimg,
				'OwnerName': ownername,
				'other_mobile_no': othermobile,
				'Photo': ephoto,
				'PersonalID': eid,
				'Address': add,
				'City': city,
				'Town': town,
				'Village': village,
				'PostalCode': pincode,
				'District': dist,
				'State': state,
				'Email': email,
				'Pan_card_no': pancardno,
				'Membertype': 'Retailer'
				
			},
			success: function(data, textStatus, xhr) {

				
				localStorage.setItem("profiledone_ufi","Yes");
				localStorage.setItem("profiletype_ufi","Painter");
				
				if (data.indexOf("Success")>=0)
				{
					   
					   
						toast('Your profile has been updated successfully.');

						user.name=ename;
						user.emailid=email;

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
		
				
				$.mobile.changePage( "#dealerhomepage", {transition: "flip"} );
		         
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
}
	}
	  else if(cat=='Dealer')
	  {
			var mobileno = $('#mobile2').val();
			var ownername =   $('#fname2').val()+' '+ $('#lname2').val();
			var othermobile =  $('#othermobile2').val();
			var ephoto = '';
			var eid = $('#eid2').val();
			var add = $('#address2').val();
			var city = $('#city2').val();
			var town = '';
			var village = '';
			var pincode = $('#pincode2').val();
			var dist = $('#dist2').val();
			var state = $('#state2').val();
			var email = $('#email2').val();
			var pancardno = $('#pancardno2').val();
			var refcode = $('#refcode2').val();

			var shopname = $('#shopname2').val();
			var gstno = $('#gstno2').val();
			var shopestablish = $('#shopestablish2').val();
			//var ownername = $('#update_owner1').val();
			var shopimg = '';

if(ValidateEmail(email) === false)
    {
		toast("You have entered an invalid email address!");
    }
	else if(pincode.length != 6)
	{
		toast("You have entered an invalid pincode!");
	}
	else
	{
		
		$.ajax({
				url: SERVER+'mloyalprofileupdate.asp',
				type: 'GET',
				timeout: 30000,
				data: {
					
					'mobileno': mobileno,
					'Shop_Name': shopname,
					'GSTNo': gstno,
					'Shop_Establishment_Cert': shopestablish,
					'PhotoofShop': shopimg,
					'OwnerName': ownername,
					'other_mobile_no': othermobile,
					'Photo': ephoto,
					'PersonalID': eid,
					'Address': add,
					'City': city,
					'Town': town,
					'Village': village,
					'PostalCode': pincode,
					'District': dist,
					'State': state,
					'Email': email,
					'Pan_card_no': pancardno,
					'Membertype': 'Dealer'
					
				},
				success: function(data, textStatus, xhr) {

					
					localStorage.setItem("profiledone_ufi","Yes");
					localStorage.setItem("profiletype_ufi","Painter");
					
					if (data.indexOf("Success")>=0)
					{
						   
						   
							toast('Your profile has been updated successfully.');

							user.name=ename;
							user.emailid=email;

					}
					else if(data=='Failed')
						toast('Update failed.');
					else
						toast(data);
			
					
					$.mobile.changePage( "#dealerhomepage", {transition: "flip"} );
					 
					
				},
				error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet');
				}
			});
	}
		}

	  else if(cat=='Mechanic')
	  {
			var mobileno = $('#mobile2').val();
			var ownername =   $('#fname2').val()+' '+ $('#lname2').val();
			var othermobile =  $('#othermobile2').val();
			var ephoto = '';
			var eid = $('#eid2').val();
			var add = $('#address2').val();
			var city = $('#city2').val();
			var town = '';
			var village = '';
			var pincode = $('#pincode2').val();
			var dist = $('#dist2').val();
			var state = $('#state2').val();
			var email = $('#email2').val();
			var pancardno = $('#pancardno2').val();
			var refcode = $('#refcode2').val();

			var shopname = $('#shopname2').val();
			var gstno = $('#gstno2').val();
			var shopestablish = $('#shopestablish2').val();
			var cin = $('#cin2').val();
			var shopimg = '';

			if(ValidateEmail(email) === false)
		    {
				toast("You have entered an invalid email address!");
		    }
			else if(pincode.length != 6)
			{
				toast("You have entered an invalid pincode!");
			}
			else
			{
		
		$.ajax({
				url: SERVER+'mloyalprofileupdate.asp',
				type: 'GET',
				timeout: 30000,
				data: {
					
			    'mobileno': mobileno,
				'Shop_Name': shopname,
				'CINNo': cin,
				'other_mobile_no': othermobile,
				'Photo': ephoto,
				'PersonalID': eid,
				'Address': add,
				'City': city,
				'Town': town,
				'Village': village,
				'PostalCode': pincode,
				'District': dist,
				'State': state,
				'Email': email,
				'Pan_card_no': pancardno,
				'Membertype': 'Mechanic'
					
				},
				success: function(data, textStatus, xhr) {

					
					localStorage.setItem("profiledone_ufi","Yes");
					localStorage.setItem("profiletype_ufi","Painter");
					
					if (data.indexOf("Success")>=0)
					{
						   
						   
							toast('Your profile has been updated successfully.');

							user.name=ename;
							user.emailid=email;

					}
					else if(data=='Failed')
						toast('Update failed.');
					else
						toast(data);
			
					
					$.mobile.changePage( "#dealerhomepage", {transition: "flip"} );
					 
					
				},
				error: function(xhr, textStatus, errorThrown) {
					toast('Could not connect to Server, make sure you are connected to Internet');
				}
			});
			}
		}

}

function giftpoints(type)
{
	 var mob = $('#retmobile1').val();

	 var pts = $('#retpoints1').val();
	 var amt = $('#retamount1').val();
	 var billno = $('#billno').val();
	 var reason = $('#revokereason').val();
	 var remarks = $('#billno').val();
	 if(type == 'Revoke')
		billno = '';

	
	 var gifttype = type;
	 
	 if(mob=='' || pts=='' || amt==''){
		 toast('Mandatory fields cannot be blank');
	 }
	 else if(mob.length==10){

         $.ajax({
            
			url: SERVER2+'add_retailer_points_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobileno': mob,
				'points': pts,
				'amount': amt,
				'transtype': gifttype,
				'storeid': localStorage.getItem('store_id'),
				'billno':billno,
				'Remarks1':reason,
				'Remarks2':remarks
					
				},
			
			success: function(data, textStatus, xhr) {
				
			console.log('Data:'+JSON.stringify(data));
			

			if(data.error.length>0)
			{
				toast(data.error);
			}
			else
			{
				
				if(gifttype=='Revoke'){

					 $.mobile.changePage( "#transfersuccess", {transition: "none"} );
				 var now = (new Date()).toString().split(' ').splice(0,4).join(' ');
				 var date = new Date();
				 var minutes = date.getMinutes();
				 var hour = date.getHours();
				 var ampm = hour >= 12 ? 'pm' : 'am';
				  hour = hour % 12;
				  hour = hour ? hour : 12; // the hour '0' should be '12'
				  minutes = minutes < 10 ? '0'+minutes : minutes;
				  var dd = date.getDate();
				 var mm = parseInt(date.getMonth())+1;
				 mm = mm < 10 ? '0'+mm : mm;
				 var yy = date.getFullYear();
				 document.getElementById("transfermsg").innerHTML = 'Revoke Successfully!!!<img src="assets/images/success_icon.png" style="float: right" alt=""/>';
				
		         document.getElementById("transferredpoints").innerHTML = pts+' Points';
		         document.getElementById("transferredpoints1").innerHTML = pts+' points';
		         document.getElementById("currdttime").innerHTML= dd+'/'+mm+'/'+yy+' '+hour+':'+minutes+' '+ampm;
				  document.getElementById("sussmsg").innerHTML= '<h4>deducted from your <strong>Dealer Point</strong></h4>';
				  $('a#transmore_btn').text('Revoke More');
				}
				else
				{
				 $.mobile.changePage( "#transfersuccess", {transition: "none"} );
				 var now = (new Date()).toString().split(' ').splice(0,4).join(' ');
				 var date = new Date();
				 var minutes = date.getMinutes();
				 var hour = date.getHours();
				 var ampm = hour >= 12 ? 'pm' : 'am';
				  hour = hour % 12;
				  hour = hour ? hour : 12; // the hour '0' should be '12'
				  minutes = minutes < 10 ? '0'+minutes : minutes;
				 var dd = date.getDate();
				 var mm = parseInt(date.getMonth())+1;
				 mm = mm < 10 ? '0'+mm : mm;
				 var yy = date.getFullYear();
				  document.getElementById("transfermsg").innerHTML = 'Transfer Successfully!!!<img src="assets/images/success_icon.png" style="float: right" alt=""/>';
				
		         document.getElementById("transferredpoints").innerHTML = pts+' Points';
				 if(mob=='9711090909')
					pts = parseInt(pts)/4;
		         document.getElementById("transferredpoints1").innerHTML = pts+' points';
		         document.getElementById("currdttime").innerHTML= dd+'/'+mm+'/'+yy+' '+hour+':'+minutes+' '+ampm;
				  document.getElementById("sussmsg").innerHTML= '<h4>Added to your <strong>Dealer Point</strong></h4>';
				  $('a#transmore_btn').text('Transfer More');
				}
				 $('#retmobile1').val('');
				 $('#retpoints1').val('');
				 $('#retamount1').val('');
				 $('#billno').val('');
				 $('#revokereason').val('');
				 
			}
			 
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});
         	/* var now = new Date();
	         document.getElementById("transferredpoints").innerHTML = pts+' Points';
	         document.getElementById("transferredpoints1").innerHTML = pts+' points';
	         document.getElementById("currdttime").innerHTML= now;
	         $.mobile.changePage( "#transfersuccess", {transition: "none"} );
			 */
             
  }else{
   toast('Please enter 10 digits mobile number');
  }
}

function showdashboard()
{

	var cattype = localStorage.getItem('cattype');

					if(cattype=='dealer')
					{

						$('#dealerusername').val(localStorage.getItem("usernamemloyal_ufi"));
	                           $('#dealer_mobileno').val(localStorage.getItem("usermobilemloyal_ufi"));
	                           //$('#dealerpassword').val(localStorage.getItem("userpassloyal_ufi"));
	                           var pass = localStorage.getItem("userpassloyal_ufi");
							    if(pass.length>=4)
						       {
						       /*var i=4;
						       while(i>0)
						                  {
						                    $('#dealercodeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }*/

									$('#dealerpassword').val(pass);
						        }
						        $.mobile.changePage( "#gifslider", { transition: "none"} );
								setTimeout( function() {
								    dealerauthenticate();
								}, 1200);  // 2 seconds
					}
					else if(cattype=='SalesExecutive')
					{

							   $('#dealerusername_se').val(localStorage.getItem("usernamemloyal_ufi"));
	                           $('#dealer_mobileno_se').val(localStorage.getItem("usermobilemloyal_ufi"));
	                           //$('#dealerpassword').val(localStorage.getItem("userpassloyal_ufi"));
	                           var pass = localStorage.getItem("userpassloyal_ufi");
							   if(pass.length>=4)
						       {
						       /*var i=4;
						       while(i>0)
						                  {
						                    $('#dealercodeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }*/
										 $('#dealerpassword_se').val(pass);
						        }
						        $.mobile.changePage( "#gifslider", { transition: "none"} );
								setTimeout( function() {
								    dealerauthenticate_se();
								}, 2000);  // 2 seconds
					}
					else
					{
							 $('#username').val(localStorage.getItem("usernameufifilters"));
	                         var pass = localStorage.getItem("passwordufifilters");
	                         if(pass.length>=4)
						       {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#codeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						        }
	                          // $('#password_myacc').val(localStorage.getItem("passwordufifilters"));
							   user.mobile=localStorage.getItem("usernameufifilters");
							   //console.log("in ready");
							   $.mobile.changePage( "#gifslider", { transition: "none"} );
								setTimeout( function() {
								    authenticate();
								}, 1500);  // 2 seconds
					}
}

function showhome()
{
	$("#wait").css("display","none");

	$('#emptype').val(localStorage.getItem("usermtype_ufifilters"));
   //$("#emptype").selectmenu('refresh');
   try{
	$( "#sidebar" ).panel( "close" );
	}catch(err) 
	{	}
   if(localStorage.getItem("usermtype_ufifilters")=='Painter')
   {
		$('#referdiv').css('display','flex');
		$('#referdiv2').css('display','none');
   		$('#mylistdiv').css('display','none');
   		//$('#notificationsdiv').css('display','none');
		$('#counterdiv').css('display','none');
		$('#walletdiv').css('display','none');
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','none');
		document.getElementById("homepointslabel").innerHTML='My Wallet';

   }
   if(localStorage.getItem("usermtype_ufifilters")=='Retailer')
   {
	    //$('#referdiv').css('display','none');
		//$('#referdiv2').css('display','flex');
   		$('#mylistdiv').css('display','none');
   		$('#rewardstorediv').css('display','flex');
   		$('#counterdiv').css('display','none');
   		//$('#notificationsdiv').css('display','none');
   		$('#walletdiv').css('display','none');
   		$('#referdiv').css('display','none');
		$('#referdiv2').css('display','flex');
		$('#gamesdiv').css('display','none');
		$('#giftsdiv').css('display','none');
		$('#gamesdivpanel').css('display','none');
		$('#giftsdivpanel').css('display','none');
		$('#giftshistpanel').css('display','none');
		$('#pipes_billupload_panel').css('display','none');
		$('#dist_details_panel').css('display','block');
		$('#sales_data_panel').css('display','block');
   		document.getElementById("homepointslabel").innerHTML='My Wallet';
   		 user.balance = localStorage.getItem('balance');
   		 user.cashback = localStorage.getItem('cashback');
   }
   if(localStorage.getItem("usermtype_ufifilters")=='Mechanic')
   {
	    $('#referdiv').css('display','none');
		$('#referdiv2').css('display','none');
 		$('#scandiv').css('display','none');
		$('#scandiv_panel_other').css('display','none');
		$('#pipes_billupload_panel').css('display','block');
		$('#dist_details_panel').css('display','none');
		$('#sales_data_panel').css('display','block');
		$('#mylistdiv').css('display','none');
		$('#counterdiv').css('display','none');
   		$('#rewardstorediv').css('display','flex');
   		//$('#notificationsdiv').css('display','block');
   		$('#walletdiv').css('display','none');
		$('#walletdivpanel').css('display','none');
		$('#gamesdiv').css('display','flex');
		$('#giftsdiv').css('display','flex');
		$('#gamesdivpanel').css('display','block');
		$('#giftsdivpanel').css('display','block');
		$('#giftshistpanel').css('display','block');
		$('#myapprovalsdiv').css('display','none');
		document.getElementById("homepointslabel").innerHTML='My Wallet';

   }
   if(localStorage.getItem("usermtype_ufifilters")=='Dealer' || localStorage.getItem("usermtype_ufifilters")=='dealer')
   {
 		$('#referdiv').css('display','none');
		$('#referdiv2').css('display','none');
		$('#counterdiv').css('display','flex');
		document.getElementById("homepointslabel").innerHTML='Dealer Points';

   }
   
   // localStorage.setItem('passworddd',pwd);
   
   //localStorage.setItem('def_store','gold Rajkot');
   if(typeof user.membertype==undefined || user.membertype==null)
   	user.membertype='';
	//console.log("user.firstname"+user.firstname);
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.city_ufi=='undefined' || user.city_ufi=='null' || user.city_ufi==null)
		user.city_ufi = '0';
 if(user.state_ck=='undefined' || user.state_ck=='null' || user.state_ck==null)
		user.state_ck = '0';
 /*if(user.photo=='undefined' || user.photo=='null' || user.photo==null || user.photo=='')
		user.photo = 'user_pic.png';
 if(user.doc=='undefined' || user.doc=='null' || user.doc==null)
		user.doc = 'my_membership_s.png';
 if(user.doc1=='undefined' || user.doc1=='null' || user.doc1==null)
		user.doc1 = 'my_membership_s.png';
 if(user.PhotoofShop=='undefined' || user.PhotoofShop=='null' || user.PhotoofShop==null)
		user.PhotoofShop = 'my_membership_s.png';*/
 if(user.created_on=='undefined' || user.created_on=='null' || user.created_on==null)
		user.created_on = 'Not available';
 if(user.isApproved=='undefined' || user.isApproved=='null' || user.isApproved==null)
		user.isApproved = 'Unknown Status';


	$('#update_firstname').val(user.firstname);
	$('#update_lastname').val(user.lastname);
	    var dob = user.dob.split('-');
		var mm = dob.length == 3 ? dob[1] : '';
		var dd = dob.length == 3 ? dob[0] : '';
		var yyyy = dob.length == 3 ? dob[2] : '';
		
		$('#update_dd').val(dd);
		$('#update_mm').val(mm);
		$('#update_yyyy').val(yyyy);
     
	$('#update_firstname1').val(user.firstname);
	$('#update_lastname1').val(user.lastname);
	$('#update_email1').val(user.emailid);
	
	document.getElementById("profile_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("profile_id").innerHTML='Mobile No '+user.id;
	document.getElementById("profile_join").innerHTML='UFI Filters Joining '+user.created_on;
	if(user.isBlocked == 'BLOCKED')
	   {
		document.getElementById("profile_isapproved").innerHTML= user.isBlocked+'!';
	   }
	else
	   {
		document.getElementById("profile_isapproved").innerHTML= user.isApproved+'!';
	   }
	//document.getElementById("profile_pic").src = user.photo;

     //$('#push_reg_no').val(reg_id);

//document.getElementById("barcontenthome").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span></a>';
document.getElementById("profilenm").innerHTML=user.firstname;//+' '+user.lastname;
document.getElementById("user_name_home").innerHTML=user.firstname+' '+user.lastname;
document.getElementById("user_points_home").innerHTML=user.balance;
if(localStorage.getItem("usermtype_ufifilters")=='Painter' || localStorage.getItem("usermtype_ufifilters")=='Retailer')
	{
		if(user.tot_failed_paytm_amount!='0')
			   {
				document.getElementById("user_points_home_oth").innerHTML=user.tot_failed_paytm_amount;

			   }
		else
			{

				document.getElementById("user_points_home_oth").innerHTML=user.cashback;
			}
	   }
else
	document.getElementById("user_points_home_oth").innerHTML=user.cashback;
if(localStorage.getItem("usermtype_ufifilters")=='Painter' || localStorage.getItem("usermtype_ufifilters")=='Retailer')
	{
		document.getElementById("user_wallet_home").innerHTML= user.cashback;
		if(user.tot_failed_paytm_amount!='0')
			   {
				document.getElementById("user_wallet_home").innerHTML= user.tot_failed_paytm_amount;
			   }
		else
			{
				if(localStorage.getItem("retaiter_type")=='Putty')
		{
			document.getElementById("user_wallet_home").innerHTML=user.cashback_painter;
		}
		else
		{
		document.getElementById("user_wallet_home").innerHTML=user.cashback;
		}
			}
	   }
else
	document.getElementById("user_wallet_home").innerHTML= user.cashback;

document.getElementById("user_id_home").innerHTML='Mem ID '+user.id;
document.getElementById("user_mobile_home").innerHTML='Mobile No '+user.mobile;
document.getElementById("user_id_home_panel").innerHTML=user.id;
document.getElementById("membershipid_panel").innerHTML='<img src="https://chart.googleapis.com/chart?cht=qr&chs=150x150&chld=L|1&chl='+user.firstname+'#'+user.membertype+'#'+user.id+'" class="img-responsive" alt=""/>';
//document.getElementById("username_wnew").innerHTML=user.firstname+' '+user.lastname;
//document.getElementById("userloc_wnew").innerHTML=user.district;

//document.getElementById("cardimage_self_cb").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("ppichome").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("ppicprofile").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
document.getElementById("cardImagemenu").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
//document.getElementById("userpic_wnew").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
//document.getElementById("cardimage_proof_cb").src = versionurl+'uploads/'+user.doc;

//document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+user.photo+'?'+Math.random();
//document.getElementById("cardimage_proof_ret").src = versionurl+'uploads/'+user.doc1;
//document.getElementById("cardimage_shop_ret").src = versionurl+'uploads/'+user.PhotoofShop;

$.mobile.changePage( "#homepage", {transition: "none"} );
}

function getUser()
{
	 $('#retmobile1').val('');
	 $('#retpoints1').val('');
	 $('#retamount1').val('');
	 $('#billno').val('');
	 $('#revokereason').val('');
	var mobile = $('#retmobile').val();
	
    var firstelem = mobile.charAt(0);

    if(parseInt(firstelem)>5 && parseInt(firstelem)<10)
    {
    	 $.ajax({
            
			url: SERVER2+'get_points_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobileno': mobile
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			console.log('Data:'+JSON.stringify(data));

			if(data.error!='')
			{
				toast(data.error);
				$('#retmobile').val('');
			}
			else
			{
				
				document.getElementById('transfertoname').innerHTML=data.data[0].CustomerName;
				document.getElementById('transname').innerHTML=data.data[0].CustomerName;
				document.getElementById('transshop').innerHTML=data.data[0].ShopName;
				document.getElementById('transferfromname').innerHTML=data.data[0].ShopName;
				document.getElementById('transmem').innerHTML='Dhan Barse Reg No. '+data.data[0].uniqueNum;
				document.getElementById('dealertrans_pts').innerHTML='Transferable Point Balance <span class="text-primary">'+localStorage.getItem('storepoint_r_ufi')+'</span>';
				$('#retmobile').val('');
				$('#retmobile1').val(mobile);
				if(transfertype == 'Transfer')
				{
					$('#transferbtndiv').css('display','block');
					$('#revokebtndiv').css('display','none');
					document.getElementById('transferheader').innerHTML = 'Transfer Points';
					document.getElementById('transfercontent').innerHTML = 'Points To Transfer';
					$('#billno').attr("placeholder", "Bill No.");
					$('#retamount1').attr("placeholder", "Sales Amt.");
					$('#revokereason').css("display", "none");
				}
				else if(transfertype == 'Revoke')
				{
					$('#transferbtndiv').css('display','none');
					$('#revokebtndiv').css('display','block');
					document.getElementById('transferheader').innerHTML = 'Revoke Points';
					document.getElementById('transfercontent').innerHTML = 'Points To Revoke';
					$('#billno').attr("placeholder", "Remarks");
					$('#retamount1').attr("placeholder", "Sales Return Amt.");
					$('#revokereason').css("display", "block");
				}
				$.mobile.changePage( "#transferpointspg1", {transition: "none"} );
			}
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});
             $('#retmobile1').val('');
        return true;
    }
    else {
		
		
    	alert("Please put valid 10 digit mobile number");
        $('#retmobile').val('');
        return false;
		
		
		
		
    }
}

function getUserRecent(mob)
{
	 $('#retmobile1').val('');
	 $('#retpoints1').val('');
	 $('#retamount1').val('');
	 $('#billno').val('');
	 $('#revokereason').val('');
	var mobile = mob;
	
    var firstelem = mobile.charAt(0);

    if(parseInt(firstelem)>5 && parseInt(firstelem)<10)
    {
    	 $.ajax({
            
			url: SERVER2+'get_points_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobileno': mobile
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			console.log('Data:'+JSON.stringify(data));

			if(data.error!='')
			{
				toast(data.error);
			}
			else
			{
				
				document.getElementById('transfertoname').innerHTML=data.data[0].CustomerName;
				document.getElementById('transname').innerHTML=data.data[0].CustomerName;
				document.getElementById('transshop').innerHTML=data.data[0].ShopName;
				document.getElementById('transferfromname').innerHTML=data.data[0].ShopName;
				document.getElementById('transmem').innerHTML='Dhan Barse Reg No. '+data.data[0].uniqueNum;
				document.getElementById('dealertrans_pts').innerHTML='Transferable Point Balance <span class="text-primary">'+localStorage.getItem('storepoint_r_ufi')+'</span>';
				$('#retmobile').val('');
				$('#retmobile1').val(mobile);
				if(transfertype == 'Transfer')
				{
					$('#transferbtndiv').css('display','block');
					$('#revokebtndiv').css('display','none');
					document.getElementById('transferheader').innerHTML = 'Transfer Points';
					document.getElementById('transfercontent').innerHTML = 'Points To Transfer';
					$('#billno').attr("placeholder", "Bill No.");
					$('#retamount1').attr("placeholder", "Sales Amt.");
					$('#revokereason').css("display", "none");
				}
				else if(transfertype == 'Revoke')
				{
					$('#transferbtndiv').css('display','none');
					$('#revokebtndiv').css('display','block');
					document.getElementById('transferheader').innerHTML = 'Revoke Points';
					document.getElementById('transfercontent').innerHTML = 'Points To Revoke';
					$('#billno').attr("placeholder", "Remarks");
					$('#retamount1').attr("placeholder", "Sales Return Amt.");
					$('#revokereason').css("display", "block");
				}
				$.mobile.changePage( "#transferpointspg1", {transition: "none"} );
			}
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});
             $('#retmobile1').val('');
        return true;
    }
    else {
		
		
    	alert("Please put valid 10 digit mobile number");
        $('#retmobile').val('');
        return false;
		
		
		
		
    }
}


function getUserRecentCon(mob)
{
	 $('#retmobile1').val('');
	 $('#retpoints1').val('');
	 $('#retamount1').val('');
	 $('#billno').val('');
	 $('#revokereason').val('');
	var mobile = mob;

	if(mobile.startsWith('+91')){
		
		mobile=mobile.substr(3,mobile.length);

		

	}

	if(mobile.startsWith('0')){
		
		mobile=mobile.substr(1,mobile.length);

		

	}

	
	
    var firstelem = mobile.charAt(0);

    if(parseInt(firstelem)>5 && parseInt(firstelem)<10)
    {
    	 $.ajax({
            
			url: SERVER2+'get_points_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobileno': mobile
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			console.log('Data:'+JSON.stringify(data));

			if(data.error!='')
			{
				toast(data.error);
			}
			else
			{
				
				document.getElementById('transfertoname').innerHTML=data.data[0].CustomerName;
				document.getElementById('transname').innerHTML=data.data[0].CustomerName;
				document.getElementById('transshop').innerHTML=data.data[0].ShopName;
				document.getElementById('transferfromname').innerHTML=data.data[0].ShopName;
				document.getElementById('transmem').innerHTML='Dhan Barse Reg No. '+data.data[0].uniqueNum;
				document.getElementById('dealertrans_pts').innerHTML='Transferable Point Balance <span class="text-primary">'+localStorage.getItem('storepoint_r_ufi')+'</span>';
				$('#retmobile').val('');
				$('#retmobile1').val(mobile);
				if(transfertype == 'Transfer')
				{
					$('#transferbtndiv').css('display','block');
					$('#revokebtndiv').css('display','none');
					document.getElementById('transferheader').innerHTML = 'Transfer Points';
					document.getElementById('transfercontent').innerHTML = 'Points To Transfer';
					$('#billno').attr("placeholder", "Bill No.");
					$('#retamount1').attr("placeholder", "Sales Amt.");
					$('#revokereason').css("display", "none");
				}
				else if(transfertype == 'Revoke')
				{
					$('#transferbtndiv').css('display','none');
					$('#revokebtndiv').css('display','block');
					document.getElementById('transferheader').innerHTML = 'Revoke Points';
					document.getElementById('transfercontent').innerHTML = 'Points To Revoke';
					$('#billno').attr("placeholder", "Remarks");
					$('#retamount1').attr("placeholder", "Sales Return Amt.");
					$('#revokereason').css("display", "block");
				}
				$.mobile.changePage( "#transferpointspg1", {transition: "none"} );
			}
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});
             $('#retmobile1').val('');
        return true;
    }
    else {
		
		
    	alert("Please select valid mobile number");
        $('#retmobile').val('');
        return false;
		
		
		
		
    }
}


function schemePopup()
{
	
	$.ajax({
          
			url: SERVER2+'get_scheme_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14'
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			//console.log('Data:'+JSON.stringify(data));
			var str='';

			if(data.error!='')
			{
				//toast(data.error);
				console.log(data.error);
			}
			else
			{

			    if(data.data.length>0)
				{
                    str+='<a href="#" class="location_block" style="text-align: center;color:#10b24d;">Schemes</a>';

					var str = '<div class="primary_section"><div class="primary_section_inner pt-30">';
					//for(var i=0;i<data.data.length;i++)
				    for(var i=0;i<2;i++)
					{
				
						if(etype.toLowerCase() == data.data[i].MemberType.toLowerCase())
						{
						str += '<div class="primary_block"> <a href="javascript:openpdf(\''+data.data[i].SchemeFile+'\')" class="what_new_item">';
						str += '<div class="item_img"><img src="assets/images/side_point_passbook.png" class="img-responsive" alt=""></div>';
						str += '<div class="item_brief"><p class="font_sm">Brand Name</p><h4 class="font_500">ufifilters</h4>';
						str += '<p class="font_sm">Scheme Name</p><h4 class="font_500">'+data.data[i].SchemeName+'</h4>';
						str += '<p class="font_sm">Effective From</p><h4 class="font_500">'+data.data[i].SchemeAddDate+'</h4>';
						str += '</div><div class="points_arrow"><img src="assets/images/arrow.png" class="img-responsive" alt=""></div>';
						str += '</a> </div>';
						}
					}
					str += '</div></div>';

					str+='<a href="#scheme" class="location_block" style="text-align: center;color:#e11e26;">Show All..</a>';

					document.getElementById("schemes_div").innerHTML=str;

					$('#schemes_pop').popup('open');
				
				}
				else
				{
					str+='<span style="text-align: center;display: block;margin: 0 auto;">No schemes found</span>';
					
					document.getElementById("schemes_div").innerHTML=str;

					// do not show offers popup in this case
				}

			  }
				
			 
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});

}


$(document).on('pageshow', '#scheme', function (event, ui) 
{
	    /*var sid=user.Store_Id;

		var etype = localStorage.getItem("cattype");

		 if(etype=='dealer' || etype=='Dealer')
		 {
			sid=store.store_id;
		 }*/
		
 		$.ajax({
          
			url: SERVER2+'get_scheme_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14'
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			//console.log('Data:'+JSON.stringify(data));

			if(data.error!='')
			{
				toast(data.error);
			}
			else
			{
				var str = '<div class="primary_section"><div class="primary_section_inner pt-30">';
				for(var i=0;i<data.data.length;i++)
				{
			
                    if(etype.toLowerCase() == data.data[i].MemberType.toLowerCase())
					{
					str += '<div class="primary_block"> <a href="javascript:openpdf(\''+data.data[i].SchemeFile+'\')" class="what_new_item">';
					str += '<div class="item_img"><img src="assets/images/side_point_passbook.png" class="img-responsive" alt=""></div>';
					str += '<div class="item_brief"><p class="font_sm">Brand Name</p><h4 class="font_500">ufifilters</h4>';
					str += '<p class="font_sm">Scheme Name</p><h4 class="font_500">'+data.data[i].SchemeName+'</h4>';
					str += '<p class="font_sm">Effective From</p><h4 class="font_500">'+data.data[i].SchemeAddDate+'</h4>';
					str += '</div><div class="points_arrow"><img src="assets/images/arrow.png" class="img-responsive" alt=""></div>';
					str += '</a> </div>';
					}
          		}
       			str += '</div></div>';
			}
             $("#scheme .ui-content").html(str);  
			 
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});

});

function showpointbal()
{
	//alert("ddddddddddd");
	$.mobile.changePage( "#point_balance", {transition: "none"} );
	$.ajax({
          
			url: SERVER2+'get_dealer_transaction_details_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'Store_code': localStorage.getItem('storecode_ufi')
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			//console.log('Data:'+JSON.stringify(data));

			if(data.error!='')
			{
				toast(data.error);
			}
			else
			{
				//Data:{"data":[{"Store_Id":231,"TransType":"Earn","Points ":"200","GiftToMobile":"","SaleAmount":"2000","bill_number":"6602DED5-5284-4D80-B854-2AF8F34AD0EB","Created_On":"10/7/2018 12:54:42 PM"}],"error":[]}
				var str = '';
				for(var i=0;i<data.data.length;i++)
				{
					if(data.data[i].TransType == 'Earn' )
					{
						var bn=data.data[i].bill_number;
						if(bn.indexOf('GOLD')>=0)
							bn='';
					var dt = data.data[i].Created_On.split(' ');
					var dt1 = dt[1].split(':');
					str +='<div class="recent_transfer">';
			        str +='<p class="recent_date">'+dt[0]+'</p>';
			        str +='<div class="primary_block"><div class="recent_block padding0_10px">';
			        str +='<div class="recent_user_icon"> <img src="assets/images/points_transfer_icon.png" class="img-responsive" alt=""/> </div>';
			        str +='<div class="recent_user_details">';

			       if(data.data[i].TransType == 'Revoke')
							str +='<p class="recent_detail_text">Points Revoked from '+data.data[i].Member_Name+'('+data.data[i].shop_name+').';
						else if(data.data[i].TransType == 'Redeem')
							str += '<p class="recent_detail_text">Points Redeemed from '+data.data[i].Member_Name+'('+data.data[i].shop_name+').';
						else if(data.data[i].TransType == 'Gift')
							str += '<p class="recent_detail_text">Points Gifted to '+data.data[i].Member_Name+'('+data.data[i].shop_name+').';
						else 
							str += '<p class="recent_detail_text">Points Earned from UFI Filters.';
			

					str += '<br>Sale of Rs. '+data.data[i].SaleAmount+'<br>';
			        str += 'Invoice No. '+bn+'<br>';
					str += dt1[0]+':'+dt1[1]+' '+dt[2]+'<br></p>';

					if(data.data[i].GiftToMobile=='919711090909')
						str += '</div><div class="recent_user_points"><h2>'+parseInt(data.data[i].Points)*4+'<span>Points</span></h2></div>';
					else
			        	str += '</div><div class="recent_user_points"><h2>'+data.data[i].Points+'<span>Points</span></h2></div>';
			        str += '</div></div></div>';
			    	}
          		}

       			
			}
             document.getElementById("transfers").innerHTML=str;      
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});
}



function showpointbal(transactions)
{
	
	if(typeof transactions == 'undefined' || transactions=='')
		transactions = 'All';
	$.mobile.changePage( "#point_balance", {transition: "none"} );
	document.getElementById("transfers").innerHTML='';  
	$.ajax({
          
			url: SERVER2+'get_dealer_transaction_details_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'Store_code': localStorage.getItem('storecode_ufi')
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			//console.log('Data:'+JSON.stringify(data));

			if(data.error!='')
			{
				toast(data.error);
			}
			else
			{
				//Data:{"data":[{"Store_Id":231,"TransType":"Earn","Points ":"200","GiftToMobile":"","SaleAmount":"2000","bill_number":"6602DED5-5284-4D80-B854-2AF8F34AD0EB","Created_On":"10/7/2018 12:54:42 PM"}],"error":[]}
				var str = '';

				console.log(JSON.stringify(data.data));

				console.log(transactions);
				//console.log(data.data[i].TransType);
				for(var i=0;i<data.data.length;i++)
				{
					if(transactions == 'All')
					{
						var bn=data.data[i].bill_number;
						if(bn.indexOf('GOLD')>=0)
							bn='';
						var dt = data.data[i].Created_On.split(' ');
						console.log('sssssss'+dt);
					    var dt1 = dt[1].split(':');
						str += '<div class="recent_transfer">';
						str += '<p class="recent_date">'+dt[0]+'</p>';
						str += '<div class="primary_block"><div class="recent_block padding0_10px">';
						str += '<div class="recent_user_icon"> <img src="assets/images/points_transfer_icon.png" class="img-responsive" alt=""/> </div>';
						str += '<div class="recent_user_details">';
						
						if(data.data[i].TransType == 'Revoke')
							str +='<p class="recent_detail_text">Points Revoked from '+data.data[i].Member_Name+'('+data.data[i].shop_name+').'
						else if(data.data[i].TransType == 'Redeem')
							str += '<p class="recent_detail_text">Points Redeemed from '+data.data[i].Member_Name+'('+data.data[i].shop_name+').'
						else if(data.data[i].TransType == 'Gift')
							str += '<p class="recent_detail_text">Points Gifted to '+data.data[i].Member_Name+'('+data.data[i].shop_name+').';
						else 
							str += '<p class="recent_detail_text">Points Earned from UFI Filters.';

						str += '<br>Sale of Rs. '+data.data[i].SaleAmount+'<br>';
						str += 'Invoice No. '+bn+'<br>';
						str += dt1[0]+':'+dt1[1]+' '+dt[2]+'<br></p>';
						if(data.data[i].GiftToMobile=='919711090909')
						str += '</div><div class="recent_user_points"><h2>'+parseInt(data.data[i].Points)*4+'<span>Points</span></h2></div>';
					else
			        	str += '</div><div class="recent_user_points"><h2>'+data.data[i].Points+'<span>Points</span></h2></div>';
						//str += '</div><div class="recent_user_points"><h2>'+data.data[i].Points+'<span>Points</span></h2></div>';
						str += '</div></div></div>';

					}
					else
					{
						var ttype=data.data[i].TransType;
						if(ttype=='Earn')
							ttype='Gift';

					if(ttype == transactions)
					{
					var dt = data.data[i].Created_On.split(' ');
					var dt1 = dt[1].split(':');
                	str +='<div class="recent_transfer">';
			        str +='<p class="recent_date">'+dt[0]+'</p>';
			        str +='<div class="primary_block"><div class="recent_block padding0_10px">';
			        str +='<div class="recent_user_icon"> <img src="assets/images/points_transfer_icon.png" class="img-responsive" alt=""/> </div>';
			        str +='<div class="recent_user_details">';
			       if(data.data[i].TransType == 'Revoke')
							str +='<p class="recent_detail_text">Points Revoked from '+data.data[i].Member_Name+'('+data.data[i].shop_name+').'
						else if(data.data[i].TransType == 'Redeem')
							str += '<p class="recent_detail_text">Points Redeemed from '+data.data[i].Member_Name+'('+data.data[i].shop_name+').'
						else if(data.data[i].TransType == 'Gift')
							str += '<p class="recent_detail_text">Points Gifted to '+data.data[i].Member_Name+'('+data.data[i].shop_name+').';
						else 
							str += '<p class="recent_detail_text">Points Earned from UFI Filters.';
					str += '<br>Sale of Rs. '+data.data[i].SaleAmount+'<br>';
			        str += 'Invoice No. '+data.data[i].bill_number+'<br>';
					str += dt1[0]+':'+dt1[1]+' '+dt[2]+'<br></p>';
					if(data.data[i].GiftToMobile=='919711090909')
						str += '</div><div class="recent_user_points"><h2>'+parseInt(data.data[i].Points)*4+'<span>Points</span></h2></div>';
					else
			        	str += '</div><div class="recent_user_points"><h2>'+data.data[i].Points+'<span>Points</span></h2></div>';
			       // str += '</div><div class="recent_user_points"><h2>'+data.data[i].Points+'<span>Points</span></h2></div>';
			        str += '</div></div></div>';
			    	}
					}
          		}

			}
             document.getElementById("transfers").innerHTML=str;      
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});
}
$(document).on('pageshow', '#dealers_point', function (event, ui) 
{
 		$.ajax({
          
			//url: SERVER2+'get_transactions_details_json_api.asp',
			url: SERVER2+'get_dealer_transaction_details_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'Store_code': localStorage.getItem('storecode_ufi')
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			console.log('Data:'+JSON.stringify(data));

			var str = '';

			if(data.error!='')
			{
				toast(data.error);
			}
			else
			{
				


				for(var i=0;i<data.data.length;i++)
				{
					var bn=data.data[i].bill_number;
						//if(bn.indexOf('CK')>=0)
						//	bn='';
					var dt = data.data[i].Created_On;
					//var dt1 = dt[1].split(':');

					str +='<div class="recent_transfer">';
			    str +='<p class="recent_date">'+dt+'</p>';
			    str +='<div class="primary_block"><div class="recent_block padding0_10px">';
			    

					if(data.data[i].TransType == 'New')
					{
					 str +='<div class="recent_user_icon"> <img src="assets/images/pointredused1.png" class="img-responsive" alt=""/> </div>';
			     str +='<div class="recent_user_details">';
					 str +='<p class="recent_detail_text">Wallet amount added:Rs. '+data.data[i].wallet_amt+'.<br>Sale of Rs. '+data.data[i].SaleAmount+'<br>';
			    
			    }
			    else
			    {
			    str +='<div class="recent_user_icon"> <img src="assets/images/pointredeem1.png" class="img-responsive" alt=""/> </div>';
			    str +='<div class="recent_user_details">';
			    str +='<p class="recent_detail_text">Wallet amount deducted:Rs. '+data.data[i].wallet_amt+'.<br>Sale of Rs. '+data.data[i].wallet_amt+' to '+data.data[i].Member_Name+'('+data.data[i].shop_name+')<br>';

          }

          	  str += 'Invoice No. '+bn+'<br></p>';
							//str += dt1[0]+':'+dt1[1]+' '+dt[2]+'<br>';
			        str += '</div>';
			        //str +='<div class="recent_user_points"><h2>'+data.data[i].Points+'<span>Points</span></h2></div>';
			        str += '</div></div></div>';

			    	}
         /*
         for(var i=0;i<data.data.length;i++)
				{
				  str+='<div class="customer">';

					str+='<div class="primary_block">';
				   
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Sale Amount</div><div class="ui-block-b"><span>'+data.data[i].SaleAmount+'</span></div></div>';
				   
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Bill No</div><div class="ui-block-b"><span>'+data.data[i].bill_number+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Bill Date</div><div class="ui-block-b"><span>'+checkforundefined(data.data[i].Created_On)+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Member Name</div><div class="ui-block-b"><span>'+data.data[i].Member_Name+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Shop Name</div><div class="ui-block-b"><span>'+checkforundefined(data.data[i].shop_name)+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Wallet Amt</div><div class="ui-block-b"><span>'+checkforundefined(data.data[i].wallet_amt)+'</span></div></div>';

					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Store Id</div><div class="ui-block-b"><span>'+data.data[i].Store_Id+'</span></div></div>';
				   
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a">Points</div><div class="ui-block-b"><span>'+data.data[i].Points+'</span></div></div>';

					//str+='<div class="ui-grid-b" style="background: floralwhite;"><div class="ui-block-a">Approval Mobile</div><div class="ui-block-b"><span>'+data.data[i].ApprovalMob+'</span></div></div>';

					//str+='<div class="ui-grid-b" ><div class="ui-block-a">Status</div><div class="ui-block-b"><select id=\'ordertype'+i+'\' name=\'ordertype'+i+'\' onchange=javascript:changeOrderstatus(\''+i+'\',\''+data.data[i].MobileNumber+'\',\''+data.data[i].ApprovalMob+'\');><option value="">-Select-</option><option value="Approve">Approve</option>><option value="Reject">Reject</option>></select></div></div>';

					str+='</div>';

					str+='</div>';
				}*/
				       			
			}
             document.getElementById("dealertrans").innerHTML=str;


			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});

});

function getdealer_retailertrans(transactions)
{
	if(typeof transactions == 'undefined' || transactions=='')
			transactions = 'All';
		$.mobile.changePage( "#dealers_point", {transition: "none"} );
		document.getElementById("dealertrans").innerHTML=''; 

		$.ajax({
          
			url: SERVER2+'get_dealer_transaction_details_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'Store_code': localStorage.getItem('storecode_ufi')
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			console.log('Data:'+JSON.stringify(data));

			var str = '';

			if(data.error!='')
			{
				toast(data.error);
			}
			else
			{
				//Data:{"data":[{"Store_Id":231,"TransType":"Earn","Points ":"200","GiftToMobile":"","SaleAmount":"2000","bill_number":"6602DED5-5284-4D80-B854-2AF8F34AD0EB","Created_On":"10/7/2018 12:54:42 PM"}],"error":[]}
				

					for(var i=0;i<data.data.length;i++)
				{
					if(transactions == 'All')
					{
						var bn=data.data[i].bill_number;
						if(bn.indexOf('CK')>=0)
							bn='';
					if(data.data[i].TransType == 'Gift' || data.data[i].TransType == 'Revoke')
					{
                	str +='<div class="recent_transfer">';
			        str +='<p class="recent_date">'+data.data[i].Created_On+'</p>';
			        str +='<div class="primary_block"><div class="recent_block padding0_10px">';
			        str +='<div class="recent_user_icon"> <img src="assets/images/points_transfer_icon.png" class="img-responsive" alt=""/> </div>';
			        str +='<div class="recent_user_details">';
			        
					if(data.data[i].TransType == 'Revoke')
			        {
			        str +='<p class="recent_detail_text">Points Deducted from Revoking to '+data.data[i].Member_Name+'('+data.data[i].shop_name+').<br>Sale of Rs. '+data.data[i].SaleAmount+'<br>';
			        }
			        else
			        {
			        str +='<p class="recent_detail_text">Points Received from Gifting to '+data.data[i].Member_Name+'('+data.data[i].shop_name+').<br>Sale of Rs. '+data.data[i].SaleAmount+'<br>';
			        }

			        str += 'Invoice No. '+bn+'<br></p>';
			        str += '</div><div class="recent_user_points"><h2>'+data.data[i].Points+'<span>Points</span></h2></div>';
			        str += '</div></div></div>';
			    	}
					}
					else
					{
						if(data.data[i].TransType == transactions )
						{
							if(data.data[i].TransType == 'Gift' || data.data[i].TransType == 'Revoke')
							{
								var bn=data.data[i].bill_number;
								if(bn.indexOf('GOLD')>=0)
									bn='';
								str +='<div class="recent_transfer">';
								str +='<p class="recent_date">'+data.data[i].Created_On+'</p>';
								str +='<div class="primary_block"><div class="recent_block padding0_10px">';
								str +='<div class="recent_user_icon"> <img src="assets/images/points_transfer_icon.png" class="img-responsive" alt=""/> </div>';
								str +='<div class="recent_user_details">';
								if(data.data[i].TransType == 'Revoke')
								{
								str +='<p class="recent_detail_text">Points Deducted from Revoking to '+data.data[i].Member_Name+'('+data.data[i].shop_name+').<br>Sale of Rs. '+data.data[i].SaleAmount+'<br>';
								}
								else
								{
								str +='<p class="recent_detail_text">Points Received from Gifting to '+data.data[i].Member_Name+'('+data.data[i].shop_name+').<br>Sale of Rs. '+data.data[i].SaleAmount+'<br>';
								}
								str += 'Invoice No. '+bn+'<br></p>';
								str += '</div><div class="recent_user_points"><h2>'+data.data[i].Points+'<span>Points</span></h2></div>';
								str += '</div></div></div>';
							}
						}
					}
          		}
				       			
			}
             document.getElementById("dealertrans").innerHTML=str;      
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});

}

$(document).on('pageshow', '#retailer_point', function (event, ui) {
 		$.ajax({
          
			url: SERVER2+'get_dealer_transaction_details_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'Store_code': localStorage.getItem('storecode_ufi')
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			//console.log('Data:'+JSON.stringify(data));

			var str = '';

			if(data.error!='')
			{
				toast(data.error);
			}
			else
			{
				//Data:{"data":[{"Store_Id":231,"TransType":"Earn","Points ":"200","GiftToMobile":"","SaleAmount":"2000","bill_number":"6602DED5-5284-4D80-B854-2AF8F34AD0EB","Created_On":"10/7/2018 12:54:42 PM"}],"error":[]}
				
				for(var i=0;i<data.data.length;i++)
				{
					if(data.data[i].TransType == 'Gift' || data.data[i].TransType == 'Revoke')
					{
						var bn=data.data[i].bill_number;
						if(bn.indexOf('GOLD')>=0)
							bn='';
                	str +='<div class="recent_transfer">';
			        str +='<p class="recent_date">'+data.data[i].Created_On+'</p>';
			        str +='<div class="primary_block"><div class="recent_block padding0_10px">';
			        str +='<div class="recent_user_icon"> <img src="assets/images/points_transfer_icon.png" class="img-responsive" alt=""/> </div>';
			        str +='<div class="recent_user_details">';
			        str +='<p class="recent_detail_text">Points Gifted to '+data.data[i].Member_Name+'('+data.data[i].shop_name+').<br>Sale of Rs. '+data.data[i].SaleAmount+'<br>';
			        str += 'Invoice No. '+bn+'<br></p>';
			        if(data.data[i].GiftToMobile=='919711090909')
						str += '</div><div class="recent_user_points"><h2>'+parseInt(data.data[i].Points)*4+'<span>Points</span></h2></div>';
					else
			        	str += '</div><div class="recent_user_points"><h2>'+data.data[i].Points+'<span>Points</span></h2></div>';
			        //str += '</div><div class="recent_user_points"><h2>'+data.data[i].Points+'+<span>Points</span></h2></div>';
			        str += '</div></div></div>';
			    	}
          		}
       			
			}
             document.getElementById("retailertrans").innerHTML=str;      
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});

});


function showtnc()
{

	toast('comin soon');
	//openInWebView(versionurl+'tnc.html');
	/*var cat = localStorage.getItem('cattype');
	

	if(cat=='Painter')
	{
		$('#tnc_electrician').css('display','block');
		$('#tnc_retailer').css('display','none');
		$('#tnc_dealer').css('display','none');
		$('#tnc_counterboy').css('display','none');
		$('#tnc_se').css('display','none');
	}
	else if(cat=='Retailer')
	{
		$('#tnc_electrician').css('display','none');
		$('#tnc_retailer').css('display','block');
		$('#tnc_dealer').css('display','none');
		$('#tnc_counterboy').css('display','none');
		$('#tnc_se').css('display','none');
	}
	else if(cat=='Dealer' ||  cat=='dealer')
	{
		$('#tnc_electrician').css('display','none');
		$('#tnc_retailer').css('display','none');
		$('#tnc_dealer').css('display','block');
		$('#tnc_counterboy').css('display','none');
		$('#tnc_se').css('display','none');
	}
	else if(cat=='Mechanic')
	{
		$('#tnc_electrician').css('display','none');
		$('#tnc_retailer').css('display','none');
		$('#tnc_dealer').css('display','none');
		$('#tnc_counterboy').css('display','block');
		$('#tnc_se').css('display','none');
	}
	else if(cat=='SalesExecutive')
	{
		$('#tnc_electrician').css('display','none');
		$('#tnc_retailer').css('display','none');
		$('#tnc_dealer').css('display','none');
		$('#tnc_counterboy').css('display','none');
		$('#tnc_se').css('display','block');
	}

	$.mobile.changePage( "#tnc", {transition: "none"} );*/
}

function showmyrefer()
{
	var cat = localStorage.getItem('cattype');

	//if(cat=='SalesExecutive')
	//{
		//document.getElementById('share_refer_code').readOnly = false;
	//	$.mobile.changePage( "#referFriend", { transition: "none"} ); 
	//}
	//else
	//{
		document.getElementById('share_refer_code').readOnly = true;
		$.mobile.changePage( "#referal_code", { transition: "none"} ); 
	//}
	
	
}

function showMember(mob)
{
	 //var mob = $('#mymember').val();
	 
	 if(mob==''){
		 toast('Please enter mobile number');
	 }
	 if(mob.length!=10)
	 {
		toast('Please check mobile no.');
	 }
	 else
	 {
		 
	$.ajax({
	   url: SERVER2+'get_points_json_api.asp',
	   type: 'GET',
	   timeout: 50000,
		dataType: 'json',
		data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': mob},
		complete: function(xhr, textStatus) {
			//called when complete
		},
		success: function(data, textStatus, xhr) {
		console.log('JSONDATA:'+JSON.stringify(data));
		if(data.data.length>0)
		{
		 $.mobile.changePage( "#profilepage2", {transition: "slideup"} );
		 $('#profileheaddiv').css('display','none');
		 $('#userstatusdiv').css('display','none');
	     var etype= data.data[0].scanfilename;
	     $('#profilepage2 input[type="text"]').prop("disabled", true);
	     $('#profilepage2 input[type="tel"]').prop("disabled", true);
	     $('#profilepage2 input[type="email"]').prop("disabled", true);
	     $('#profilepage2 input[type="date"]').prop("disabled", true);
	     $('#profilepage2 #update_gender_ret').prop("disabled", true);

	     $('#profilepage2 #update_state_ret').prop("disabled", true);
	     $('#profilepage2 #update_district_ret').prop("disabled", true);
	     $('#profilepage2 #update_pin_ret').prop("disabled", true);
		 $('#profilepage2 #update_gender_cb').prop("disabled", true);

	     $('#profilepage2 #update_state_cb').prop("disabled", true);
	     $('#profilepage2 #update_district_cb').prop("disabled", true);
	     $('#profilepage2 #update_pin_cb').prop("disabled", true);
		 document.getElementById('cardimage_aadhar_ret').disabled = true;

		 var radio1=document.getElementsByName("update_gender_ret");
		 //var len=radio1.length;
		 for(var i=0;i<radio1.length;i++)
		   {
			   radio1[i].disabled=true;
		   }

		 var radio=document.getElementsByName("update_gender_cb");
		 //var len=radio.length;
		 for(var i=0;i<radio.length;i++)
		   {
			   radio[i].disabled=true;
		   }

		 if(etype=='Retailer')
	     {

           fetchdistrictse(data.data[0].State,data.data[0].District,'update_district_ret');

	

			
	     	$('#update_button2').css('display','none');
			$('#update_button2_ok').css('display','block');
			$('#counterquestion').css('display','none');
			$('#retailerquestion').css('display','block');
			document.getElementById('retdetailshdr').innerHTML='Retailer Details';
			$('#electrician_profile1').css('display','none');
			$('#retailer_profile1').css('display','block');
			$('#counterboy_profile1').css('display','none');
			$('#dealer_profile1').css('display','none');

	
			$('#update_name_ret').val(data.data[0].firstname);
			$('#update_surname_ret').val(data.data[0].lastname);

			var yyyy=data.data[0].dobyear;
			var dd=data.data[0].dobday;
			var mm=data.data[0].dobmonth;

			

		

				
			
			mm = mm.trim();
			dd = dd.trim();
			yyyy = yyyy.trim();
			if(dd.length == 1)
				dd = '0'+dd;
			if(mm.length == 1)
				mm = '0'+mm;
			$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);

			console.log(yyyy+'-'+mm+'-'+dd);
			
			


			//$('#update_dob1').val(data.data[0].dobyear+'-'+data.data[0].dobmonth+'-'+data.data[0].dobday.trim());

			
			$('#update_pmobile_ret').val(mob);
			$('#retailer_mob').val(mob);


			//$('#update_dob_ret').val(data.data[0].dobyear+'-'+data.data[0].dobmonth+'-'+data.data[0].dobday);
			$('#update_gender_ret').val(data.data[0].gender);
			$('#update_ref_ret').val(data.data[0].RefCode);
			$('#update_flat_ret').val(data.data[0].floorFlat);
			$('#update_address_ret').val(data.data[0].street);
			//$('#update_tehsil_ret').val(data.data[0].Tehsil);

			$('#update_pin_ret').val(data.data[0].PostalCode);
			$('#update_state_ret').val(data.data[0].State);
			$('#update_city_ret').val(data.data[0].City);
			$('#update_email_ret').val(data.data[0].emailid);
			
			//$('#update_district_ret').text(data.data[0].District);
		

			

			
           
			
           
			$('#update_bankname_ret').val(data.data[0].BankName);
			$('#update_bankac_ret').val(data.data[0].Bank_Ac_No);
			$('#update_bankifsc_ret').val(data.data[0].IFSC_code);
			$('#update_bankcity_ret').val(data.data[0].Bank_City);
			$('#update_bankbranch_ret').val(data.data[0].Bank_Branch_Address);
		
		
			//$('#update_pan_ret').val(data.data[0].Pan_card_no);
			$('#update_adhar_ret').val(data.data[0].Aadhar_Card_No);
		




			
			$('#update_gst_ret').val(data.data[0].GSTNo);

			$('#update_shopname_ret').val(data.data[0].Shop_Name);

			//$('#update_pan_ret').val(data.data[0].PanCardno);

			if(typeof data.data[0].AadharCardPhoto == undefined || typeof data.data[0].AadharCardPhoto == 'undefined' || data.data[0].AadharCardPhoto=='null' || data.data[0].AadharCardPhoto==null)
				data.data[0].AadharCardPhoto = '';
			if(data.data[0].AadharCardPhoto=='')
			{

				document.getElementById('cardimage_aadhar_ret').onclick = function () {}; 

			}
			else
			{
			document.getElementById("cardimage_aadhar_ret").src = versionurl+'uploads/'+data.data[0].AadharCardPhoto;
			document.getElementById('cardimage_aadhar_ret').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].AadharCardPhoto); }; 
			}

			if(typeof data.data[0].PanCardPhoto == undefined || typeof data.data[0].PanCardPhoto == 'undefined' || data.data[0].PanCardPhoto=='null' || data.data[0].PanCardPhoto==null)
				data.data[0].PanCardPhoto = '';
			 if(data.data[0].PanCardPhoto=='')
			{

				document.getElementById('cardimage_proof_ret').onclick = function () {}; 

			}
			else
			{
			document.getElementById("cardimage_proof_ret").src = versionurl+'uploads/'+data.data[0].PanCardPhoto;
			document.getElementById('cardimage_proof_ret').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].PanCardPhoto); }; 
			}

			

			if(typeof data.data[0].Aadhar_Card_Photo_2 == undefined || typeof data.data[0].Aadhar_Card_Photo_2 == 'undefined' || data.data[0].Aadhar_Card_Photo_2=='null' || data.data[0].Aadhar_Card_Photo_2==null)
				data.data[0].Aadhar_Card_Photo_2 = '';
			 if(data.data[0].Aadhar_Card_Photo_2=='')
			{
				document.getElementById('cardimage_aadhar_ret_back').onclick = function () {}; 

			}
			else
			{
			document.getElementById("cardimage_aadhar_ret_back").src = versionurl+'uploads/'+data.data[0].Aadhar_Card_Photo_2;
			document.getElementById('cardimage_aadhar_ret_back').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].Aadhar_Card_Photo_2); }; 
			}

			if(data.data[0].Pan_Card_Photo_2!=null)
			{
			//document.getElementById("cardimage_proof_ret_back").src = versionurl+'uploads/'+data.data[0].Pan_Card_Photo_2;
			//cardimage_self_retdocument.getElementById('cardimage_proof_ret_back').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].Pan_Card_Photo_2); }; 
			}
			if(typeof data.data[0].Photo == undefined || typeof data.data[0].Photo == 'undefined' || data.data[0].Photo=='null' || data.data[0].Photo==null)
				data.data[0].Photo = '';
			 if(data.data[0].Photo=='')
			{
				document.getElementById('cardimage_self_ret').onclick = function () {  }; 
			

			}
			else
			{
				console.log('dddddddddddd'+data.data[0].Photo);
			document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+data.data[0].Photo;
			document.getElementById('cardimage_self_ret').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].Photo); }; 
			document.getElementById("ppichome").src = versionurl+'uploads/'+data.data[0].Photo;
			document.getElementById("ppicprofile").src = versionurl+'uploads/'+data.data[0].Photo;
			document.getElementById("cardImagemenu").src = versionurl+'uploads/'+data.data[0].Photo;
			document.getElementById("cardimage_self_ret").src = versionurl+'uploads/'+data.data[0].Photo;
			document.getElementById("ppichome").src = versionurl+'uploads/'+data.data[0].Photo;
			document.getElementById("cardImagemenu").src = versionurl+'uploads/'+data.data[0].Photo;
			
			}
			
			if(typeof data.data[0].Shop_Establishment_Cert == undefined || typeof data.data[0].Shop_Establishment_Cert == 'undefined' || data.data[0].Shop_Establishment_Cert=='null' || data.data[0].Shop_Establishment_Cert==null)
				data.data[0].Shop_Establishment_Cert = '';
			 if(data.data[0].Shop_Establishment_Cert=='')
			{
				document.getElementById('update_shopestablish_ret').onclick = function () {  }; 

			}
			else
			{
			document.getElementById("update_shopestablish_ret").src = versionurl+'uploads/'+data.data[0].Shop_Establishment_Cert;
			document.getElementById('update_shopestablish_ret').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].Shop_Establishment_Cert); }; 
			}

			if(typeof data.data[0].PhotoofShop == undefined || typeof data.data[0].PhotoofShop == 'undefined' || data.data[0].PhotoofShop=='null' || data.data[0].PhotoofShop==null)
				data.data[0].PhotoofShop = '';
			 if(data.data[0].PhotoofShop=='')
			{
				document.getElementById('cardimage_shop_ret').onclick = function () {  }; 

			}
			else
			{

				console.log('sssssssss'+data.data[0].PhotoofShop);
			
			document.getElementById("cardimage_shop_ret").src = versionurl+'uploads/'+data.data[0].PhotoofShop;
			document.getElementById('cardimage_shop_ret').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].PhotoofShop); }; 
			}
			
			
			if(typeof data.data[0].Gst_Photo == undefined || typeof data.data[0].Gst_Photo == 'undefined' || data.data[0].Gst_Photo=='null' || data.data[0].Gst_Photo==null)
				data.data[0].Gst_Photo = '';
			if(data.data[0].Gst_Photo=='')
			{
			document.getElementById('cardimage_gst_ret').onclick = function () {}; 
			}
			else
			{
			document.getElementById("cardimage_gst_ret").src = versionurl+'uploads/'+data.data[0].Gst_Photo;
			document.getElementById('cardimage_gst_ret').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].Gst_Photo); }; 
			}
			
			if(typeof data.data[0].can_chq == undefined || typeof data.data[0].can_chq == 'undefined' || data.data[0].can_chq=='null' || data.data[0].can_chq==null)
				data.data[0].can_chq = '';
			if(data.data[0].can_chq=='')
			{
				document.getElementById('cardimage_chq_ret').onclick = function () {}; 
			}
			else
			{
			document.getElementById("cardimage_chq_ret").src = versionurl+'uploads/'+data.data[0].can_chq;
			document.getElementById('cardimage_chq_ret').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].can_chq); }; 
		
			
			}
			
			
			
			
			
			
   
  
	     }
		 else if(etype=='Mechanic')
	     {
			 

			  fetchdistrictse(data.data[0].State,data.data[0].District,'update_district_cb');


            $("#update_button2_deactivate").attr("href", "javascript:deactivatemember(\'"+mob+"\',\'Mechanic\',\'null\')");
	

			$('#update_button11').css('display','none');
			$('#update_button11_ok').css('display','block');

			$('#update_button2_deactivate').css('display','block');

			

			$('#counterquestion').css('display','block');
			$('#retailerquestion').css('display','none');
			document.getElementById('retdetailshdr').innerHTML='Mechanic Details';

			$('#electrician_profile1').css('display','none');
			$('#retailer_profile1').css('display','none');
			$('#counterboy_profile1').css('display','block');
			$('#dealer_profile1').css('display','none');


			
			$('#update_name_cb').val(data.data[0].FirstName);
			$('#update_surname_cb').val(data.data[0].LastName);
			//data.data[0].Dob

			var yyyy=data.data[0].dobyear;
			var dd=data.data[0].dobday;
			var mm=data.data[0].dobmonth;

			

		

				
			
			mm = mm.trim();
			dd = dd.trim();
			yyyy = yyyy.trim();
			if(dd.length == 1)
				dd = '0'+dd;
			if(mm.length == 1)
				mm = '0'+mm;
			$('#update_dob_cb').val(yyyy+'-'+mm+'-'+dd);

			console.log(yyyy+'-'+mm+'-'+dd);
			



			//$('#update_dob_cb').val(data.data[0].dobyear+'-'+data.data[0].dobmonth+'-'+data.data[0].dobday);
			$('#update_pmobile_cb').val(mob);
			$('#counterboy_mob').val(mob);
			$('#update_gender_cb').val(data.data[0].Gender);
			$('#update_city_cb').val(data.data[0].City);
			$('#update_district_cb').text(data.data[0].District);
			$('#update_ref_cb').val(data.data[0].Ref_code);
			//$('#update_omobile_cb').val(user.other_mobile_no);
			$('#update_shopname_cb').val(data.data[0].shopname);
			//$('#update_cinno_cb').val(user.cinno);
			$('#update_flat_cb').val(data.data[0].floor_flat);
			//$('#update_tehsil_cb').val(data.data[0].Tehsil);
			
			
			$('#update_email_cb').val(data.data[0].emailid);
			$('#update_pin_cb').val(data.data[0].PostalCode);
			$('#update_address_cb').val(data.data[0].street);
           
			$('#update_state_cb').val(data.data[0].State);
           
			$('#update_bankname_cb').val(data.data[0].BankName);
			$('#update_bankac_cb').val(data.data[0].Bank_Ac_No);
			$('#update_bankifsc_cb').val(data.data[0].IFSC_code);
			$('#update_bankcity_cb').val(data.data[0].Bank_City);
			$('#update_bankbranch_cb').val(data.data[0].Bank_Branch_Address);
		
		
			//$('#update_pan_cb').val(data.data[0].Pan_card_no);
			$('#update_adhar_cb').val(data.data[0].Aadhar_Card_No);
			$('#update_currwork_cb').val(data.data[0].working_shopname);
			$('#update_rmobile_cb').val(data.data[0].owner_mobileno);
		

			if(typeof data.data[0].AadharCardPhoto == undefined || typeof data.data[0].AadharCardPhoto == 'undefined' || data.data[0].AadharCardPhoto=='null' || data.data[0].AadharCardPhoto==null)
				data.data[0].AadharCardPhoto = '';

			if(data.data[0].AadharCardPhoto=='')
			{
		    	document.getElementById('cardimage_aadhar_cb').onclick = function () {  }; 


		    }
		    else
			{
				
				document.getElementById("cardimage_aadhar_cb").src = versionurl+'uploads/'+data.data[0].AadharCardPhoto;
				document.getElementById('cardimage_aadhar_cb').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].AadharCardPhoto); }; 

				
			}

			 if(typeof data.data[0].PanCardPhoto == undefined || typeof data.data[0].PanCardPhoto == 'undefined' || data.data[0].PanCardPhoto=='null' || data.data[0].PanCardPhoto==null)
				data.data[0].PanCardPhoto = '';
			 if(data.data[0].PanCardPhoto=='')
			 {

			 		document.getElementById('cardimage_proof_cb').onclick = function () {}; 

			 }
			 else
			{
				document.getElementById("cardimage_proof_cb").src = versionurl+'uploads/'+data.data[0].PanCardPhoto;
				document.getElementById('cardimage_proof_cb').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].PanCardPhoto); }; 
			}

			if(typeof data.data[0].Aadhar_Card_Photo_2 == undefined || typeof data.data[0].Aadhar_Card_Photo_2 == 'undefined' || data.data[0].Aadhar_Card_Photo_2=='null' || data.data[0].Aadhar_Card_Photo_2==null)
				data.data[0].Aadhar_Card_Photo_2 = '';
			 if(data.data[0].Aadhar_Card_Photo_2=='')
			{
				document.getElementById('cardimage_aadhar_cb_back').onclick = function () {}; 

			}
			else
			{
				
				document.getElementById("cardimage_aadhar_cb_back").src = versionurl+'uploads/'+data.data[0].Aadhar_Card_Photo_2;
				document.getElementById('cardimage_aadhar_cb_back').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].Aadhar_Card_Photo_2); }; 

				
			}

			/* if(data.data[0].Pan_Card_Photo_2.length!=0 )
			{
				document.getElementById("cardimage_proof_cb_back").src = versionurl+'uploads/'+data.data[0].Pan_Card_Photo_2;
				document.getElementById('cardimage_proof_cb_back').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].Pan_Card_Photo_2); }; 
			}
			*/
			 if(typeof data.data[0].Photo == undefined || typeof data.data[0].Photo == 'undefined' || data.data[0].Photo=='null' || data.data[0].Photo==null)
				data.data[0].Photo = '';
			 if(data.data[0].Photo=='')
			 {
			 	document.getElementById('cardimage_self_cb').onclick = function () {}; 
			 }
			 else
			{
				document.getElementById("cardimage_self_cb").src = versionurl+'uploads/'+data.data[0].Photo;
				document.getElementById('cardimage_self_cb').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].Photo); }; 
				document.getElementById("ppichome").src = versionurl+'uploads/'+data.data[0].Photo;
				document.getElementById("ppicprofile").src = versionurl+'uploads/'+data.data[0].Photo;
				document.getElementById("cardImagemenu").src = versionurl+'uploads/'+data.data[0].Photo;
			}

			
			
			
			if(typeof data.data[0].can_chq == undefined || typeof data.data[0].can_chq == 'undefined' || data.data[0].can_chq=='null' || data.data[0].can_chq==null)
				data.data[0].can_chq = '';
			if(data.data[0].can_chq=='')
			{
				document.getElementById('cardimage_chq_cb').onclick = function () {}; 
			}
			else
			{
			document.getElementById("cardimage_chq_cb").src = versionurl+'uploads/'+data.data[0].can_chq;
			document.getElementById('cardimage_chq_cb').onclick = function () { openInWebView(versionurl+'uploads/'+data.data[0].can_chq); }; 
		
			
			}
			

			
			
	     }

		    

		}
		else
		{
				toast('Number not registered with us');
				//$.mobile.changePage( "#profilepage", {transition: "flip"} );
		}
   
  
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
	 }
}

function dealers_point()
{
	$.mobile.changePage( "#point_passbook", {transition: "flip"} );
	//$.mobile.changePage( "#dealers_point", {transition: "flip"} );
}

function showaddltransferscreen()
{
	if(localStorage.getItem('cattype') == 'dealer')
	{
		if(store.isLive=='0')
		{

			toast("State is not live yet");

		}
		else
		{
			document.getElementById('addlhdr').innerHTML='Additional Transfer Screen';
			if(localStorage.getItem('atsexist')=='yes')
			{
				//do nothing
				toast('You have already added a Addl Transfer Representative');
			}
			else
			{
				$.mobile.changePage( "#additional_transfer_screen", {transition: "flip"} );
			}
	   }
	}
	else
	{
		if(user.isLive=='0')
		{

			toast("State is not live yet");

		}
		else
		{
			document.getElementById('addlhdr').innerHTML='Additional Scan Screen';
			if(localStorage.getItem('assexist')=='yes')
			{
				//do nothing
				toast('You have already added a Addl Scan Representative');
			}
			else
			{
				$.mobile.changePage( "#additional_transfer_screen", {transition: "flip"} );
			}
	  }
	}
	
	
}

function additionalControl1()
{
	var name = $('#ats_name').val().trim();
	var desg =   $('#ats_desg').val().trim();
	var mobileno =   $('#ats_mob').val().trim();
	
	var mm ='';
	var dd ='';
	var yyyy = '';
	var birthday = $('#ats_bday').val();
	if(birthday!='')
	{
		var dob = birthday.split('-');
		dd = dob.length == 3 ? dob[2] : '';
		mm = dob.length == 3 ? dob[1] : '';
		yyyy = dob.length == 3 ? dob[0] : '';
	}

	
	if(name=='')
    {
        	toast('Name cannot be blank');
        	
    }
	else if(desg=='')
	{
		toast('Designation cannot be blank');
	}
	else if(mobileno=='')
	{
		toast('Mobile Number cannot be blank');
	}
	else if(mobileno.length<10 || mobileno.length>10)
	{
		toast('Invalid Mobile No.');
	}
	else
	{
		//alert(localStorage.getItem('cattype'));
	if(localStorage.getItem('cattype') == 'dealer')
		{
		  $.ajax({
				
				url: SERVER2+'cust_registration_json_api.asp',
				type: 'GET',
				timeout: 300000,
				dataType: "json",
						data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': mobileno, 'title': '', 'firstname': name, 'Lastname': ''
				, 'gender': '', 'email': '', 'homeno': '', 'dobday': dd, 'dobmonth': mm, 'dobyear': yyyy,
				'doaday': '', 'domonth': '', 'doayear': '', 'floor_flat': '', 'building': '', 'street': '',
				'town': '', 'city': '', 'country': '', 'occupation': desg, 'scode':store.store_id,'memberType':'ats',},
				
				success: function(data, textStatus, xhr) {
					
				//console.log('Data:'+JSON.stringify(data));

				if(data.error!='')
				{
					toast(data.error);
				}
				else
				{
					toast('Added Successfully');
					localStorage.setItem('atsexist','yes');
					gobackfromrewards();
					//$.mobile.changePage( "#dealerhomepage", {transition: "none"} );
				}
						
				 },
				error: function(xhr, textStatus, errorThrown) {
					 toast('Could not connect to Server, make sure you are conn ected to Internet'+errorThrown);
					}
				 
			});
		}
	else 
		{
		$.ajax({
				
				url: SERVER2+'cust_registration_json_api.asp',
				type: 'GET',
				timeout: 300000,
				dataType: "json",
						data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': mobileno, 'title': '', 'firstname': name, 'Lastname': ''
				, 'gender': '', 'email': '', 'homeno': '', 'dobday': dd, 'dobmonth': mm, 'dobyear': yyyy,
				'doaday': '', 'domonth': '', 'doayear': '', 'floor_flat': '', 'building': '', 'street': '',
				'town': '', 'city': '', 'country': '', 'occupation': desg, 'scode':'6','memberType':'ass','ass_retailer':user.mobile},
				
				success: function(data, textStatus, xhr) {
					
				//console.log('Data:'+JSON.stringify(data));

				if(data.error!='')
				{
					toast(data.error);
				}
				else
				{
					toast('Added Successfully');
					localStorage.setItem('assexist','yes');
					gobackfromrewards();
					//$.mobile.changePage( "#dealerhomepage", {transition: "none"} );
				}
						
				 },
				error: function(xhr, textStatus, errorThrown) {
					 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
					}
				 
			});
		}
	}
}

function setminDate()
{
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	var hr = today.getHours();
	var mint = today.getMinutes();

	if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    }
	if(hr<10){
        hr='0'+hr;
    } 
	if(mint<10){
        mint='0'+mint;
    }

	today = yyyy+'-'+mm+'-'+dd;
	var ctime = hr+':'+mint;

	document.getElementById("durationfrom").setAttribute("max", today);
	document.getElementById("durationto").setAttribute("max", today);


	//document.getElementById("update_dob_elec1").value = today;

	

	/* setting intime to current time */

	//document.getElementById("intime").value = ctime;

	/* ends*/


}


function loadState_SE()
{

	$.getJSON(
            GSERVER+'Get_allstate_json_api.asp',

		    //'https://goldmedalelectricals.mloyalretail.com/APIs/Get_allstate_json_api.asp',
			{

			}, 
		    function (json) {

				 //localStorage.setItem("agappestatejson", JSON.stringify(json));

				 var listItems= "";
				     listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E;color:#000000;' selected='selected'>-Select State*-</option>";
				 for (var i = 0; i < json.data.length; i++)
					{
						listItems+= "<option value='" + json.data[i].stateid + "'>" + json.data[i].statename + "</option>";
					}
				

				  $("#state_meet1").html(listItems);
				  $("#state_meet2").html(listItems);
				
	 
	 }).error(function () {  console.log("err in loading state") });
}

function loadStates()
{
    
	var listItems= '<option value="" disabled="disabled" style="background-color:#3E3E3E;color:#000000;" selected="selected">-Select State*-</option><option value="4">Andaman &amp; Nicobar AN</option><option value="3">Andhra Pradesh AP</option><option value="1">Arunachal Pradesh AR</option><option value="2">Assam AS</option><option value="5">Bihar BH</option><option value="6">Chandigarh CH</option><option value="7">Chhattisgarh CG</option><option value="36">Dadra &amp; Nagar Haveli DN</option><option value="9">Daman &amp; Diu DD</option><option value="8">Delhi DL</option><option value="12">Goa GO</option><option value="11">Gujarat GU</option><option value="14">Haryana HR</option><option value="13">Himachal Pradesh HP</option><option value="15">Jammu &amp; Kashmir JK</option><option value="16">Jharkhand JH</option><option value="17">Karnataka KR</option><option value="18">Kerala KL</option><option value="19">Lakshadweep LD</option><option value="23">Madhya Pradesh MP</option><option value="24">Maharashtra MH</option><option value="20">Manipur MN</option><option value="22">Meghalaya ML</option><option value="21">Mizoram MM</option><option value="25">Nagaland NL</option><option value="26">Odisha(Orissa)</option><option value="28">Pondicherry PC</option><option value="27">Punjab PJ</option><option value="29">Rajasthan RJ</option><option value="30">Sikkim SK</option><option value="32">Tamil Nadu TN</option><option value="38">Telangana TS</option><option value="31">Tripura TR</option><option value="34">Uttar Pradesh UP</option><option value="39">Uttarakhand UK</option><option value="33">Uttaranchal UT</option><option value="35">West Bengal WB</option>';
	              

				  $("#update_state_ret").html(listItems);
				  $("#update_state_ret1").html(listItems);
				  $("#update_state_cb").html(listItems);
				  $("#update_state_cb1").html(listItems);
}

function loadStates_old()
{

	 //console.log("Loading statelist.....");

	var now = new Date();
	var dd = now.getDate();
	var mm = parseInt(now.getMonth())+1;
	var yyyy = now.getFullYear();

	//$('#homepagefooter').trigger('destroy.owl.carousel');
	if(typeof localStorage.getItem('state'+dd+mm+yyyy) == 'undefined' || localStorage.getItem('state'+dd+mm+yyyy) == null)
	{

     $.getJSON(
             GSERVER+'Get_allstate_json_api.asp',
		    //'https://goldmedalelectricals.mloyalretail.com/APIs/Get_allstate_json_api.asp',
			{

			}, 
		    function (json) {

				 //localStorage.setItem("agappestatejson", JSON.stringify(json));

				 var listItems= "";
				     listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E;color:#000000;' selected='selected'>-Select State*-</option>";
				 for (var i = 0; i < json.data.length; i++)
					{
						listItems+= "<option value='" + json.data[i].stateid + "'>" + json.data[i].statename + "</option>";
					}
				  
				  localStorage.setItem('state'+dd+mm+yyyy,listItems);
				  $today = new Date();
				  $yesterday = new Date($today);
				  $yesterday.setDate($today.getDate() - 1); 


				
				  var dd1 = $yesterday.getDate();
				  var mm1 = parseInt($yesterday.getMonth())+1;
				  var yyyy1 = $yesterday.getFullYear();
				  localStorage.removeItem('state'+dd1+mm1+yyyy1);

				  $("#update_state_ret").html(listItems);
				  $("#update_state_ret1").html(listItems);
				  $("#update_state_elec").html(listItems);
				  $("#update_state_del").html(listItems);
				  $("#update_state_cb").html(listItems);
				  $("#update_state_cb1").html(listItems);
				  $("#update_state_elec1").html(listItems);
				  $("#update_state_del1").html(listItems);
				  $("#update_state_elec2").html(listItems);
				  $("#update_state_del2").html(listItems);
				  $("#update_state_ret2").html(listItems);
				  $("#update_state_cb2").html(listItems);
  
	 
	 }).error(function () {  console.log("err in loading state") });
	}
	else
	{
		var listItems = localStorage.getItem('state'+dd+mm+yyyy);
		$("#update_state_ret").html(listItems);
		$("#update_state_ret1").html(listItems);
		$("#update_state_elec").html(listItems);
		$("#update_state_del").html(listItems);
		$("#update_state_cb").html(listItems);
		$("#update_state_cb1").html(listItems);
		$("#update_state_elec1").html(listItems);
		$("#update_state_del1").html(listItems);
		$("#update_state_elec2").html(listItems);
		$("#update_state_del2").html(listItems);
		$("#update_state_ret2").html(listItems);
		$("#update_state_cb2").html(listItems);
	}
	  
}

$(document).on('pageshow', '#gifslider', function (event, ui) {
	/*var vid = document.getElementById("audio1");	
	vid.play();*/
});

$(document).on('pageshow', '#meet1', function (event, ui) {

	loadState_SE();

});

$(document).on('pageshow', '#meet2', function (event, ui) {
	
	loadState_SE();

});

	$(document).on('pageshow', '#contact', function (event, ui) {
		var stateid='';
		
		var cattype = localStorage.getItem('cattype');
				if(typeof cattype==undefined || cattype== null)
					cattype='';
					if(cattype=='dealer' || cattype=='SalesExecutive' )
					{
						stateid = store.storestate;
					}
					else
					{
						stateid = user.state_ck;
					}
 		$.ajax({
          
			url:  GSERVER+'Get_allstate_json_api.asp',
			//url: 'https://goldmedalelectricals.mloyalretail.com/APIs/Get_allstate_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'stateid': stateid
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			//console.log('Data11111:'+JSON.stringify(data.data[0].statename));

			
			var str='';
			if(data.error!='')
			{
				toast(data.error);
			}
			else
			{

				str = '<div class="primary_section">';
		        str += '<div class="primary_section_inner pt-30">';
		        str += '<div class="contact_block">';

		        str += '<div class="text-center">';
			    str += '<div class="contact_heading">';
			    str += '<div class="primary_block"> Head Office Address </div>';
			    str += '</div></div>';
		        if(typeof data.data[0].Head_office_address == undefined || data.data[0].Head_office_address == null || data.data[0].Head_office_address == '')
		        {
			        
			        str += '<p class="font_md mt-0">UFI Filters<br>';
			        str += '22/23, Sagar Manthan Real Estate, Bhiodapada, Shativali Road, Vasai(E) </p>';
		    	}
		    	else
		    	{
		    		
			        str += '<p class="font_md mt-0">UFI Filters.<br>'+data.data[0].Head_office_address+'</p>';
		    	}

		    		str += '<div class="text-center mt-30">';
			        str += '<div class="contact_heading">';
			        str += '<div class="primary_block"> Branch Office Address </div>';
			        str += '</div></div>';
		    	if(typeof data.data[0].Branch_office_address == undefined || data.data[0].Branch_office_address == null || data.data[0].Branch_office_address == '')
		        {
			        
			        str += '<p class="font_md mt-0">UFI Filters.<br>';
			        str += '22/23, Sagar Manthan Real Estate, Bhiodapada, Shativali Road, Vasai(E) </p>';
		    	}
		    	else
		    	{
		    		
			        str += '<p class="font_md mt-0">UFI Filters.<br>'+data.data[0].Branch_office_address+'</p>';
		    	}

		        str += '<div class="contact_details">';
		        str += '<p><img src="assets/images/email_icon.png" alt="" /> Email Id</p>';
		        if(typeof data.data[0].Email_id == undefined || data.data[0].Email_id == null || data.data[0].Email_id == '')
		        {
		        	str += '<a href="mailto:info@goldmedalelectricals.com">info@goldmedalelectricals.com</a>';
		    	}
		    	else
		    	{
		    		str += '<a href="mailto:'+data.data[0].Email_id+'">'+data.data[0].Email_id+'</a>';
		    	}
		        str += '<p class="mt-20"><img src="assets/images/call_icon.png" alt="" /> Helpline No.</p>';
		        if(typeof data.data[0].Helpline_NO == undefined || data.data[0].Helpline_NO == null || data.data[0].Helpline_NO == '')
		        {
		        	str += '<a href="tel:121245">12220046</a> </div>';
		    	}
		    	else
		    	{
		    		str += '<a href="tel:'+data.data[0].Helpline_NO+'">'+data.data[0].Helpline_NO+'</a> </div>';
		    	}
		        
		        str += '</div>';
		        str += '</div></div>';

        
			}
             $("#contact .ui-content").html(str);      
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});

});

function fetchDistrictlist(sid)
{

  var stateid = $('#'+sid).val();
  fetchdistrict1(stateid);
			
}

function fetchDistrictlist_se(sid)
{

  var stateid = $('#'+sid).val();
  fetchDistrictlist_se_main(stateid);
			
}

function fetchDistrictlist_se_main(stateid)
{

 $.ajax({
   url: GSERVER+'Get_alldistrict_json_api.asp',
    //url: 'https://goldmedalelectricals.mloyalretail.com/APIs/Get_alldistrict_json_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'stateid': stateid},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   
        var listItems= "";
		    listItems+= "<option value='d' disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select District*-</option>";

		for (var i = 0; i < data.data.length; i++)
		{
			var cattype = localStorage.getItem('cattype');
			if(typeof cattype==undefined || cattype== null)
				cattype='';
			if(cattype=='dealer' || cattype=='SalesExecutive' )
			{

			if(data.data[i].Districtid == store.district)
				listItems+= "<option value='" + data.data[i].Districtid + "' selected>" + data.data[i].Districtname + "</option>";	
			else
				listItems+= "<option value='" + data.data[i].Districtid + "'>" + data.data[i].Districtname + "</option>";
			
			}
			else
			{
				
			if(data.data[i].Districtname == user.district)
				listItems+= "<option value='" + data.data[i].Districtid + "' selected>" + data.data[i].Districtname + "</option>";	
			else
				listItems+= "<option value='" + data.data[i].Districtid + "'>" + data.data[i].Districtname + "</option>";	
			}
			
		}
//console.log(listItems);

				  $("#district_meet1").html(listItems);
				  $("#district_meet2").html(listItems);
				  
  
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });

			
}

function fetchdistrict1(stateid)
{
	

			//$("#location").html(listItems);
			//$("#location").selectmenu('refresh');
			

  $.ajax({
   
   //url: 'https://goldmedalelectricals.mloyalretail.com/APIs/Get_alldistrict_json_api.asp',
  url: GSERVER+'Get_alldistrict_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'stateid': stateid},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   
        var listItems= "";
		    listItems+= "<option value='d' disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select District*-</option>";

		for (var i = 0; i < data.data.length; i++)
		{
			var cattype = localStorage.getItem('cattype');
			if(typeof cattype==undefined || cattype== null)
				cattype='';
			if(cattype=='dealer' || cattype=='SalesExecutive' )
			{

			if(data.data[i].Districtid == store.district)
				listItems+= "<option value='" + data.data[i].Districtid + "' selected>" + data.data[i].Districtname + "</option>";	
			else
				listItems+= "<option value='" + data.data[i].Districtid + "'>" + data.data[i].Districtname + "</option>";
			
			}
			else
			{
				
			if(data.data[i].Districtname == user.district)
				listItems+= "<option value='" + data.data[i].Districtid + "' selected>" + data.data[i].Districtname + "</option>";	
			else
				listItems+= "<option value='" + data.data[i].Districtid + "'>" + data.data[i].Districtname + "</option>";	
			}
			
		}
//console.log(listItems);

				  $("#update_district_ret").html(listItems);
				  $("#update_district_ret1").html(listItems);
				  $("#update_district_elec").html(listItems);
				  $("#update_district_del").html(listItems);
				  //$("#update_district_cb").html(listItems);
				  //$("#update_district_cb1").html(listItems);
				  $("#update_district_elec1").html(listItems);
				  $("#update_district_del1").html(listItems);
				  $("#update_district_elec2").html(listItems);
				  $("#update_district_del2").html(listItems);
				  $("#update_district_ret2").html(listItems);
				  //$("#update_district_cb2").html(listItems);

				  /*$("#update_city_ret").selectmenu('refresh');
				  $("#update_city_elec").selectmenu('refresh');
				  $("#update_city_del").selectmenu('refresh');
				  $("#update_city_cb").selectmenu('refresh');
				  $("#update_city_elec1").selectmenu('refresh');
				  $("#update_city_del1").selectmenu('refresh');
				  $("#update_city_elec2").selectmenu('refresh');
				  $("#update_city_del2").selectmenu('refresh');
				  $("#update_city_ret2").selectmenu('refresh');
				  $("#update_city_cb2").selectmenu('refresh');*/
  
   
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });

}

function fetchdistrictse(stateid,dist,name)
{
	

			//$("#location").html(listItems);
			//$("#location").selectmenu('refresh');
			

  $.ajax({
   
   //url: 'https://goldmedalelectricals.mloyalretail.com/APIs/Get_alldistrict_json_api.asp',
   url: GSERVER+'Get_alldistrict_json_api.asp',
   type: 'GET',
   timeout: 50000,
    dataType: 'json',
    data: {'stateid': stateid},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
  
   
        var listItems= "";
		    listItems+= "<option value='0' disabled='disabled' style='background-color:#3E3E3E'  selected='selected'>-Select District*-</option>";

		for (var i = 0; i < data.data.length; i++)
		{
			var cattype = localStorage.getItem('cattype');
			if(typeof cattype==undefined || cattype== null)
				cattype='';
			
				
			if(data.data[i].Districtname == dist)
				listItems+= "<option value='" + data.data[i].Districtid + "' selected>" + data.data[i].Districtname + "</option>";	
			else
				listItems+= "<option value='" + data.data[i].Districtid + "'>" + data.data[i].Districtname + "</option>";	
			
			
		}


				  $("#"+name).html(listItems);
				  
   
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });

}


function isFutureDate(idobj){
   var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById(idobj).setAttribute("max", today);

}

function showGames()
{
	toast('Coming Soon');
}

function sendemailstatement()
{


	//var email = $('input[type=radio][name=input_email_statement]').val();
	var email=$("#estmt :radio:checked").val();
var fromdt ='';
	var enddt = '';
	
	if(email == 'selectduration')
	{
		fromdt = $('#durationfrom').val();
		enddt = $('#durationto').val();
		fromdt = fromdt.getFullYear()+'-'+(fromdt.getMonth()+1)+'-'+fromdt.getDate();
    	enddt = enddt.getFullYear()+'-'+(enddt.getMonth()+1)+'-'+enddt.getDate();
	}
	else if(email == 'last1month')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 1);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }
    else if(email == 'last3months')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 3);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }
    else if(email == 'last6months')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 6);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }
    else if(email == 'last1year')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 12);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }

    var url = SERVER2 + 'generate_points_history.asp';
    var mob=user.mobile;
    var cattype = localStorage.getItem('cattype');
	if(cattype=='dealer' )
	{
		mob = store.storemobile;
		url = SERVER2 + 'generate_points_history_dealer.asp';
	}
//https://ufifilters.mloyalretail.com/APIs/generate_points_history_dealer.asp?mno=8178931580&sdate=2018-12-01&edate=2018-12-31
	
	
     $.ajax({
  
    url: url,
    type: 'GET',
    timeout: 50000,
    data: {'mno': mob,'sdate':fromdt,'edate':enddt},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
    console.log(JSON.stringify(data));
	//$("#emailstatementpop").enhanceWithin().popup();
    //$('#emailstatementpop').popup();
  	$('#emailstatementpop').popup("open", {
								  transition:"pop"
								  });

    $("#statementdownload").attr("href", "javascript:openpdf('"+data+"');");

      
    },
    error: function(xhr, textStatus, errorThrown) {
 
    }
  });


}

function fromlanding()
{
	
	$.mobile.changePage( "#selectcategorypage", { transition: "slide"} );
}

function approveSe(cattype)
{

   if(cattype == 'Retailer')
   {

	var shopage =$('#shopage').val();
	var noofcounter = $('#noofcounter').val();
	var noofelectrician = $('#noofelectrician').val();
	var iswarehouse = $('#iswarehouse').val();
	var yearturnover = $('#yearturnover').val();
	var isrented = $('#isrented').val();
	var dealertype = $('#dealertype').val();
	var subdealertype = $('#subdealertype').val();
    
	var mob = $('#retailer_mob').val();

	var visit= $('#visitr').val();
	var comments= $('#Commentsar').val();

	$.ajax({

	   url: SERVER2+'se_approval_json_api.asp',
	   type: 'GET',
	   timeout: 50000,
	   data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobileno': mob,
				'se_ShoPage': shopage,
				'se_NoOfCounterBoy': noofcounter,
				'se_NoofElectrician': noofelectrician,
				'se_Warehouse': iswarehouse,
				'se_YearlyTurnover': yearturnover,
				'se_isRented': isrented,
				'se_BrandDealer': dealertype,
				'se_SubBrandDealer': subdealertype,
				'se_NoOfYearsJoined': '',
				'se_AirRange': '',
				'se_BrandRecommend': '',
				'se_visit':visit,
				'se_comments':comments,
				'se_reason':'',
				'IsApproved_se': 'Approved'
				
			  },
		complete: function(xhr, textStatus) {
	   //called when complete
		},
		success: function(data, textStatus, xhr) {
	  
			console.log('Data:'+JSON.stringify(data));
			var data = JSON.parse(data);

			if(data.error!='')
			{
				toast(data.error);
			}
			else
			{
				toast(data.data);
			}

						       $('#dealerusername').val(localStorage.getItem("usernamemloyal_ufi"));
	                           $('#dealer_mobileno').val(localStorage.getItem("usermobilemloyal_ufi"));
	                           
	                           var pass = localStorage.getItem("userpassloyal_ufi");
							    if(pass.length>=4)
						       {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#dealercodeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						        }
						        
								    dealerauthenticate();
								

			
			
	   
		},
		error: function(xhr, textStatus, errorThrown) {
			toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
		
    }
    else if(cattype == 'Mechanic')
    {

	var joinage =$('#joinage').val();
	var air_range = $('#air_range').val();
	var recommend1 = $('#recommend1').val();
	var recommend2 = $('#recommend2').val();
	var recommend = recommend1+','+recommend2;

	

	var mob = $('#counterboy_mob').val();

	var visit= $('#visit').val();
	var comments= $('#Commentsa').val();

	
	$.ajax({

	   url: SERVER2+'se_approval_json_api.asp',
	   type: 'GET',
	   timeout: 50000,
	   data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobileno': mob,
				'se_ShoPage': '',
				'se_NoOfCounterBoy': '',
				'se_NoofElectrician': '',
				'se_Warehouse': '',
				'se_YearlyTurnover': '',
				'se_isRented': '',
				'se_BrandDealer': '',
				'se_SubBrandDealer': '',
				'se_NoOfYearsJoined': joinage,
				'se_AirRange': air_range,
				'se_BrandRecommend': recommend,
				'se_visit':visit,
				'se_comments':comments,
				'se_reason':'',
				'IsApproved_se': 'Approved'
				
			  },
		complete: function(xhr, textStatus) {
	   //called when complete
		},
		success: function(data, textStatus, xhr) {
	  
			console.log('Data:'+JSON.stringify(data));
			var data = JSON.parse(data);

			if(data.error!='')
			{
				toast(data.error);
			}
			else
			{
				toast(data.data);

			}

			    $('#dealerusername').val(localStorage.getItem("usernamemloyal_ufi"));
	                           $('#dealer_mobileno').val(localStorage.getItem("usermobilemloyal_ufi"));
	                           
	                           var pass = localStorage.getItem("userpassloyal_ufi");
							    if(pass.length>=4)
						       {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#dealercodeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						        }
						        
								    dealerauthenticate();
			
			
	   
		},
		error: function(xhr, textStatus, errorThrown) {
			toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
		
    }
}

function rejectSe(cattype)
{

   if(cattype == 'Retailer')
   {

	var shopage =$('#shopage').val();
	var noofcounter = $('#noofcounter').val();
	var noofelectrician = $('#noofelectrician').val();
	var iswarehouse = $('#iswarehouse').val();
	var yearturnover = $('#yearturnover').val();
	var isrented = $('#isrented').val();
	var dealertype = $('#dealertype').val();
	var subdealertype = $('#subdealertype').val();


	var mob = $('#retailer_mob').val();
	var reason= $('#reasonr').val();
	var comments= $('#Commentsrr').val();

	$.ajax({

	   url: SERVER2+'se_approval_json_api.asp',
	   type: 'GET',
	   timeout: 50000,
	   data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobileno': mob,
				'se_ShoPage': shopage,
				'se_NoOfCounterBoy': noofcounter,
				'se_NoofElectrician': noofelectrician,
				'se_Warehouse': iswarehouse,
				'se_YearlyTurnover': yearturnover,
				'se_isRented': isrented,
				'se_BrandDealer': dealertype,
				'se_SubBrandDealer': subdealertype,
				'se_NoOfYearsJoined': '',
				'se_AirRange': '',
				'se_BrandRecommend': '',
				'se_reason':reason,
				'se_comments':comments,
				'IsApproved_se': 'Reject'
				
			  },
	    complete: function(xhr, textStatus) {
	   //called when complete
		},
		success: function(data, textStatus, xhr) {
	  
			console.log('Data:'+JSON.stringify(data));
			var data = JSON.parse(data);

			if(data.error!='')
			{
				toast(data.error);
			}
			else
			{
				toast(data.data);
			}
			
			 $('#dealerusername').val(localStorage.getItem("usernamemloyal_ufi"));
	                           $('#dealer_mobileno').val(localStorage.getItem("usermobilemloyal_ufi"));
	                           
	                           var pass = localStorage.getItem("userpassloyal_ufi");
							    if(pass.length>=4)
						       {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#dealercodeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						        }
						        
								    dealerauthenticate();
	   
		},
		error: function(xhr, textStatus, errorThrown) {
			toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
		
    }
    else if(cattype == 'Mechanic')
    {

	var joinage =$('#joinage').val();
	var air_range = $('#air_range').val();
	var recommend1 = $('#recommend1').val();
	var recommend2 = $('#recommend2').val();
	var recommend = recommend1+','+recommend2;

	var reason= $('#reason').val();
	var comments= $('#Commentsr').val();

	var mob = $('#counterboy_mob').val();

	$.ajax({

	   url: SERVER2+'se_approval_json_api.asp',
	   type: 'GET',
	   timeout: 50000,
	   data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobileno': mob,
				'se_ShoPage': '',
				'se_NoOfCounterBoy': '',
				'se_NoofElectrician': '',
				'se_Warehouse': '',
				'se_YearlyTurnover': '',
				'se_isRented': '',
				'se_BrandDealer': '',
				'se_SubBrandDealer': '',
				'se_NoOfYearsJoined': joinage,
				'se_AirRange': air_range,
				'se_BrandRecommend': recommend,
				'se_reason':reason,
				'se_comments':comments,
				'IsApproved_se': 'Reject'
				
			  },
		complete: function(xhr, textStatus) {
	   //called when complete
		},
		success: function(data, textStatus, xhr) {
	  
			console.log('Data:'+JSON.stringify(data));
			var data = JSON.parse(data);

			if(data.error!='')
			{
				toast(data.error);
			}
			else
			{
				toast(data.data);
			}
			
			 $('#dealerusername').val(localStorage.getItem("usernamemloyal_ufi"));
	                           $('#dealer_mobileno').val(localStorage.getItem("usermobilemloyal_ufi"));
	                           
	                           var pass = localStorage.getItem("userpassloyal_ufi");
							    if(pass.length>=4)
						       {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#dealercodeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						        }
						        
								    dealerauthenticate();
	   
		},
		error: function(xhr, textStatus, errorThrown) {
			toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
		
    }
}

function calculatePoint()
{
	var pointstr=$('#retamount1').val();

	var pts=parseFloat(pointstr)/1000;

   $('#retpoints1').val(pts);
	
}
function gobacktopassbook()
{
	var cattype = localStorage.getItem("cattype");
	if(cattype == 'Retailer')
	{    if(localStorage.getItem("pointpassfrom")=='homepage'){
			$.mobile.changePage( "#homepage", {transition: "none"} );
			localStorage.removeItem("pointpassfrom");
	      }
		else
			$.mobile.changePage( "#point_passbookret", {transition: "none"} );
	}
	else if(cattype == 'Painter' || cattype == 'Mechanic')
	{
		$.mobile.changePage( "#homepage", {transition: "none"} );
	}
	else
		$.mobile.changePage( "#point_passbook", {transition: "none"} );
}

$(document).on('pageshow', '#point_passbookret', function (event, ui) {


	var cattype = localStorage.getItem("cattype");
	if(cattype == 'Retailer')

	/*if(localStorage.getItem("retaiter_type") == 'Putty')
	{
		$('#passbook_points').css('display','block');
		$('#passbook_wallet').css('display','none');
		$('#passbook_cashback').css('display','block');
	}
	else if(localStorage.getItem("retaiter_type") == 'Pipes')
	{
		$('#passbook_points').css('display','block');
		$('#passbook_wallet').css('display','block');
		$('#passbook_cashback').css('display','none');
	}*/
	if(cattype == 'Retailer')
	{
		$('#passbook_points').css('display','block');
		$('#passbook_wallet').css('display','none');
		$('#passbook_cashback').css('display','none');
	}
	else
	{
		$('#passbook_points').css('display','block');
		$('#passbook_wallet').css('display','block');
		$('#passbook_cashback').css('display','block');
	}

});

$(document).on('pageshow', '#changemob', function (event, ui) {
	$('#oldmobile').val(user.mobile);

});

function updatemobile()
{
	var newmob = $('#newmobile').val();
	$.ajax({

	   url: SERVER2+'update_mobileno_api.asp',
	   type: 'GET',
	   timeout: 50000,
	   data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'oldmobno': user.mobile,
				'newmobno': newmob
				
			  },
		complete: function(xhr, textStatus) {
	   //called when complete
		},
		success: function(data, textStatus, xhr) {
	  
			console.log('Data:'+JSON.stringify(data));
			var data = JSON.parse(data);

			if(data.error!='')
			{
				toast(data.error);
			}
			else
			{
				toast(data.data+'.Please logout and login with new number.');
				 $('#oldmobile').val('');
	             $('#newmobile').val('');
				setTimeout(function(){logOut();},3000);
				
				
			}

			//logOut();
			
			//$.mobile.changePage( "#homepage", { transition: "none"} );
	   
		},
		error: function(xhr, textStatus, errorThrown) {
			toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

	 
		
}

function success() {
    console.log("success: ", this.src);
  }

  function failure() {
    console.log("failure: ", this.src);
  }

 function gobackfromrewardsback()
 {

	 var cattype = localStorage.getItem("cattype");
	if(cattype == 'Retailer')
		$.mobile.changePage( "#rewardscat", {transition: "none"} );
	else
		$.mobile.changePage( "#reward_store", {transition: "none"} );
 }

 function sharephoto()
 {

			var imageLink;
            console.log('Calling from CapturePhoto');
            navigator.screenshot.save(function(error,res){
            if(error){
            alert(error);
            }else{
            console.log('ok',res.filePath); //should be path/to/myScreenshot.jpg
            //For android
            imageLink = res.filePath;
           window.plugins.socialsharing.share(null, null,'file://'+imageLink, null);

           //For iOS
           //window.plugins.socialsharing.share(null,   null,imageLink, null)
     }
     },'jpg',50,'myScreenShot');
 }

 function uploadQr(imageURI)
	{
		

			var min=1; 
    		var max=200;  
  		    var random =Math.floor(Math.random() * (+max - +min)) + +min;



		var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='qr_'+random+'_'+user.mobile;
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				filenm=options.fileName+".jpg";

				

				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;




                
               var ft = new FileTransfer();

               //alert(imageURI);
				
	         // $("#wait").css("display","block");
					
				ft.upload(imageURI, encodeURI(versionurl+"upload_bill_new.php"), winq, fail, options, true);

                checkfileanddoocr(versionurl+'uploads/'+fName+'.jpg');


}

function checkfileanddoocr(url)
{
	$.get(url)
    .done(function() { 
       var url1='http://api.ocr.space/parse/imageurl?apikey=8e31e7bde388957&url='+url;
 		

	 

	 
	 $.ajax({
          
			url:url1,
			type: 'GET',
			timeout: 300000,
            dataType: "json",
       		success: function(data, textStatus, xhr) {
       			//alert(JSON.stringify(data));
				alert(data.ParsedResults[0].ParsedText);

				alert(data.ParsedResults[0].ParsedText.indexOf('Gold'));

				if(data.ParsedResults[0].ParsedText.indexOf('Gold')>=0 || data.ParsedResults[0].ParsedText.indexOf('Dhan')>=0)
				{
					alert('Valid QR')
                      showScan1();
				}
				else
				{
					alert('Invalid QR')

				}
		},
			error: function(xhr, textStatus, errorThrown) {
				 alert('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});


    }).fail(function() { 
        checkfileanddoocr(url);
    })

}

function winq(r)
{
	 //$("#wait").css("display","none");



}

function uploadQr1()
{

           navigator.screenshot.save(function(error,res){
            if(error){
            alert(error);
            }else{

            alert(res.filePath); //should be path/to/myScreenshot.jpg
            //For android
            imageLink = res.filePath;

            var myimage = 'file://'+imageLink;//document.getElementById("largeImage").src;

            //document.getElementById("scanpic").src = myimage;

            uploadQr(myimage);


	      		
     		 }
     		},'jpg',50,'myScreenShot');
		  

}
 function showScan1()
 {
   navigator.camera.getPicture(uploadQr1, onFail, { quality: 20,correctOrientation: true,destinationType: navigator.camera.DestinationType.FILE_URI,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true });
         
	         // navigator.camera.getPicture(uploadQr, onFail, { qual,ty: 100, correctOrientation: true });

             


		  

		/*	var imageLink;
            console.log('Calling from CapturePhoto');
            navigator.screenshot.save(function(error,res){
            if(error){
            alert(error);
            }else{

            alert(res.filePath); //should be path/to/myScreenshot.jpg
            //For android
            imageLink = res.filePath;

            var myimage = 'file://'+imageLink;//document.getElementById("largeImage").src;

            document.getElementById("scanpic").src = myimage;


	      		Tesseract.recognize(myimage)
	    				
	    					.progress(function  (p) { console.log('progress', p)})
       						.then(function (result) { alert(JSON.stringify(result)) })
       						
     }
     },'jpg',50,'myScreenShot');

     */
 }

function choosecontact()
{
		 			

    if ($("#contactsList").length == 1) {
       
      /*  navigator.contactsPhoneNumbers.list(function(contacts) {


			
			

			var html="";
			  
			for (var i = 0; i < contacts.length; i++) {
					
					
						   var dispname=contacts[i].displayName
							
							for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
								
								var phone = contacts[i].phoneNumbers[j];

								html+="<div class=\"primary_block pt-10 pb-10\"> <a href=\"javascript:getUserRecentCon(\'"+phone.number+"\');\" class=\"points_bal_btn\"><div class=\"points_bal\"><h4>"+dispname+"</h4>"+(phone.number)+"</div> <div class=\"points_arrow\"><img src=\"assets/images/arrow.png\" class=\"img-responsive\"></div></a> </div>";
								
							}
							
				}

				if (contacts.length === 0) {
					html+="<div class=\"primary_block pt-10 pb-10\"> <a href=\"#\" class=\"points_bal_btn\"><div class=\"points_bal\"><h4>No Contact Found</h4></div> <div class=\"points_arrow\"><img src=\"assets/images/arrow.png\" class=\"img-responsive\"></div></a> </div>";
								
				}
				$("#contactsList").html(html);
				
		   }, function(error) {
			  alert(error);
		   });*/
    }
 
}

$(document).on('pageshow', '#transferpointspg1', function (event, ui) {
		$('#retamount1').focus();
	});
 
$(document).on('pageshow', '#transferpointspg', function (event, ui) {
 		$.ajax({
          
			url: SERVER2+'get_dealer_transaction_details_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'Store_code': localStorage.getItem('storecode_ufi')
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			console.log('Data:'+JSON.stringify(data));

			if(data.error!='')
			{
				toast(data.error);
			}
			else
			{
				//Data:{"data":[{"Store_Id":231,"TransType":"Earn","Points ":"200","GiftToMobile":"","SaleAmount":"2000","bill_number":"6602DED5-5284-4D80-B854-2AF8F34AD0EB","Created_On":"10/7/2018 12:54:42 PM"}],"error":[]}
				var str = '';
				var j=0;
					for(var i=0;i<data.memberdata.length;i++)
				{
					
						
	                	str +='<div class="primary_block"><div class="recent_block" onClick=javascript:getUserRecent(\''+data.memberdata[i].mobile_no+'\');>';
						if(data.memberdata[i].photo!='')
						str +='<div class="recent_user_pic"><img src='+data.memberdata[i].photo+' class="img-responsive" alt=""/></div>';
						else
						str +='<div class="recent_user_pic"><img src="assets/images/user_placeholder.png" class="img-responsive" alt=""/></div>';
						str +='<div class="recent_user_details"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody>';
						str +='<tr><td><p>Name</p></td><td><p>'+data.memberdata[i].member_name+'</p></td></tr>';
						str	+='<tr><td><p>Firm Name</p></td><td><p>'+data.memberdata[i].Shop_Name+'</p></td></tr>';
						str +='<tr><td><p>Mobile No.</p></td><td><p>'+data.memberdata[i].mobile_no+'</p></td></tr>';
						str +='</tbody></table>';
						str +='</div></div></div>';
						
			    	
          		}

          		document.getElementById("recent_transfers").innerHTML=str;  
				       			
			}
                 
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});

});

function gobackfromtranfer_success()
{
    $('#dealerusername').val(localStorage.getItem("usernamemloyal_ufi"));
	                           $('#dealer_mobileno').val(localStorage.getItem("usermobilemloyal_ufi"));
	                           
	                           var pass = localStorage.getItem("userpassloyal_ufi");
							    if(pass.length>=4)
						       {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#dealercodeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						        }
	dealerauthenticate1();
	$.mobile.changePage( "#dealerhomepage", {transition: "none"} );

}


function gobackfromtranfer_more()
{

	 $('#dealerusername').val(localStorage.getItem("usernamemloyal_ufi"));
	                           $('#dealer_mobileno').val(localStorage.getItem("usermobilemloyal_ufi"));
	                           
	                           var pass = localStorage.getItem("userpassloyal_ufi");
							    if(pass.length>=4)
						       {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#dealercodeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						        }
	 dealerauthenticate1();

	$.mobile.changePage( "#transferpointspg", {transition: "none"} );

}

$(document).on('pageshow', '#additional_transfer_screen', function (event, ui) {

var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			 if(dd<10){
					dd='0'+dd
				} 
				if(mm<10){
					mm='0'+mm
				} 

			today = yyyy+'-'+mm+'-'+dd;

			
			
			document.getElementById('ats_bday').setAttribute("max", today);
});

function gotoemail(pagename)
{
    var emailid_st = '';

	var cattype = localStorage.getItem('cattype');

	if(cattype=='dealer')
	{
		emailid_st = store.storeemail;
	}
	else
	{
		emailid_st = user.emailid;
	}

	if(emailid_st=='')
	{
		toast('Email id is not updated.');
	}	
	else
	{

		if(cattype=='Retailer')
		{
			$('#retchoice_emailstats_div').css('display','block');
		}
		else
		{
			$('#retchoice_emailstats_div').css('display','none');
		}

		setminDate();
		
		backfromemail = pagename;
		$.mobile.changePage( "#email_statement", {transition: "none"} );

	}

}

function gobackfromemail()
{
	$.mobile.changePage( "#"+backfromemail, {transition: "none"} );
}

function gobacktorewardsprod()
{
	//showProductsold(selcid,selcname);
	var cattype = localStorage.getItem('cattype');
	//if(cattype == 'Mechanic')
	if(isGiftStore == true)
		showRewards_cb();
	else
		showRewards();

	
}
$(document).on('pageshow', '#reward_point_history_status', function (event, ui) {
	//Retailer
	//https://ufifilters.mloyalretail.com/apis/reward_history_json_api_retailer.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno=9667366933
	//Dealer
	//https://ufifilters.mloyalretail.com/apis/reward_history_json_api_dealer.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno=8178931580
	//Mechanic
	//https://ufifilters.mloyalretail.com/apis/reward_history_json_api_counterboy.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno=9818747077
	var url = '';
	var mobile = '';
		if(localStorage.getItem("cattype")=='Retailer')
		{
			url = SERVER2+'reward_history_json_api_retailer.asp';
			mobile = user.mobile;
		}
		else if(localStorage.getItem("cattype")=='Mechanic')
		{
			url = SERVER2+'reward_history_json_api_counterboy.asp';
			mobile = user.mobile;
		} 
		else
		{
			url = SERVER2+'reward_history_json_api_dealer.asp';
			mobile = store.storemobile;
		}

		
 		$.ajax({
          
			url: url,
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobileno': mobile
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			console.log('Data:'+JSON.stringify(data));

			if(data.error!='')
			{
				//toast(data.error);
				document.getElementById("rewardhistorydiv").innerHTML='You have not redeemed any points in rewards store';     
			}
			else
			{
				//Data:{"data":[{"Store_Id":231,"TransType":"Earn","Points ":"200","GiftToMobile":"","SaleAmount":"2000","bill_number":"6602DED5-5284-4D80-B854-2AF8F34AD0EB","Created_On":"10/7/2018 12:54:42 PM"}],"error":[]}
				var str = '';
				if(data.data.length>0)
				{
					for(var i=0;i<data.data.length;i++)
				{
					
						
	                	str += '<div class="recent_transfer">';
						
						str += '<div class="primary_block"><div class="recent_block padding0_10px">';
						str += '<div class="recent_user_icon"> <img src="'+data.data[i].BrandLogo+'" class="img-responsive" alt=""/> </div>';
						str += '<div class="recent_user_details">';
						str +='<p class="recent_detail_text">Product Name: '+data.data[i].BrandName;
						str += '<br>Reward No: '+data.data[i].BillNumber;
						str += '<br>Date: '+data.data[i].BillDate+'<br>';
						str += '<brPoints: '+data.data[i].GiftVoucherValue+'<br>';
						str += 'Status. Redeemed<br></p></div>';
						//str += '<div class="recent_user_points"><h2>'+data.data[i].Points+'+<span>Points</span></h2></div>';
						str += '</div></div></div>';
						
			    	
          		}
				}
				else
				{
						str += '<div class="reward_details">';
						str += '<div class="reward_detail_img"> <img src="assets/images/redeem_yet.png" class="img-responsive" alt=""/>';
						str += '<div class="text-center">';
					    str += '<div class="detail_desc mt-10">';
						str += '<h2 class="transfer_heading text-primary">You</h2>';
						str += '<h3 class="mt-0 mb-0">Have not redeem your points yet.</h3>';
						str += '</div>';
						str += '<div class="reward_img">';
					    str += '<div class="ui-grid-solo mt-80">';
						str += '<div class="ui-block-a text-center"> <a href="javascript:showRewards();" class="btn btn_primary">Redeem Now</a> </div>';
						str += '</div>';
				        str += '</div></div>';
						str += '</div></div>';
				}

				
				     document.getElementById("rewardhistorydiv").innerHTML=str;       			
			}
              
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});

});

function showtransferpointspg(transfer)
{

if(store.isLive=='0')
{
	toast('You cannot use this feature as your profile has been rejected or blocked or this state is not live.');
}
else{
	transfertype = transfer;
	$.mobile.changePage( "#transferpointspg", {transition: "none"} );
	if(transfer == 'Transfer')
		document.getElementById('transferhead').innerHTML = 'Transfer Points';
	else if(transfer == 'Revoke')
		document.getElementById('transferhead').innerHTML = 'Revoke Points';
}
}

function showScanCashback2()
{
	$.mobile.changePage( "#dhanbarsewallet2", { transition: "none"} );
}

function showScanCashback()
{
	
	$.mobile.changePage( "#dhanbarsewallet", { transition: "none"} );

	
	if(user.isApproved=='PENDING')
	{
		//https://ufifilters.mloyalretail.com/apis/member_coupon_redemption_details_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno=9667366933
	
	str =  '<div class="form-group text-center" >';
	str +=  '<h3 class="text-primary mt-0 mb-0 pt-10 pb-10 font_500">Pending Wallet</h3>'
	str += '<table class="table couter_list bg-dark scan_table">';
    str += '<thead class="table_header">';
    str += '<tr><th>Date</th><th>Scanned Code</th><th>Scan Value</th></tr>';
    str += '</thead><tbody>';
	$.ajax({
			url: SERVER2+'member_coupon_redemption_details_api.asp',
			type: 'GET',
			timeout: 30000,
			dataType: 'json',
		  	data: {
				
				apiuid: 'MLOYALAPI',
				apipswd:'Ml0yalAP!2o14',
				mobileno: user.mobile
							
			},
			success: function(data, textStatus, xhr) {

				var str='';

				if(data.data.length<0)
				{
					
					str += 'No Data Found';
				}
				else
				{
					for(var i=0;i<data.data.length;i++)
					{
						var dt = data.data[i].RedeemDate.split(' ');
						var dt1 = dt[1].split(':');
						str += '<tr><td>'+dt[0]+'<br/>'+dt1[0]+':'+dt1[1]+' '+dt[2]+'</td>';
	    				str += '<td>XXXXXXXXXXX</td>';
	    				str += '<td>'+data.data[i].CouponRedeemValue+'</td></tr>';
	    		    	
    				}
				}
				str += '</tbody></table></div>';
			
				$("#dhanbarsewallet .ui-content").html(str);  
				//document.getElementById('cashbacktrans').innerHTML=str;	
				
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});	
	}
	else
	{
	//https://ufifilters.mloyalretail.com/apis/get_casback_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno=9717049993
	
	$.ajax({
			url: SERVER2+'get_cashback_json_api.asp',
			type: 'GET',
			timeout: 30000,
			dataType: 'json',
		  	data: {
				
				apiuid: 'MLOYALAPI',
				apipswd:'Ml0yalAP!2o14',
				mobileno: user.mobile
							
			},
			success: function(data, textStatus, xhr) {
				
				
				var str='';

                console.log(data.data.length);
				if(data.data.length<0)
				{
					
					str += 'No Data Found';
				}
				else
				{
					
					//alert(data.dataredeemcoupon.length);
					for(var i=0;i<data.data.length;i++)
					{
						if(data.data[i].PaytmStatus=="SUCCESS")
						{
						var dt = data.data[i].CreatedOn.split(' ');
						var dt1 = dt[1].split(':');
						str +='<div class="recent_transfer">';
						str +='<p class="recent_date">'+dt[0]+'</p>';
						str +='<div class="primary_block"><div class="recent_block padding0_10px">';
						str +='<div class="recent_user_icon"> <img src="assets/images/points_recieved_icon.png" class="img-responsive" alt=""/> </div>';
						str +='<div class="recent_user_details">';
						str +='<p class="recent_detail_text">Cashback Received from UFI Filters.<br>';
						str += dt1[0]+':'+dt1[1]+' '+dt[2]+'<br></p>';
						str += '</div><div class="recent_user_points"><h2>&#8377; '+data.data[i].CashBack+'</h2></div>';
						str += '</div></div></div>';
	    			}	
	    		    	
    				}
				}
				
		        
		        //$("#scan_history .ui-content").html(str);
				document.getElementById('cashbacktrans').innerHTML= str;			
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
	
	}		

    		
}

function showRewards_cb()
{
	//toast('Coming Soon!');


isGiftStore = true;
if(user.isApproved=='REJECTED' || user.isBlocked=='BLOCKED' || user.isApproved=='PENDING' || user.isApproved=='UNAPPROVED' ||  user.isLive=='0')
	{
	  toast('You cannot use this feature right now.');
}
else
{
 var rewardsurl=SERVER2+'get_counterboy_offer_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&ownermobno='+user.owner_mobileno;

 

	  $.ajax({
		 url: rewardsurl,
		 type: 'GET',
		 timeout: 50000,
		 dataType: 'json',
		 data: { },

		 success: function(data, textStatus, xhr) {
					 
					 
				//console.log('JSONDATA:'+JSON.stringify(data));
				var str = '';
				
					
				for(var i=0;i<data.data.length;i++)
				{
					if(data.data[i].OfferName.indexOf('Voucher')>=0)
					{
					str +='<div class="primary_block">';
					str +='<a href="#">';
					str +='<div class="ui-grid-a boucher">';
					str +='<div class="ui-block-a">';
					str +='<img src="'+data.data[i].Offerimage+'" class="img-responsive" alt=""/>';
					str +='</div>';
					str +='<div class="ui-block-b">';
					str +='<button class="redeem_btn">Redeem Your Price</button>';
					str +='</div>';
					str +='</div>';											
					str +='</a>';
					str +='</div>';
					}
					else
					{
					str +='<div class="primary_block">';
					str +='<a href="javascript:showRewardDetails(\''+data.data[i].OfferId+'\',\''+data.data[i].Offerimage+'\',\''+data.data[i].OfferName+'\',\''+data.data[i].OfferSMSText+'\',\'\',\'\')" class="reward_item">';	
					str +='	<div class="reward_img"><img src='+data.data[i].Offerimage+' class="img-responsive" alt=""/></div>';
					str +='	<div class="reward_brief">';
					str +='	<p>'+data.data[i].OfferName+'</p>';
					str +='	<button class="redeem_btn">Redeem Your Price</button>';
					str +='	</div>';
					str +='</a>';
					str +='</div>';
					}
					
				}
				

				document.getElementById("rewards_div").innerHTML=str;	
				$.mobile.changePage( "#reward_store", { transition: "none"} );
				     
		},
		error: function(xhr, textStatus, errorThrown) {
			    toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

}

function isDate18orMoreYearsOld(dt) {
		var mm ='';
		var dd ='';
		var yyyy = '';
		var birthday = new Date($('#'+dt).val());
		
		 
		var age = parseInt((Date.now() - birthday) / (31557600000));
		
		if(age>=18)
	{
			
			return true;
	}
		
		toast('Age cannot be less than 18 years');
		$('#'+dt).val('');
		return false;
}

function openpdf(pdfLoc)
{
	var ref = window.open(pdfLoc, '_system', 'location=yes');
	 ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
     ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
     ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
     ref.addEventListener('exit', function(event) { alert(event.type); });
}

function profilecompletion()
{
	var profilecomplete = localStorage.getItem("profiledone_ufi");
    var cattype = localStorage.getItem('cattype');
	localStorage.setItem("profiledone_ufi","Yes");
	localStorage.setItem("profiletype_ufi",cattype);
	localStorage.setItem("usermtype_ufifilters",cattype);
	$('#username').val(localStorage.getItem("usernameufifilters"));
	                         var pass = localStorage.getItem("passwordufifilters");
	                         if(pass.length>=4)
						       {
						       var i=4;
						       while(i>0)
						                  {
						                    $('#codeBox'+i).val(parseInt(pass%10));
						                    i--;
						                    pass = parseInt(pass/10);
						                    
						                  }
						        }
	                          // $('#password_myacc').val(localStorage.getItem("passwordufifilters"));
							   user.mobile=localStorage.getItem("usernameufifilters");
						
						 localStorage.setItem("firsttime","true");
						 pendingprofile = false;
						authenticate();
					
}

function referFrnd()
{
  
  //console.log(user.mobile +" "+ user.firstname);
  var referral_mobile = user.mobile;
  var referral_name =  user.firstname;
  var referred_mobile1 = $('#rmobile1').val();
  var referred_name1 =  $('#rname1').val();
  var referred_mobile2 = $('#rmobile2').val();
  var referred_name2 =  $('#rname2').val();
  var referred_mobile3 = $('#rmobile3').val();
  var referred_name3 = $('#rname3').val();

  if(referred_mobile1=='' || referred_name1=='' )
	{
		toast('Please enter referred details');
	}
  else
	{
		
    $.ajax({
     url: SERVER2 + 'referral_api.asp', //login.php
     type: 'GET',
     timeout: 50000,
     dataType: 'html', //xml/html/script/json/jsonp
     data: {
    
				'apiuid': 'MLOYALAPI',   
				'apipswd': 'Ml0yalAP!2o14',     
				'referral_mobile': referral_mobile, 
				'referral_name': referral_name,    
				'referred_mobile1': referred_mobile1,      
				'referred_name1': referred_name1,     
				'referred_mobile2': referred_mobile2,        
				'referred_name2': referred_name2,             
				'referred_mobile3': referred_mobile3,
				'referred_name3': referred_name3
					
			},
   
    success: function(data, textStatus, xhr) {
				 //alert("aaaaaaaa");
				console.log('JSONDATA:'+JSON.stringify(data));
				toast(JSON.stringify(data));
   
				$.mobile.changePage( "#dealerhomepage");
				resetRefer();
	 

    },
    error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 }

}

function resetRefer() 
{
				$('#rmobile1').val('');
				$('#rname1').val('');
				$('#rmobile2').val('');
				$('#rname2').val('');
				$('#rmobile3').val('');
				$('#rname3').val('');
}

function filecomplaint()
{
		$.mobile.changePage( "#complaintpage");
}

function submitcomplaint()
{
	
	var complaint = $('#Comments_complaint').val();
	 if(complaint==''){
		  toast('You have not entered your problem');
		}else{


			$.ajax({
			url: SERVER+'feedback_json.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {


				'MobileNo': localStorage.getItem('usernameufifilters'),
				'FirstName': localStorage.getItem('firstname'),
				'LastName': localStorage.getItem('lastname'),
				'EmailId': localStorage.getItem('emailid'),       
				'StoreId': localStorage.getItem('def_store'),    
				'Var1': scanval,   
				'Var2': complaint,     
				'Var3': '', 
				'Var4': '',    
				'Var5': '',      
				'Var6': '',     
				'Var7': '',        
				'Var8': '',             
				'Var9': '',
				'Var10': '',
				'Var11': '',           
				'Var12': '',
				'Var13': '',
				'Var14': '',
				'Var15': '',
				'Var16': '',
				'Var17': '',
				'Var18': '',
				'Var19': '',
				'Var20': ''	
				
					
				
			},
			success: function(data, textStatus, xhr) {
				
				    
					
				toast(data);

				$.mobile.changePage( "#homepage", {transition: "flip"} );
				
				$('#Comments_complaint').val('');
				
			},
			error: function(xhr, textStatus, errorThrown) {
				$('#login-msg').html('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
		}
}

		var count =0;
		var str ;
		function add_fields(){	
			$('#username').val(localStorage.getItem("usernameufifilters"));
									var pass = localStorage.getItem("passwordufifilters");
										 if(pass.length>=4)
										   {
										   var i=4;
										   while(i>0)
													  {
														$('#codeBox'+i).val(parseInt(pass%10));
														i--;
														pass = parseInt(pass/10);
														
													  }
											}
										  
										   user.mobile=localStorage.getItem("usernameufifilters");
										   
										
											authenticate();
		}

$(document).on("pageshow", "#profilepage2", function(){
	$("#busi_proof_select").on("change", function(){
			var _this_val = $(this).val();
			if(_this_val==1) {
				$("#busi_proof2").hide();
				$("#busi_proof1").show();				
			}
		else {
			$("#busi_proof1").hide();
				$("#busi_proof2").show();
		}
		});
	
		
})

$(document).on("pageshow", "#profilepage", function(){
	$("#busi_proof_select1").on("change", function(){
			var _this_val = $(this).val();
			if(_this_val==1) {
				$("#busi_profile_proof2").hide();
				$("#busi_profile_proof1").show();				
			}
		else {
			$("#busi_profile_proof1").hide();
				$("#busi_profile_proof2").show();
		}
		});
	
		
})

function checkproofvalidity(prooftype,proofcode)
{
	//https://ufifilters.mloyalretail.com/apis/get_member_by_verification_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&prooftype=GST&proofcode=XXXX&mobile=9818747077
	var pcode =  $('#'+proofcode).val();
	$.ajax({
     url: SERVER2 + 'get_member_by_verification_json_api.asp', //login.php
     type: 'GET',
     timeout: 50000,
     dataType: 'json', //xml/html/script/json/jsonp
     data: {
    
				'apiuid': 'MLOYALAPI',   
				'apipswd': 'Ml0yalAP!2o14',     
				'prooftype': prooftype, 
				'proofcode': pcode,    
				'mobile': user.mobile
					
			},
   
    success: function(data, textStatus, xhr) {
				console.log(data.data.length);
				if(data.data.length>0)
				{
					toast(prooftype + " alraedy exist!")
					$('#'+proofcode).val('');
				}
				else
				{
					
				}
				
	},
    error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
}


function checkUserexist(mobileno,ctype)
{
	 console.log(mobileno);
	var mobile = $('#'+mobileno).val();
	
    var firstelem = mobile.charAt(0);

    if(parseInt(firstelem)>5 && parseInt(firstelem)<10)
    {
    	 $.ajax({
            
			url: SERVER2+'get_points_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobileno': mobile
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			console.log('Data:'+JSON.stringify(data));

			if(data.data!='')
			{
				toast('This user already exists as '+data.data[0].scanfilename);
				$('#'+mobileno).val('');
				return true;
			}
			else if(data.error=='Customer not registered.')
				{

				//console.log('dddd');//checkmobile(mobileno);
				if(ctype == 'cb')
					addcboy(mobile);
				else
					updatemobile(mobile);
				}
			
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});
             
        
    }
    else {
		
		
    	alert("Please put valid 10 digit mobile number");
        $('#retmobile').val('');
        return false;
		
		
		
		
    }
}

function getUsername_ret(mobileno,mtype)
{
    	 $.ajax({
            
			url: SERVER2+'get_points_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobileno': mobileno
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			console.log('Data:'+JSON.stringify(data));

			if(data.data!='')
			{
				if(mtype=='Retailer')
				{
					if(data.data[0].membertype=='Retailer')
					{
						$('#ret_mob_name').val(data.data[0].CustomerName);
					}
					else
					{
						toast('Number not registered as Retailer');
						$('#ret_mob_no').val('');
						$('#ret_mob_name').val('');
					}
				}
				else if(mtype=='Mechanic')
				{
					if(data.data[0].membertype=='Mechanic')
					{
						$('#ret_mob_name').val(data.data[0].CustomerName);
					}
					else
					{
						toast('Number not registered as Mechanic');
						$('#ret_mob_no').val('');
						$('#ret_mob_name').val('');
					}
				}

				
			}
			else if(data.error=='Customer not registered.')
			{
                $('#ret_mob_name').val('');
				toast('No details found.');
			}
			
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});
             
}


function showtransferpg()
{
	$.mobile.changePage( "#transferpointspg", {transition: "none"} );
	$('#dealerusername').val(localStorage.getItem("usernamemloyal_ufi"));
	$('#dealer_mobileno').val(localStorage.getItem("usermobilemloyal_ufi"));
	var pass = localStorage.getItem("userpassloyal_ufi");
	
	if(pass.length>=4)
		{
			var i=4;
			while(i>0)
			{
				$('#dealercodeBox'+i).val(parseInt(pass%10));
				i--;
				pass = parseInt(pass/10);
														
			}
		}
										  
	user.mobile=localStorage.getItem("usermobilemloyal_ufi");
	toast("Please wait..");
	dealerauthenticate();
											
											
}

//anoop file upload new way


function getfirmname(ownermob)
{
	//https://ufifilters.mloyalretail.com/apis/get_member_type_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobile=9654493332
	var mobile = $('#'+ownermob).val();
	$.ajax({
            
			url: SERVER2+'get_member_type_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            async:false,
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobile': mobile
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			console.log('Data:'+JSON.stringify(data));

			if(data.dealer!='No data available.')
			{
				if(ownermob == 'update_rmobile_cb1')
				{
					$('#update_currwork_cb1').val(data.dealer[0].Store_Name);
					$('#update_currwork_cb1').prop("disabled", true);
					//document.getElementById('update_currwork_cb1').readOnly = true;
				}
				else
				{
					$('#update_currwork_cb').val(data.dealer[0].Store_Name);
					$('#update_currwork_cb').prop("disabled", true);
				}
			}
			else if(data.data[0].MemberCategory=='Retailer')
			{
				if(ownermob == 'update_rmobile_cb1')
				{
					$('#update_currwork_cb1').val(data.data[0].ShopName);
					$('#update_currwork_cb1').prop("disabled", true);
				}
				else
				{
					$('#update_currwork_cb').val(data.data[0].ShopName);
					$('#update_currwork_cb').prop("disabled", true);
				}
				
			}
			else
			{
				
					if(ownermob == 'update_rmobile_cb1')
				    {
						$('#update_rmobile_cb1').val('');
						$('#update_currwork_cb1').val('');
					}
					else
				    {
						$('#update_rmobile_cb').val('');
						$('#update_currwork_cb').val('');
					}

					//toast('Mobile number of the Dealer/Retailer that you entered is not registered in Dhan Barse. Please recheck and enter a registered mobile number.');
					toast('NUMBER NOT REGISTERED');
				
			}
			
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});
}


function downloadApp(param) {

	if(param=='link')

			location.href=SERVER1+'GM.apk';

	else

		    location.href='https://ufifilters.mloyalretail.com/mapp';
	// body...

}



function gobackfromwhatsnew()
{
	// $('iframe').attr('src', $('iframe').attr('src'));
    //alert(vidlen);
	/*for (i=0;i<parseInt(vidlen);i++){

		// alert('#vid'+i);
		$('#vid'+i)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	 	$('#vid'+i)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		// stopVideo($('#vid'+i));
	 }*/
	 document.getElementById('events').innerHTML = localStorage.getItem('eventdata');
	 document.getElementById('ad').innerHTML = localStorage.getItem('addata');
	 document.getElementById('product_tab').innerHTML = localStorage.getItem('proddata');
	

	 $.mobile.changePage('#whats_new');
}

function checkRef(domid)
{
	var mobile = $('#'+domid).val();
	if(mobile == '')
	{
		toast('Reference Code cannot be blank');
	}
	else
	{
	$('#rdet_update_ref_cb1').innerHTML = '';
	document.getElementById('rdet_'+domid).innerHTML='';
	$.ajax({

		
            
			url: SERVER2+'get_member_type_byrefercode_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            async:false,
            data: {
					
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobile': mobile
				
					
				},
			
			success: function(data, textStatus, xhr) {
				
			console.log('Data:'+JSON.stringify(data));

			if(data.data=='No data available.')
			{
				//toast('This reference code is not available!');
				document.getElementById('rdet_'+domid).innerHTML='This reference code is not available!';
			}
			else 
			{
				
				document.getElementById('rdet_'+domid).innerHTML=data.data[0].FirstName+'<br>'+data.data[0].Mobileno+'<br>'+data.data[0].MemberCategory
				//toast('Member Name :'+data.data[0].FirstName+' '+data.data[0].LastName+'\nMember Type:'+data.data[0].MemberCategory);
				
			}
			
			
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				}
			 
		});
  }

}

function withoutpan()
{

	
	$.mobile.changePage('#profilepage2');
	
}



/* new  functions */

 function showpassbookret()
 {
	$.mobile.changePage( "#point_passbookret", {transition: "none"} );
 }

$(document).on('pageshow', '#scandata', function () {
	
	 	   
		 
	 $('input[name="retpaint_scan"]').click(function(){
    if ($(this).is(':checked'))
    {
      if($(this).val() == 'Painter')
      {
      	 $('#scan_mob_no').attr('placeholder', "Painter Mobile No");
        
      }
      else
      {
      	 $('#scan_mob_no').attr('placeholder', "Retailer Mobile No");
      }
    }
  });
});

function showScan2()
{
	
	var cattype = localStorage.getItem('cattype');
    //console.log('cattype:'+cattype);    

        if(cattype == 'Painter')
        {
			showscanPainter();
			//$.mobile.changePage( "#scanpage_painter", {transition: "none"} );

		}
		else if(cattype == 'Retailer')
        {
			showscanRetailer();
			//$('#ret_scan_selection').popup();
			//$('#ret_scan_selection').popup("open");
			//console.log('here');
			//$.mobile.changePage( "#scanpage_ret", {transition: "none"} );
		}
		else if(cattype == 'dealer')
        {
        	var custtype =  $('input[name="retpaint_scan"]:checked').val();
        	scanmobileno = $('#scan_mob_no').val();
        	if(scanmobileno=='' || custtype == undefined || custtype ==null)
					{
						toast('Please enter mandatory fields');
					}
					else
					{
	        	if(custtype == 'Painter')
	        	{
	        		showscanPainter();
	        	}
						else
						{
							showscanRetailer();
						}
					}
			

		}
		else if(cattype == 'Mechanic')
        {
			//$.mobile.changePage( "#scanpage_painter", {transition: "none"} );
			showscanPainter();
		}
}

function showscanRetailer()
{
  //	$.mobile.changePage( "#scanpage_ret", {transition: "none"} );
    
     cordova.plugins.barcodeScanner.scan(
			   function (result) {

					$.mobile.changePage( "#scanpage_ret", {transition: "none"} );

					if(result.cancelled == true)
				    {
						toast('Scanning canceled');
				    }
					else
				    {

						var bcode=result.text;

						$('#scanpage_ret_bcode').val(bcode);

					}

			  },
			  function (error) {
				  alert("Scanning failed: " + error);
			  },
			  {
				  preferFrontCamera : false, // iOS and Android
				  showFlipCameraButton : true, // iOS and Android
				  showTorchButton : true, // iOS and Android
				  torchOn: false, // Android, launch with the torch switched on (if available)
				  saveHistory: true, // Android, save scan history (default false)
				  prompt : "Place the code inside the scan area", // Android
				  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
				  formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
				  orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
				  disableAnimations : true, // iOS
				  disableSuccessBeep: false // iOS and Android
			  }
		   );

}

function showscanRetailer_1(type)
{
    if(type='putty')
	{

	 cordova.plugins.barcodeScanner.scan(
			   function (result) {
				  /*toast("We got a barcode\n" +
						"Result: " + result.text + "\n" +
						"Format: " + result.format + "\n" +
						"Cancelled: " + result.cancelled);*/
					if(result.cancelled == true)
				    {
						toast('Scanning canceled');
				    }
					else
				    { 

						var bcode=result.text;

						$('#scanpage_ret_putty_bcode').val(bcode);

						$.mobile.changePage( "#scanpage_ret_putty", {transition: "none"} );
					}

			  },
			  function (error) {
				  alert("Scanning failed: " + error);
			  },
			  {
				  preferFrontCamera : false, // iOS and Android
				  showFlipCameraButton : true, // iOS and Android
				  showTorchButton : true, // iOS and Android
				  torchOn: false, // Android, launch with the torch switched on (if available)
				  saveHistory: true, // Android, save scan history (default false)
				  prompt : "Place the code inside the scan area", // Android
				  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
				  formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
				  orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
				  disableAnimations : true, // iOS
				  disableSuccessBeep: false // iOS and Android
			  }
		   );
	}
	else
	{
		$.mobile.changePage( "#scanpage_ret_pipes", {transition: "none"} );
	}

}

function showscanPainter()
{
	cordova.plugins.barcodeScanner.scan(
			   function (result) {

					$.mobile.changePage( "#scanpage_painter", {transition: "none"} );

					if(result.cancelled == true)
				    {
						toast('Scanning canceled');
				    }
					else
				    {

						var bcode=result.text;

						$('#scanpage_paint_bcode').val(bcode);

					}

			  },
			  function (error) {
				  alert("Scanning failed: " + error);
			  },
			  {
				  preferFrontCamera : false, // iOS and Android
				  showFlipCameraButton : true, // iOS and Android
				  showTorchButton : true, // iOS and Android
				  torchOn: false, // Android, launch with the torch switched on (if available)
				  saveHistory: true, // Android, save scan history (default false)
				  prompt : "Place the code inside the scan area", // Android
				  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
				  formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
				  orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
				  disableAnimations : true, // iOS
				  disableSuccessBeep: false // iOS and Android
			  }
		   );

}

function scansubmitPainter()
{
    var bcode = $('#scanpage_paint_bcode').val();
	var ret_mb = $('#scanpage_paint_ret_mob').val();
    var scanmob = user.mobile;
	var store_code = checkforStorecode(user.store_code);
    //var cattype = localStorage.getItem('cattype');
      

	if(bcode=='' || ret_mb=='')
	{
		toast('Please enter mandatory fields');
	}
	else
	{
	   $.ajax({
          
					url: SERVER2+'get_retailerinfluencer_sales_data_api.asp',
					type: 'GET',
					timeout: 300000,
					//dataType: "json",
					data: {
						
						'apiuid': 'MLOYALUFIAPI',
						'apipswd': 'Ml0yalUFIAP!2!',
						'mobileno': scanmob,
						'scan_code': bcode,
						'scode': store_code,
						'cust_type': 'Mechanic',
						'apprvlmob': scanmob,
						'apprvltype': 'Mechanic',
						'salebymob': ret_mb
							
						},
					
					success: function(data, textStatus, xhr) {
						
							console.log('Data:'+JSON.stringify(data));
							var data = JSON.parse(data);

							if(data.error.length>0)
							{
								toast(data.error);
								$('#scanpage_paint_bcode').val('');
								$('#scanpage_paint_ret_mob').val('');
							}
							else
							{
								toast(data.data);
							}

							$.mobile.changePage( "#homepage", { transition: "none"} );

								
					 },
					error: function(xhr, textStatus, errorThrown) {
						 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
						}
					 
				});
	}
}

function showscanMechanic_None()
{
	// do nothing
}

function scansubmitRetailer()
{
    var bcode = $('#scanpage_ret_bcode').val();
	//var gst   = $('#scanpage_ret_gst').val();
	var mech_mob   = $('#scanpage_ret_mech_mob').val();
	var scanmob = user.mobile;
	var store_code = checkforStorecode(user.store_code);
    //var cattype = localStorage.getItem('cattype');  

    
	if(bcode=='' || mech_mob=='')
	{
		toast('Please enter mandatory fields');
	}
	else
	{
	   $.ajax({
          
					url: SERVER2+'get_retailerinfluencer_sales_data_api.asp',
					type: 'GET',
					timeout: 300000,
					//dataType: "json",
					data: {
						
						'apiuid': 'MLOYALUFIAPI',
						'apipswd': 'Ml0yalUFIAP!2!',
						'mobileno': mech_mob,
						'scan_code': bcode,
						'scode': store_code,
						'cust_type': 'Mechanic',
						'apprvlmob': scanmob,
						'apprvltype': 'Retailer',
						'salebymob': scanmob
							
						},
					
					success: function(data, textStatus, xhr) {
						//data = '{"data":[{"msg":"Data submitted successfully.","mechanic_points":"5","retailer_points":"2"}],"error":[]}';
							console.log('Data:'+JSON.stringify(data));
							var data = JSON.parse(data);

							$('#scanpage_ret_bcode').val('');
							$('#scanpage_ret_mech_mob').val('');
							if(data.error.length>0)
							{
								toast(data.error);
								//$('#getpointsmsg').innerHTML=data.error;
                				$.mobile.changePage( "#homepage", { transition: "none"} );
							}
							else
							{
								console.log(data.data[0].msg);
								//toast(data.data);
								//console.log(data.data[0].msg);
								$('#getpointsmsg').innerHTML=data.data[0].msg;
                
								$("#burnbtn").attr("href", "javascript:showredeempage("+data.data[0].retailer_points+","+data.data[0].mechanic_points+","+mech_mob+");");
								$('#transfer_details').popup();
								$('#transfer_details').popup("open");
							}
              
						
              
              
              
								
					 },
					error: function(xhr, textStatus, errorThrown) {
						 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
						}
					 
				});
	}
}



function scansubmitRetailerPutty()
{
    var bcode = $('#scanpage_ret_putty_bcode').val();
	var gst   = $('#scanpage_ret_putty_gst').val();
	var scanmob = user.mobile;
    var cattype = localStorage.getItem('cattype');
  console.log('cattype'+cattype);    

        if(cattype == 'dealer')
        {
        	scanmob = scanmobileno;
        }
	if(bcode=='' || gst=='')
	{
		toast('Please enter mandatory fields');
	}
	else
	{
	   $.ajax({
          
					url: SERVER2+'my_scan_json_api.asp',
					type: 'GET',
					timeout: 300000,
					dataType: "json",
					data: {
							
						'apiuid': 'MLOYALAPI',
						'apipswd': 'Ml0yalAP!2o14',
						'retailermobno': scanmob,
						'qrcodescanned': bcode,
						'distributorgst': gst
							
						},
					
					success: function(data, textStatus, xhr) {
						
					//console.log('Data:'+JSON.stringify(data));

					if(data.data!='')
					{
						toast(data.data);
					}
					else
					{
						toast(data.error);
					}
						gobackfromscan();   
					 },
					error: function(xhr, textStatus, errorThrown) {
						 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
						}
					 
				});
	}
}

function scansubmitRetailerPipes()
{

	var smant = $('#scanpage_ret_pipes_samt').val();
	var pcat   = $('#scanpage_ret_pipes_pcat').val();
	var gst   = $('#scanpage_ret_pipes_gst').val();
	var scanmob = user.mobile;
    var cattype = localStorage.getItem('cattype');
  console.log('cattype'+cattype);    

        if(cattype == 'dealer')
        {
        	scanmob = scanmobileno;
        }
	if(smant=='' || pcat=='' || gst=='')
	{
		toast('Please enter mandatory fields');
	}
	else
	{

		$.ajax({
          
					url: SERVER2+'my_scan_json_api.asp',
					type: 'GET',
					timeout: 300000,
					dataType: "json",
					data: {
							
						'apiuid': 'MLOYALAPI',
						'apipswd': 'Ml0yalAP!2o14',
						'retailermobno': scanmob,
						'productcategory': pcat,
						'saleamt': smant,
						'distributorgst': gst
							
						},
					
					success: function(data, textStatus, xhr) {
						
					//console.log('Data:'+JSON.stringify(data));

					if(data.data!='')
					{
						toast(data.data);
					}
					else
					{
						toast(data.error);
					}
						gobackfromscan();   
					 },
					error: function(xhr, textStatus, errorThrown) {
						 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
						}
					 
				});
	}
}

function scansubmitMechanic()
{

	var smant = $('#scanpage_plumber_samt').val();
	var pcat   = $('#scanpage_plumber_pcat').val();
	var scanmob = user.mobile;
    var cattype = localStorage.getItem('cattype');
  console.log('cattype'+cattype);    

        if(cattype == 'dealer')
        {
        	scanmob = scanmobileno;
        }
	if(smant=='' || pcat=='')
	{
		toast('Please enter mandatory fields');
	}
	else
	{

		$.ajax({
          
					url: SERVER2+'my_scan_json_api.asp',
					type: 'GET',
					timeout: 300000,
					dataType: "json",
					data: {
							
						'apiuid': 'MLOYALAPI',
						'apipswd': 'Ml0yalAP!2o14',
						'retailermobno': scanmob,
						'productcategory': pcat,
						'saleamt': smant
							
						},
					
					success: function(data, textStatus, xhr) {
						
					//console.log('Data:'+JSON.stringify(data));

					if(data.data!='')
					{
						toast(data.data);
					}
					else
					{
						toast(data.error);
					}
						gobackfromscan();   
					 },
					error: function(xhr, textStatus, errorThrown) {
						 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
						}
					 
				});
	}
}

function distbyRetailerno()
{

  try{
		$( "#sidebar" ).panel( "close" );
		}catch(err) 
		{	}
	
  $.ajax({
    url: SERVER2+'get_distributor_details_by_retailer_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
	data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile },
    complete: function(xhr, textStatus) {
   //called when complete
    }, success: function(data, textStatus, xhr) {

		//console.log(JSON.stringify(data));

			  var str = '';
        
			  str +='<div class="table-responsive">';
			  str +='<table class="table couter_list bg-dark">';
			  str +='<thead class="table_header"><th>Distributor Name</th><th>Distributor Code</th></thead>';

			  for (var j = 0; j < data.data.length; j++)
			  {
					str+='<tr>';
					str+='<td>'+checkforundefined(data.data[j].DistributorName)+ '</td>';
					str+='<td>'+checkforundefined(data.data[j].DisributorCode)+ '</td>';
					str+='</tr>';
			  } 
                      
			  str +='</table>';
		      str +='</div>';
       
	          document.getElementById("distribur_list_div").innerHTML=str;

			  $.mobile.changePage( "#distribur_list", {transition: "none"} );
   
   
    },
    error: function(xhr, textStatus, errorThrown) {

    }
  });

}

$(document).on('pageshow', '#salesdata', function () {
	
	 	var cattype = localStorage.getItem('cattype');
	 	var retchoicediv = document.getElementById('retchoice');
		var gstdiv = document.getElementById('dist_gstdiv');
		var apprdiv = document.getElementById('ret_apprdiv');
		var distapprdiv = document.getElementById('dist_apprdiv');
		var rnamediv = document.getElementById('ret_apprdiv_name');
		var addmorediv = document.getElementById('addmore_sdata');

	if(cattype == 'Retailer')
	{

	  document.getElementById('ret_sales_txt').innerHTML='My Purchases';
	  document.getElementById('plum_sales_txt').innerHTML='My Sales';

	  retchoicediv.style.display = 'block';
      gstdiv.style.display = 'block';
      apprdiv.style.display = 'none';
      distapprdiv.style.display = 'block';
	  rnamediv.style.display = 'none';
	  addmorediv.style.display = 'none';
	  $('#dist_mob_no').attr('placeholder', "Distributor Mobile No");
    }
    else if(cattype == 'dealer' || cattype == 'Dealer')
	{
	  retchoicediv.style.display = 'block';
      gstdiv.style.display = 'none';
      apprdiv.style.display = 'block';
      distapprdiv.style.display = 'none';
	  //addmorediv.style.display = 'block';
	  addmorediv.style.display = 'none';
	  var custtype =  $('input[name="retplum_sales"]:checked').val();
	  if(custtype=='Mechanic')
	  {
	  	distapprdiv.style.display = 'block';
	  }
    }
    else if(cattype == 'Mechanic')
    {
    	retchoicediv.style.display = 'none';
        gstdiv.style.display = 'none';
        apprdiv.style.display = 'block';
        distapprdiv.style.display = 'none';
	    rnamediv.style.display = 'none';
	    addmorediv.style.display = 'none';
    } 
		 
	 $('input[name="retplum_sales"]').click(function(){
    if ($(this).is(':checked'))
    {
      if($(this).val() == 'Mechanic')
      {
      	gstdiv.style.display = 'none';
        apprdiv.style.display = 'block';
        distapprdiv.style.display = 'none';
				rnamediv.style.display = 'none';
				addmorediv.style.display = 'none';
         $('#ret_mob_no').attr('placeholder', "Mechanic Mobile No");
		 $('#ret_mob_no').attr('onblur', "javascript:checkmobile_retsales('Mechanic');");
         if(cattype == 'dealer')
         {
         	distapprdiv.style.display = 'block';
			rnamediv.style.display = 'block';
         }
      }
	  else if($(this).val() == 'Retailer')
      {
      	

		$('#ret_mob_no').attr('placeholder', "Retailer Mobile*");
		$('#ret_mob_no').attr('onblur', "javascript:checkmobile_retsales('Retailer');");
		 if(cattype == 'Retailer')
         {
         	retchoicediv.style.display = 'block';
      		gstdiv.style.display = 'block';
      		apprdiv.style.display = 'none';
      		distapprdiv.style.display = 'block';
	  			rnamediv.style.display = 'none';
	  			addmorediv.style.display = 'none';
	  			$('#dist_mob_no').attr('placeholder', "Distributor Mobile No");
         }
        else if(cattype == 'dealer')
        {
        	gstdiv.style.display = 'none';
          apprdiv.style.display = 'block';
          distapprdiv.style.display = 'none';
		      rnamediv.style.display = 'block';
		      //addmorediv.style.display = 'block';
		      addmorediv.style.display = 'none';
        }
      }
      else
      {
      	gstdiv.style.display = 'block';
        apprdiv.style.display = 'none';
        distapprdiv.style.display = 'none';
		rnamediv.style.display = 'none';
		addmorediv.style.display = 'none';
      }
    }
  });
});

function submitsalesData()
{

	try{
		$( "#sidebar" ).panel( "close" );
		}catch(err) 
		{	}

	var smant  = $('#sales_bill_amount1').val();

	//var pcat   = $('#sales_prod_cat1').val();
	var pcat = $.map($('input[name="sales_prod_cat1"]:checked'), function(c){return c.value; });
	    pcat = pcat.toString();

    var dgst = $('#dist_gst_no').val();
    var rmob = $('#ret_mob_no').val();
    var dmob = $('#dist_mob_no').val();
    var custtype =  $('input[name="retplum_sales"]:checked').val();
    console.log('custtype:'+custtype);
	//console.log('pcat:'+pcat);

	if(smant=='' || pcat=='' || pcat==undefined || pcat==null)
	{
		toast('Please enter mandatory fields');
	}
	else
	{

		var cattype = localStorage.getItem('cattype');

		if(cattype == 'Retailer')
		{
			if(custtype == 'Retailer')
			{
        //http://ufifilters.mloyalretail.com/APIs/get_retailerplumber_sales_data_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno=7777888899&scode=04AEHPG2534A1ZB&bill_amount=2000&prod_cat=cPVC&cust_type=Retailer&apprvlmob=9910049864&apprvltype=Distributor
				$.ajax({
          
					url: SERVER2+'get_retailerplumber_sales_data_api.asp',
					type: 'GET',
					timeout: 300000,
					dataType: "json",
					data: {
							
						'apiuid': 'MLOYALAPI',
						'apipswd': 'Ml0yalAP!2o14',
						'mobileno': user.mobile,
						'scode': dgst,
						'prod_cat': pcat,
						'bill_amount': smant,
						'cust_type': 'Retailer',
						'apprvlmob':	dmob,
						'apprvltype': 'Distributor'
							
						},
					
					success: function(data, textStatus, xhr) {
						
					//console.log('Data:'+JSON.stringify(data));

							if(data.error.length>0)
							{
								toast(data.error);
							}
							else
							{
								toast(data.data);
							}

							$.mobile.changePage( "#homepage", { transition: "none"} );
					 },
					error: function(xhr, textStatus, errorThrown) {
						 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
						}
					 
				});
			}
			else if(custtype == 'Mechanic')
			{
        //http://ufifilters.mloyalretail.com/APIs/get_retailerplumber_sales_data_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno=9654493333&bill_amount=2100&prod_cat=cpvc&cust_type=Mechanic&apprvlmob=9654493333&apprvltype=Mechanic&salebymob=9910049864
				$.ajax({
          
					url: SERVER2+'get_retailerplumber_sales_data_api.asp',
					type: 'GET',
					timeout: 300000,
					dataType: "json",
					data: {
						'apiuid': 'MLOYALAPI',
						'apipswd': 'Ml0yalAP!2o14',
						'mobileno': rmob,
						'prod_cat': pcat,
						'bill_amount': smant,
						'cust_type': 'Mechanic',
						'apprvlmob':	rmob,
						'apprvltype': 'Mechanic',
						'salebymob': user.mobile
						},
					
					success: function(data, textStatus, xhr) {
						
					//console.log('Data:'+JSON.stringify(data));

							if(data.error.length>0)
							{
								toast(data.error);
							}
							else
							{
								toast(data.data);
							}

							$.mobile.changePage( "#homepage", { transition: "none"} );
					 },
					error: function(xhr, textStatus, errorThrown) {
						 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
						}
					 
				});
			}

		}
		else if(cattype == 'Mechanic')
		{
      //http://ufifilters.mloyalretail.com/APIs/get_retailerplumber_sales_data_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno=9654493333&bill_amount=2000&prod_cat=cpvc&cust_type=Mechanic&apprvlmob=9910049864&apprvltype=Retailer&salebymob=9910049864
			$.ajax({
          
					url: SERVER2+'get_retailerplumber_sales_data_api.asp',
					type: 'GET',
					timeout: 300000,
					dataType: "json",
					data: {
						'apiuid': 'MLOYALAPI',
						'apipswd': 'Ml0yalAP!2o14',
						'mobileno': user.mobile,
						'prod_cat': pcat,
						'bill_amount': smant,
						'cust_type': 'Mechanic',
						'apprvlmob':	rmob,
            'apprvltype': 'Retailer',
            'salebymob':	rmob
						},
					
					success: function(data, textStatus, xhr) {
						
					//console.log('Data:'+JSON.stringify(data));

							if(data.error.length>0)
							{
								toast(data.error);
							}
							else
							{
								toast(data.data);
							}

							$.mobile.changePage( "#homepage", { transition: "none"} );
					 },
					error: function(xhr, textStatus, errorThrown) {
						 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
						}
					 
				});
				
		}
		else if(cattype == 'dealer')
		{
			if(custtype == 'Retailer')
			{

			  /*var smant2  = $('#sales_bill_amount2').val();
				var pcat2  = $('#sales_prod_cat2').val();
				var smant3  = $('#sales_bill_amount3').val();
				var pcat3  = $('#sales_prod_cat3').val();
				var smant4  = $('#sales_bill_amount4').val();
				var pcat4  = $('#sales_prod_cat4').val();
				var smant5  = $('#sales_bill_amount5').val();
				var pcat5  = $('#sales_prod_cat5').val();*/
//http://ufifilters.mloyalretail.com/APIs/get_retailerplumber_sales_data_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno=9910049864&scode=04AEHPG2534A1ZB&bill_amount=2000&prod_cat=cPVC&cust_type=Retailer&apprvltype=Retailer&apprvlmob=9910049864
				$.ajax({
          
					url: SERVER2+'get_retailerplumber_sales_data_api.asp',
					type: 'GET',
					timeout: 300000,
					dataType: "json",
					data: {
						'apiuid': 'MLOYALAPI',
						'apipswd': 'Ml0yalAP!2o14',
						'mobileno': rmob,
						'scode': store.gstno,
						'prod_cat': pcat,
						'bill_amount': smant,
						'cust_type': 'Retailer',
						'apprvltype':	'Retailer',
						'apprvlmob':	rmob
						},
					
					success: function(data, textStatus, xhr) {
						
					//console.log('Data:'+JSON.stringify(data));

							if(data.error.length>0)
							{
								toast(data.error);
							}
							else
							{
								toast(data.data);
							}

							//resetRetailer_more();

							gobackfromrewards();
					 },
					error: function(xhr, textStatus, errorThrown) {
						 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
						}
					 
				});
			}
			else if(custtype == 'Mechanic')
			{
        //http://ufifilters.mloyalretail.com/APIs/get_retailerplumber_sales_data_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14&mobileno=9654493333&scode=04AEHPG2534A1ZB&bill_amount=2000&prod_cat=cPVC&cust_type=Mechanic&apprvltype=Mechanic&apprvlmob=9654493333
				$.ajax({
          
					url: SERVER2+'get_retailerplumber_sales_data_api.asp',
					type: 'GET',
					timeout: 300000,
					dataType: "json",
					data: {
							
						'apiuid': 'MLOYALAPI',
						'apipswd': 'Ml0yalAP!2o14',
						'mobileno': rmob,
						'scode': store.gstno,
						'prod_cat': pcat,
						'bill_amount': smant,
						'cust_type': 'Mechanic',
						'apprvltype': 'Mechanic',
						'apprvlmob':	rmob
						},
					
					success: function(data, textStatus, xhr) {
						
					//console.log('Data:'+JSON.stringify(data));

							if(data.error.length>0)
							{
								toast(data.error);
							}
							else
							{
								toast(data.data);
							}

							gobackfromrewards();
					 },
					error: function(xhr, textStatus, errorThrown) {
						 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
						}
					 
				});
			}

		}

		
	}
}

function resetRetailer_more()
{
	$('#sales_bill_amount2').val('');
	$('#sales_prod_cat2').val('');
	$('#sales_bill_amount3').val('');
	$('#sales_prod_cat3').val('');
	$('#sales_bill_amount4').val('');
	$('#sales_prod_cat4').val('');
	$('#sales_bill_amount5').val('');
	$('#sales_prod_cat5').val('');
}

function meetPlanning()
{


    var secode = localStorage.getItem("secode");
	var product = $('#product_meet1').val();
	var state = $('#state_meet1').val();
	var district = $('#district_meet1').val();
	var retailerno = $('#retailerno_meet1').val();
	var retailername = $('#retailername_meet1').val();
	var distributorsapcode = $('#distsapcode_meet1').val();
	var distributorname = $('#distname_meet1').val();
	var activityconductingdate = $('#actdate_meet1').val();
	var typeofmeeting = $('#type_meet1').val();
	var noofppl = $('#noofppl_meet1').val();
	var expectedbudget = $('#expectedbudget_meet1').val();


		var mm ='';
		var dd ='';
		var yyyy = '';
		var act_date = $('#actdate_meet1').val();
		if(act_date!='')
		{
			var dob = act_date.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			yyyy = dob.length == 3 ? dob[2] : '';
		}

	$.ajax({
		url: SERVER2+'my_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {
					
			        'apiuid': 'MLOYALAPI',
				    'apipswd': 'Ml0yalAP!2o14',
				    'secode': secode,
					'product': product,
					'state': state,
					'district': district,
					'retailerno': retailerno,
					'retailername': retailername,
					'distributorsapcode': distributorsapcode,
					'distributorname': distributorname,
					'activityconductingdate': activityconductingdate,
					'typeofmeeting': typeofmeeting,
					'noofppl': noofppl,
					'expectedbudget': expectedbudget
				
				},
    complete: function(xhr, textStatus) {
   //called when complete
    }, success: function(data, textStatus, xhr) {

		//console.log(JSON.stringify(data));

        
   
   
    },
    error: function(xhr, textStatus, errorThrown) {

    }
  });

}

function meetConducting()
{

	var secode = localStorage.getItem("secode");
	var product = $('#product_meet2').val();
	var state = $('#state_meet2').val();
	var district = $('#district_meet2').val();
	var retailerno = $('#retailerno_meet2').val();
	var retailername = $('#retailername_meet2').val();
	var distributorsapcode = $('#distsapcode_meet2').val();
	var distributorname = $('#distname_meet2').val();
	var activityconductingdate = $('#actdate_meet2').val();
	var typeofmeeting = $('#type_meet2').val();
	var noofppl = $('#noofppl_meet2').val();
	var expectedbudget = $('#expectedbudget_meet2').val();
	var actualbudget = $('#actualbudget_meet2').val();

		var mm ='';
		var dd ='';
		var yyyy = '';
		var act_date = $('#actdate_meet2').val();
		if(act_date!='')
		{
			var dob = act_date.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			yyyy = dob.length == 3 ? dob[2] : '';
		}

	$.ajax({
		url: SERVER2+'my_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {
					
			        'apiuid': 'MLOYALAPI',
				    'apipswd': 'Ml0yalAP!2o14',
				    'secode': secode,
					'product': product,
					'state': state,
					'district': district,
					'retailerno': retailerno,
					'retailername': retailername,
					'distributorsapcode': distributorsapcode,
					'distributorname': distributorname,
					'activityconductingdate': activityconductingdate,
					'typeofmeeting': typeofmeeting,
					'noofppl': noofppl,
					'expectedbudget': expectedbudget,
					'actualbudget': actualbudget
				
					
				},
    complete: function(xhr, textStatus) {
   //called when complete
    }, success: function(data, textStatus, xhr) {

		//console.log(JSON.stringify(data));

   
   
    },
    error: function(xhr, textStatus, errorThrown) {

    }
  });

}

function uploadFromGallery_bill() 
{

				//$("#popupcapturetype").popup("close");
				var bill_no = $('#TxtBillNo').val();

				if(bill_no=='')
				{
					toast('Please enter bill no.');
				}
				else
				{

					navigator.camera.getPicture(uploadPhoto_bill, onFail, { quality: 50,
						destinationType: navigator.camera.DestinationType.FILE_URI,
						sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,allowEdit:true,targetWidth:512,targetWidth:512,correctOrientation:true
					});

				}
}

function uploadPhoto_bill(imageURI)
{
            
			    var bill_no = $('#TxtBillNo').val();

				document.getElementById("upload_btn").disabled = true;


				var b_Image = document.getElementById('bill_img');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				var fName='bill'+bill_no;
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm_bill='https://taghash.co/ufifilters/uploads/'+options.fileName;
				filenm_bill=options.fileName+".jpg";


				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

                
                var ft = new FileTransfer();

				
				var statusDom=document.getElementById("cardimage_upload_status");
				var statusDomdiv=document.getElementById("cardimage_upload_status_div");

				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
       						/*
       						 statusDom.innerHTML = perc + "% loaded...";
       						 if(perc=='99')
       						 	statusDom.innerHTML = "File uploaded";
       						 */
       						 statusDom.value = perc;

       						 
   				 } else {
     				  

     				      
    			}
    			
				};
				
				ft.upload(imageURI, encodeURI("https://taghash.co/ufifilters/upload_bill_new.php"), win_bill, fail_bill, options, true);
				
}

			function win_bill(r) {
				toast("Bill uploaded successfully.");
				//$("#wait").css("display", "none");
				document.getElementById("upload_btn").disabled = false;
			}

			function fail_bill(error) {
				toast("There was an error uploading bill");
				//$("#wait").css("display", "none");
				document.getElementById("upload_btn").disabled = false;
			}

$(document).on('pageshow', '#bill_upload', function () {
	
	     $('#TxtMobile').val(user.mobile);
		 //toast('coming soon');
		 //$.mobile.changePage( "#homepage", { transition: "none"} );
	
});

function upload_bill()
{

        var bill_mobile = $('#TxtMobile').val();
        //var bill_store = $('#TxtStore').val();
		var bill_store = '1';
        var bill_no = $('#TxtBillNo').val();
        var bill_date = $('#TxtBilldate').val();
		var bill_amnt = $('#TxtBillAmt').val();
		var bill_brand = $('#brand_list').val();

		if(bill_date.indexOf('-')>0)
			{
			var dob = bill_date.split('-');
			var mm = dob.length == 3 ? dob[1] : '';
			var dd = dob.length == 3 ? dob[2] : '';
			var yyyy = dob.length == 3 ? dob[0] : '';
			}
		else if(bill_date.indexOf('/')>0)
			{
			var dob = bill_date.split('/');
			var mm = dob.length == 3 ? dob[1] : '';
			var dd = dob.length == 3 ? dob[2] : '';
			var yyyy = dob.length == 3 ? dob[0] : '';
			}
		
		else if(bill_date.indexOf('.')>0)
			{
			var dob = bill_date.split('.');
			var mm = dob.length == 3 ? dob[1] : '';
			var dd = dob.length == 3 ? dob[2] : '';
			var yyyy = dob.length == 3 ? dob[0] : '';
			}

		console.log("Values:"+bill_mobile+","+bill_store+","+bill_no+","+dd+":"+mm+":"+yyyy+","+bill_amnt+","+filenm+","+bill_brand);

		if(bill_mobile=='' || bill_store==''|| bill_store=='0' || bill_no=='' || bill_date=='' || bill_date=='undefined' || bill_amnt=='' || filenm=='' || bill_brand=='0' || bill_brand=='null' || bill_brand==null || bill_brand=='undefined' || bill_brand==''){

			toast('Please enter mandatory fields!');

		}
		else if(bill_mobile.length<10 || bill_mobile.length>10)
		{

			toast('Invalid mobile number');
		}
		else
		{
			$.ajax({
			url: SERVER2+'cust_pending_bills_json_api.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {

				'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'Mobileno': bill_mobile,
				'Billno': bill_no,
				'BillDt': bill_date,
				'fileName': filenm_bill,
				'scode': bill_store,
				'BillAmt': bill_amnt,
                'Retailer': bill_brand
				
			},
			success: function(data, textStatus, xhr) {
					
				toast('Bill added successfully.');

				//$('#TxtMobile').val('');
				$('#TxtBillNo').val('');
				$('#TxtBilldate').val('');
				$('#TxtBillAmt').val('');

				/*document.getElementById('brand_list').selectedIndex= 0;

				var myselect = $("select.slct1");
				myselect.selectedIndex = 0;
				myselect.selectmenu("refresh");*/

				filenm_bill='';

				document.getElementById('bill_img').src= 'assets/images/billmain.png';
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		

		}
}

function getPending_members_byse()
{

	  $.ajax({
		url: SERVER2+'get_district_member_json_byse_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALUFIAPI','apipswd':'Ml0yalUFIAP!2!','se_code': store.secode },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		//console.log(JSON.stringify(data));

			var str='';

			if(data.error.length>0)
			{
				toast(data.error);
			}
			else
			{
				 for (var i = 0; i < data.data.length; i++)
				 {

					str +='<div class="primary_block">';
					str +='<div class="ui-grid-solo">';
					str +='<div class="ui-block">';
					str +='<div class="approval_block">';
					str +='<img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name">'+capitalizeFirstLetter(data.data[i].FirstName+' '+data.data[i].LastName)+'</span></div>';
				         
					str +='<div class="approval_block"><img src="assets/images/retailer_shop_name_icon.png" class="location_icon"/><span class="approval_email">Shop: '+checkforundefined(data.data[i].ShopName)+'</span></div>';
					str +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email">Mobileno: '+data.data[i].Mobileno+'</span></div>';
					str +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">Email: '+checkforundefined(data.data[i].Email)+'</span></div>';

					str +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">PanCardNo: '+checkforundefined(data.data[i].PanCardNo).toUpperCase()+'</span></div>';
					str +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">GstNo: '+checkforundefined(data.data[i].GstNo).toUpperCase()+'</span></div>';
          
					str +='<div class="approval_block"><img src="assets/images/retailer_map_icon.png" class="location_icon"/><span class="approval_email">Address: '+checkforundefined(data.data[i].HomeNo)+' '+checkforundefined(data.data[i].Floor_flat)+', '+checkforundefined(data.data[i].Street)+'</span></div>';
					str +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">City: '+checkforundefined(data.data[i].City)+'</span></div>';
					str +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">District: '+checkforundefined(data.data[i].District)+'</span></div>';
					str +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">State: '+checkforundefined(data.data[i].StateName)+'</span></div>';

					str+='<div>';
					str+='<div class="ui-grid-a apr_block"><div class="ui-block-a"></div><div class="ui-block-b"><a href="javascript:gotoApprovalpage(\''+data.data[i].Mobileno+'\',\''+data.data[i].FirstName+'\',\''+data.data[i].LastName+'\');" class="btn_primary btn_aaprov mt-20 ui-link">Approv/Reject</a></div></div>';
					str+='</div>';

					str += '</div></div></div>';
					str +='</div>';

				 }

				 document.getElementById("se_pending_div").innerHTML=str;

				 $.mobile.changePage( "#se_pending", { transition: "none"} );

				 $('#approval_se_mob').val('');

			}
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
	

}

function gotoApprovalpage(mob,fname,lname)
{
	$('#approval_se_mob').val(mob);
	$.mobile.changePage( "#salesdata_se", { transition: "none"} );
}

function submitData_se()
{

	var mob  = $('#approval_se_mob').val();
	var reason  = $('#approval_se_reason').val();
	var comments  = $('#approval_se_comments').val();
	var app_type  = $('#approval_se_type').val();

	if(mob=='' || reason=='')
	{
		toast('Please enter mandatory fields');
	}
	else if(app_type=='' || app_type==null || app_type=='undefined' || app_type=='null')
	{
		toast('Please select approval type');
	}
	else
	{
			$.ajax({
          
					url: SERVER2+'se_approval_json_api.asp',
					type: 'GET',
					timeout: 300000,
					dataType: "json",
					data: {
						'apiuid': 'MLOYALUFIAPI',
						'apipswd': 'Ml0yalUFIAP!2!',
						'mobileno': mob,
						'se_comments': comments,
						'se_reason': reason,
						'isapproved_se': app_type,
						'se_code': store.secode
						},
					
					success: function(data, textStatus, xhr) {
						
					//console.log('Data:'+JSON.stringify(data));

							if(data.error.length>0)
							{
								toast(data.error);
							}
							else
							{
								toast(data.data);
							}

							$.mobile.changePage( "#dealerhomepage_se", { transition: "none"} );
							resetSalesdata_se();
					 },
					error: function(xhr, textStatus, errorThrown) {
						 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
						}
					 
				});
				
		}
}

function resetSalesdata_se()
{
	$('#approval_se_mob').val('');
	$('#approval_se_reason').val('');
	$('#approval_se_comments').val('');
	//$('#approval_se_type').val('');
}

function showAssoc_se_dist()
{

	  $.ajax({
		url: SERVER2+'get_distributor_details_by_se_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALUFIAPI','apipswd':'Ml0yalUFIAP!2!','secode': store.secode },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		//console.log(JSON.stringify(data));

			var str='';

			if(data.error.length>0)
			{
				toast(data.error);
			}
			else
			{
				 for (var i = 0; i < data.data.length; i++)
				 {	

					str +='<div class="primary_block">';
					str +='<div class="ui-grid-solo">';
					str +='<div class="ui-block">';
					str +='<div class="approval_block">';
					str +='<img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name">'+capitalizeFirstLetter(data.data[i].StoreName)+'</span></div>';
					str +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">SAP Code: '+data.data[i].StoreCode+'</span></div>';
					str +='<div class="approval_block"><img src="assets/images/retailer_shop_name_icon.png" class="location_icon"/><span class="approval_email">GSTIN: '+checkforundefined(data.data[i].gst_no)+'</span></div>';
					str +='<div class="approval_block"><img src="assets/images/retailer_map_icon.png" class="location_icon"/><span class="approval_email">City: '+checkforundefined(data.data[i].city_name)+'</span></div>';
					str +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">Pincode: '+checkforundefined(data.data[i].store_zip)+'</span></div>';
					str +='</div></div></div>';
					str +='</div>';


				 }

				 document.getElementById('emplist_se_dist_div').innerHTML=str;

				 $.mobile.changePage( "#emplist_se_dist", { transition: "none"} );

			}
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });

}

function showAssoc_se_ret()
{

	  $.ajax({
		url: SERVER2+'get_member_json_by_se_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALUFIAPI','apipswd':'Ml0yalUFIAP!2!','se_code': store.secode },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		//console.log(JSON.stringify(data));

			var str='';
			var str1='';

			if(data.error.length>0)
			{
				toast(data.error);
			}
			else
			{

				 for (var i = 0; i < data.data.length; i++)
				 {	
					
					if(data.data[i].MemberCategory=='Retailer')
					{
                    
						str +='<div class="primary_block">';
						str +='<div class="ui-grid-solo">';
						str +='<div class="ui-block">';
						str +='<div class="approval_block">';
						str +='<img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name" style="color: #10b24d;">'+capitalizeFirstLetter(data.data[i].FirstName+' '+data.data[i].LastName)+'</span></div>';
							 
						str +='<div class="approval_block"><img src="assets/images/retailer_shop_name_icon.png" class="location_icon"/><span class="approval_email">Shop Name: '+checkforundefined(data.data[i].ShopName)+'</span></div>';
						str +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email">Mobileno: '+data.data[i].Mobileno+'</span></div>';
						str +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">Email: '+checkforundefined(data.data[i].Email)+'</span></div>';

						str +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">PanCardNo: '+checkforundefined(data.data[i].PanCardNo).toUpperCase()+'</span></div>';
						str +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">GstNo: '+checkforundefined(data.data[i].GstNo).toUpperCase()+'</span></div>';
			  
						str +='<div class="approval_block"><img src="assets/images/retailer_map_icon.png" class="location_icon"/><span class="approval_email">Address: '+checkforundefined(data.data[i].HomeNo)+' '+checkforundefined(data.data[i].Floor_flat)+', '+checkforundefined(data.data[i].Street)+'</span></div>';
						str +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">City: '+checkforundefined(data.data[i].City)+'</span></div>';
						str +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">District: '+checkforundefined(data.data[i].District)+'</span></div>';
						str +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">State: '+checkforundefined(data.data[i].StateName)+'</span></div>';
						str +='<div class="approval_block"><img src="assets/images/retailer_shop_name_icon.png" class="location_icon"/><span class="approval_email" style="color: #808080;">Distributor: '+checkforundefined(data.data[i].store_name)+'</span></div>';
						str += '</div></div></div>';
						str +='</div>';

					}
					else if(data.data[i].MemberCategory=='Mechanic')
					{
						str1 +='<div class="primary_block">';
						str1 +='<div class="ui-grid-solo">';
						str1 +='<div class="ui-block">';
						str1 +='<div class="approval_block">';
						str1 +='<img src="assets/images/retailer_name_icon.png" class="location_icon"/><span class="customer_name" style="color: #10b24d;">'+capitalizeFirstLetter(data.data[i].FirstName+' '+data.data[i].LastName)+'</span></div>';
							 
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_name_icon.png" class="location_icon"/><span class="approval_email">Shop Name: '+checkforundefined(data.data[i].ShopName)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_call_icon.png" class="location_icon"/><span class="approval_email">Mobileno: '+data.data[i].Mobileno+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_mail_icon.png" class="location_icon"/><span class="approval_email">Email: '+checkforundefined(data.data[i].Email)+'</span></div>';

						//str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">PanCardNo: '+checkforundefined(data.data[i].PanCardNo).toUpperCase()+'</span></div>';
						//str1 +='<div class="approval_block"><img src="assets/images/retailer_license_icon.png" class="location_icon"/><span class="approval_email">GstNo: '+checkforundefined(data.data[i].GstNo).toUpperCase()+'</span></div>';
			  
						str1 +='<div class="approval_block"><img src="assets/images/retailer_map_icon.png" class="location_icon"/><span class="approval_email">Address: '+checkforundefined(data.data[i].HomeNo)+' '+checkforundefined(data.data[i].Floor_flat)+', '+checkforundefined(data.data[i].Street)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">City: '+checkforundefined(data.data[i].City)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">District: '+checkforundefined(data.data[i].District)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_address_icon.png" class="location_icon"/><span class="approval_email">State: '+checkforundefined(data.data[i].StateName)+'</span></div>';
						str1 +='<div class="approval_block"><img src="assets/images/retailer_shop_name_icon.png" class="location_icon"/><span class="approval_email" style="color: #808080;">Distributor: '+checkforundefined(data.data[i].store_name)+'</span></div>';
						str1 += '</div></div></div>';
						str1 +='</div>';
					}

				 }


				  if(str=='')
				  {
						str='<span style="text-align:center;display: block;">No Retailer Associations found</span>';
				  }
				  if(str1=='')
				  {
						str1='<span style="text-align:center;display: block;">No Mechanic Associations found</span>';
				  }

				 document.getElementById("emplist_se_ret_div1").innerHTML=str;
				 document.getElementById("emplist_se_ret_div2").innerHTML=str1;

				 $.mobile.changePage( "#emplist_se_ret", { transition: "none"} );


			}
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });

}

function gobackfromPassforget()
{
	
		$.mobile.changePage( "#selectcategorypage", { transition: "none"} );
		localStorage.removeItem('cattype');
		localStorage.removeItem('profiletype_ufi');
		localStorage.removeItem('usermtype_ufifilters');

		localStorage.removeItem('usernameufifilters');
		localStorage.removeItem('passwordufifilters');
}