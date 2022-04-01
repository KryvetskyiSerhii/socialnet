import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div class={classes.item}> 
            <img src="https://static.radiohamburg.de/img/3550/453125/398000/Img_2_1/1440/avatar" alt="" />
            <div className={classes.text}>{props.message}, {props.likes}</div>
            <div className={classes.like}>likes</div>
        </div>
    )
}

export default Post