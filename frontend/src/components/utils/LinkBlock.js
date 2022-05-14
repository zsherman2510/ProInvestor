import React from 'react'

const LinkBlock = ({ name, href, icon }) => {
   
  return (
		<div>
			<a className="link_block" href={href}>
				<span className="icon">{icon}</span>
				<span className="button_name">{name}</span>
			</a>
		</div>
  );
}

export default LinkBlock