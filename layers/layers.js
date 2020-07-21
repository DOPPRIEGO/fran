var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZONA_EXCLUSION_1 = new ol.format.GeoJSON();
var features_ZONA_EXCLUSION_1 = format_ZONA_EXCLUSION_1.readFeatures(json_ZONA_EXCLUSION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA_EXCLUSION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA_EXCLUSION_1.addFeatures(features_ZONA_EXCLUSION_1);
var lyr_ZONA_EXCLUSION_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONA_EXCLUSION_1, 
                style: style_ZONA_EXCLUSION_1,
                interactive: true,
                title: '<img src="styles/legend/ZONA_EXCLUSION_1.png" /> ZONA_EXCLUSION'
            });
var format_LIMITESCATASTRAL_2 = new ol.format.GeoJSON();
var features_LIMITESCATASTRAL_2 = format_LIMITESCATASTRAL_2.readFeatures(json_LIMITESCATASTRAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITESCATASTRAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESCATASTRAL_2.addFeatures(features_LIMITESCATASTRAL_2);
var lyr_LIMITESCATASTRAL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITESCATASTRAL_2, 
                style: style_LIMITESCATASTRAL_2,
                interactive: true,
                title: '<img src="styles/legend/LIMITESCATASTRAL_2.png" /> LIMITES CATASTRAL'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_ZONA_EXCLUSION_1.setVisible(true);lyr_LIMITESCATASTRAL_2.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_ZONA_EXCLUSION_1,lyr_LIMITESCATASTRAL_2];
lyr_ZONA_EXCLUSION_1.set('fieldAliases', {'FID': 'FID', });
lyr_LIMITESCATASTRAL_2.set('fieldAliases', {'MAPA': 'MAPA', 'TTGGSS': 'TTGGSS', 'NUMSYMBOL': 'NUMSYMBOL', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'NINTERNO': 'NINTERNO', 'REFCAT': 'REFCAT', 'layer': 'layer', 'path': 'path', });
lyr_ZONA_EXCLUSION_1.set('fieldImages', {'FID': 'TextEdit', });
lyr_LIMITESCATASTRAL_2.set('fieldImages', {'MAPA': 'Range', 'TTGGSS': 'TextEdit', 'NUMSYMBOL': 'Range', 'FECHAALTA': 'Range', 'FECHABAJA': 'Range', 'NINTERNO': 'TextEdit', 'REFCAT': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ZONA_EXCLUSION_1.set('fieldLabels', {'FID': 'no label', });
lyr_LIMITESCATASTRAL_2.set('fieldLabels', {'MAPA': 'no label', 'TTGGSS': 'no label', 'NUMSYMBOL': 'no label', 'FECHAALTA': 'no label', 'FECHABAJA': 'no label', 'NINTERNO': 'no label', 'REFCAT': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_LIMITESCATASTRAL_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});