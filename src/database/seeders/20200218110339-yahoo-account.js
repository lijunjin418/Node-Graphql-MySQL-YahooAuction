'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
      return queryInterface.bulkInsert('AccountYahoos', [
        {
        name: 'daitokuantiqueya',
        password: 'Qwer660919',
        cookie:'B=3oa2qndf3ipmf&b=4&d=ixEtDKtpYF0FTKVf24PHgLw2a9SEMQCEDPIl32RE&s=7c&i=mFa_ff_88yeo4G4ZaEMu; F=a=ehnL72kMvSZhC.Cljp1AN.BgWsVLyXwR6ip3O4Tn72TJ7GmsNgzeK99sUq.tqxQld2H9YZk-&b=Qpg0; SSL=v=1&s=NlHBnH50SFfTbMktaZzuXIezNJxrFX6fJK.bsu91KPhVwmdzrzqNmUWy6Cw2KiPyC2eX8sBT6g9Oy7TaRps1SQ--&kv=0; T=z=sRrOeBs55XeByIs6muFJLCdMDc3MwYwNDNONk40N08-&sk=DAAGvBf3jAQpmz&ks=EAAYDpQsh2HGnsNn41gHsDVEA--~F&kt=EAApcAy3b9CLZKcEFVrFoDgAQ--~E&ku=FAAMEUCIQDpb7xmUO7UH2QHpE_X3Nt5uC9zERGEpE6b_fb9KD.bkwIgTQRAwdppWR_ldC0LoFaBjtlVhC7JZtUxbx2NL5mrcME-~A&d=dGlwAXZRXzdDQwFhAVlBRQFnAVE0SkxBTFNWMjZJSEFWWDJRNTdFRURXQllZAXNsAU56QXdOQUUzTXpRNU1Ua3pNRGctAXNjAXljb25uZWN0djIBenoBc1JyT2VCQTJK; XB=3oa2qndf3ipmf&b=4&d=ixEtDKtpYF0FTKVf24PHgLw2a9SEMQCEDPIl32RE&s=7c&i=mFa_ff_88yeo4G4ZaEMu; XC=IXvQTAZxGzl1Tb8Nv/yW69l211TwQlHuHSv0FSTCYD19D4mQhV/jRe5SFFVkc7td6P6aCyI9GvM6i86RxN0I1QA6cduPO5Pl3Kqe/zX0k3I33GsMsDAB+eM3gtqiYOj++aH1CHrtF5SUvoR6za43gfSDNO2URn+kEj16qC3wwTgr6XEcHgE1fbuNLMcS3akJ5A6KkpQlMztpMks6+0S1hmsyw/D2nr9Z6paLUGSK4dRHgA/ZAJuFtrrjmEm1BSwrLlznP+uvr3Vs4CXTXjiNxCobacwzZss//CeSXoPe0RhC2f34Y6ZyTJPqKtJWIjBYuCFrTnxNrwDi9hw8CT6tJSkVwRXHnjRJCnoM5u2o954BsY2OfDWfM7DHpGN1STeSr58hNx5L6qrDhFsUs49DD//B+1ZnVFizRzYFY7BBcWkX13FpZadRiHoU/2xwQh2gJf2rfQLP6MMNqvfkymkGTjWmW2+7gWKeA7l95LZO5NMOKijp9qqVc6qzh+qKvMNkTRjLzzr+gUQLd5Snm3JyotYoJMZqqg6dlnIKjx5vgMJhrOM+FSZe3mVmWBPsdIet7LrF8Vgeucp/5edweD27tob/Px/me5jBGYSA8wMHeEM=.1; Y=v=1&n=16f9dapc69j9t&l=308jeak0dj8gk4o0/o&p=m2bvvjp052000000&ig=00cq1&r=132&lg=ja-JP&intl=jp; _n=DPFnxL-4PtCUH4M4G1idsx8MuEQMPWcLNUO8kFSRYa9MTwBAZjRLGMs4GnGMVjk4IEKcOFHNMdXMF-goe3DvrK9Kx2nOHZ09ZBi7wmF1R2dMnY3oLEGan8N0oRMwvpu7-xb1OGV7wB6cuM_NaQwSz2Nag4DciFGzWhRC-bG1bP9Yy7WPoBI4Paa7aUN84vdtCMSHpt53SbHqtn7tMs9OJzcapdeCzmXTN9D3__Dr3h3CUz95DiyUQ9Y5amVuFSdgxyFI48lI_ZZ4XHKsfisXrayVa8U5L-2Zk7kMANbkOl4Wjjlf8BNVLYImTnAONItvL5PpdJzLq0NYOtixeVpAAQwS7c5rki1-c_qms14WrsNhzs-SiR-ItpKewa-b6stTcvdcVGLnDvRk-qiZoah4Hwk7fBZlpkGjf1oGUNVC0jX9jh4Oijhtt6i88_QTSmdFeNQNltVNRWd2wyaAa3Gu7zYK56q4luLdLANH_sbC6_2SIbeEFXghPM6zHaGqsSr5VvlPuvtUbVEgDmN48oLTr8BVF0z51ja0zHROMKHtZIGXSsNSGL9iyWVgJYRc8XAtG1CdqRZsuyNkfTlVzBYXngNIzuIu5yrdU1uE-4OoIEENlbu1h9luldxaKR4ELc32OCO3B25O0j5_MWfpofcfjE3dwT082kDowZIYUQj9YQoD68fdrrF3uYLLdS5sNej8aLYKTrjC5cPHSylWxXMlaIeCJnpgL68PwtAhRUUgKv-s5d8Fb-gXkvygORyO3kSUJrhwyoxxqAGi3bpLd06doQ4UinU1MDFB3ZLqwb4l8TlTiK0yyzp1H5wI_O-QnTB5qnxr_hO4i6r63c_vp1ocKbf1dsWD9ej_yk0pd8FjEhmDNEYYrqQsfpLeniK5AuT5mnj12ddhJ96-8WJmFV_7Z8wpbIFMd81yqFBLxifSqztFpZvYMtCfRnUvhRboxnDZBODoa416C5jMNul5Fa3YbOfco8FZB8WOkDzrA85OR1RK_ZMeD17nBm2gsSzJAxc5c3o2mBgmk4evEIxzXocO11cf3I0bg7d3snr1qKffayyawXEqvuh5AjPqobZgwfpcCvvrQCb22qKMcgrWeGRywoPjwXQ3xXfDKGWqSYypfgp5sZU1npRJu-7s0NdNLk9m.2; irepNoBidExp=0; irepNoWonExp=0; irepIsLogin=1; irepLastBidTime=0; irepLastWonTime=0; sAuc=eyJuIjoyMCwiZml4ZWQiOjIsInNvcnQiOiJiaWRzLGEifQ%3D%3D; _fbp=fb.2.1581839064322.2054908703',
        active:1
        },
        {
        name: 'dadedaigou',
        password: 'qwer7090237',
        cookie:'YLS=v=2&p=1&n=1; irepNoBidExp=0; irepNoWonExp=0; irepIsLogin=1; irepLastBidTime=0; irepLastWonTime=0; F=a=BDcFdWsMvSacLyKPzQXe4mBKG_v2i4Lz7jfha.fPTeLRP6Dc9yX2VaSSTeHLY91CEQYZE45eZ0yCPmdHEeBbGEHg4Q--&b=8_nG; B=bkp8utlf4lh1n&b=4&d=ixEtDKtpYF0FTKVf24PHgLw2a9SEMQCEDPIl32RE&s=78&i=LChhOcuxUoyENikIl3u_; XB=bkp8utlf4lh1n&b=4&d=ixEtDKtpYF0FTKVf24PHgLw2a9SEMQCEDPIl32RE&s=78&i=LChhOcuxUoyENikIl3u_; Y=v=1&n=9sp0ag0n1pakd&l=30343086ek/o&p=m2bvvjp012000000&ig=00cq1&r=153&lg=ja-JP&intl=jp; T=z=IWtSeBI.7beB7HcMoVrgxs8MDc3MQYxTjY1TzU0Tjc-&sk=DAAZUN.uED7ixE&ks=EAAvrdpJuBJt_8KKMRc6yKNuA--~F&kt=EAATfat9vO1cpgBLyxMeiMw2Q--~E&ku=FAAMEQCIHU2hJhwya2uZNwB0hAzlYs.j4QNHIcnOcHNMD5SJ8o8AiBnziGFTcOF5Dw8mT70tEJcSVnLeRx4o55rUqhYb5dn_g--~B&d=dGlwAVp0Ym9jRAFhAVFBRQFnAUROTFpITE9ONkFQWDNQRUVJMkNEV1o1SENNAXNsAU56QXdOZ0UyT1RFeU9ESXpPVEEtAXNjAWF1YwF6egFJV3RTZUJBMko-; SSL=v=1&s=uYNAQSHjQFYuOXwpZbCpvyZEKHi2ueLAxx9roOE4fB.kQzejPljkenyHeUOUtEaw1gHq87WDxwNSJO.d4eIwGw--&kv=0; _n=DPFnxL-4PtCUH4M4G1idsx8MuEQMPWcLNUO8kFSRYa9MTwBAZjRLGMs4GnGMVjk4IEKcOFHNMdXMF-goe3DvrJ7JKMlM8LDmtGMj_z1dm4XORqXP9WSH6Qx11tcmnAhe8W-zPDZBNAibgXwyeRemvABmWETW1L_L06n8lgmABzVkcJL8twuyoKSMatDnF8bAfauekLnox4cNOEz60D9HRovUFLiLZHs2g5l9OtotJIrqdhoCaKLV_EXPnVSTvbyfndsgDZxIsIX3sAZmGqA_XYSU1VFNUIoRkzSr8ShJ46ZNplOwv_KFoWQ7-lKtHe96ncoZ2DnHYFWd_x3XTWkXqIIMtu7pM-DCaXcu0eZdyjdsnZwHer5TZDeFhedy0kAJDxKeyKOzPanYeKJg00wUQsz4_PGMuOuIFQx1zEtF7Zotu2H8FhdEawUVhEjphFIW3iKtP76JkSbnSQ5eEveAA0y3_0T3yuaeRg0xTh_keCyiq4WgXloL3huQYerKMAGDuRcPN5Xue29rENA74qP3Dpoo8aUsnf-FthDeeowsaZLcIyZo98oR5hin7JyL5TDy6yqSD8_RXfn7NyRMmPhbBAtA7wQfC6Mu1E7lvau1lYAxzPYUe8yx9hHG0OCRPbKlClonSTWYaBZJiUCVzHQeS0_1y8O1oJzZRSEOxI2vzdmOZpPOJ8ur5iJgJiWMZOLrasHIbnAaLKr8uxUFwUG8tE_qA9USq8W-Kcc-MoIdRQxAfTfs3hlHxzXZn3BLZdN1W8sUzSFFNddmacPq6yrTB1_Tm1gg6X9I_wIaPJVeGecE0fVRfKc3aYN7z0WRMb-b2QWXJ4Vz3bvyNTeP4aHd0ZQT1KxKag7GqtiEjZaI3OtGMEkQPPFBw404zKwggWtb3meaaptME4OpX70nYS2Af75YhUD7QSQcR37sFx31xg0j8ZpgUQDaJrEacGSEb5YKgkK5sxWwO0h08WLY5vGp6vEmw9XRSFUJLo_1TzDe3mUEzx0PHA-Wur5ebtoU4JHjo9H2QBpMgYUL3ls3jthXtYQyHBDM0Dh2XYAybA0NOPpJyA98-JlgKStIe0sbj3Zj-MwmNjnokgl2jzqI0ea2P97_LSfClhZWNNYfDQlBdzIrlCNCsnyfjWxU-doTLvkB.2; XC=jn6qCX+eegAFvgF2bhVJ1BnZPPsI5j6kcwYHyykfnyp5qNVHFzDk6DQOB1YYPkZMv0tLDzFfL2sXklTIuhm0aXp04b+K8qo01oikI0aNr5TAZ9Rg7Bk3Y1db/6P/42An6+pWYW6kbTe6NleRax7zwoh8o2pSWQiCWLNwrepwfrvfCgbPI4cChX2+CR4M+D3vc/LnreYOnmsW9Meu6Bfm4KmgmV0sBd6zLT8KO8zEF+ejpB6XNzVi0aG0BV2jFeEXD7enY/zsGbPgFGZugvNv8OaClFzKdfE+DBO/qGEjdTD64sbg9Rss4Os8YuGHcrX4GxfQLdlkFUzxsEam61OkOR6EKCwzn7iLiBG+F7ySed8q6gMdqBLsJJ7ozSyGx0m3fjUCXhPiG7y+vhs1hUT76TLLEndP99tG6CYTZE7EIsxRHdhtRQIf5gWFCc1LOBgiyj7xSQyQbwDb6JmQ5NaLlPvFNW+eMlxoACm7jnqSaZuzPasDGJlX6UD3/u6ajnj3iOXgppIbO5opJCRXm5Qx5RqgJGgUc0SLnjR2ycGl5kuKgp6x4JpHD9GVITqiccsPdzOnhG9y8NlUMTg1GKylhA==.1; _fbp=fb.2.1581962633662.1397459172',
        active:1
        }
    ], {});
   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('AccountYahoos', null, {});
    
  }
};
