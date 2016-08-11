/**
 * AdminKeyyo File Doc Comment
 *
 * 2007-2015 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    Dominique <dominique@chez-dominique.fr>
 * @copyright 2007-2016 PrestaShop SA / 2011-2016 Dominique
 * @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 * International Registred Trademark & Property of PrestaShop SA
 */
$(document).ready(function (e) {

    var tempoNotification = 1000;
    var isEnabled = 'disabled';
    var modalKeyyo = $('[data-remodal-id=modal]').remodal();
    $('.keyyo_link').parent().attr('onclick', '').css('cursor', 'text');
    $('.keyyo_link').click(function (e) {
        e.preventDefault();
        var link = $(this).attr('href');
        $.ajax({
            url: link,
            type: 'GET',
            dataType: 'json'
        })
            .done(function (data) {
                alert(data.msg);
            })
            .fail(function (data) {
                alert('Erreur : KEYYO refuse l\'appel.');
            });
    });

    if ($.cookie('enableNotificationKeyyo') == 'enabled') {

        changeButton();
        isEnabled = $('#checkboxAppelsKeyyo').attr('title');
        link = $('#checkboxAppelsKeyyo').attr('url') + '&isEnabled=' + isEnabled;
        get_fb_complete(link);
    }

    $('#checkboxAppelsKeyyo').click(function (e) {
        changeButton();
        isEnabled = $('#checkboxAppelsKeyyo').attr('title');
        link = $('#checkboxAppelsKeyyo').attr('url') + '&isEnabled=' + isEnabled;
        get_fb_complete(link);
    });

    $(document).on('closing', '.remodal', function (e) {
        $('#mainModalKeyyo').empty();
        console.log('Modal is closing' + (e.reason ? ', reason: ' + e.reason : ''));
    });



    function toggleBouton() {
        $('#notifKeyyoCheck').toggleClass('hidden');
        $('#notifKeyyoRemove').toggleClass('hidden');
        $('#checkboxAppelsKeyyo').toggleClass('action-disabled').toggleClass('action-enabled');
    }

    function changeButton() {
        toggleBouton();

        if ($('#checkboxAppelsKeyyo').prop('title') == 'enabled') {
            $('#checkboxAppelsKeyyo').prop('title', 'disabled');
            $.cookie('enableNotificationKeyyo', 'disabled');
        } else {
            $('#checkboxAppelsKeyyo').prop('title', 'enabled');
            $.cookie('enableNotificationKeyyo', 'enabled');
        }
    }

    function get_fb_complete(link) {

        if (isEnabled == 'enabled') {
            heureLastNotif = $("#checkboxAppelsKeyyo").attr('heureLastNotif');

            var feedback = $.ajax({
                type: "GET",
                url: link,
                dataType: 'json',
                data: 'heureLN=' + heureLastNotif

            }).done(function (data) {
                displayNotification(link, data);
            });
        }
    }

    function displayNotification(link, data) {
        setTimeout(function () {
            get_fb_complete(link);
        }, tempoNotification);


        if (data.show == 'true') {
            heureLastNotif = data.heureServeur;
            $('#checkboxAppelsKeyyo').attr('heureLastNotif', heureLastNotif);
            nouvelAppel(data);
            if(modalKeyyo.getState() == 'closed') {
                modalKeyyo.open();
            }
        }
    }

    function nouvelAppel(data) {

        $('#newRowCall')                         // grab the media content
            .clone()                          // make a duplicate of it
            //.find('*')                        // find all elements within the clone
            .removeAttr('id')               // remove their ID attributes
            //.end()                            // end the .find()
            .appendTo('#mainModalKeyyo');

        // newCall = '<div class="newCall">' +
        //     '<p id="caller">Appel du : ' + data.caller + '</p>' +
        //     '<p id="calle">Pour le : ' + data.callee + '</p>' +
        //     '<p id="message">Message : ' + data.message + '</p></div>'

    }


});