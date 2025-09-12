export interface Emotion {
    id: string
    title: string
}

export interface Speaker {
    id: string
    lang: string
    description: string
    emotions?: Emotion[]
}

export const speakers: Speaker[] = [
    // 多情感
    {
        id: 'zh_male_beijingxiaoye_emo_v2_mars_bigtts', lang: '中文', description: '北京小爷（多情感）', emotions: [
            { id: 'angry', title: '生气' },
            { id: 'surprised', title: '惊讶' },
            { id: 'fear', title: '恐惧' },
            { id: 'excited', title: '激动' },
            { id: 'coldness', title: '冷漠' },
            { id: 'neutral', title: '中性' }
        ]
    },
    {
        id: 'zh_female_roumeinvyou_emo_v2_mars_bigtts', lang: '中文', description: '柔美女友（多情感）', emotions: [
            { id: 'happy', title: '开心' },
            { id: 'sad', title: '悲伤' },
            { id: 'angry', title: '生气' },
            { id: 'surprised', title: '惊讶' },
            { id: 'fear', title: '恐惧' },
            { id: 'hate', title: '厌恶' },
            { id: 'excited', title: '激动' },
            { id: 'coldness', title: '冷漠' },
            { id: 'neutral', title: '中性' }
        ]
    },
    {
        id: 'zh_male_yangguangqingnian_emo_v2_mars_bigtts', lang: '中文', description: '阳光青年（多情感）', emotions: [
            { id: 'happy', title: '开心' },
            { id: 'sad', title: '悲伤' },
            { id: 'angry', title: '生气' },
            { id: 'fear', title: '恐惧' },
            { id: 'excited', title: '激动' },
            { id: 'coldness', title: '冷漠' },
            { id: 'neutral', title: '中性' }
        ]
    },
    {
        id: 'zh_female_meilinvyou_emo_v2_mars_bigtts', lang: '中文', description: '魅力女友（多情感）', emotions: [
            { id: 'sad', title: '悲伤' },
            { id: 'fear', title: '恐惧' },
            { id: 'neutral', title: '中性' }
        ]
    },
    {
        id: 'zh_female_shuangkuaisisi_emo_v2_mars_bigtts', lang: '中文、美式英语', description: '爽快思思（多情感）', emotions: [
            { id: 'happy', title: '开心' },
            { id: 'sad', title: '悲伤' },
            { id: 'angry', title: '生气' },
            { id: 'surprised', title: '惊讶' },
            { id: 'excited', title: '激动' },
            { id: 'coldness', title: '冷漠' },
            { id: 'neutral', title: '中性' }
        ]
    },
    {
        id: 'zh_female_tianxinxiaomei_emo_v2_mars_bigtts', lang: '中文', description: '甜心小美（多情感）', emotions: [
            { id: 'sad', title: '悲伤' },
            { id: 'fear', title: '恐惧' },
            { id: 'hate', title: '厌恶' },
            { id: 'neutral', title: '中性' }
        ]
    },
    {
        id: 'zh_female_gaolengyujie_emo_v2_mars_bigtts', lang: '中文', description: '高冷御姐（多情感）', emotions: [
            { id: 'happy', title: '开心' },
            { id: 'sad', title: '悲伤' },
            { id: 'angry', title: '生气' },
            { id: 'surprised', title: '惊讶' },
            { id: 'fear', title: '恐惧' },
            { id: 'hate', title: '厌恶' },
            { id: 'excited', title: '激动' },
            { id: 'coldness', title: '冷漠' },
            { id: 'neutral', title: '中性' }
        ]
    },
    {
        id: 'zh_male_aojiaobazong_emo_v2_mars_bigtts', lang: '中文', description: '傲娇霸总（多情感）', emotions: [
            { id: 'neutral', title: '中性' },
            { id: 'happy', title: '开心' },
            { id: 'angry', title: '愤怒' },
            { id: 'hate', title: '厌恶' }
        ]
    },
    {
        id: 'zh_male_guangzhoudege_emo_mars_bigtts', lang: '中文', description: '广州德哥（多情感）', emotions: [
            { id: 'angry', title: '生气' },
            { id: 'fear', title: '恐惧' },
            { id: 'neutral', title: '中性' }
        ]
    },
    {
        id: 'zh_male_jingqiangkanye_emo_mars_bigtts', lang: '中文', description: '京腔侃爷（多情感）', emotions: [
            { id: 'happy', title: '开心' },
            { id: 'angry', title: '生气' },
            { id: 'surprised', title: '惊讶' },
            { id: 'hate', title: '厌恶' },
            { id: 'neutral', title: '中性' }
        ]
    },
    {
        id: 'zh_female_linjuayi_emo_v2_mars_bigtts', lang: '中文', description: '邻居阿姨（多情感）', emotions: [
            { id: 'neutral', title: '中性' },
            { id: 'angry', title: '愤怒' },
            { id: 'coldness', title: '冷漠' },
            { id: 'depressed', title: '沮丧' },
            { id: 'surprised', title: '惊讶' }
        ]
    },
    {
        id: 'zh_male_yourougongzi_emo_v2_mars_bigtts', lang: '中文', description: '优柔公子（多情感）', emotions: [
            { id: 'happy', title: '开心' },
            { id: 'angry', title: '生气' },
            { id: 'fear', title: '恐惧' },
            { id: 'hate', title: '厌恶' },
            { id: 'excited', title: '激动' },
            { id: 'neutral', title: '中性' },
            { id: 'depressed', title: '沮丧' }
        ]
    },
    {
        id: 'zh_male_ruyayichen_emo_v2_mars_bigtts', lang: '中文', description: '儒雅男友（多情感）', emotions: [
            { id: 'happy', title: '开心' },
            { id: 'sad', title: '悲伤' },
            { id: 'angry', title: '生气' },
            { id: 'fear', title: '恐惧' },
            { id: 'excited', title: '激动' },
            { id: 'coldness', title: '冷漠' },
            { id: 'neutral', title: '中性' }
        ]
    },
    {
        id: 'zh_male_junlangnanyou_emo_v2_mars_bigtts', lang: '中文', description: '俊朗男友（多情感）', emotions: [
            { id: 'happy', title: '开心' },
            { id: 'sad', title: '悲伤' },
            { id: 'angry', title: '生气' },
            { id: 'surprised', title: '惊讶' },
            { id: 'fear', title: '恐惧' },
            { id: 'neutral', title: '中性' }
        ]
    },
    {
        id: 'zh_male_lengkugege_emo_v2_mars_bigtts', lang: '中文', description: '冷酷哥哥（多情感）', emotions: [
            { id: 'angry', title: '生气' },
            { id: 'coldness', title: '冷漠' },
            { id: 'fear', title: '恐惧' },
            { id: 'happy', title: '开心' },
            { id: 'hate', title: '厌恶' },
            { id: 'neutral', title: '中性' },
            { id: 'sad', title: '悲伤' },
            { id: 'depressed', title: '沮丧' }
        ]
    },
    {
        id: 'en_male_glen_emo_v2_mars_bigtts', lang: '美式英语', description: 'Glen', emotions: [
            { id: 'affectionate', title: '深情' },
            { id: 'angry', title: '愤怒' },
            { id: 'asmr', title: 'ASMR' },
            { id: 'chat', title: '对话/闲聊' },
            { id: 'affectionate', title: '深情' },
            { id: 'excited', title: '兴奋' },
            { id: 'happy', title: '愉悦' },
            { id: 'neutral', title: '中性' },
            { id: 'sad', title: '悲伤' },
            { id: 'warm', title: '温暖' }
        ]
    },
    {
        id: 'en_male_sylus_emo_v2_mars_bigtts', lang: '美式英语', description: 'Sylus', emotions: [
            { id: 'affectionate', title: '深情' },
            { id: 'angry', title: '愤怒' },
            { id: 'asmr', title: 'ASMR' },
            { id: 'authoritative', title: '权威' },
            { id: 'chat', title: '对话/闲聊' },
            { id: 'excited', title: '兴奋' },
            { id: 'happy', title: '愉悦' },
            { id: 'neutral', title: '中性' },
            { id: 'sad', title: '悲伤' },
            { id: 'warm', title: '温暖' }
        ]
    },
    {
        id: 'en_female_candice_emo_v2_mars_bigtts', lang: '美式英语', description: 'Candice', emotions: [
            { id: 'affectionate', title: '深情' },
            { id: 'angry', title: '愤怒' },
            { id: 'asmr', title: 'ASMR' },
            { id: 'chat', title: '对话/闲聊' },
            { id: 'excited', title: '兴奋' },
            { id: 'happy', title: '愉悦' },
            { id: 'neutral', title: '中性' },
            { id: 'warm', title: '温暖' }
        ]
    },
    {
        id: 'en_male_corey_emo_v2_mars_bigtts', lang: '英式英语', description: 'Corey', emotions: [
            { id: 'angry', title: '愤怒' },
            { id: 'asmr', title: 'ASMR' },
            { id: 'authoritative', title: '权威' },
            { id: 'chat', title: '对话/闲聊' },
            { id: 'affectionate', title: '深情' },
            { id: 'excited', title: '兴奋' },
            { id: 'happy', title: '愉悦' },
            { id: 'neutral', title: '中性' },
            { id: 'sad', title: '悲伤' },
            { id: 'warm', title: '温暖' }
        ]
    },
    {
        id: 'en_female_nadia_tips_emo_v2_mars_bigtts', lang: '英式英语', description: 'Nadia1', emotions: [
            { id: 'affectionate', title: '深情' },
            { id: 'angry', title: '愤怒' },
            { id: 'asmr', title: 'ASMR' },
            { id: 'chat', title: '对话/闲聊' },
            { id: 'excited', title: '兴奋' },
            { id: 'happy', title: '愉悦' },
            { id: 'neutral', title: '中性' },
            { id: 'sad', title: '悲伤' },
            { id: 'warm', title: '温暖' }
        ]
    },
    {
        id: 'en_female_skye_emo_v2_mars_bigtts', lang: '美式英语', description: 'Serena', emotions: [
            { id: 'affectionate', title: '深情' },
            { id: 'angry', title: '愤怒' },
            { id: 'asmr', title: 'ASMR' },
            { id: 'chat', title: '对话/闲聊' },
            { id: 'excited', title: '兴奋' },
            { id: 'happy', title: '愉悦' },
            { id: 'neutral', title: '中性' },
            { id: 'sad', title: '悲伤' },
            { id: 'warm', title: '温暖' }
        ]
    },

    // 教育场景
    { id: 'zh_female_yingyujiaoyu_mars_bigtts', lang: '中、英式英语', description: 'Tina老师' },

    // 客服场景
    { id: 'zh_female_kefunvsheng_mars_bigtts', lang: '仅中文', description: '暖阳女声' },
    { id: 'ICL_zh_female_tianmeixiaoyu_cs_tob', lang: '仅中文', description: '甜美小雨' },
    { id: 'ICL_zh_female_reqingaina_cs_tob', lang: '仅中文', description: '热情艾娜' },
    { id: 'ICL_zh_female_tianmeixiaoju_cs_tob', lang: '仅中文', description: '甜美小橘' },
    { id: 'ICL_zh_male_chenwenmingzai_cs_tob', lang: '仅中文', description: '沉稳明仔' },
    { id: 'ICL_zh_male_qinqiexiaozhuo_cs_tob', lang: '仅中文', description: '亲切小卓' },
    { id: 'ICL_zh_female_lingdongxinxin_cs_tob', lang: '仅中文', description: '灵动欣欣' },
    { id: 'ICL_zh_female_guaiqiaokeer_cs_tob', lang: '仅中文', description: '乖巧可儿' },
    { id: 'ICL_zh_female_nuanxinqianqian_cs_tob', lang: '仅中文', description: '暖心茜茜' },
    { id: 'ICL_zh_female_ruanmengtuanzi_cs_tob', lang: '仅中文', description: '软萌团子' },
    { id: 'ICL_zh_male_yangguangyangyang_cs_tob', lang: '仅中文', description: '阳光洋洋' },
    { id: 'ICL_zh_female_ruanmengtangtang_cs_tob', lang: '仅中文', description: '软萌糖糖' },
    { id: 'ICL_zh_female_xiuliqianqian_cs_tob', lang: '仅中文', description: '秀丽倩倩' },
    { id: 'ICL_zh_female_kaixinxiaohong_cs_tob', lang: '仅中文', description: '开心小鸿' },
    { id: 'ICL_zh_female_qingyingduoduo_cs_tob', lang: '仅中文', description: '轻盈朵朵' },
    { id: 'ICL_zh_female_lixingyuanzi_cs_tob', lang: '仅中文', description: '理性圆子' },
    { id: 'ICL_zh_female_qingtiantaotao_cs_tob', lang: '仅中文', description: '清甜桃桃' },
    { id: 'ICL_zh_female_qingxixiaoxue_cs_tob', lang: '仅中文', description: '清晰小雪' },
    { id: 'ICL_zh_female_qingtianmeimei_cs_tob', lang: '仅中文', description: '清甜莓莓' },
    { id: 'ICL_zh_female_kailangtingting_cs_tob', lang: '仅中文', description: '开朗婷婷' },
    { id: 'ICL_zh_male_qingxinmumu_cs_tob', lang: '仅中文', description: '清新沐沐' },
    { id: 'ICL_zh_male_shuanglangxiaoyang_cs_tob', lang: '仅中文', description: '爽朗小阳' },
    { id: 'ICL_zh_male_qingxinbobo_cs_tob', lang: '仅中文', description: '清新波波' },
    { id: 'ICL_zh_female_wenwanshanshan_cs_tob', lang: '仅中文', description: '温婉珊珊' },

    // 通用场景
    { id: 'zh_female_tianmeitaozi_mars_bigtts', lang: '中文', description: '甜美桃子' },
    { id: 'zh_female_vv_mars_bigtts', lang: '中文', description: 'Vivi' },
    { id: 'ICL_zh_female_wenrounvshen_239eff5e8ffa_tob', lang: '中文', description: '温柔女神' },
    { id: 'zh_female_cancan_mars_bigtts', lang: '中文、美式英语', description: '灿灿/Shiny' },
    { id: 'zh_female_qingxinnvsheng_mars_bigtts', lang: '中文', description: '清新女声' },
    { id: 'zh_female_shuangkuaisisi_moon_bigtts', lang: '中文、美式英语', description: '爽快思思/Skye' },
    { id: 'zh_male_wennuanahu_moon_bigtts', lang: '中文、美式英语', description: '温暖阿虎/Alvin' },
    { id: 'zh_male_shaonianzixin_moon_bigtts', lang: '中文、美式英语', description: '少年梓辛/Brayan' },
    { id: 'zh_female_zhixingnvsheng_mars_bigtts', lang: '中文', description: '知性女声' },
    { id: 'zh_male_qingshuangnanda_mars_bigtts', lang: '中文', description: '清爽男大' },
    { id: 'zh_female_linjianvhai_moon_bigtts', lang: '中文', description: '邻家女孩' },
    { id: 'zh_male_yuanboxiaoshu_moon_bigtts', lang: '中文', description: '渊博小叔' },
    { id: 'zh_male_yangguangqingnian_moon_bigtts', lang: '中文', description: '阳光青年' },
    { id: 'zh_female_tianmeixiaoyuan_moon_bigtts', lang: '中文', description: '甜美小源' },
    { id: 'zh_female_qingchezizi_moon_bigtts', lang: '中文', description: '清澈梓梓' },
    { id: 'zh_male_jieshuoxiaoming_moon_bigtts', lang: '中文', description: '解说小明' },
    { id: 'zh_female_kailangjiejie_moon_bigtts', lang: '中文', description: '开朗姐姐' },
    { id: 'zh_male_linjiananhai_moon_bigtts', lang: '中文', description: '邻家男孩' },
    { id: 'zh_female_tianmeiyueyue_moon_bigtts', lang: '中文', description: '甜美悦悦' },
    { id: 'zh_female_xinlingjitang_moon_bigtts', lang: '中文', description: '心灵鸡汤' },
    { id: 'ICL_zh_female_zhixingwenwan_tob', lang: '中文', description: '知性温婉' },
    { id: 'ICL_zh_male_nuanxintitie_tob', lang: '中文', description: '暖心体贴' },
    { id: 'ICL_zh_female_wenrouwenya_tob', lang: '中文', description: '温柔文雅' },
    { id: 'ICL_zh_male_kailangqingkuai_tob', lang: '中文', description: '开朗轻快' },
    { id: 'ICL_zh_male_huoposhuanglang_tob', lang: '中文', description: '活泼爽朗' },
    { id: 'ICL_zh_male_shuaizhenxiaohuo_tob', lang: '中文', description: '率真小伙' },
    { id: 'zh_male_wenrouxiaoge_mars_bigtts', lang: '中文', description: '温柔小哥' },
    { id: 'zh_female_qinqienvsheng_moon_bigtts', lang: '中文', description: '亲切女声' },
    { id: 'ICL_zh_male_shenmi_v1_tob', lang: '中文', description: '机灵小伙' },
    { id: 'ICL_zh_female_wuxi_tob', lang: '中文', description: '元气甜妹' },
    { id: 'ICL_zh_female_wenyinvsheng_v1_tob', lang: '中文', description: '知心姐姐' },
    { id: 'zh_male_qingyiyuxuan_mars_bigtts', lang: '中文', description: '阳光阿辰' },
    { id: 'zh_male_xudong_conversation_wvae_bigtts', lang: '中文', description: '快乐小东' },
    { id: 'ICL_zh_male_lengkugege_v1_tob', lang: '中文', description: '冷酷哥哥' },
    { id: 'ICL_zh_female_feicui_v1_tob', lang: '中文', description: '纯澈女生' },
    { id: 'ICL_zh_female_yuxin_v1_tob', lang: '中文', description: '初恋女友' },
    { id: 'ICL_zh_female_xnx_tob', lang: '中文', description: '贴心闺蜜' },
    { id: 'ICL_zh_female_yry_tob', lang: '中文', description: '温柔白月光' },
    { id: 'en_male_jason_conversation_wvae_bigtts', lang: '中文', description: '开朗学长' },
    { id: 'zh_female_sophie_conversation_wvae_bigtts', lang: '中文', description: '魅力苏菲' },
    { id: 'ICL_zh_female_yilin_tob', lang: '中文', description: '贴心妹妹' },

    // 多语种
    { id: 'en_female_lauren_moon_bigtts', lang: '美式英语', description: 'Lauren' },
    { id: 'en_male_smith_mars_bigtts', lang: '英式英语', description: 'Smith' },
    { id: 'en_female_anna_mars_bigtts', lang: '英式英语', description: 'Anna' },
    { id: 'en_male_adam_mars_bigtts', lang: '美式英语', description: 'Adam' },
    { id: 'en_female_sarah_mars_bigtts', lang: '澳洲英语', description: 'Sarah' },
    { id: 'en_male_dryw_mars_bigtts', lang: '澳洲英语', description: 'Dryw' },
    { id: 'multi_male_jingqiangkanye_moon_bigtts', lang: '日语、西语', description: 'かずね（和音）/Javier or Álvaro' },
    { id: 'multi_female_shuangkuaisisi_moon_bigtts', lang: '日语、西语', description: 'はるこ（晴子）/Esmeralda' },
    { id: 'multi_male_wanqudashu_moon_bigtts', lang: '日语、西语', description: 'ひろし（広志）/Roberto' },
    { id: 'multi_female_gaolengyujie_moon_bigtts', lang: '日语', description: 'あけみ（朱美）' },
    { id: 'en_female_amanda_mars_bigtts', lang: '美式英语', description: 'Amanda' },
    { id: 'en_male_jackson_mars_bigtts', lang: '美式英语', description: 'Jackson' },
    { id: 'ICL_en_male_cc_sha_v1_tob', lang: '美式英语', description: 'Cartoon Chef' },
    { id: 'multi_zh_male_youyoujunzi_moon_bigtts', lang: '日语', description: 'ひかる（光）' },
    { id: 'en_female_emily_mars_bigtts', lang: '英式英语', description: 'Emily' },
    { id: 'zh_male_xudong_conversation_wvae_bigtts', lang: '英式英语', description: 'Daniel' },
    { id: 'zh_male_M100_conversation_wvae_bigtts', lang: '美式英语', description: 'Lucas' },
    { id: 'multi_female_maomao_conversation_wvae_bigtts', lang: '西语', description: 'Diana' },
    { id: 'multi_male_M100_conversation_wvae_bigtts', lang: '西语', description: 'Lucía' },
    { id: 'multi_female_sophie_conversation_wvae_bigtts', lang: '西语', description: 'Sofía' },
    { id: 'multi_male_xudong_conversation_wvae_bigtts', lang: '西语', description: 'Daníel' },
    { id: 'multi_female_sophie_conversation_wvae_bigtts', lang: '日语', description: 'さとみ（智美）' },
    { id: 'multi_male_xudong_conversation_wvae_bigtts', lang: '日语', description: 'まさお（正男）' },
    { id: 'multi_female_maomao_conversation_wvae_bigtts', lang: '日语', description: 'つき（月）' },
    { id: 'zh_female_sophie_conversation_wvae_bigtts', lang: '美式英语', description: 'Sophie' },
    { id: 'en_female_dacey_conversation_wvae_bigtts', lang: '美式英语', description: 'Daisy' },
    { id: 'en_male_charlie_conversation_wvae_bigtts', lang: '美式英语', description: 'Owen' },
    { id: 'ICL_en_male_aussie_v1_tob', lang: '澳洲英语', description: 'Ethan' },
    { id: 'en_female_sarah_new_conversation_wvae_bigtts', lang: '美式英语', description: 'Luna' },
    { id: 'ICL_en_male_michael_tob', lang: '美式英语', description: 'Michael' },
    { id: 'ICL_en_male_cc_alastor_tob', lang: '英式英语', description: 'Alastor' },
    { id: 'ICL_en_female_cc_cm_v1_tob', lang: '美式英语', description: 'Charlie' },
    { id: 'ICL_en_male_oogie2_tob', lang: '美式英语', description: 'Big Boogie' },
    { id: 'ICL_en_male_frosty1_tob', lang: '美式英语', description: 'Frosty Man' },
    { id: 'ICL_en_male_grinch2_tob', lang: '美式英语', description: 'The Grinch' },
    { id: 'ICL_en_male_zayne_tob', lang: '美式英语', description: 'Zayne' },
    { id: 'ICL_en_male_cc_jigsaw_tob', lang: '美式英语', description: 'Jigsaw' },
    { id: 'ICL_en_male_cc_chucky_tob', lang: '美式英语', description: 'Chucky' },
    { id: 'ICL_en_male_cc_penny_v1_tob', lang: '美式英语', description: 'Clown Man' },
    { id: 'ICL_en_male_kevin2_tob', lang: '美式英语', description: 'Kevin McCallister' },
    { id: 'ICL_en_male_xavier1_v1_tob', lang: '美式英语', description: 'Xavier' },
    { id: 'ICL_en_male_cc_dracula_v1_tob', lang: '美式英语', description: 'Noah' },
    { id: 'en_male_campaign_jamal_moon_bigtts', lang: '美式英语', description: 'Energetic Male II' },
    { id: 'en_male_chris_moon_bigtts', lang: '美式英语', description: 'Gotham Hero' },
    { id: 'en_female_daisy_moon_bigtts', lang: '英式英语', description: 'Delicate Girl' },
    { id: 'en_female_product_darcie_moon_bigtts', lang: '美式英语', description: 'Flirty Female' },
    { id: 'en_female_emotional_moon_bigtts', lang: '美式英语', description: 'Peaceful Female' },
    { id: 'en_female_nara_moon_bigtts', lang: '美式英语', description: 'Nara' },
    { id: 'en_female_candice_emo_v2_mars_bigtts', lang: '美式英语', description: 'Candice' },
    { id: 'en_male_corey_emo_v2_mars_bigtts', lang: '英式英语', description: 'Corey' },
    { id: 'en_female_nadia_tips_emo_v2_mars_bigtts', lang: '英式英语', description: 'Nadia1' },
    { id: 'en_female_skye_emo_v2_mars_bigtts', lang: '美式英语', description: 'Serena' },
    { id: 'en_male_bruce_moon_bigtts', lang: '美式英语', description: 'Bruce' },
    { id: 'en_male_dave_moon_bigtts', lang: '英式英语', description: 'Dave' },
    { id: 'en_male_michael_moon_bigtts', lang: '美式英语', description: 'Michael' },
    { id: 'en_male_hades_moon_bigtts', lang: '英式英语', description: 'Hades' },
    { id: 'en_female_onez_moon_bigtts', lang: '英式英语', description: 'Onez' },
    // 这些音色在文件前面已带有情感配置，这里不再重复
    // { id: 'en_male_glen_emo_v2_mars_bigtts', lang: '美式英语', description: 'Glen' },
    {
        id: 'en_female_nadia_poetry_emo_v2_mars_bigtts', lang: '美式英语', description: 'Nadia2', emotions: [
            { id: 'asmr', title: 'ASMR' },
            { id: 'affectionate', title: '深情' },
            { id: 'angry', title: '愤怒' },
            { id: 'chat', title: '对话/闲聊' },
            { id: 'excited', title: '兴奋' },
            { id: 'happy', title: '愉悦' },
            { id: 'neutral', title: '中性' },
            { id: 'sad', title: '悲伤' },
            { id: 'warm', title: '温暖' }
        ]
    },
    // { id: 'en_male_sylus_emo_v2_mars_bigtts', lang: '美式英语', description: 'Sylus' },

    // 趣味口音
    { id: 'zh_male_jingqiangkanye_moon_bigtts', lang: '中文-北京口音、英文', description: '京腔侃爷/Harmony' },
    { id: 'zh_female_wanwanxiaohe_moon_bigtts', lang: '中文-台湾口音', description: '湾湾小何' },
    { id: 'zh_female_wanqudashu_moon_bigtts', lang: '中文-广东口音', description: '湾区大叔' },
    { id: 'zh_female_daimengchuanmei_moon_bigtts', lang: '中文-四川口音', description: '呆萌川妹' },
    { id: 'zh_male_guozhoudege_moon_bigtts', lang: '中文-广东口音', description: '广州德哥' },
    { id: 'zh_male_beijingxiaoye_moon_bigtts', lang: '中文-北京口音', description: '北京小爷' },
    { id: 'zh_male_haoyuxiaoge_moon_bigtts', lang: '中文-青岛口音', description: '浩宇小哥' },
    { id: 'zh_male_guangxiyuanzhou_moon_bigtts', lang: '中文-广西口音', description: '广西远舟' },
    { id: 'zh_female_meituojieer_moon_bigtts', lang: '中文-长沙口音', description: '妹坨洁儿' },
    { id: 'zh_male_yuzhouzixuan_moon_bigtts', lang: '中文-河南口音', description: '豫州子轩' },

    // 角色扮演
    { id: 'ICL_zh_male_anrenqinzhu_cd62e63dcdab_tob', lang: '中文', description: '黯刃秦主' },
    { id: 'ICL_zh_female_chunzhenshaonv_e588402fb8ad_tob', lang: '中文', description: '纯真少女' },
    { id: 'ICL_zh_male_xiaonaigou_edf58cf28b8b_tob', lang: '中文', description: '奶气小生' },
    { id: 'ICL_zh_female_jinglingxiangdao_1beb294a9e3e_tob', lang: '中文', description: '精灵向导' },
    { id: 'ICL_zh_male_menyoupingxiaoge_ffed9fc2fee7_tob', lang: '中文', description: '闷油瓶小哥' },
    { id: 'zh_male_naiqimengwa_mars_bigtts', lang: '中文', description: '奶气萌娃' },
    { id: 'zh_female_popo_mars_bigtts', lang: '中文', description: '婆婆' },
    { id: 'zh_female_gaolengyujie_moon_bigtts', lang: '中文', description: '高冷御姐' },
    { id: 'zh_male_aojiaobazong_moon_bigtts', lang: '中文', description: '傲娇霸总' },
    { id: 'zh_female_meilinvyou_moon_bigtts', lang: '中文', description: '魅力女友' },
    { id: 'zh_male_shenyeboke_moon_bigtts', lang: '中文', description: '深夜播客' },
    { id: 'zh_female_sajiaonvyou_moon_bigtts', lang: '中文', description: '柔美女友' },
    { id: 'zh_female_yuanqinvyou_moon_bigtts', lang: '中文', description: '撒娇学妹' },
    { id: 'ICL_zh_female_bingruoshaonv_tob', lang: '中文', description: '病弱少女' },
    { id: 'ICL_zh_female_huoponvhai_tob', lang: '中文', description: '活泼女孩' },
    { id: 'zh_male_dongfanghaoran_moon_bigtts', lang: '中文', description: '东方浩然' },
    { id: 'ICL_zh_male_lvchaxiaoge_tob', lang: '中文', description: '绿茶小哥' },
    { id: 'ICL_zh_female_jiaoruoluoli_tob', lang: '中文', description: '娇弱萝莉' },
    { id: 'ICL_zh_male_lengdanshuli_tob', lang: '中文', description: '冷淡疏离' },
    { id: 'ICL_zh_male_hanhoudunshi_tob', lang: '中文', description: '憨厚敦实' },
    { id: 'ICL_zh_male_aiqilingren_tob', lang: '中文', description: '傲气凌人' },
    { id: 'ICL_zh_female_huopodiaoman_tob', lang: '中文', description: '活泼刁蛮' },
    { id: 'ICL_zh_male_guzhibingjiao_tob', lang: '中文', description: '固执病娇' },
    { id: 'ICL_zh_male_sajiaonianren_tob', lang: '中文', description: '撒娇粘人' },
    { id: 'ICL_zh_female_aomanjiaosheng_tob', lang: '中文', description: '傲慢娇声' },
    { id: 'ICL_zh_male_xiaosasuixing_tob', lang: '中文', description: '潇洒随性' },
    { id: 'ICL_zh_male_fuheigongzi_tob', lang: '中文', description: '腹黑公子' },
    { id: 'ICL_zh_male_guiyishenmi_tob', lang: '中文', description: '诡异神秘' },
    { id: 'ICL_zh_male_ruyacaijun_tob', lang: '中文', description: '儒雅才俊' },
    { id: 'ICL_zh_male_bingjiaobailian_tob', lang: '中文', description: '病娇白莲' },
    { id: 'ICL_zh_male_zhengzhiqingnian_tob', lang: '中文', description: '正直青年' },
    { id: 'ICL_zh_female_jiaohannvwang_tob', lang: '中文', description: '娇憨女王' },
    { id: 'ICL_zh_female_bingjiaomengmei_tob', lang: '中文', description: '病娇萌妹' },
    { id: 'ICL_zh_male_qingsenaigou_tob', lang: '中文', description: '青涩小生' },
    { id: 'ICL_zh_male_chunzhenxuedi_tob', lang: '中文', description: '纯真学弟' },
    { id: 'ICL_zh_female_nuanxinxuejie_tob', lang: '中文', description: '暖心学姐' },
    { id: 'ICL_zh_female_keainvsheng_tob', lang: '中文', description: '可爱女生' },
    { id: 'ICL_zh_female_chengshujiejie_tob', lang: '中文', description: '成熟姐姐' },
    { id: 'ICL_zh_female_bingjiaojiejie_tob', lang: '中文', description: '病娇姐姐' },
    { id: 'ICL_zh_male_youroubangzhu_tob', lang: '中文', description: '优柔帮主' },
    { id: 'ICL_zh_male_yourougongzi_tob', lang: '中文', description: '优柔公子' },
    { id: 'ICL_zh_female_wumeiyujie_tob', lang: '中文', description: '妩媚御姐' },
    { id: 'ICL_zh_female_tiaopigongzhu_tob', lang: '中文', description: '调皮公主' },
    { id: 'ICL_zh_female_aojiaonvyou_tob', lang: '中文', description: '傲娇女友' },
    { id: 'ICL_zh_male_tiexinnanyou_tob', lang: '中文', description: '贴心男友' },
    { id: 'ICL_zh_male_shaonianjiangjun_tob', lang: '中文', description: '少年将军' },
    { id: 'ICL_zh_female_tiexinnvyou_tob', lang: '中文', description: '贴心女友' },
    { id: 'ICL_zh_male_bingjiaogege_tob', lang: '中文', description: '病娇哥哥' },
    { id: 'ICL_zh_male_xuebanantongzhuo_tob', lang: '中文', description: '学霸男同桌' },
    { id: 'ICL_zh_male_youmoshushu_tob', lang: '中文', description: '幽默叔叔' },
    { id: 'ICL_zh_female_ganli_v1_tob', lang: '中文', description: '妩媚可人' },
    { id: 'ICL_zh_female_xiangliangya_v1_tob', lang: '中文', description: '邪魅御姐' },
    { id: 'ICL_zh_female_xingganyujie_tob', lang: '中文', description: '性感御姐' },
    { id: 'ICL_zh_male_ms_tob', lang: '中文', description: '嚣张小哥' },
    { id: 'ICL_zh_male_you_tob', lang: '中文', description: '油腻大叔' },
    { id: 'ICL_zh_male_guaogongzi_v1_tob', lang: '中文', description: '孤傲公子' },
    { id: 'ICL_zh_male_huzi_v1_tob', lang: '中文', description: '胡子叔叔' },
    { id: 'ICL_zh_female_luoqing_v1_tob', lang: '中文', description: '性感魅惑' },
    { id: 'zh_male_zhoujielun_emo_v2_mars_bigtts', lang: '中文-台湾口音', description: '双节棍小哥' },
    { id: 'ICL_zh_male_bingruogongzi_tob', lang: '中文', description: '病弱公子' },
    { id: 'ICL_zh_female_bingjiao3_tob', lang: '中文', description: '邪魅女王' },
    { id: 'ICL_zh_female_jiaxiaozi_tob', lang: '中文', description: '假小子' },
    { id: 'ICL_zh_male_lengjunshangsi_tob', lang: '中文', description: '冷峻上司' },
    { id: 'ICL_zh_male_wenrounantongzhuo_tob', lang: '中文', description: '温柔男同桌' },
    { id: 'ICL_zh_male_bingjiaodidi_tob', lang: '中文', description: '病娇弟弟' },
    { id: 'ICL_zh_male_youmodaye_tob', lang: '中文', description: '幽默大爷' },
    { id: 'ICL_zh_male_aomanshaoye_tob', lang: '中文', description: '傲慢少爷' },
    { id: 'ICL_zh_male_asmryexiu_tob', lang: '中文', description: '枕边低语' },
    { id: 'ICL_zh_male_aomanqingnian_tob', lang: '中文', description: '傲慢青年' },
    { id: 'ICL_zh_male_cujingnanyou_tob', lang: '中文', description: '醋精男友' },
    { id: 'ICL_zh_male_cujingnansheng_tob', lang: '中文', description: '醋精男生' },
    { id: 'ICL_zh_male_shuanglangshaonian_tob', lang: '中文', description: '爽朗少年' },
    { id: 'ICL_zh_male_sajiaonanyou_tob', lang: '中文', description: '撒娇男友' },
    { id: 'ICL_zh_male_wenrounanyou_tob', lang: '中文', description: '温柔男友' },
    { id: 'ICL_zh_male_wenshunshaonian_tob', lang: '中文', description: '温顺少年' },
    { id: 'ICL_zh_male_naigounanyou_tob', lang: '中文', description: '粘人男友' },
    { id: 'ICL_zh_male_sajiaonansheng_tob', lang: '中文', description: '撒娇男生' },
    { id: 'ICL_zh_male_huoponanyou_tob', lang: '中文', description: '活泼男友' },
    { id: 'ICL_zh_male_tianxinanyou_tob', lang: '中文', description: '甜系男友' },
    { id: 'ICL_zh_male_huoliqingnian_tob', lang: '中文', description: '活力青年' },
    { id: 'ICL_zh_male_kailangqingnian_tob', lang: '中文', description: '开朗青年' },
    { id: 'ICL_zh_male_lengmoxiongzhang_tob', lang: '中文', description: '冷漠兄长' },
    { id: 'ICL_zh_male_tiancaitongzhuo_tob', lang: '中文', description: '天才同桌' },
    { id: 'ICL_zh_male_aojiaojingying_tob', lang: '中文', description: '傲娇精英' },
    { id: 'ICL_zh_male_pianpiangongzi_tob', lang: '中文', description: '翩翩公子' },
    { id: 'ICL_zh_male_mengdongqingnian_tob', lang: '中文', description: '懵懂青年' },
    { id: 'ICL_zh_male_lenglianxiongzhang_tob', lang: '中文', description: '冷脸兄长' },
    { id: 'ICL_zh_male_bingjiaoshaonian_tob', lang: '中文', description: '病娇少年' },
    { id: 'ICL_zh_male_bingjiaonanyou_tob', lang: '中文', description: '病娇男友' },
    { id: 'ICL_zh_male_bingruoshaonian_tob', lang: '中文', description: '病弱少年' },
    { id: 'ICL_zh_male_yiqishaonian_tob', lang: '中文', description: '意气少年' },
    { id: 'ICL_zh_male_ganjingshaonian_tob', lang: '中文', description: '干净少年' },
    { id: 'ICL_zh_male_lengmonanyou_tob', lang: '中文', description: '冷漠男友' },
    { id: 'ICL_zh_male_jingyingqingnian_tob', lang: '中文', description: '精英青年' },
    { id: 'ICL_zh_male_fengfashaonian_tob', lang: '中文', description: '风发少年' },
    { id: 'ICL_zh_male_rexueshaonian_tob', lang: '中文', description: '热血少年' },
    { id: 'ICL_zh_male_qingshuangshaonian_tob', lang: '中文', description: '清爽少年' },
    { id: 'ICL_zh_male_zhongerqingnian_tob', lang: '中文', description: '中二青年' },
    { id: 'ICL_zh_male_lingyunqingnian_tob', lang: '中文', description: '凌云青年' },
    { id: 'ICL_zh_male_zifuqingnian_tob', lang: '中文', description: '自负青年' },
    { id: 'ICL_zh_male_bujiqingnian_tob', lang: '中文', description: '不羁青年' },
    { id: 'ICL_zh_male_ruyajunzi_tob', lang: '中文', description: '儒雅君子' },
    { id: 'ICL_zh_male_diyinchenyu_tob', lang: '中文', description: '低音沉郁' },
    { id: 'ICL_zh_male_lenglianxueba_tob', lang: '中文', description: '冷脸学霸' },
    { id: 'ICL_zh_male_ruyazongcai_tob', lang: '中文', description: '儒雅总裁' },
    { id: 'ICL_zh_male_shenchenzongcai_tob', lang: '中文', description: '深沉总裁' },
    { id: 'ICL_zh_male_xiaohouye_tob', lang: '中文', description: '小侯爷' },
    { id: 'ICL_zh_male_gugaogongzi_tob', lang: '中文', description: '孤高公子' },
    { id: 'ICL_zh_male_zhangjianjunzi_tob', lang: '中文', description: '仗剑君子' },
    { id: 'ICL_zh_male_wenrunxuezhe_tob', lang: '中文', description: '温润学者' },
    { id: 'ICL_zh_male_qinqieqingnian_tob', lang: '中文', description: '亲切青年' },
    { id: 'ICL_zh_male_wenrouxuezhang_tob', lang: '中文', description: '温柔学长' },
    { id: 'ICL_zh_male_cixingnansang_tob', lang: '中文', description: '磁性男嗓' },
    { id: 'ICL_zh_male_gaolengzongcai_tob', lang: '中文', description: '高冷总裁' },
    { id: 'ICL_zh_male_lengjungaozhi_tob', lang: '中文', description: '冷峻高智' },
    { id: 'ICL_zh_male_chanruoshaoye_tob', lang: '中文', description: '孱弱少爷' },
    { id: 'ICL_zh_male_zixinqingnian_tob', lang: '中文', description: '自信青年' },
    { id: 'ICL_zh_male_qingseqingnian_tob', lang: '中文', description: '青涩青年' },
    { id: 'ICL_zh_male_xuebatongzhuo_tob', lang: '中文', description: '学霸同桌' },
    { id: 'ICL_zh_male_lengaozongcai_tob', lang: '中文', description: '冷傲总裁' },
    { id: 'ICL_zh_male_badaoshaoye_tob', lang: '中文', description: '霸道少爷' },
    { id: 'ICL_zh_male_yuanqishaonian_tob', lang: '中文', description: '元气少年' },
    { id: 'ICL_zh_male_satuoqingnian_tob', lang: '中文', description: '洒脱青年' },
    { id: 'ICL_zh_male_zhishuaiqingnian_tob', lang: '中文', description: '直率青年' },
    { id: 'ICL_zh_male_siwenqingnian_tob', lang: '中文', description: '斯文青年' },
    { id: 'ICL_zh_male_chengshuzongcai_tob', lang: '中文', description: '成熟总裁' },
    { id: 'ICL_zh_male_junyigongzi_tob', lang: '中文', description: '俊逸公子' },
    { id: 'ICL_zh_male_aojiaogongzi_tob', lang: '中文', description: '傲娇公子' },
    { id: 'ICL_zh_male_zhangjianxiake_tob', lang: '中文', description: '仗剑侠客' },
    { id: 'ICL_zh_male_jijiaozhineng_tob', lang: '中文', description: '机甲智能' },
    { id: 'ICL_zh_male_shenmifashi_tob', lang: '中文', description: '神秘法师' },
    { id: 'ICL_zh_male_badaozongcai_v1_tob', lang: '中文', description: '霸道总裁' },

    // 视频配音
    { id: 'zh_male_M100_conversation_wvae_bigtts', lang: '中文', description: '悠悠君子' },
    { id: 'zh_female_maomao_conversation_wvae_bigtts', lang: '中文', description: '文静毛毛' },
    { id: 'ICL_zh_female_qiuling_v1_tob', lang: '中文', description: '倾心少女' },
    { id: 'ICL_zh_male_buyan_v1_tob', lang: '中文', description: '醇厚低音' },
    { id: 'ICL_zh_male_BV144_paoxiaoge_v1_tob', lang: '中文', description: '咆哮小哥' },
    { id: 'ICL_zh_female_heainainai_tob', lang: '中文', description: '和蔼奶奶' },
    { id: 'ICL_zh_female_linjuayi_tob', lang: '中文', description: '邻居阿姨' },
    { id: 'zh_female_wenrouxiaoya_moon_bigtts', lang: '中文', description: '温柔小雅' },
    { id: 'zh_male_tiancaitongsheng_mars_bigtts', lang: '中文', description: '天才童声' },
    { id: 'zh_male_sunwukong_mars_bigtts', lang: '中文', description: '猴哥' },
    { id: 'zh_male_xionger_mars_bigtts', lang: '中文', description: '熊二' },
    { id: 'zh_female_peiqi_mars_bigtts', lang: '中文', description: '佩奇猪' },
    { id: 'zh_female_wuzetian_mars_bigtts', lang: '中文', description: '武则天' },
    { id: 'zh_female_gujie_mars_bigtts', lang: '中文', description: '顾姐' },
    { id: 'zh_female_yingtaowanzi_mars_bigtts', lang: '中文', description: '樱桃丸子' },
    { id: 'zh_male_chunhui_mars_bigtts', lang: '中文', description: '广告解说' },
    { id: 'zh_female_shaoergushi_mars_bigtts', lang: '中文', description: '少儿故事' },
    { id: 'zh_male_silang_mars_bigtts', lang: '中文', description: '四郎' },
    { id: 'zh_male_jieshuonansheng_mars_bigtts', lang: '中文、美式英语', description: '磁性解说男声/Morgan' },
    { id: 'zh_female_jitangmeimei_mars_bigtts', lang: '中文、美式英语', description: '鸡汤妹妹/Hope' },
    { id: 'zh_female_tiexinnvsheng_mars_bigtts', lang: '中文、美式英语', description: '贴心女声/Candy' },
    { id: 'zh_female_qiaopinvsheng_mars_bigtts', lang: '中文', description: '俏皮女声' },
    { id: 'zh_female_mengyatou_mars_bigtts', lang: '中文、美式英语', description: '萌丫头/Cutey' },
    { id: 'zh_male_lanxiaoyang_mars_bigtts', lang: '中文', description: '懒音绵宝' },
    { id: 'zh_male_dongmanhaimian_mars_bigtts', lang: '中文', description: '亮嗓萌仔' },

    // 有声阅读
    { id: 'ICL_zh_male_neiliancaijun_e991be511569_tob', lang: '中文', description: '内敛才俊' },
    { id: 'ICL_zh_male_yangyang_v1_tob', lang: '中文', description: '温暖少年' },
    { id: 'ICL_zh_male_flc_v1_tob', lang: '中文', description: '儒雅公子' },
    { id: 'zh_male_changtianyi_mars_bigtts', lang: '中文', description: '悬疑解说' },
    { id: 'zh_male_ruyaqingnian_mars_bigtts', lang: '中文', description: '儒雅青年' },
    { id: 'zh_male_baqiqingshu_mars_bigtts', lang: '中文', description: '霸气青叔' },
    { id: 'zh_male_qingcang_mars_bigtts', lang: '中文', description: '擎苍' },
    { id: 'zh_male_yangguangqingnian_mars_bigtts', lang: '中文', description: '活力小哥' },
    { id: 'zh_female_gufengshaoyu_mars_bigtts', lang: '中文', description: '古风少御' },
    { id: 'zh_female_wenroushunv_mars_bigtts', lang: '中文', description: '温柔淑女' },
    { id: 'zh_male_fanjuanqingnian_mars_bigtts', lang: '中文', description: '反卷青年' },
]