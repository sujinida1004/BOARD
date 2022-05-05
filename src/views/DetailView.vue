<template>
    <div>
        <p>{{ article.id }}</p>
        <p>{{ article.userId }}</p>
        <p>{{ article.title }}</p>
        <p>{{ article.body }}</p>

        <br>
        <el-button @click="goBack">Back</el-button>
    </div>
</template>

<script>
import apiBoard from '@/api/board'

export default {
    // data에 있는 속성값이 template에 바로 적용
    data() {
        return {
            article: "",
        }
    },

    // mounted 메소드 : 페이지 로딩되면 실행
    // article 속성의 파라메터로 넘어온 id를 지정
    // 경로 맨 뒤에 콜론id에 입력한 값이 로딩되었을때 article 속성에 적용
    mounted() {
        apiBoard.getArticle(this.$route.params.id)
            .then((response) => {
                this.article = response.data;
            })
            .catch((e) => {
                console.log(e);
            })
        this.article = this.$route.params.id;
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        }
    },
}
</script>

<style>
.el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: left;
    line-height: 60px;
}
.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: left;
}
</style>