import React from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  OperateButton
} from './style'
import { connect } from 'react-redux';

const Header =(props)=> {
  return (
    <HeaderWrapper>
      <Logo href="/" />
      <Nav>
        <NavItem className="left active">
          首页
          {props.active?<span>1211</span>:<span></span>}
        </NavItem>
        <NavItem className="left" onClick={props.changeActive}>下载APP</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">Aa</NavItem>
      </Nav>
      <OperateButton className="writting">写文章</OperateButton>
      <OperateButton className="reg">注册</OperateButton>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    active:state.active
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeActive: () => {
      const action = {
        type:'add_active'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);