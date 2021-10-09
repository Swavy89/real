(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["BoardroomPool"],
  {
    "0690": function (t, e, a) {},
    3570: function (t, e, a) {
      "use strict";
      a("9fca");
    },
    "4a8e": function (t, e, a) {
      "use strict";
      a("0690");
    },
    "857a": function (t, e, a) {
      var s = a("1d80"),
        i = /"/g;
      t.exports = function (t, e, a, n) {
        var o = String(s(t)),
          r = "<" + e;
        return (
          "" !== a &&
            (r += " " + a + '="' + String(n).replace(i, "&quot;") + '"'),
          r + ">" + o + "</" + e + ">"
        );
      };
    },
    "8c4e": function (t, e, a) {
      "use strict";
      a("f911");
    },
    9911: function (t, e, a) {
      "use strict";
      var s = a("23e7"),
        i = a("857a"),
        n = a("af03");
      s(
        { target: "String", proto: !0, forced: n("link") },
        {
          link: function (t) {
            return i(this, "a", "href", t);
          },
        }
      );
    },
    "9fca": function (t, e, a) {},
    aa95: function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass: "title-banner",
              class: t.bannerName,
              on: { click: t.goHomeUrl },
            },
            [
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "/" == t.routerName,
                      expression: "routerName=='/'",
                    },
                  ],
                  staticClass: "heco-home",
                },
                [
                  a(
                    "h1",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "Bsc" != t.chainName,
                          expression: "chainName!='Bsc'",
                        },
                      ],
                      staticClass: "home__banner-title",
                    },
                    [
                      t._v(
                        " " +
                          t._s(
                            128 == t.chainId
                              ? t.$t("MDEForEcoEurrencyTrading1")
                              : 56 == t.chainId
                              ? t.$t("MDEForEcoEurrencyTrading2")
                              : t.$t("MDEForEcoEurrencyTrading3")
                          ) +
                          " "
                      ),
                    ]
                  ),
                  a(
                    "p",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "Bsc" != t.chainName,
                          expression: "chainName!='Bsc'",
                        },
                      ],
                      staticClass: "home__banner-describe",
                    },
                    [t._v(" " + t._s(t.$t("lightText")) + " ")]
                  ),
                ]
              ),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "/liquidity" == t.routerName,
                      expression: "routerName=='/liquidity'",
                    },
                  ],
                },
                [
                  a("div", { staticClass: "pc" }, [
                    a("h1", { staticClass: "home__banner-title" }, [
                      t._v(
                        " " +
                          t._s(t.$t("CurrentTransacObtainCurrencytionVolume")) +
                          " "
                      ),
                    ]),
                    a("div", { staticClass: "ban-center" }, [
                      a(
                        "p",
                        { staticClass: "liquidity-mdx ban-center" },
                        [
                          t._v(" " + t._s(t.$t("MDXtotal")) + " "),
                          a("CountUp", {
                            attrs: { endVal: t.liquidity_mdex || 0 },
                          }),
                          t._v(" USDT "),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  a("div", { staticClass: "h5 li-h5title ban-start" }, [
                    a("div", { staticClass: "act-title" }, [
                      a("p", [t._v(" " + t._s(t.$t("LiquidityMining")))]),
                      a("p"),
                    ]),
                    a(
                      "div",
                      {
                        staticClass: "li-title",
                        on: { click: t.h5_tab_evens },
                      },
                      [a("span", [t._v(" " + t._s(t.$t("TradePool")) + " ")])]
                    ),
                  ]),
                  a("div", { staticClass: "h5 li-banner-total" }, [
                    a("div", { staticClass: "banner-tit" }, [
                      t._v(" " + t._s(t.$t("TotalLockIn")) + "(USDT) "),
                    ]),
                    a(
                      "div",
                      { staticClass: "banner-sum" },
                      [
                        a("CountUp", {
                          attrs: { endVal: t.liquidity_mdex || 0 },
                        }),
                      ],
                      1
                    ),
                  ]),
                ]
              ),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "/trading" == t.routerName,
                      expression: "routerName=='/trading'",
                    },
                  ],
                },
                [
                  a("div", { staticClass: "pc" }, [
                    a("h1", { staticClass: "home__banner-title" }, [
                      t._v(" " + t._s(t.$t("tradeTitle")) + " "),
                    ]),
                    a("div", { staticClass: "new-banner-totals" }, [
                      a("div", { staticClass: "new-banner-total-white" }, [
                        a("div", { staticClass: "list-white" }, [
                          a("span", { staticClass: "list-white-one" }, [
                            t._v(
                              " " + t._s(t.$t("TotalRewardOfCurrentPool")) + " "
                            ),
                          ]),
                          a(
                            "span",
                            { staticClass: "list-white-own" },
                            [
                              a("CountUp", {
                                attrs: { endVal: t.trading_totalReward },
                              }),
                            ],
                            1
                          ),
                          a("span", { staticClass: "list-white-one" }, [
                            t._v("MDX"),
                          ]),
                        ]),
                        a("div", { staticClass: "list-white" }, [
                          a("span", { staticClass: "list-white-one" }, [
                            t._v(
                              " " +
                                t._s(
                                  t.$t("CurrentIndividualWithdrawableBonus")
                                ) +
                                " "
                            ),
                          ]),
                          a(
                            "span",
                            { staticClass: "list-white-own" },
                            [
                              a("CountUp", {
                                attrs: {
                                  endVal: t.trading_userReward,
                                  options: t.trading_options,
                                },
                              }),
                            ],
                            1
                          ),
                          a("span", { staticClass: "list-white-one" }, [
                            t._v("MDX"),
                          ]),
                        ]),
                      ]),
                      a(
                        "button",
                        {
                          staticClass: "new-list-white-banner",
                          attrs: { disabled: !t.trading_userReward },
                          on: { click: t.onWithdrawal },
                        },
                        [t._v(" " + t._s(t.$t("CashWithdrawalReward")) + " ")]
                      ),
                    ]),
                  ]),
                  a("div", { staticClass: "h5 li-h5title ban-start" }, [
                    a(
                      "div",
                      {
                        staticClass: "li-title",
                        on: { click: t.h5_tab_li_evens },
                      },
                      [
                        a("span", [
                          t._v(" " + t._s(t.$t("LiquidityMining")) + " "),
                        ]),
                      ]
                    ),
                    a("div", { staticClass: "act-title act-mining" }, [
                      a("p", [t._v(" " + t._s(t.$t("TradePool")))]),
                      a("p"),
                    ]),
                  ]),
                  a("div", { staticClass: "h5 trading-banner" }, [
                    a("div", { staticClass: "ban-start trading-ban-list" }, [
                      a("div", [
                        a("p", [
                          t._v(" " + t._s(t.$t("TotalRewardOfCurrentPool"))),
                        ]),
                        a(
                          "p",
                          [
                            a("CountUp", {
                              attrs: { endVal: t.trading_totalReward },
                            }),
                            a("span", { staticClass: "h5-sum" }, [t._v("MDX")]),
                          ],
                          1
                        ),
                      ]),
                      a("div", [
                        a("p", [
                          t._v(
                            " " +
                              t._s(t.$t("CurrentIndividualWithdrawableBonus"))
                          ),
                        ]),
                        a(
                          "p",
                          [
                            a("CountUp", {
                              attrs: {
                                endVal: t.trading_userReward,
                                options: t.trading_options,
                              },
                            }),
                            a("span", { staticClass: "h5-sum" }, [t._v("MDX")]),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    a("div", { staticClass: "ban-center " }, [
                      a(
                        "button",
                        {
                          staticClass: "new-banner-btn-dra",
                          attrs: { disabled: !t.trading_userReward },
                          on: { click: t.onWithdrawal },
                        },
                        [t._v(" " + t._s(t.$t("CashWithdrawalReward")) + " ")]
                      ),
                    ]),
                  ]),
                ]
              ),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "/boardroom" == t.routerName,
                      expression: "routerName=='/boardroom'",
                    },
                  ],
                },
                [
                  a("div", { staticClass: "pc" }, [
                    a("h1", { staticClass: "home__banner-title" }, [
                      t._v(" " + t._s(t.$t("text9")) + " "),
                    ]),
                    a("h2", { staticClass: "home__banner-describe" }, [
                      t._v(" " + t._s(t.$t("text8")) + " "),
                    ]),
                  ]),
                  a("div", { staticClass: "h5 boardroom-banner__title" }),
                ]
              ),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "/bridge" == t.routerName,
                      expression: "routerName=='/bridge'",
                    },
                  ],
                },
                [
                  a("div", { staticClass: "pc" }, [
                    a("h1", { staticClass: "home__banner-title" }, [
                      t._v(
                        " " +
                          t._s(
                            128 == t.chainId
                              ? t.$t("MDEForEcoEurrencyTrading1")
                              : 56 == t.chainId
                              ? t.$t("MDEForEcoEurrencyTrading2")
                              : t.$t("MDEForEcoEurrencyTrading3")
                          ) +
                          " "
                      ),
                    ]),
                    a("h2", { staticClass: "home__banner-describe" }, [
                      t._v(" " + t._s(t.$t("lightText")) + " "),
                    ]),
                  ]),
                  a("div", { staticClass: "h5 boardroom-banner__title" }),
                ]
              ),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "BoardroomPool" == t.getRoute,
                      expression: "'BoardroomPool'==getRoute",
                    },
                  ],
                },
                [
                  a("div", { staticClass: "pc" }, [
                    a("h1", { staticClass: "home__banner-title" }, [
                      t._v(" " + t._s(t.$t("poolTitle")) + " "),
                    ]),
                    a("h2", { staticClass: "home__banner-describe" }, [
                      t._v(
                        " " +
                          t._s(
                            128 == t.chainId
                              ? t.$t("poolDescribe1")
                              : 56 == t.chainId
                              ? t.$t("poolDescribe2")
                              : t.$t("poolDescribe3")
                          ) +
                          " "
                      ),
                    ]),
                  ]),
                  a("div", { staticClass: "h5 boardroom-banner__title" }),
                ]
              ),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "/introduce" === t.routerName,
                      expression: "routerName==='/introduce'",
                    },
                  ],
                },
                [
                  a("div", { staticClass: "pc" }, [
                    a("h1", { staticClass: "home__banner-title" }, [
                      t._v(" " + t._s(t.$t("introduce")) + " "),
                    ]),
                    a("h2", { staticClass: "introduceDsc" }, [
                      t._v(" " + t._s(t.$t("introduceDsc")) + " "),
                    ]),
                  ]),
                  t.isPC || "en" === t.$store.state.language
                    ? t._e()
                    : a("div", [
                        a("h1", { staticClass: "introduce_banner" }, [
                          t._v(" " + t._s(t.$t("introduce")) + " "),
                        ]),
                        a("h2", { staticClass: "introduceDsc" }, [
                          t._v(" " + t._s(t.$t("introduceDsc")) + " "),
                        ]),
                      ]),
                  t.isPC || "en" !== t.$store.state.language
                    ? t._e()
                    : a("div", [
                        a("p", { staticClass: "text-info" }, [
                          t._v(t._s(t.$t("introduceComplete"))),
                        ]),
                      ]),
                ]
              ),
            ]
          );
        },
        i = [],
        n =
          (a("ac1f"),
          a("466d"),
          a("a9e3"),
          a("b0c0"),
          a("5319"),
          {
            name: "HomeBanner",
            data: function () {
              return {
                userReward: 0,
                onresizeIsPC: !navigator.userAgent.match(
                  /(iPhone|iPod|Android|ios)/i
                ),
              };
            },
            props: {
              liquidity_mdex: { type: String | Number, default: 0 },
              trading_userReward: {
                type: String | Number | Boolean,
                default: 0,
              },
              trading_options: {
                type: Object | Array,
                default: function () {},
              },
              trading_totalReward: {
                type: String | Number | Boolean,
                default: 0,
              },
            },
            computed: {
              getRoute: function () {
                return this.$route.name;
              },
              isPC: function () {
                return this.$store.getters.isPC;
              },
              routerName: function () {
                return this.$store.state.routerName;
              },
              chainName: function () {
                return this.$store.state.chainName;
              },
              chainId: function () {
                return this.$store.getters.chainId;
              },
              bannerName: function () {
                var t =
                  "en" == this.$store.state.language
                    ? " Bsc-home-en"
                    : "Bsc-home-zh-CN";
                return "/" == this.routerName && "Bsc" == this.chainName
                  ? t
                  : this.chainName;
              },
            },
            mounted: function () {
              var t = this;
              window.onresize = function () {
                t.onresizeIsPC = !navigator.userAgent.match(
                  /(iPhone|iPod|Android|ios)/i
                );
              };
            },
            $computed: { bnp: "bnp" },
            methods: {
              h5_tab_li_evens: function () {
                this.$router.replace({ path: "/liquidity" });
              },
              h5_tab_evens: function () {
                this.$router.replace({ path: "/trading" });
              },
              onWithdrawal: function () {
                this.$emit("on-withdrawal");
              },
              goHomeUrl: function () {
                if ("Bsc" == this.chainName && "/" == this.routerName) {
                  var t =
                    "zh-CN" == this.$store.state.language
                      ? "https://mdexcom.zendesk.com/hc/zh-cn/articles/360059672551"
                      : "https://mdexcom.zendesk.com/hc/en-gb/articles/360059671831";
                  window.open(t);
                }
              },
            },
          }),
        o = n,
        r = (a("3570"), a("2877")),
        c = Object(r["a"])(o, s, i, !1, null, "3cbe7340", null);
      e["a"] = c.exports;
    },
    af03: function (t, e, a) {
      var s = a("d039");
      t.exports = function (t) {
        return s(function () {
          var e = ""[t]('"');
          return e !== e.toLowerCase() || e.split('"').length > 3;
        });
      };
    },
    b0f8: function (t, e, a) {
      "use strict";
      a("e934");
    },
    bf1f: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = this,
            s = e.$createElement,
            i = e._self._c || s;
          return i(
            "div",
            { staticClass: "boardroom-pool", class: e.chainName },
            [
              i("title-banner"),
              i("div", { staticClass: "boardroom-pool__content" }, [
                i("div", { staticClass: "boardroom-pool__cards" }, [
                  i("div", { staticClass: "boardroom-pool__content-card" }, [
                    i("div", { staticClass: "pool__card-icon" }, [
                      i("img", {
                        attrs: {
                          src: e.getImgUrl(e.poolData.earnedToken),
                          alt: "",
                        },
                      }),
                      e.isMobile
                        ? i("div", { staticClass: "pool__card-buttons" }, [
                            i(
                              "button",
                              {
                                staticClass: "claim",
                                attrs: { disabled: !e.earn || isNaN(e.earn) },
                                on: { click: e.handleClaim },
                              },
                              [e._v(" " + e._s(e.$t("Claim")) + " ")]
                            ),
                          ])
                        : e._e(),
                    ]),
                    i("div", { staticClass: "pool__card-text" }, [
                      e._v(
                        " " +
                          e._s(e.poolData.earnedToken || "MDX") +
                          " " +
                          e._s(e.$t("Earneds")) +
                          " "
                      ),
                    ]),
                    i("div", { staticClass: "pool__card-price" }, [
                      e._v(" " + e._s(Math.floor(1e4 * e.earn) / 1e4) + " "),
                    ]),
                    e.isPC
                      ? i("div", { staticClass: "pool__card-buttons" }, [
                          i(
                            "button",
                            {
                              staticClass: "claim",
                              attrs: { disabled: !e.earn || isNaN(e.earn) },
                              on: { click: e.handleClaim },
                            },
                            [e._v(" " + e._s(e.$t("Claim")) + " ")]
                          ),
                        ])
                      : e._e(),
                    i(
                      "p",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              "boardroom" == e.poolData.type &&
                              128 == e.chainId,
                            expression:
                              "poolData.type == 'boardroom' && chainId == 128",
                          },
                        ],
                        staticClass: "addToken",
                        on: {
                          click: function (t) {
                            return e.addToken(e.poolData);
                          },
                        },
                      },
                      [
                        i("img", { attrs: { src: a("d07f") } }),
                        e._v(
                          " " +
                            e._s(
                              e.$t("addToken.text", {
                                token: e.poolData.earnedToken,
                              })
                            )
                        ),
                      ]
                    ),
                  ]),
                  i("div", { staticClass: "boardroom-pool__content-card" }, [
                    i("img", {
                      attrs: {
                        src: e.getLpImgUrl(e.poolData),
                        alt: "",
                        height: "50",
                      },
                    }),
                    e.isMobile
                      ? i("div", { staticClass: "pool__card-buttons" }, [
                          0 == e.allowance && e.account
                            ? i(
                                "button",
                                {
                                  staticClass: "connect",
                                  on: { click: e.handleApprove },
                                },
                                [e._v(" " + e._s(e.$t("Approve")) + " ")]
                              )
                            : e._e(),
                          e.account
                            ? e._e()
                            : i(
                                "button",
                                {
                                  staticClass: "connect",
                                  on: { click: e.handleWallet },
                                },
                                [e._v(" " + e._s(e.$t("UnlockWallet")) + " ")]
                              ),
                          e.allowance > 0 && e.account
                            ? i(
                                "div",
                                { staticClass: "pool__card-step-warp line_bg" },
                                [
                                  i(
                                    "div",
                                    {
                                      staticClass: "pool__card-step",
                                      on: {
                                        click: function () {
                                          t.$refs.withdraw.showModel();
                                        },
                                      },
                                    },
                                    [e._v(" - ")]
                                  ),
                                  i("div", { staticClass: "line_middel" }),
                                  ("liquidity" == e.poolData.type &&
                                    ((e.poolData.pid < 8 && 128 == e.chainId) ||
                                      (e.poolData.pid < 28 &&
                                        56 == e.chainId))) ||
                                  "OLDHOO" == e.poolData.earned_token ||
                                  "ZT" == e.poolData.earned_token ||
                                  e.poolData.name.includes("ZT")
                                    ? e._e()
                                    : i(
                                        "div",
                                        {
                                          staticClass: "pool__card-step",
                                          on: {
                                            click: function () {
                                              t.$refs.despoit.showModel();
                                            },
                                          },
                                        },
                                        [e._v(" + ")]
                                      ),
                                ]
                              )
                            : e._e(),
                        ])
                      : e._e(),
                    i("div", { staticClass: "pool__card-text" }, [
                      e._v(
                        " " +
                          e._s(e.poolData.name) +
                          " " +
                          e._s(e.$t("Stakeds")) +
                          " "
                      ),
                    ]),
                    i("div", { staticClass: "pool__card-price" }, [
                      e._v(
                        " " + e._s(Math.floor(1e4 * e.stakedValue) / 1e4) + " "
                      ),
                    ]),
                    e.isPC
                      ? i("div", { staticClass: "pool__card-buttons" }, [
                          0 == e.allowance && e.account
                            ? i(
                                "button",
                                {
                                  staticClass: "connect",
                                  on: { click: e.handleApprove },
                                },
                                [e._v(" " + e._s(e.$t("Approve")) + " ")]
                              )
                            : e._e(),
                          e.account
                            ? e._e()
                            : i(
                                "button",
                                {
                                  staticClass: "connect",
                                  on: { click: e.handleWallet },
                                },
                                [e._v(" " + e._s(e.$t("UnlockWallet")) + " ")]
                              ),
                          e.allowance > 0 && e.account
                            ? i(
                                "div",
                                { staticClass: "pool__card-step-warp" },
                                [
                                  i(
                                    "div",
                                    {
                                      staticClass: "pool__card-step",
                                      on: {
                                        click: function () {
                                          t.$refs.withdraw.showModel();
                                        },
                                      },
                                    },
                                    [e._v(" - ")]
                                  ),
                                  ("liquidity" == e.poolData.type &&
                                    ((e.poolData.pid < 8 && 128 == e.chainId) ||
                                      (e.poolData.pid < 28 &&
                                        56 == e.chainId))) ||
                                  "OLDHOO" == e.poolData.earned_token ||
                                  e.poolData.name.includes("ZT")
                                    ? e._e()
                                    : i(
                                        "div",
                                        {
                                          staticClass: "pool__card-step",
                                          on: {
                                            click: function () {
                                              t.$refs.despoit.showModel();
                                            },
                                          },
                                        },
                                        [e._v(" + ")]
                                      ),
                                ]
                              )
                            : e._e(),
                        ])
                      : e._e(),
                  ]),
                ]),
                e.isPC
                  ? i("div", { staticClass: "pool-settle-provide" }, [
                      i(
                        "button",
                        {
                          staticClass: "pool-settle",
                          attrs: { disabled: !e.earn || isNaN(e.earn) },
                          on: { click: e.settle },
                        },
                        [e._v(" " + e._s(e.$t("SettleWithdraw")) + " ")]
                      ),
                      i(
                        "a",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.link,
                              expression: "link",
                            },
                          ],
                          staticClass: "pool-settle provide",
                          attrs: { href: e.link, target: "_blank" },
                        },
                        [e._v(" " + e._s(e.$t("ProvideLiquidity")) + " ")]
                      ),
                    ])
                  : e._e(),
                e.isMobile
                  ? i(
                      "div",
                      { staticClass: "pool-settle-provide line_disappear" },
                      [
                        i(
                          "div",
                          {
                            staticClass: "pool-settle button",
                            class: [
                              !e.earn || isNaN(e.earn) ? " isDisabeld" : "",
                            ],
                            on: { click: e.settle },
                          },
                          [e._v(" " + e._s(e.$t("SettleWithdraw")) + " ")]
                        ),
                        i("div", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.link,
                              expression: "link",
                            },
                          ],
                          staticClass: "middel",
                        }),
                        i(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: e.link,
                                expression: "link",
                              },
                            ],
                            staticClass: "right pool-settle provide",
                          },
                          [
                            i(
                              "a",
                              {
                                staticClass: "pool-settle provide",
                                attrs: { href: e.link, target: "_blank" },
                              },
                              [e._v(" " + e._s(e.$t("ProvideLiquidity")) + " ")]
                            ),
                          ]
                        ),
                      ]
                    )
                  : e._e(),
              ]),
              i("Despoit", {
                ref: "despoit",
                attrs: {
                  pid: e.poolData.pid,
                  account: e.account,
                  max: e.lpBalance,
                  data: e.poolData,
                  erc20Utils: e.erc20Utils,
                },
                on: { updateData: e.updateData },
              }),
              i("Withdraw", {
                ref: "withdraw",
                attrs: {
                  pid: e.poolData.pid,
                  account: e.account,
                  max: e.stakedValue,
                  data: e.poolData,
                  erc20Utils: e.erc20Utils,
                },
                on: { updateData: e.updateData },
              }),
            ],
            1
          );
        },
        i = [],
        n = a("1da1"),
        o = a("5530"),
        r =
          (a("96cf"),
          a("a9e3"),
          a("7db0"),
          a("caad"),
          a("2532"),
          a("b0c0"),
          a("9911"),
          a("99af"),
          function () {
            var t = this,
              e = this,
              s = e.$createElement,
              i = e._self._c || s;
            return i(
              "transition",
              { class: e.chainName, attrs: { name: "modal" } },
              [
                e.modelShow
                  ? i("div", { staticClass: "model" }, [
                      i("div", { staticClass: "model-wrap" }, [
                        i("img", {
                          staticClass: "close-icon",
                          attrs: { src: a("c2f4") },
                          on: { click: e.hideModel },
                        }),
                        i("h3", [
                          e._v(e._s(e.$t("Deposit")) + " " + e._s(e.data.name)),
                        ]),
                        i("div", { staticClass: "input-wrap" }, [
                          i("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.value,
                                expression: "value",
                              },
                            ],
                            attrs: { type: "text" },
                            domProps: { value: e.value },
                            on: {
                              input: function (t) {
                                t.target.composing ||
                                  (e.value = t.target.value);
                              },
                            },
                          }),
                          i("div", { staticClass: "button-wrap" }, [
                            i(
                              "button",
                              {
                                attrs: { disabled: !e.max },
                                on: {
                                  click: function () {
                                    return t.setMax();
                                  },
                                },
                              },
                              [e._v("MAX")]
                            ),
                          ]),
                        ]),
                        i("p", [
                          e._v(
                            e._s(e.max) +
                              " " +
                              e._s(e.data.name) +
                              " " +
                              e._s(e.$t("Available"))
                          ),
                        ]),
                        i("div", { staticClass: "btn" }, [
                          i(
                            "div",
                            {
                              staticClass: "cancel",
                              on: { click: this.hideModel },
                            },
                            [e._v(e._s(e.$t("Cancel")))]
                          ),
                          i(
                            "button",
                            {
                              staticClass: "confirm",
                              attrs: {
                                disabled:
                                  !Number(e.value) ||
                                  Number(e.value) > Number(e.max),
                              },
                              on: { click: e.despoit },
                            },
                            [e._v(" " + e._s(e.$t("Confirm")) + " ")]
                          ),
                        ]),
                      ]),
                    ])
                  : e._e(),
              ]
            );
          }),
        c = [],
        l = (a("d3b7"), a("2f62")),
        d = null,
        u = {
          name: "Despoit",
          data: function () {
            return { modelShow: !1, value: "" };
          },
          props: ["max", "account", "pid", "data", "erc20Utils"],
          computed: Object(o["a"])(
            {},
            Object(l["mapGetters"])(["isPC", "isMobile", "currentAddress"])
          ),
          methods: {
            showModel: function () {
              this.modelShow = !0;
            },
            hideModel: function () {
              this.modelShow = !1;
            },
            setMax: function () {
              this.value = this.max;
            },
            despoit: function () {
              var t = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function e() {
                  var a, s, i;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (a = t.erc20Utils.despoitValue),
                            t.hideModel(),
                            (s = "Despoit "
                              .concat(t.value, " ")
                              .concat(t.data.name)),
                            (i = t.$overalltip({ type: "loading", msg: s })),
                            a(t.pid, t.value, t.account)
                              .then(function (e) {
                                t.$emit("updateData"), i.close();
                                var a = "".concat(s, " Success");
                                d = t.$overalltip({ type: "success", msg: a });
                              })
                              .catch(function (e) {
                                i.close();
                                var a = "".concat(s, " Error");
                                d = t.$overalltip({ type: "error", msg: a });
                              })
                              .finally(function () {
                                t.value = 0;
                              });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
          beforeDestroy: function () {
            d && d.close();
          },
        },
        p = u,
        h = (a("8c4e"), a("2877")),
        v = Object(h["a"])(p, r, c, !1, null, "6f35db98", null),
        m = v.exports,
        _ = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "transition",
            { class: t.chainName, attrs: { name: "modal" } },
            [
              t.modelShow
                ? s("div", { staticClass: "model" }, [
                    s("div", { staticClass: "model-wrap" }, [
                      s("h3", [
                        t._v(t._s(t.$t("Withdraw")) + " " + t._s(t.data.name)),
                      ]),
                      s("img", {
                        staticClass: "close-icon",
                        attrs: { src: a("c2f4") },
                        on: { click: t.hideModel },
                      }),
                      s("div", { staticClass: "input-wrap" }, [
                        s("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.value,
                              expression: "value",
                            },
                          ],
                          attrs: { type: "text" },
                          domProps: { value: t.value },
                          on: {
                            input: function (e) {
                              e.target.composing || (t.value = e.target.value);
                            },
                          },
                        }),
                        s("div", { staticClass: "button-wrap" }, [
                          s(
                            "button",
                            {
                              attrs: { disabled: !t.max },
                              on: { click: t.setMax },
                            },
                            [t._v("MAX")]
                          ),
                        ]),
                      ]),
                      s("p", [
                        t._v(
                          t._s(t.max) +
                            " " +
                            t._s(t.data.name) +
                            " " +
                            t._s(t.$t("Available"))
                        ),
                      ]),
                      s("div", { staticClass: "btn" }, [
                        s(
                          "div",
                          {
                            staticClass: "cancel",
                            on: { click: this.hideModel },
                          },
                          [t._v(t._s(t.$t("Cancel")))]
                        ),
                        s(
                          "button",
                          {
                            staticClass: "confirm",
                            attrs: {
                              disabled:
                                !Number(t.value) ||
                                Number(t.value) > Number(t.max),
                            },
                            on: { click: t.handelWithdrawl },
                          },
                          [t._v(" " + t._s(t.$t("Confirm")) + " ")]
                        ),
                      ]),
                    ]),
                  ])
                : t._e(),
            ]
          );
        },
        f = [],
        b = null,
        w = {
          name: "Withdraw",
          props: ["max", "account", "pid", "data", "erc20Utils"],
          data: function () {
            return { modelShow: !1, value: "" };
          },
          computed: Object(o["a"])(
            {},
            Object(l["mapGetters"])(["isPC", "isMobile", "currentAddress"])
          ),
          mounted: function () {},
          methods: {
            showModel: function () {
              this.modelShow = !0;
            },
            hideModel: function () {
              this.modelShow = !1;
            },
            setMax: function () {
              this.value = this.max;
            },
            handelWithdrawl: function () {
              var t = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function e() {
                  var a, s, i;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.hideModel(),
                            (a = "Withdrawl "
                              .concat(t.value, " ")
                              .concat(t.data.name)),
                            (s = t.$overalltip({ type: "loading", msg: a })),
                            (i = t.erc20Utils.unStake),
                            i(t.pid, t.value, t.account)
                              .then(function (e) {
                                t.$emit("updateData"), s.close();
                                var i = "".concat(a, " Success");
                                b = t.$overalltip({ type: "success", msg: i });
                              })
                              .catch(function (e) {
                                s.close();
                                var i = "".concat(a, " Error");
                                b = t.$overalltip({ type: "error", msg: i });
                              })
                              .finally(function () {
                                t.value = 0;
                              });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
          beforeDestroy: function () {
            b && b.close();
          },
        },
        C = w,
        g = (a("b0f8"), Object(h["a"])(C, _, f, !1, null, "66698610", null)),
        $ = g.exports,
        k = a("4f22"),
        D = a("837b"),
        x = a("4027"),
        y = a("aa95"),
        N = null,
        M = {
          name: "BoardroomPool",
          components: {
            Despoit: m,
            Withdraw: $,
            tipDialog: x["a"],
            TitleBanner: y["a"],
          },
          data: function () {
            return { stakedOptions: { decimalPlaces: 4 }, link: "" };
          },
          computed: {
            isPC: function () {
              return this.$store.getters.isPC;
            },
            isMobile: function () {
              return this.$store.getters.isMobile;
            },
            currentAddress: function () {
              return this.$store.getters.currentAddress;
            },
            chainId: function () {
              return this.$store.getters.chainId;
            },
            coinConfig: function () {
              return D["a"][this.chainId];
            },
            account: function () {
              return (
                this.$store.state.boardRoom.account ||
                this.$store.state.account.address
              );
            },
            stakedValue: function () {
              return this.$store.state.boardRoom.stakedValue;
            },
            earn: function () {
              return Number(this.$store.state.boardRoom.earn);
            },
            allowance: function () {
              return this.$store.state.boardRoom.allowance;
            },
            lpBalance: function () {
              return this.$store.state.boardRoom.lpBalance;
            },
            apylist: function () {
              return this.$store.state.liquidity.apylist;
            },
            poolData: function () {
              var t = this.$route.params,
                e = t.type,
                a = t.earn,
                s = t.id;
              if ("boardroom" == e) {
                var i =
                    this.$store.getters["boardRoom/currentChainBoardRoomData"][
                      a
                    ],
                  n =
                    i.find(function (t) {
                      return t.pid == s;
                    }) || {};
                return (
                  n.name.includes(" LP") &&
                    (this.link = "https://"
                      .concat(
                        56 == this.chainId ? "bsc" : "ht",
                        ".mdex.com/#/add/"
                      )
                      .concat(n.token_main, "/")
                      .concat(n.token_sec, "?")
                      .concat(this.globalLanguage)),
                  Object(o["a"])(
                    Object(o["a"])({}, n),
                    {},
                    { earn: a, type: e }
                  )
                );
              }
              if ("liquidity" == e) {
                var r = this.$store.getters["liquidity/poolList"],
                  c =
                    r.find(function (t) {
                      return t.pid == s;
                    }) || {};
                if (this.apylist[c.pid]) {
                  var l = this.apylist[c.pid];
                  l.pool_name.includes("/") &&
                    (this.link = "https://"
                      .concat(
                        56 == this.chainId ? "bsc" : "ht",
                        ".mdex.com/#/add/"
                      )
                      .concat(l.token0, "/")
                      .concat(l.token1, "?")
                      .concat(this.globalLanguage));
                }
                return Object(o["a"])(
                  Object(o["a"])({}, c),
                  {},
                  { earn: a, type: e }
                );
              }
            },
            erc20Utils: function () {
              var t = this.$route.params,
                e = t.type,
                a = t.earn;
              return Object(k["f"])(this.$store.state.chainId, e, a);
            },
          },
          mounted: function () {
            var t = this;
            return Object(n["a"])(
              regeneratorRuntime.mark(function e() {
                var a;
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (a = t.$route.params.id), (t.pid = a), t.updateData();
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          watch: {
            chainId: function () {
              this.updateData();
            },
          },
          methods: {
            getImgUrl: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "MDX";
              return this.globalGetImgUrl(this.coinConfig[t.toLowerCase()]);
            },
            getLpImgUrl: function (t) {
              return this.globalGetImgUrl(t.lpAddress);
            },
            updateData: function () {
              this.$store.dispatch("boardRoom/getWalletData", this.poolData);
            },
            addToken: function (t) {
              var e = 18;
              "HOO" == t.earnedToken && (e = 8);
              var a = this.getImgUrl(t.earnedToken),
                s = "boardroom" == t.type ? t.earnedToken : "MDX";
              ethereum.request({
                method: "wallet_watchAsset",
                params: {
                  type: "ERC20",
                  options: {
                    address: this.coinConfig[s.toLowerCase()],
                    symbol: s,
                    decimals: e,
                    image: a,
                  },
                },
              });
            },
            settle: function () {
              var t = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function e() {
                  var a, s, i;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (a = t.erc20Utils.unStake),
                            (s = "Settle & Withdraw Tokens"),
                            (i = t.$overalltip({ type: "loading", msg: s })),
                            a(t.pid, t.stakedValue, t.account)
                              .then(function (e) {
                                t.updateData(), i.close();
                                var a = "".concat(s, " Success");
                                N = t.$overalltip({ type: "success", msg: a });
                              })
                              .catch(function (e) {
                                i.close();
                                var a = "".concat(s, " Error");
                                N = t.$overalltip({ type: "error", msg: a });
                              });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            handleWallet: function () {
              var t = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), window.ethereum.enable();
                        case 2:
                          t.updateData();
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            handleClaim: function () {
              var t = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function e() {
                  var a, s, i;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (a = t.erc20Utils.despoitValue),
                            (s = "Claim "
                              .concat(t.earn, " ")
                              .concat(t.poolData.earn.toUpperCase())),
                            (i = t.$overalltip({ type: "loading", msg: s })),
                            a(t.pid, 0, t.account)
                              .then(function (e) {
                                t.updateData(), i.close();
                                var a = "Claim ".concat(
                                  t.poolData.earn.toUpperCase(),
                                  " Success"
                                );
                                N = t.$overalltip({ type: "success", msg: a });
                              })
                              .catch(function (e) {
                                i.close();
                                var a = "Claim ".concat(
                                  t.poolData.earn.toUpperCase(),
                                  " Error"
                                );
                                N = t.$overalltip({ type: "error", msg: a });
                              });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            handleApprove: function () {
              var t = this;
              return Object(n["a"])(
                regeneratorRuntime.mark(function e() {
                  var a, s, i, n, o, r;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (a = t.erc20Utils),
                            (s = a.approveToken),
                            (i = a.saveLocalAllowance),
                            (n = t.poolData.lpAddress),
                            (o = "Approve ".concat(t.poolData.name)),
                            (r = t.$overalltip({ type: "loading", msg: o })),
                            s(n, t.account)
                              .then(function (e) {
                                r.close(), i(n, t.account), t.updateData();
                                var a = "".concat(o, " Success");
                                N = t.$overalltip({ type: "success", msg: a });
                              })
                              .catch(function (e) {
                                r.close();
                                var a = "".concat(o, " Error");
                                N = t.$overalltip({ type: "error", msg: a });
                              });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
          beforeDestroy: function () {
            N && N.close();
          },
        },
        R = M,
        T = (a("4a8e"), Object(h["a"])(R, s, i, !1, null, "200d782b", null));
      e["default"] = T.exports;
    },
    d07f: function (t, e, a) {
      t.exports = a.p + "img/metamask-fox.c06f3a3e.svg";
    },
    e934: function (t, e, a) {},
    f911: function (t, e, a) {},
  },
]);
