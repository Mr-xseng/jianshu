import React, {Component} from 'react'
import{
    ListWrapper,
    ListItem,
    ItemContent,
    ContentInfo,
    ContentWriter,
    MoreContent
} from '../homeStyle'

class List extends Component{
    render () {
        const {contentList} = this.props
        return (
            <ListWrapper>
                {
                    contentList.toJS().map((item) => {
                        return (
                            <ListItem key={item.title}>
                                <ItemContent>
                                    <ContentInfo>
                                        <h3 className="title">
                                            {item.title}
                                        </h3>
                                        <p className="content">
                                            {item.content}
                                        </p>
                                        <ContentWriter>
                                            <span>{item.writer}</span>
                                                <span className="commend">
                                                <i className="iconfont">&#xe61d;</i>
                                                <i className="commend-num">{item.commend}</i>
                                            </span>
                                            <span className="love">
                                                <i className="iconfont">&#xe601;</i>
                                                <i className="love-num">{item.love}</i>
                                            </span>
                                        </ContentWriter>
                                    </ContentInfo>
                                    <img className="Img" src={item.pit} alt=""/>
                                </ItemContent>
                            </ListItem>
                        )
                    })
                }
                <MoreContent>阅读更多</MoreContent>
            </ListWrapper>
        )
    }
}

export default List