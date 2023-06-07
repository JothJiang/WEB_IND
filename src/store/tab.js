export default{
    state:{
        isCollapse:false,
        tabsList:[
            {
                path: '/indicator',
                name: 'indicator',
                label: '指标管理',
                icon: 'setting',
                url: 'Other/PageOne'
            },
        ]
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        },
        selectMenu(state,val){
            console.log(val,'val')
            if(val.name!=='indicator'){
                const index =state.tabsList.findIndex(item=>item.name === val.name)
                if(index===-1){
                    state.tabsList.push(val)
                }
            }
        }
    }
}