var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_cutsrtmmcopy_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "cut srtmm copy",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/cutsrtmmcopy_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13344930.992557, -326767.653638, 13398801.018317, -262973.155458]
                            })
                        });
var lyr_cutsrtmm_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "cut srtmm",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/cutsrtmm_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13344930.992557, -326767.653638, 13398801.018317, -262973.155458]
                            })
                        });
var format_channels_3 = new ol.format.GeoJSON();
var features_channels_3 = format_channels_3.readFeatures(json_channels_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_channels_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_channels_3.addFeatures(features_channels_3);
var lyr_channels_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_channels_3, 
                style: style_channels_3,
                interactive: true,
                title: '<img src="styles/legend/channels_3.png" /> channels'
            });
var format_TUPLAHDASRONGKONG_4 = new ol.format.GeoJSON();
var features_TUPLAHDASRONGKONG_4 = format_TUPLAHDASRONGKONG_4.readFeatures(json_TUPLAHDASRONGKONG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TUPLAHDASRONGKONG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TUPLAHDASRONGKONG_4.addFeatures(features_TUPLAHDASRONGKONG_4);
var lyr_TUPLAHDASRONGKONG_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TUPLAHDASRONGKONG_4, 
                style: style_TUPLAHDASRONGKONG_4,
                interactive: true,
    title: 'TUPLAH DAS RONGKONG<br />\
    <img src="styles/legend/TUPLAHDASRONGKONG_4_0.png" /> Belukar<br />\
    <img src="styles/legend/TUPLAHDASRONGKONG_4_1.png" /> Belukar Rawa<br />\
    <img src="styles/legend/TUPLAHDASRONGKONG_4_2.png" /> Hutan Lahan Kering Primer<br />\
    <img src="styles/legend/TUPLAHDASRONGKONG_4_3.png" /> Hutan Lahan Kering Sekunder<br />\
    <img src="styles/legend/TUPLAHDASRONGKONG_4_4.png" /> Hutan Mangrove Sekunder<br />\
    <img src="styles/legend/TUPLAHDASRONGKONG_4_5.png" /> Pemukiman<br />\
    <img src="styles/legend/TUPLAHDASRONGKONG_4_6.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/TUPLAHDASRONGKONG_4_7.png" /> Pertanian Lahan Kering Campur<br />\
    <img src="styles/legend/TUPLAHDASRONGKONG_4_8.png" /> Savana / Padang rumput<br />\
    <img src="styles/legend/TUPLAHDASRONGKONG_4_9.png" /> Sawah<br />\
    <img src="styles/legend/TUPLAHDASRONGKONG_4_10.png" /> Tambak<br />\
    <img src="styles/legend/TUPLAHDASRONGKONG_4_11.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/TUPLAHDASRONGKONG_4_12.png" /> <br />'
        });
var format_GEOLOGIDASRONGKONG_5 = new ol.format.GeoJSON();
var features_GEOLOGIDASRONGKONG_5 = format_GEOLOGIDASRONGKONG_5.readFeatures(json_GEOLOGIDASRONGKONG_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGIDASRONGKONG_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGIDASRONGKONG_5.addFeatures(features_GEOLOGIDASRONGKONG_5);
var lyr_GEOLOGIDASRONGKONG_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GEOLOGIDASRONGKONG_5, 
                style: style_GEOLOGIDASRONGKONG_5,
                interactive: true,
    title: 'GEOLOGI DAS RONGKONG<br />\
    <img src="styles/legend/GEOLOGIDASRONGKONG_5_0.png" /> Aluvial<br />\
    <img src="styles/legend/GEOLOGIDASRONGKONG_5_1.png" /> Batuan Gunungapi Lamasi<br />\
    <img src="styles/legend/GEOLOGIDASRONGKONG_5_2.png" /> Batuan Gunungapi Talaya<br />\
    <img src="styles/legend/GEOLOGIDASRONGKONG_5_3.png" /> Batuan Terobosan<br />\
    <img src="styles/legend/GEOLOGIDASRONGKONG_5_4.png" /> Formasi Latimojong<br />\
    <img src="styles/legend/GEOLOGIDASRONGKONG_5_5.png" /> Granit Kambuno<br />\
    <img src="styles/legend/GEOLOGIDASRONGKONG_5_6.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_cutsrtmmcopy_1.setVisible(true);lyr_cutsrtmm_2.setVisible(true);lyr_channels_3.setVisible(true);lyr_TUPLAHDASRONGKONG_4.setVisible(true);lyr_GEOLOGIDASRONGKONG_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_cutsrtmmcopy_1,lyr_cutsrtmm_2,lyr_channels_3,lyr_TUPLAHDASRONGKONG_4,lyr_GEOLOGIDASRONGKONG_5];
lyr_channels_3.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_TUPLAHDASRONGKONG_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', 'Provinsi': 'Provinsi', 'PL_19_R': 'PL_19_R', 'Legenda': 'Legenda', });
lyr_GEOLOGIDASRONGKONG_5.set('fieldAliases', {'fid': 'fid', 'ET_ID': 'ET_ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'map_id': 'map_id', 'theme_id': 'theme_id', 'map_indeks': 'map_indeks', 'map_name': 'map_name', 'scale_id': 'scale_id', 'regi_pv_id': 'regi_pv_id', 'regi_ds_id': 'regi_ds_id', 'map_acyear': 'map_acyear', 'map_puyear': 'map_puyear', 'map_inst': 'map_inst', 'cc_id_load': 'cc_id_load', 'map_com': 'map_com', 'filename': 'filename', 'filepath': 'filepath', 'OBJECTID_1': 'OBJECTID_1', 'FCODE': 'FCODE', 'SIMOBJ': 'SIMOBJ', 'NAMOBJ': 'NAMOBJ', 'UMUROBJ': 'UMUROBJ', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'layer': 'layer', 'path': 'path', });
lyr_channels_3.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_TUPLAHDASRONGKONG_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'Range', 'NAME': 'TextEdit', 'Provinsi': 'TextEdit', 'PL_19_R': 'Range', 'Legenda': 'TextEdit', });
lyr_GEOLOGIDASRONGKONG_5.set('fieldImages', {'fid': 'TextEdit', 'ET_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'map_id': 'TextEdit', 'theme_id': 'TextEdit', 'map_indeks': 'TextEdit', 'map_name': 'TextEdit', 'scale_id': 'TextEdit', 'regi_pv_id': 'TextEdit', 'regi_ds_id': 'TextEdit', 'map_acyear': 'TextEdit', 'map_puyear': 'TextEdit', 'map_inst': 'TextEdit', 'cc_id_load': 'TextEdit', 'map_com': 'TextEdit', 'filename': 'TextEdit', 'filepath': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'FCODE': 'TextEdit', 'SIMOBJ': 'TextEdit', 'NAMOBJ': 'TextEdit', 'UMUROBJ': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_channels_3.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_TUPLAHDASRONGKONG_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'NAME': 'no label', 'Provinsi': 'no label', 'PL_19_R': 'no label', 'Legenda': 'no label', });
lyr_GEOLOGIDASRONGKONG_5.set('fieldLabels', {'fid': 'no label', 'ET_ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'map_id': 'no label', 'theme_id': 'no label', 'map_indeks': 'no label', 'map_name': 'no label', 'scale_id': 'no label', 'regi_pv_id': 'no label', 'regi_ds_id': 'no label', 'map_acyear': 'no label', 'map_puyear': 'no label', 'map_inst': 'no label', 'cc_id_load': 'no label', 'map_com': 'no label', 'filename': 'no label', 'filepath': 'no label', 'OBJECTID_1': 'no label', 'FCODE': 'no label', 'SIMOBJ': 'no label', 'NAMOBJ': 'no label', 'UMUROBJ': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_GEOLOGIDASRONGKONG_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});