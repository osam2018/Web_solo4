<template>
    <div id="app">
        <el-container>
            <el-header>
                <div id="headUserInfo">
                    <div id="UserInfo">
                        <img alt="Vue logo" src="./assets/logo.png">
                        <span>
                            <div id="userName">
                                김동영
                            </div>
                            <div id="userTemp">
                                자운대근무지원단 관리대대
                            </div>
                        </span>
                    </div>
                    <div class="clear"></div>
                </div>
                <div id="headSubInfo">

                </div>
                <div class="clear"></div>
            </el-header>
            <el-container id="body">
                <el-main>
                    <el-tabs v-model="editableTabsValue" type="border-card" @tab-remove="removeTab" tab-position="right">
                        <el-tab-pane
                                v-for="(item, index) in editableTabs"
                                :key="item.name"
                                :label="item.title"
                                :name="item.name"
                                :closable="item.canClosable"
                        >
                            <template v-if="(item.type==`Mypage`)"><my-page></my-page></template>
                            <template v-if="(item.type==`Recipe`)"><recipe-page></recipe-page></template>
                        </el-tab-pane>
                    </el-tabs>
                </el-main>


            </el-container>
        </el-container>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import MyPage from './views/MyPage.vue';
    import RecipePage from './views/RecipePage.vue';

    @Component({
        components: {
            MyPage, RecipePage
        }
    })
    export default class App extends Vue {
        public editableTabsValue= '2';
        public editableTabs=[{
            title: 'Mypage',
            name: 'Mypage',
            type: 'Mypage',
            canClosable: false
        },{
            title: '이연복의 연장피 레시피',
            name: 'Recipepage',
            type: 'Recipe',
            canClosable: true
        }];
        public tabIndex=2;

        public addTab(targetName:string) {
            let newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
                title: 'New Tab',
                name: newTabName,
                type: 'Empty',
                canClosable: true
            });
            this.editableTabsValue = newTabName;
        }
        public removeTab(targetName:string) {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
            }

            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
        public activePage: string = "home";

        handleSelect(key: string, keyPath: string) {
            //this.$router.replace("/" + key);
        }

        handleClick(tab: any, event: any) {
            console.log(tab, event);
        }

        myPageView(key: string, keyPath: string) {
            console.log("select", key, keyPath);
            if (keyPath.length == 2) {
                window.$globalBus.$emit("changeRecipe", keyPath[1]);
            }
            // this.$router.replace("/sidepage/"+key);
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0;
        padding: 0;
        background: #FFEDE1;
    }

    .clear {
        clear: both;
    }

    .el-header {
        height: 30px;
        width: 100%;
        padding: 0;
        background-color: #512D1A;
        margin: 0;
        padding: 0;
        min-width: 600px;
    }

    .el-header #headUserInfo {
        width: 78%;
        height: 100%;
        position: relative;
        float: left;
        min-width: 400px;
    }

    #UserInfo {
        float: left;
        height: 100%;
    }

    #UserInfo > span {
        display: inline-block;
        height: 100%;
        position: relative;
        vertical-align: middle;
        margin-top: -20px;
    }

    #UserInfo > span > div {
        text-align: left;
    }

    #UserInfo #userName {
        font-weight: bold;
        color: #ffffff;
    }

    #UserInfo #userTemp {
        font-size: 13px;
        color: #aaaaaa;
    }

    .el-header #headUserInfo img {
        width: 50px;
        height: 50px;
        margin-top: 5px;
        margin-right: 20px;
    }

    .el-header #headSubInfo {
        width: 20%;
        height: 100%;
        background: #555555;
        position: relative;
        float: right;
        min-width: 100px;
    }

    #body {
        min-height: 800px;
        width: 100%;
        min-width: 1600px;
        margin: 0 auto;
    }

    #body .el-main {
        width: 100%;
    }

    .el-tabs {
        height: 100%;
    }

    .el-tab-pane {
        height: 750px;
    }

    my-page {
        height: 100%;
    }

</style>
