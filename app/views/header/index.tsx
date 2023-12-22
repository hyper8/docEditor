import './index.css'

export default function Header() {
  return (
    <header>
      <a href="//cms.wisheli.com/docEditor/" className={"header-logo"}>凤凰网陕西-编辑知识库</a>
        <div className={'item-switch'}>
          <div className={'item-doc'}>知识库</div>
          <div className={'item-operation'}>专题搭建</div>
        </div>
        <div className={'item-theme'}>
          <div className={'item-light'}>☀</div>
          <div className={'item-dark'}>🌙</div>
        </div>
    </header>
  )
}