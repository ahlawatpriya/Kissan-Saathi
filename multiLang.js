document.getElementById("language-select").addEventListener("change", function () {
    const lang = this.value;
    loadLanguage(lang);
});

function loadLanguage(lang) {
    fetch(`./lang/${lang}.json`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((translations) => {
            // Update only elements that exist
            const updateIfExists = (id, text) => {
                const element = document.getElementById(id);
                if (element) element.innerText = text;
            };

            updateIfExists("kisan-heading", translations.kisan_heading);
            updateIfExists("kisan-subheading", translations.kisan_subheading);
            updateIfExists("contact-link", translations.contact_link);
            updateIfExists("services-link", translations.services_link);

            updateIfExists("card1", translations.card1);
            updateIfExists("card2", translations.card2);
            updateIfExists("card3", translations.card3);
            updateIfExists("card4", translations.card4);

            updateIfExists("info_heading", translations.info_heading);
            updateIfExists("info_description", translations.info_description);
            updateIfExists("info_li_1", translations.info_li_1);
            updateIfExists("info_li_2", translations.info_li_2);
            updateIfExists("info_li_3", translations.info_li_3);
            updateIfExists("info_li_4", translations.info_li_4);
            updateIfExists("our_services", translations.our_services);

            updateIfExists("agri-services-heading", translations.agri_services_heading);
            updateIfExists("agri-services-description", translations.agri_services_description);
            updateIfExists("service1", translations.service1);
            updateIfExists("service2", translations.service2);
            updateIfExists("service3", translations.service3);
            updateIfExists("service1-description", translations["service1-description"]);
            updateIfExists("service2-description", translations["service2-description"]);
            updateIfExists("service3-description", translations["service3-description"]);

            updateIfExists("progress-heading", translations.progress_heading);
            updateIfExists("progress-description", translations.progress_description);
            updateIfExists("progress1", translations.progress1);
            updateIfExists("progress2", translations.progress2);
            updateIfExists("progress3", translations.progress3);
            updateIfExists("progress4", translations.progress4);

            updateIfExists("contact_heading", translations.contact_heading);
            updateIfExists("contact_description", translations.contact_description);
            updateIfExists("contact_name_label", translations.contact_name_label);
            updateIfExists("contact_phone_label", translations.contact_phone_label);
            updateIfExists("contact_email_label", translations.contact_email_label);
            updateIfExists("contact_message_label", translations.contact_message_label);
            updateIfExists("contact_submit_button", translations.contact_submit_button);

            updateIfExists("services-heading", translations.services_heading);
            updateIfExists("services-description", translations.services_description);
            updateIfExists("weather-alerts-heading", translations.weather_alerts_heading);
            updateIfExists("weather-alerts-description", translations.weather_alerts_description);
            updateIfExists("checkWeather", translations.check_weather);
            updateIfExists("updateWeather", translations.update_weather);
            updateIfExists("searchIcon", translations.search_icon);
            updateIfExists("weatherLocation", translations.weather_location);
            updateIfExists("forecastHeading", translations.forecast_heading);
            updateIfExists("croppingAdvice", translations.cropping_advice);
            updateIfExists("croppingAdviceDescription", translations.cropping_advice_description);

            updateIfExists("cropModalLabel", translations.crop_modal_label);
            updateIfExists("advice-tab", translations.advice_tab);
            updateIfExists("calendar-tab", translations.calendar_tab);
            updateIfExists("croppingAdviceTab", translations.cropping_advice_tab);

            updateIfExists("riceCultivation", translations.rice_cultivation);
            updateIfExists("riceCultivationAdvice1", translations.rice_cultivation_advice1);
            updateIfExists("riceCultivationAdvice2", translations.rice_cultivation_advice2);
            updateIfExists("riceCultivationAdvice3", translations.rice_cultivation_advice3);
            updateIfExists("riceCultivationAdvice4", translations.rice_cultivation_advice4);
            updateIfExists("wheatCultivation", translations.wheat_cultivation);
            updateIfExists("wheatCultivationAdvice1", translations.wheat_cultivation_advice1);
            updateIfExists("wheatCultivationAdvice2", translations.wheat_cultivation_advice2);
            updateIfExists("wheatCultivationAdvice3", translations.wheat_cultivation_advice3);
            updateIfExists("wheatCultivationAdvice4", translations.wheat_cultivation_advice4);

            updateIfExists("weatherAlertInfo", translations.weather_alert_info);
            updateIfExists("realTimeCropSeasonCalendar", translations.real_time_crop_season_calendar);
            updateIfExists("cropSeasonCalendarCaption", translations.crop_season_calendar_caption);

            updateIfExists("feedback_card", translations.feedback_card);
            updateIfExists("feedback_card_description", translations.feedback_card_description);
            updateIfExists("feedback_card_button", translations.feedback_card_button);
            updateIfExists("feedbackModalLabel", translations.feedback_modal_label);
            updateIfExists("feedback_name_label", translations.feedback_name_label);
            updateIfExists("feedback_email_label", translations.feedback_email_label);
            updateIfExists("feedback_message_label", translations.feedback_message_label);
            updateIfExists("feedback_type_label", translations.feedback_type_label);
            updateIfExists("feedback_type_option1", translations.feedback_type_option1);
            updateIfExists("feedback_type_option2", translations.feedback_type_option2);
            updateIfExists("feedback_type_option3", translations.feedback_type_option3);
            updateIfExists("feedback_type_option4", translations.feedback_type_option4);
            updateIfExists("feedback_type_option5", translations.feedback_type_option5);
            updateIfExists("feedback_type_option6", translations.feedback_type_option6);
            updateIfExists("feedback_subject_label", translations.feedback_subject_label);
            updateIfExists("feedback_contact_label", translations.feedback_contact_label);
            updateIfExists("feedback_message_label", translations.feedback_message_label);
            updateIfExists("feedback_submit_button", translations.feedback_submit_button);
            updateIfExists("feedback_thank_you", translations.feedback_thank_you);
            updateIfExists("feedback_thank_you_description", translations.feedback_thank_you_description);
            updateIfExists("feedback_thank_you_button", translations.feedback_thank_you_button);
            updateIfExists("feedback_error", translations.feedback_error);
            updateIfExists("errorMessage", translations.error_message);
            updateIfExists("feedback_error_retry_button", translations.feedback_error_retry_button);

            updateIfExists("govtSchemesHeading", translations.govt_schemes_heading);
            updateIfExists("govtSchemesDescription", translations.govt_schemes_description);
            updateIfExists("govtSchemesButton", translations.govt_schemes_button);
            updateIfExists("schemeModalLabel", translations.scheme_modal_label);
            updateIfExists("schemeType1", translations.scheme_type1);
            updateIfExists("schemeType2", translations.scheme_type2);
            updateIfExists("schemeType3", translations.scheme_type3);
            updateIfExists("schemeType4", translations.scheme_type4);
            updateIfExists("schemeType5", translations.scheme_type5);
            updateIfExists("schemeType6", translations.scheme_type6);
            updateIfExists("schemeType7", translations.scheme_type7);
            updateIfExists("schemeType8", translations.scheme_type8);
            updateIfExists("schemeType9", translations.scheme_type9);
            updateIfExists("schemeType10", translations.scheme_type10);
            updateIfExists("schemeType11", translations.scheme_type11);
            updateIfExists("schemeType12", translations.scheme_type12);
            updateIfExists("scheme1heading", translations.scheme1_heading);
            updateIfExists("scheme1description", translations.scheme1_description);
            updateIfExists("scheme1coverage", translations.scheme1_coverage);
            updateIfExists("scheme1focus", translations.scheme1_focus);
            updateIfExists("scheme1beneficiaries", translations.scheme1_beneficiaries);
            updateIfExists("scheme2heading", translations.scheme2_heading);
            updateIfExists("scheme2description", translations.scheme2_description);
            updateIfExists("scheme2targets", translations.scheme2_targets);
            updateIfExists("scheme2components", translations.scheme2_components);
            updateIfExists("scheme2aim", translations.scheme2_aim);
            updateIfExists("scheme3heading", translations.scheme3_heading);
            updateIfExists("scheme3description", translations.scheme3_description);
            updateIfExists("scheme3component1", translations.scheme3_component1);
            updateIfExists("scheme3component2", translations.scheme3_component2);
            updateIfExists("scheme3component3", translations.scheme3_component3);
            updateIfExists("scheme4heading", translations.scheme4_heading);
            updateIfExists("scheme4description", translations.scheme4_description);
            updateIfExists("scheme4component1", translations.scheme4_component1);
            updateIfExists("scheme4component2", translations.scheme4_component2);
            updateIfExists("scheme4component3", translations.scheme4_component3);

            updateIfExists("scheme5heading", translations.scheme5_heading);
            updateIfExists("scheme5description", translations.scheme5_description);
            updateIfExists("scheme5component1", translations.scheme5_component1);
            updateIfExists("scheme5component2", translations.scheme5_component2);
            updateIfExists("scheme5component3", translations.scheme5_component3);
            updateIfExists("scheme6heading", translations.scheme6_heading);
            updateIfExists("scheme6description", translations.scheme6_description);
            updateIfExists("scheme6component1", translations.scheme6_component1);
            updateIfExists("scheme6component2", translations.scheme6_component2);
            updateIfExists("scheme6component3", translations.scheme6_component3);

            updateIfExists("scheme7heading", translations.scheme7_heading);
            updateIfExists("scheme7description", translations.scheme7_description);
            updateIfExists("scheme7component1", translations.scheme7_component1);
            updateIfExists("scheme7component2", translations.scheme7_component2);
            updateIfExists("scheme7component3", translations.scheme7_component3);
            updateIfExists("scheme8heading", translations.scheme8_heading);
            updateIfExists("scheme8description", translations.scheme8_description);
            updateIfExists("scheme8component1", translations.scheme8_component1);
            updateIfExists("scheme8component2", translations.scheme8_component2);
            updateIfExists("scheme8component3", translations.scheme8_component3);

            updateIfExists("scheme9heading", translations.scheme9_heading);
            updateIfExists("scheme9description", translations.scheme9_description);
            updateIfExists("scheme9component1", translations.scheme9_component1);
            updateIfExists("scheme9component2", translations.scheme9_component2);
            updateIfExists("scheme10heading", translations.scheme10_heading);
            updateIfExists("scheme10description", translations.scheme10_description);
            updateIfExists("scheme10component1", translations.scheme10_component1);
            updateIfExists("scheme10component2", translations.scheme10_component2);

            updateIfExists("scheme11heading", translations.scheme11_heading);
            updateIfExists("scheme11description", translations.scheme11_description);
            updateIfExists("scheme11component1", translations.scheme11_component1);
            updateIfExists("scheme11component2", translations.scheme11_component2);
            updateIfExists("scheme12heading", translations.scheme12_heading);
            updateIfExists("scheme12description", translations.scheme12_description);
            updateIfExists("scheme12component1", translations.scheme12_component1);
            updateIfExists("scheme12component2", translations.scheme12_component2);
            updateIfExists("scheme12component3", translations.scheme12_component3);

            updateIfExists("scheme13heading", translations.scheme13_heading);
            updateIfExists("scheme13description", translations.scheme13_description);
            updateIfExists("scheme13component1", translations.scheme13_component1);
            updateIfExists("scheme13component2", translations.scheme13_component2);
            updateIfExists("scheme14heading", translations.scheme14_heading);
            updateIfExists("scheme14description", translations.scheme14_description);
            updateIfExists("scheme14component1", translations.scheme14_component1);
            updateIfExists("scheme14component2", translations.scheme14_component2);
            updateIfExists("scheme14component3", translations.scheme14_component3);

            updateIfExists("scheme15heading", translations.scheme15_heading);
            updateIfExists("scheme15description", translations.scheme15_description);
            updateIfExists("scheme15component1", translations.scheme15_component1);
            updateIfExists("scheme15component2", translations.scheme15_component2);
            updateIfExists("scheme16heading", translations.scheme16_heading);
            updateIfExists("scheme16description", translations.scheme16_description);
            updateIfExists("scheme16component1", translations.scheme16_component1);
            updateIfExists("scheme16component2", translations.scheme16_component2);
            
            updateIfExists("scheme17heading", translations.scheme17_heading);
            updateIfExists("scheme17description", translations.scheme17_description);
            updateIfExists("scheme17component1", translations.scheme17_component1);
            updateIfExists("scheme17component2", translations.scheme17_component2);
            updateIfExists("scheme18heading", translations.scheme18_heading);
            updateIfExists("scheme18description", translations.scheme18_description);
            updateIfExists("scheme18component1", translations.scheme18_component1);
            updateIfExists("scheme18component2", translations.scheme18_component2);

            updateIfExists("scheme19heading", translations.scheme19_heading);
            updateIfExists("scheme19description", translations.scheme19_description);
            updateIfExists("scheme19component1", translations.scheme19_component1);
            updateIfExists("scheme19component2", translations.scheme19_component2);
            updateIfExists("scheme20heading", translations.scheme20_heading);
            updateIfExists("scheme20description", translations.scheme20_description);
            updateIfExists("scheme20component1", translations.scheme20_component1);
            updateIfExists("scheme20component2", translations.scheme20_component2);

            updateIfExists("scheme21heading", translations.scheme21_heading);
            updateIfExists("scheme21description", translations.scheme21_description);
            updateIfExists("scheme21component1", translations.scheme21_component1);
            updateIfExists("scheme21component2", translations.scheme21_component2);
            updateIfExists("scheme22heading", translations.scheme22_heading);
            updateIfExists("scheme22description", translations.scheme22_description);
            updateIfExists("scheme22component1", translations.scheme22_component1);
            updateIfExists("scheme22component2", translations.scheme22_component2);

            updateIfExists("scheme23heading", translations.scheme23_heading);
            updateIfExists("scheme23description", translations.scheme23_description);
            updateIfExists("scheme23component1", translations.scheme23_component1);
            updateIfExists("scheme23component2", translations.scheme23_component2);
            updateIfExists("scheme23component3", translations.scheme23_component3);
            updateIfExists("closeModalButton", translations.close_modal_button);

            updateIfExists("farmingTips", translations.farming_tips);
            updateIfExists("farmingTipsDesc", translations.farming_tips_desc);
            updateIfExists("farmingTipsBtn", translations.farming_tips_btn);
            updateIfExists("tipsModalLabel", translations.tips_modal_label);
            updateIfExists("tip1Header", translations.tip1_header);
            updateIfExists("tip1Description", translations.tip1_description);
            updateIfExists("tip2Header", translations.tip2_header);
            updateIfExists("tip2Description", translations.tip2_description);
            updateIfExists("tip3Header", translations.tip3_header);
            updateIfExists("tip3Description", translations.tip3_description);
            updateIfExists("tip4Header", translations.tip4_header);
            updateIfExists("tip4Description", translations.tip4_description);
            updateIfExists("tips_modal_close_button", translations.tips_modal_close_button);
            updateIfExists("tips_modal_save_button", translations.tips_modal_save_button);

            updateIfExists("search_help_header", translations.search_help_header);
            updateIfExists("search_help_description", translations.search_help_description);
            updateIfExists("search_help_button", translations.search_help_button);

            updateIfExists("market_prices_header", translations.market_prices_header);
            updateIfExists("market_prices_description", translations.market_prices_description);
            updateIfExists("market_prices_button", translations.market_prices_button);

            updateIfExists("weather_modal_header", translations.weather_modal_header);
            updateIfExists("weather_modal_info", translations.weather_modal_info);
            updateIfExists("weather_alerts_header", translations.weather_alerts_header);
            updateIfExists("weather_alerts_button", translations.weather_alerts_button);
            updateIfExists("farm_weather_intelligence_header", translations.farm_weather_intelligence_header);
            updateIfExists("farm_weather_intelligence_description", translations.farm_weather_intelligence_description);
            updateIfExists("precision_rainfall_forecasts", translations.precision_rainfall_forecasts);
            updateIfExists("temperature_humidity_alerts", translations.temperature_humidity_alerts);
            updateIfExists("storm_hail_warnings", translations.storm_hail_warnings);
            updateIfExists("frost_heatwave_advisories", translations.frost_heatwave_advisories);
            updateIfExists("optimal_planting_windows", translations.optimal_planting_windows);
            updateIfExists("check_local_weather_header", translations.check_local_weather_header);
            updateIfExists("modalLocationInput", translations.modal_location_input);
            updateIfExists("check_weather_button", translations.check_weather_button);
            updateIfExists("close_weather_modal_button", translations.close_weather_modal_button);

            updateIfExists("contact_heading", translations.contact_heading);
            updateIfExists("contact_description", translations.contact_description);

            updateIfExists("locationInput", translations.location_input);
            updateIfExists("weatherLocation", translations.weather_location);

            updateIfExists("successModalLabel", translations.success_modal_label);
            updateIfExists("successModalDescription", translations.success_modal_description);
            updateIfExists("successModalCloseButton", translations.success_modal_close_button);
            updateIfExists("errorModalLabel", translations.error_modal_label);
            updateIfExists("errorModalDescription", translations.error_modal_description);
            updateIfExists("errorModalCloseButton", translations.error_modal_close_button);

            updateIfExists("footerKisanHeading", translations.footer_kisan_heading);
            updateIfExists("footerKisanDescription", translations.footer_kisan_description);
            updateIfExists("footerQuickLinksHeading", translations.footer_quick_links_heading);
            updateIfExists("footerAboutLink", translations.footer_about_link);
            updateIfExists("footerServicesLink", translations.footer_services_link);
            updateIfExists("footerContactLink", translations.footer_contact_link);
            updateIfExists("footerConnectHeading", translations.footer_connect_heading);

            updateIfExists("home-link", translations.home_link);
            updateIfExists("feedback-link", translations.feedback_link);
            updateIfExists("about-link", translations.about_link);
            updateIfExists("features-link", translations.features_link);
            updateIfExists("contact-us-link", translations.contact_us_link);
            updateIfExists("logoutBtn", translations.logoutBtn);

            Array.from(document.getElementsByClassName("learnMore")).forEach((element) => {
                element.innerText = translations.learn_more;
            });
        })
        .catch((error) => console.error("Language load error:", error));
}

// Initialize with English
loadLanguage("en");