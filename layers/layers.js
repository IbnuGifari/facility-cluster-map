var wms_layers = [];

var format_gadm41_IDN_3_0 = new ol.format.GeoJSON();
var features_gadm41_IDN_3_0 = format_gadm41_IDN_3_0.readFeatures(json_gadm41_IDN_3_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDN_3_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDN_3_0.addFeatures(features_gadm41_IDN_3_0);
var lyr_gadm41_IDN_3_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDN_3_0, 
                style: style_gadm41_IDN_3_0,
                popuplayertitle: 'gadm41_IDN_3',
                interactive: true,
                title: '<img src="styles/legend/gadm41_IDN_3_0.png" /> gadm41_IDN_3'
            });
var format_dataset_sekolah_clu_1 = new ol.format.GeoJSON();
var features_dataset_sekolah_clu_1 = format_dataset_sekolah_clu_1.readFeatures(json_dataset_sekolah_clu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dataset_sekolah_clu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dataset_sekolah_clu_1.addFeatures(features_dataset_sekolah_clu_1);
var lyr_dataset_sekolah_clu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dataset_sekolah_clu_1, 
                style: style_dataset_sekolah_clu_1,
                popuplayertitle: 'dataset_sekolah_clu',
                interactive: true,
    title: 'dataset_sekolah_clu<br />\
    <img src="styles/legend/dataset_sekolah_clu_1_0.png" /> cluster_0<br />\
    <img src="styles/legend/dataset_sekolah_clu_1_1.png" /> cluster_1<br />\
    <img src="styles/legend/dataset_sekolah_clu_1_2.png" /> cluster_2<br />\
    <img src="styles/legend/dataset_sekolah_clu_1_3.png" /> cluster_3<br />\
    <img src="styles/legend/dataset_sekolah_clu_1_4.png" /> cluster_4<br />\
    <img src="styles/legend/dataset_sekolah_clu_1_5.png" /> cluster_5<br />\
    <img src="styles/legend/dataset_sekolah_clu_1_6.png" /> cluster_6<br />\
    <img src="styles/legend/dataset_sekolah_clu_1_7.png" /> <br />' });
var format_dataset_kesehatan_clu_2 = new ol.format.GeoJSON();
var features_dataset_kesehatan_clu_2 = format_dataset_kesehatan_clu_2.readFeatures(json_dataset_kesehatan_clu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dataset_kesehatan_clu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dataset_kesehatan_clu_2.addFeatures(features_dataset_kesehatan_clu_2);
var lyr_dataset_kesehatan_clu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dataset_kesehatan_clu_2, 
                style: style_dataset_kesehatan_clu_2,
                popuplayertitle: 'dataset_kesehatan_clu',
                interactive: true,
    title: 'dataset_kesehatan_clu<br />\
    <img src="styles/legend/dataset_kesehatan_clu_2_0.png" /> cluster_0<br />\
    <img src="styles/legend/dataset_kesehatan_clu_2_1.png" /> cluster_1<br />\
    <img src="styles/legend/dataset_kesehatan_clu_2_2.png" /> cluster_2<br />\
    <img src="styles/legend/dataset_kesehatan_clu_2_3.png" /> cluster_3<br />\
    <img src="styles/legend/dataset_kesehatan_clu_2_4.png" /> cluster_4<br />\
    <img src="styles/legend/dataset_kesehatan_clu_2_5.png" /> cluster_5<br />\
    <img src="styles/legend/dataset_kesehatan_clu_2_6.png" /> cluster_6<br />\
    <img src="styles/legend/dataset_kesehatan_clu_2_7.png" /> <br />' });
var format_dataset_olg_clu_3 = new ol.format.GeoJSON();
var features_dataset_olg_clu_3 = format_dataset_olg_clu_3.readFeatures(json_dataset_olg_clu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dataset_olg_clu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dataset_olg_clu_3.addFeatures(features_dataset_olg_clu_3);
var lyr_dataset_olg_clu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dataset_olg_clu_3, 
                style: style_dataset_olg_clu_3,
                popuplayertitle: 'dataset_olg_clu',
                interactive: true,
    title: 'dataset_olg_clu<br />\
    <img src="styles/legend/dataset_olg_clu_3_0.png" /> cluster_0<br />\
    <img src="styles/legend/dataset_olg_clu_3_1.png" /> cluster_1<br />\
    <img src="styles/legend/dataset_olg_clu_3_2.png" /> cluster_2<br />\
    <img src="styles/legend/dataset_olg_clu_3_3.png" /> cluster_3<br />\
    <img src="styles/legend/dataset_olg_clu_3_4.png" /> cluster_4<br />\
    <img src="styles/legend/dataset_olg_clu_3_5.png" /> cluster_5<br />\
    <img src="styles/legend/dataset_olg_clu_3_6.png" /> cluster_6<br />\
    <img src="styles/legend/dataset_olg_clu_3_7.png" /> <br />' });
var format_dataset_keseluruhan_clu_4 = new ol.format.GeoJSON();
var features_dataset_keseluruhan_clu_4 = format_dataset_keseluruhan_clu_4.readFeatures(json_dataset_keseluruhan_clu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dataset_keseluruhan_clu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dataset_keseluruhan_clu_4.addFeatures(features_dataset_keseluruhan_clu_4);
var lyr_dataset_keseluruhan_clu_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dataset_keseluruhan_clu_4, 
                style: style_dataset_keseluruhan_clu_4,
                popuplayertitle: 'dataset_keseluruhan_clu',
                interactive: true,
    title: 'dataset_keseluruhan_clu<br />\
    <img src="styles/legend/dataset_keseluruhan_clu_4_0.png" /> cluster_0<br />\
    <img src="styles/legend/dataset_keseluruhan_clu_4_1.png" /> cluster_1<br />\
    <img src="styles/legend/dataset_keseluruhan_clu_4_2.png" /> cluster_2<br />\
    <img src="styles/legend/dataset_keseluruhan_clu_4_3.png" /> cluster_3<br />\
    <img src="styles/legend/dataset_keseluruhan_clu_4_4.png" /> cluster_4<br />\
    <img src="styles/legend/dataset_keseluruhan_clu_4_5.png" /> cluster_5<br />\
    <img src="styles/legend/dataset_keseluruhan_clu_4_6.png" /> cluster_6<br />\
    <img src="styles/legend/dataset_keseluruhan_clu_4_7.png" /> <br />' });

lyr_gadm41_IDN_3_0.setVisible(true);lyr_dataset_sekolah_clu_1.setVisible(true);lyr_dataset_kesehatan_clu_2.setVisible(true);lyr_dataset_olg_clu_3.setVisible(true);lyr_dataset_keseluruhan_clu_4.setVisible(true);
var layersList = [lyr_gadm41_IDN_3_0,lyr_dataset_sekolah_clu_1,lyr_dataset_kesehatan_clu_2,lyr_dataset_olg_clu_3,lyr_dataset_keseluruhan_clu_4];
lyr_gadm41_IDN_3_0.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_dataset_sekolah_clu_1.set('fieldAliases', {'Luas Wilayah (km^2)': 'Luas Wilayah (km^2)', 'Jumlah Penduduk (jiwa)': 'Jumlah Penduduk (jiwa)', 'Jumlah Fasor (unit)': 'Jumlah Fasor (unit)', 'Jumah RS 2023 (unit)': 'Jumah RS 2023 (unit)', 'Puskesmas 2023 (unit)': 'Puskesmas 2023 (unit)', 'Jumlah SD (unit)': 'Jumlah SD (unit)', 'Jumlah SMP (unit)': 'Jumlah SMP (unit)', 'Jumlah SMA (unit)': 'Jumlah SMA (unit)', 'Jumlah SMK (unit)': 'Jumlah SMK (unit)', 'Kabupaten': 'Kabupaten', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Produktivitas Area (unit/km2)': 'Produktivitas Area (unit/km2)', 'Kepadatan Penduduk (jiwa/km2)': 'Kepadatan Penduduk (jiwa/km2)', 'Skor Kebutuhan Sekolah (jiwa/unit)': 'Skor Kebutuhan Sekolah (jiwa/unit)', 'Skor Kebutuhan Kesehatan (jiwa/unit)': 'Skor Kebutuhan Kesehatan (jiwa/unit)', 'Skor Kebutuhan Olahraga (jiwa/unit)': 'Skor Kebutuhan Olahraga (jiwa/unit)', 'Produktivitas Area (unit/km2)_from_ES2': 'Produktivitas Area (unit/km2)_from_ES2', 'Kepadatan Penduduk (jiwa/km2)_from_ES2': 'Kepadatan Penduduk (jiwa/km2)_from_ES2', 'id': 'id', 'cluster': 'cluster', });
lyr_dataset_kesehatan_clu_2.set('fieldAliases', {'Luas Wilayah (km^2)': 'Luas Wilayah (km^2)', 'Jumlah Penduduk (jiwa)': 'Jumlah Penduduk (jiwa)', 'Jumlah Fasor (unit)': 'Jumlah Fasor (unit)', 'Jumah RS 2023 (unit)': 'Jumah RS 2023 (unit)', 'Puskesmas 2023 (unit)': 'Puskesmas 2023 (unit)', 'Jumlah SD (unit)': 'Jumlah SD (unit)', 'Jumlah SMP (unit)': 'Jumlah SMP (unit)', 'Jumlah SMA (unit)': 'Jumlah SMA (unit)', 'Jumlah SMK (unit)': 'Jumlah SMK (unit)', 'Kabupaten': 'Kabupaten', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Produktivitas Area (unit/km2)': 'Produktivitas Area (unit/km2)', 'Kepadatan Penduduk (jiwa/km2)': 'Kepadatan Penduduk (jiwa/km2)', 'Skor Kebutuhan Sekolah (jiwa/unit)': 'Skor Kebutuhan Sekolah (jiwa/unit)', 'Skor Kebutuhan Kesehatan (jiwa/unit)': 'Skor Kebutuhan Kesehatan (jiwa/unit)', 'Skor Kebutuhan Olahraga (jiwa/unit)': 'Skor Kebutuhan Olahraga (jiwa/unit)', 'Produktivitas Area (unit/km2)_from_ES2': 'Produktivitas Area (unit/km2)_from_ES2', 'Kepadatan Penduduk (jiwa/km2)_from_ES2': 'Kepadatan Penduduk (jiwa/km2)_from_ES2', 'id': 'id', 'cluster': 'cluster', });
lyr_dataset_olg_clu_3.set('fieldAliases', {'Luas Wilayah (km^2)': 'Luas Wilayah (km^2)', 'Jumlah Penduduk (jiwa)': 'Jumlah Penduduk (jiwa)', 'Jumlah Fasor (unit)': 'Jumlah Fasor (unit)', 'Jumah RS 2023 (unit)': 'Jumah RS 2023 (unit)', 'Puskesmas 2023 (unit)': 'Puskesmas 2023 (unit)', 'Jumlah SD (unit)': 'Jumlah SD (unit)', 'Jumlah SMP (unit)': 'Jumlah SMP (unit)', 'Jumlah SMA (unit)': 'Jumlah SMA (unit)', 'Jumlah SMK (unit)': 'Jumlah SMK (unit)', 'Kabupaten': 'Kabupaten', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Produktivitas Area (unit/km2)': 'Produktivitas Area (unit/km2)', 'Kepadatan Penduduk (jiwa/km2)': 'Kepadatan Penduduk (jiwa/km2)', 'Skor Kebutuhan Sekolah (jiwa/unit)': 'Skor Kebutuhan Sekolah (jiwa/unit)', 'Skor Kebutuhan Kesehatan (jiwa/unit)': 'Skor Kebutuhan Kesehatan (jiwa/unit)', 'Skor Kebutuhan Olahraga (jiwa/unit)': 'Skor Kebutuhan Olahraga (jiwa/unit)', 'Produktivitas Area (unit/km2)_from_ES2': 'Produktivitas Area (unit/km2)_from_ES2', 'Kepadatan Penduduk (jiwa/km2)_from_ES2': 'Kepadatan Penduduk (jiwa/km2)_from_ES2', 'id': 'id', 'cluster': 'cluster', });
lyr_dataset_keseluruhan_clu_4.set('fieldAliases', {'Luas Wilayah (km^2)': 'Luas Wilayah (km^2)', 'Jumlah Penduduk (jiwa)': 'Jumlah Penduduk (jiwa)', 'Jumlah Fasor (unit)': 'Jumlah Fasor (unit)', 'Jumah RS 2023 (unit)': 'Jumah RS 2023 (unit)', 'Puskesmas 2023 (unit)': 'Puskesmas 2023 (unit)', 'Jumlah SD (unit)': 'Jumlah SD (unit)', 'Jumlah SMP (unit)': 'Jumlah SMP (unit)', 'Jumlah SMA (unit)': 'Jumlah SMA (unit)', 'Jumlah SMK (unit)': 'Jumlah SMK (unit)', 'Kabupaten': 'Kabupaten', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Produktivitas Area (unit/km2)': 'Produktivitas Area (unit/km2)', 'Kepadatan Penduduk (jiwa/km2)': 'Kepadatan Penduduk (jiwa/km2)', 'Skor Kebutuhan Sekolah (jiwa/unit)': 'Skor Kebutuhan Sekolah (jiwa/unit)', 'Skor Kebutuhan Kesehatan (jiwa/unit)': 'Skor Kebutuhan Kesehatan (jiwa/unit)', 'Skor Kebutuhan Olahraga (jiwa/unit)': 'Skor Kebutuhan Olahraga (jiwa/unit)', 'Produktivitas Area (unit/km2)_from_ES2': 'Produktivitas Area (unit/km2)_from_ES2', 'Kepadatan Penduduk (jiwa/km2)_from_ES2': 'Kepadatan Penduduk (jiwa/km2)_from_ES2', 'id': 'id', 'cluster': 'cluster', });
lyr_gadm41_IDN_3_0.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_dataset_sekolah_clu_1.set('fieldImages', {'Luas Wilayah (km^2)': 'TextEdit', 'Jumlah Penduduk (jiwa)': 'TextEdit', 'Jumlah Fasor (unit)': 'TextEdit', 'Jumah RS 2023 (unit)': 'TextEdit', 'Puskesmas 2023 (unit)': 'TextEdit', 'Jumlah SD (unit)': 'TextEdit', 'Jumlah SMP (unit)': 'TextEdit', 'Jumlah SMA (unit)': 'TextEdit', 'Jumlah SMK (unit)': 'TextEdit', 'Kabupaten': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Produktivitas Area (unit/km2)': 'TextEdit', 'Kepadatan Penduduk (jiwa/km2)': 'TextEdit', 'Skor Kebutuhan Sekolah (jiwa/unit)': 'TextEdit', 'Skor Kebutuhan Kesehatan (jiwa/unit)': 'TextEdit', 'Skor Kebutuhan Olahraga (jiwa/unit)': 'TextEdit', 'Produktivitas Area (unit/km2)_from_ES2': 'TextEdit', 'Kepadatan Penduduk (jiwa/km2)_from_ES2': 'TextEdit', 'id': 'Range', 'cluster': 'TextEdit', });
lyr_dataset_kesehatan_clu_2.set('fieldImages', {'Luas Wilayah (km^2)': 'TextEdit', 'Jumlah Penduduk (jiwa)': 'TextEdit', 'Jumlah Fasor (unit)': 'TextEdit', 'Jumah RS 2023 (unit)': 'TextEdit', 'Puskesmas 2023 (unit)': 'TextEdit', 'Jumlah SD (unit)': 'TextEdit', 'Jumlah SMP (unit)': 'TextEdit', 'Jumlah SMA (unit)': 'TextEdit', 'Jumlah SMK (unit)': 'TextEdit', 'Kabupaten': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Produktivitas Area (unit/km2)': 'TextEdit', 'Kepadatan Penduduk (jiwa/km2)': 'TextEdit', 'Skor Kebutuhan Sekolah (jiwa/unit)': 'TextEdit', 'Skor Kebutuhan Kesehatan (jiwa/unit)': 'TextEdit', 'Skor Kebutuhan Olahraga (jiwa/unit)': 'TextEdit', 'Produktivitas Area (unit/km2)_from_ES2': 'TextEdit', 'Kepadatan Penduduk (jiwa/km2)_from_ES2': 'TextEdit', 'id': 'Range', 'cluster': 'TextEdit', });
lyr_dataset_olg_clu_3.set('fieldImages', {'Luas Wilayah (km^2)': 'TextEdit', 'Jumlah Penduduk (jiwa)': 'TextEdit', 'Jumlah Fasor (unit)': 'TextEdit', 'Jumah RS 2023 (unit)': 'TextEdit', 'Puskesmas 2023 (unit)': 'TextEdit', 'Jumlah SD (unit)': 'TextEdit', 'Jumlah SMP (unit)': 'TextEdit', 'Jumlah SMA (unit)': 'TextEdit', 'Jumlah SMK (unit)': 'TextEdit', 'Kabupaten': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Produktivitas Area (unit/km2)': 'TextEdit', 'Kepadatan Penduduk (jiwa/km2)': 'TextEdit', 'Skor Kebutuhan Sekolah (jiwa/unit)': 'TextEdit', 'Skor Kebutuhan Kesehatan (jiwa/unit)': 'TextEdit', 'Skor Kebutuhan Olahraga (jiwa/unit)': 'TextEdit', 'Produktivitas Area (unit/km2)_from_ES2': 'TextEdit', 'Kepadatan Penduduk (jiwa/km2)_from_ES2': 'TextEdit', 'id': 'Range', 'cluster': 'TextEdit', });
lyr_dataset_keseluruhan_clu_4.set('fieldImages', {'Luas Wilayah (km^2)': 'TextEdit', 'Jumlah Penduduk (jiwa)': 'TextEdit', 'Jumlah Fasor (unit)': 'TextEdit', 'Jumah RS 2023 (unit)': 'TextEdit', 'Puskesmas 2023 (unit)': 'TextEdit', 'Jumlah SD (unit)': 'TextEdit', 'Jumlah SMP (unit)': 'TextEdit', 'Jumlah SMA (unit)': 'TextEdit', 'Jumlah SMK (unit)': 'TextEdit', 'Kabupaten': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Produktivitas Area (unit/km2)': 'TextEdit', 'Kepadatan Penduduk (jiwa/km2)': 'TextEdit', 'Skor Kebutuhan Sekolah (jiwa/unit)': 'TextEdit', 'Skor Kebutuhan Kesehatan (jiwa/unit)': 'TextEdit', 'Skor Kebutuhan Olahraga (jiwa/unit)': 'TextEdit', 'Produktivitas Area (unit/km2)_from_ES2': 'TextEdit', 'Kepadatan Penduduk (jiwa/km2)_from_ES2': 'TextEdit', 'id': 'Range', 'cluster': 'TextEdit', });
lyr_gadm41_IDN_3_0.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_dataset_sekolah_clu_1.set('fieldLabels', {'Luas Wilayah (km^2)': 'no label', 'Jumlah Penduduk (jiwa)': 'no label', 'Jumlah Fasor (unit)': 'no label', 'Jumah RS 2023 (unit)': 'no label', 'Puskesmas 2023 (unit)': 'no label', 'Jumlah SD (unit)': 'no label', 'Jumlah SMP (unit)': 'no label', 'Jumlah SMA (unit)': 'no label', 'Jumlah SMK (unit)': 'no label', 'Kabupaten': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Produktivitas Area (unit/km2)': 'no label', 'Kepadatan Penduduk (jiwa/km2)': 'no label', 'Skor Kebutuhan Sekolah (jiwa/unit)': 'no label', 'Skor Kebutuhan Kesehatan (jiwa/unit)': 'no label', 'Skor Kebutuhan Olahraga (jiwa/unit)': 'no label', 'Produktivitas Area (unit/km2)_from_ES2': 'no label', 'Kepadatan Penduduk (jiwa/km2)_from_ES2': 'no label', 'id': 'no label', 'cluster': 'no label', });
lyr_dataset_kesehatan_clu_2.set('fieldLabels', {'Luas Wilayah (km^2)': 'no label', 'Jumlah Penduduk (jiwa)': 'no label', 'Jumlah Fasor (unit)': 'no label', 'Jumah RS 2023 (unit)': 'no label', 'Puskesmas 2023 (unit)': 'no label', 'Jumlah SD (unit)': 'no label', 'Jumlah SMP (unit)': 'no label', 'Jumlah SMA (unit)': 'no label', 'Jumlah SMK (unit)': 'no label', 'Kabupaten': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Produktivitas Area (unit/km2)': 'no label', 'Kepadatan Penduduk (jiwa/km2)': 'no label', 'Skor Kebutuhan Sekolah (jiwa/unit)': 'no label', 'Skor Kebutuhan Kesehatan (jiwa/unit)': 'no label', 'Skor Kebutuhan Olahraga (jiwa/unit)': 'no label', 'Produktivitas Area (unit/km2)_from_ES2': 'no label', 'Kepadatan Penduduk (jiwa/km2)_from_ES2': 'no label', 'id': 'no label', 'cluster': 'no label', });
lyr_dataset_olg_clu_3.set('fieldLabels', {'Luas Wilayah (km^2)': 'no label', 'Jumlah Penduduk (jiwa)': 'no label', 'Jumlah Fasor (unit)': 'no label', 'Jumah RS 2023 (unit)': 'no label', 'Puskesmas 2023 (unit)': 'no label', 'Jumlah SD (unit)': 'no label', 'Jumlah SMP (unit)': 'no label', 'Jumlah SMA (unit)': 'no label', 'Jumlah SMK (unit)': 'no label', 'Kabupaten': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Produktivitas Area (unit/km2)': 'no label', 'Kepadatan Penduduk (jiwa/km2)': 'no label', 'Skor Kebutuhan Sekolah (jiwa/unit)': 'no label', 'Skor Kebutuhan Kesehatan (jiwa/unit)': 'no label', 'Skor Kebutuhan Olahraga (jiwa/unit)': 'no label', 'Produktivitas Area (unit/km2)_from_ES2': 'no label', 'Kepadatan Penduduk (jiwa/km2)_from_ES2': 'no label', 'id': 'no label', 'cluster': 'no label', });
lyr_dataset_keseluruhan_clu_4.set('fieldLabels', {'Luas Wilayah (km^2)': 'no label', 'Jumlah Penduduk (jiwa)': 'no label', 'Jumlah Fasor (unit)': 'no label', 'Jumah RS 2023 (unit)': 'no label', 'Puskesmas 2023 (unit)': 'no label', 'Jumlah SD (unit)': 'no label', 'Jumlah SMP (unit)': 'no label', 'Jumlah SMA (unit)': 'no label', 'Jumlah SMK (unit)': 'no label', 'Kabupaten': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Produktivitas Area (unit/km2)': 'no label', 'Kepadatan Penduduk (jiwa/km2)': 'no label', 'Skor Kebutuhan Sekolah (jiwa/unit)': 'no label', 'Skor Kebutuhan Kesehatan (jiwa/unit)': 'no label', 'Skor Kebutuhan Olahraga (jiwa/unit)': 'no label', 'Produktivitas Area (unit/km2)_from_ES2': 'no label', 'Kepadatan Penduduk (jiwa/km2)_from_ES2': 'no label', 'id': 'no label', 'cluster': 'no label', });
lyr_dataset_keseluruhan_clu_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});