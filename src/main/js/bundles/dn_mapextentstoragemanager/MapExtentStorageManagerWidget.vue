<!--

    Copyright (C) 2020 con terra GmbH (info@conterra.de)

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

            http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

-->
<template>
    <v-container
        fluid
        fill-height
        class="manage-map-extents-widget pa-0"
    >
        <v-layout column>
            <v-flex
                shrink
                class="manage-map-extents-widget__header"
            >
                <v-card
                    color="light-blue"
                    dark
                >
                    <v-card-text>{{ i18n.ui.description }}</v-card-text>
                </v-card>

                <v-list>
                    <template v-for="(item) in items">
                        <v-list-tile :key="item.appName">
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.appName }}</v-list-tile-title>
                                <v-list-tile-subtitle>
                                    {{ item.location }}  -  {{ datetimeString(item) }}
                                </v-list-tile-subtitle>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-btn
                                    icon
                                    ripple
                                    color="primary"
                                    @click="deleteItem(item.appName)"
                                >
                                    <v-icon color="white">
                                        icon-trashcan
                                    </v-icon>
                                </v-btn>
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-divider :key="item.appName" />
                    </template>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Bindable from "apprt-vue/mixins/Bindable";
    import moment from "moment";
    import ct_when from "ct/_when";
    export default {
        name: "map-extent-storage-manager",
        mixins: [Bindable],
        data () {
            return {
                items: [],
                i18n: {}
            }
        },
        mounted() {
            this.items = JSON.parse(localStorage.getItem('urlParams'));
            window.addEventListener("storage", this.readStorage);
            window.addEventListener("localstorageSession", this.readStorage);
        },
        beforeDestroy() {
            window.removeEventListener("storage", this.readStorage);
            window.removeEventListener("localstorageSession", this.readStorage);
        },
        methods: {
            deleteItem: function(appName) {
                ct_when(this.windowManager.createInfoDialogWindow({
                    title: this.i18n.ui.deletionCard.title,
                    message: this.i18n.ui.deletionCard.questionPart1 + appName +
                        this.i18n.ui.deletionCard.questionPart2,
                    iconClass: "icon-trashcan-detailed",
                    okButtonClass: "input-error",
                    i18n: {
                        okButton: this.i18n.ui.yes,
                        cancelButton: this.i18n.ui.yes.no
                    },
                    closable: false,
                    marginBox: {
                        w: 360,
                        h: 170
                    }
                }), function () {
                    for(let i = 0; i < this.items.length; i++) {
                        if(this.items[i].appName === appName) {
                            this.items.splice(i, 1);
                        }
                    }
                    localStorage.setItem('urlParams', JSON.stringify(this.items));
                }, this);
            },
            readStorage: function() {
                this.items = JSON.parse(localStorage.getItem('urlParams'));
            },
            datetimeString: function(item) {
                const date = new Date(item.datetime);
                return moment(date.toISOString()).format("DD.MM.YYYY - hh:mm:ss");
            }
        }
    }
</script>
