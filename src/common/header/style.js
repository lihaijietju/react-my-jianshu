import styled from 'styled-components';
import logo from '../../static/logo.png';
export const HeaderWrapper = styled.div`
  height:56px;
  width:100%;
  border-bottom:1px solid #f0f0f0;
  position:relative;
`

export const Logo = styled.a`
  width:100px;
  position:absolute;
  top:0;
  left:0;
  display:inline-block;
  height:56px;
  background:url(${logo});   
  background-size: contain;
`

export const Nav = styled.div`
  width:960px;
  height:100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  display:inline-block;
  height: 56px;
  line-height: 56px;
  padding:0 15px;
  box-sizing:border-box;
  &.active{
    color:#ea6f5a
  }
  &.left{
    float:left;
  }
  &.right{
    float:right;
  }
`

export const OperateButton = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  position:relative;
  top:-56px;

  &.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}

`