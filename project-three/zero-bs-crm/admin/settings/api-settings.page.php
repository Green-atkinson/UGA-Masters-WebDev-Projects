<?php 
/*!
 * Admin Page: Settings: API settings
 */

// stop direct access
if ( ! defined( 'ZEROBSCRM_PATH' ) ) exit; 

global $zbs;

$confirmAct = false;

#} catch regen.
if (isset($_GET['regeneratekeys']) && zeroBSCRM_isZBSAdminOrAdmin()) if ($_GET['regeneratekeys']==1){

    $nonceVerified = wp_verify_nonce( $_GET['_wpnonce'], 'regeneratekeys' );

    if (!isset($_GET['imsure']) || !$nonceVerified){

        #} Needs to confirm!
        $confirmAct = true;
        $actionStr        = 'regeneratekeys';
        $actionButtonStr    = __('Regenerate API Key & Secret?',"zero-bs-crm");
        $confirmActStr      = __('Regenerate API Credentials',"zero-bs-crm");
        $confirmActStrShort   = __('Are you sure you want to regenerate your API Credentials',"zero-bs-crm");
        $confirmActStrLong    = __('Regenerating your API Credentials will mean that your existing details will no longer work.',"zero-bs-crm");

    } else {


        if ($nonceVerified){

            $newKey = zeroBSCRM_regenerateAPIKey();
            $newSecret = zeroBSCRM_regenerateAPISecret();
            $generatedNewKey = 1;

        }

    }

}

#} generate?
if (isset($_POST['generate-key']) && $_POST['generate-key'] == 1 && zeroBSCRM_isZBSAdminOrAdmin()) {

    $newKey = zeroBSCRM_regenerateAPIKey();
    $newSecret = zeroBSCRM_regenerateAPISecret();
    $generatedNewKey = 1;

}

//$api_keys = $wpdb->get_results("SELECT * FROM $api_table");
#$api_keys = zeroBSCRM_getAPIKeys();
$api_key = zeroBSCRM_getAPIKey();
$api_secret = zeroBSCRM_getAPISecret();

$endpoint_url = zeroBSCRM_getAPIEndpoint();

#} Warning if permalinks not pretty
if(!zeroBSCRM_checkPrettyPermalinks()){
    $permalinks_url = admin_url('options-permalink.php');
    echo "<div class='ui error message danger' style='display:block;'><i class='exclamation circle icon white'></i>" . sprintf( __( 'Permalinks need to be pretty for the API to be available. Update your <a href="%s">Permalink settings</a>.', 'zero-bs-crm' ), esc_url( $permalinks_url ) ) . "</div>";
}


if ($api_key == ''){

    ?>
    <style>
        .zbs-api-key-generate{
            padding:20px;
            text-align:center;
            font-size:30px;
            background:white;
        }
        .zbs-api-key-generate .button-primary{
            font-size:20px;
        }
    </style>


    <div class='zbs-api-key-generate'>
        <form action="#" method="POST">
            <p>
                <?php _e("You do not have an API key. Generate one?", 'zero-bs-crm'); ?>
            </p>
            <input type='submit' class='generate-api ui primary button' value='<?php _e("Generate API key", 'zero-bs-crm'); ?>'/>
            <input type='hidden' name='generate-key' id='generate-key' value='1'/>
        </form>
    </div>
    <?php
} else {

    #} notify
    if (isset($generatedNewKey)) zeroBSCRM_html_msg(0,__('Successfully generated API Credentials',"zero-bs-crm"));

    $perms = array('revoked','read and write');


    if (!$confirmAct){
        echo '<table class="table table-bordered table-striped wtab">';
        echo '<thead><tr>';
        echo '<th colspan=2>' . __('API Settings', 'zero-bs-crm') . '</th>';
        echo '</tr></thead>';
        echo '<tbody>';
        echo '<tr><td>'.__('API Endpoint', 'zero-bs-crm') . '</td><td class="bold">' . $endpoint_url . '</td></tr>';
        echo '<tr><td>'. __('API Key', 'zero-bs-crm').'</td><td class="bold">' . $api_key . '</td></tr>';
        echo '<tr><td>'.__('API Secret', 'zero-bs-crm').'</td><td class="bold">' . $api_secret . '</td></tr>';

        ##WLREMOVE
        ?>
        <tr><td colspan=2><a href="<?php echo $zbs->urls['apidocs']; ?>" target="_blank" class="ui right floated tiny button"><?php _e('API Docs','zero-bs-crm'); ?></a></td></tr>
        <?php

        ##/WLREMOVE

        echo '</tbody>';
        echo '</table>';
        ?>
        <style>
            .zbs-api-key-generate{
                padding:20px;
                text-align:center;
                font-size:30px;
                background:white;
            }
            .zbs-api-key-generate .button-primary{
                font-size:20px;
            }
        </style>
        <div class='zbs-api-key-generate'>
            <form action="" method="POST">
                <p style="    padding: 14px;background: #FFF;"><button type="button" class="ui primary button button-large" onclick="javascript:window.location='?page=<?php echo $zbs->slugs['settings']; ?>&tab=api&regeneratekeys=1';"><?php _e('Regenerate API Credentials',"zero-bs-crm"); ?></button> </p>
                <input type='hidden' name='generate-key' id='generate-key' value='1'/>
            </form>
        </div>
        <?php


    } else {

        ?><div id="clpSubPage" class="whclpActionMsg six">
        <p><strong><?php echo $confirmActStr; ?></strong></p>
        <h3><?php echo $confirmActStrShort; ?></h3>
        <?php echo $confirmActStrLong; ?><br /><br />
        <button type="button" class="ui button primary" onclick="javascript:window.location='<?php echo wp_nonce_url('?page='.$zbs->slugs['settings'].'&tab=api&'.$actionStr.'=1&imsure=1','regeneratekeys'); ?>';"><?php echo $actionButtonStr; ?></button>
        <button type="button" class="button button-large" onclick="javascript:window.location='?page=<?php echo $zbs->slugs['settings']; ?>&tab=api';"><?php _e("Cancel","zero-bs-crm"); ?></button>
        <br />
        </div><?php
    }
}
