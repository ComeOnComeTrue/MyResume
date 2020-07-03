<template>
    <div class="parameter">
        <table>
            <thead>
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>是否必须</th>
                <th>默认值</th>
            </tr>
            </thead>
            <tbody>
            <tr 
                v-for="item in parameterList"
                :key="item.id"
            >
                <td>{{item.parameter}}</td>
                <td>{{item.info}}</td>
                <td>{{item.type}}</td>
                <td>{{item.selectValue ? item.selectValue : '—'}}</td>
                <td>{{item.isMust ? '是' : '否'}}</td>
                <td>{{item.default ? item.default : '—'}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        parameterList: Array,
    }
}
</script>

<style scoped lang="scss">
    .parameter{
    padding-left: 10px;
    background-color: #fff;
    color: #000;
    thead{
        th {
        padding: 0 5px;
        }
    }
    tbody {
        text-align: center;
        td {
        padding: 0 5px;
        }
    }
    }
</style>