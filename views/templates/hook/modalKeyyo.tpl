<div class="remodal" data-remodal-id="modal">
    <a data-remodal-action="close" class="remodal-close"></a>
    <div class="container-fluid" id="mainModalKeyyo">
    </div>
    <button data-remodal-action="cancel" class="remodal-cancel">Fermer</button>
</div>

<div id="newRowCall" class="row newRowCall">
    <h2 class="text-left" id="callerName"></h2>
    <div id="informationNewRowCall" class="col-md-3 text-left informationNewCall">
        <table class="table">
            <thead>
            <tr>
                <th><strong></strong></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><strong>Appel du :</strong> <span id="caller" class="pull-right"></span></td>
            </tr>
            <tr>
                <td><strong>Renvoi :</strong><span id="redirectingNumber" class="pull-right"></span></td>
            </tr>
            <tr>
                <td><strong>Pour le :</strong><span id="callee" class="pull-right"></span></td>
            </tr>
            <tr>
                <td><strong>Date :</strong><span id="dateMessage" class="pull-right"></span></td>
            </tr>
            <tr>
                <td><strong>Message :</strong><span id="message" class="pull-right"></span></td>
            </tr>
            </tbody>
        </table>
        <div id="commentaireNewRowCall" class="messagesNewCall">
            <div class="row">
                <form action="" method="post" id="sendCommentModal">
                    <div class="form-group">
                        <div class="col-md-12">
                            <select id="id_contactNewCall" class="form-control" name="id_contact">
                                <option value="0">{l s='-- Choisissez --'}</option>
                                {foreach from=$contacts item=contact}
                                    <option value="{$contact.id_contact|intval}"{if isset($smarty.request.id_contact) && $smarty.request.id_contact == $contact.id_contact} selected="selected"{/if}>{$contact.name|escape:'html':'UTF-8'}</option>
                                {/foreach}
                            </select>
                            <textarea class="form-control textareaMessagesNewCall" name="customer_comment"
                                      id="customer_comment_Modal"></textarea>
                            <div class="checkbox">
                                <label>
                                    <input id="historique_contact" name="historique_contact" type="checkbox"> Ajouter également à l'historique de contact
                                </label>
                            </div>
                            <button href="#" data-dref="" id="submitCustomerComment" type="submit" class="btn btn-info input-block-level form-control submitCustomerComment" name="submitCustomerComment">Transmettre le message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <a id="voirFicheClient" target="_blank" href="#" class="remodal-confirm remodal-confirm-link" role="button">Voir fiche
            client</a>
        <button href="#" id="fermerAppel" class="remodal-cancel remodal-cancel-link">Fermer</button>
    </div>
    <div id="tableInformationNewRowCall" class="col-md-9">
        <table class="table table-hover text-left">
            <thead>
            <tr>
                <th class="tableInformationNewCall">Date/Collaborateur</th>
                <th>Historique contact</th>
            </tr>
            </thead>
            <tbody id="histoMessage">

            </tbody>
        </table>
    </div>
</div>