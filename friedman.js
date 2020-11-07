var s = "Uppz vbl yph cmpo fjltou wmcz zpvr xvfv fq qbup Hoollmt wmcz gqtporjl zo o xptus iwcts. Im sbr czzvuib l mcu wq qcdspu-vbvolssksjsga, lor Cqwcc't xtqs bvo uccindc. Tw lghfz eiou bsf dbzez kfve bzpvr wssg xffsqwz, ool eisz bzmr tbzswfa zs gbvr tcood bg uppz fplp gcselsr btw eoz, midsqb zg qpccts xppo himj thpxafr gwc nsbtd. Uvfap ewev'e dcnm bvwum lt cgbpo ot Jtmpp ezvze plws mqvfr uppn, pvb duwmt sf pfolo hp npfz uplu oedpohvzpt kfzp ocu az coe iquss iwm. Ou ntsgu bsfm iio qotape hizzvui pzcpjb-wbbea, l xwml cfgqmnuoctp dcvvesm jvsbpjbpe pz lpdsob qpzl, etuv hwze fpiot, oo qyo cs bhp, ool ypk bvo uvfv l ekbzq pf b nlsafz lnpmqyh pz wy citqyfgt. Bsfb uppz qbup uc miyeg xppss qmzqzf aapyf aesooopmm, bvo tooo dpbha Mjzcw sbr omgff imlsr cmqpff. Vzx himj ioe ozos pv qbf jvep him Wpbf-tlort, esfff bsfff epss ow afcqtp msgb, yp wovd, bbe bsf fpiot usmh thfiojzz ezsgf. Vzu tbz lisbl hfff lcfosg sjzma, cjgjvr iwhpps ool sjuimc, eoss hjhi bcfst. Wy tcnm zg himx xssm zmr diduzfa hjhi iy fjjt wpcl, id jt uppz vbl mfso jfjzu jj xwdspe dfwams. Fdpsmuptou tmpnse owpcng, qpf upp xsbbsff uplu rbg sbr uivfb b vlthz bfsb. Nwduzz qe ioe jpfb ba rpce id Noz klo pf, mgfb jv xffsg ebzfa, mvh owh jh xid dcml lor xme. Jb upp Mcom-wbbea eisz ple hp klnd xppo himj dcvto, ciu ie msbae jh iio csfv osm. \"Uw eiwos tu kjtw tcpv mf Xvvp,\" hfvummse Jtmpp id is txwbgimo bzpvr csiqye him zuvfzd jb b dpsm ncoem uzldy. Jb hbg bneff uml-uwnm; tu kba apisqyh kjbs sojv, lor iio csfv lmz eij; iwt pzpr xid efjxajbh qyuc iqd fmfa, sjg dtzby xid gimt zg kbbps; him apbz elt hjzpe ool duinjwfr pv ducomd; uvf weissa hfff bzp uscxqm uw ebzl.\"Iye W'n afss upp sojv sbg hwe jbuw eis ezj dzpbsfg bvo jbuw eis gwze-pbod,\" uvpcrih Cqwcc. \"Cweiss jfsumqyh ool pwssgeiwoo ep rp etuv jb! T xwtp T xot ie icnm to az vtds iwwf pz bsf tjzp, xwup eis lmeuzf rfth cmrjboqyh hp atou!\" Jb hbg owe uvf tlth uqxf hiie is xqdise bsbh! Tbtmz upp ekbzgfg kwrhse wy, oswmc uisvtou swfor pz ebyjvr bbz vzuwdm zg him sppcqe. Tcnmhissm mfvjvo uvf ocfm dtzvrt bsf gvv xvgu plws hwyf rpey, gcs qe cshiy uc hme eoss. Hjbe ozu iq, iye him hjzmwht omwyh him cjjfz-mbbl jpoh bvo twhppe. W ewy'u yowh xvbb cjjfz tu kba, l sitptou smo pbf, ahpzmmy xwup eis sitog pn eis midu tfe obmt, bsbh dixf rpey gfpu eis iqwmg bvo ncvvebwoa to tswyu cg bsfa. Twzo wu elt bficmm eicl. Him hjbea msclm fq him rssz kwpiea, lor b elowoo xpco iaqsbzpe ocwgf him sjzma mfhxmpo him qmmjvr soha. Eiso bsfm tbzqdfl, lor Upzswo ufuhfzpe gpupuvjvr bppce tiqxps, \"ool hissm diomt hf ufb l efz xluqi bz tzfma pb?\" Owe vbuqw uvfv ojr uppz bpbtds uplu Ubvobzg elt ajadjbh. Az gos pp ioe kzns btw uvf elz kjbs uvfu, yfjfz dbmjvr jt im hbg jv eis blgfbuccf cs upssmg vfsqqyh himx dcnxlom gwc b kiqwf. Vf ple sbbpo apae, uomspe apae, bbe tlvuimo nctb. Mvh owh is tqxqzz elt bpb eissm lu omt!";

let counter = str => {
  return str.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});
};

var kp = 0.067;
var kr = 0.0385;

var crack = function(string) {
    let answers = [];
    string = string.toLowerCase().replace(/[^a-zA-Z]/g, '');
    console.log(string)
    let len = string.length
    var frequency = counter(string);
    var frequencySum = 0;
    for(let ans of Object.values(frequency)){
        frequencySum+=(ans)*(ans-1)
    }
    var k0 = frequencySum/(string.length*(string.length-1))
    var d = (kp-kr)/(k0 - kr)
       
    console.log( d)

};
crack(s)