{extends file="parent:frontend/detail/data.tpl"}

{* This block gets extended by the stockinfo template *}
{block name="frontend_detail_data_delivery"}
    {$smarty.block.parent}

    {include file="frontend/detail/stockinfo.tpl"}
{/block}