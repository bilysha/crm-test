import {useTranslation} from 'hooks/useTranslation';
import {BaseContext} from 'modules/base/contexts/baseContext';
import {useContext, useReducer} from 'react';
import './brandsDropdown.scss';

function BrandsDropdown() {
	const [expanded, toggleExpanded] = useReducer((expanded: boolean) => !expanded, false);
	const [translations] = useTranslation({path: 'base', filename: 'brands-dropdown'});
	const {brands} = useContext(BaseContext);

	return <div className="crm-brands-dropdown__container">
		<button className="crm-brands-dropdown__button" onClick={toggleExpanded}><span>C.R.M.</span></button>
		<div className={`crm-brands-dropdown__wrapper ${expanded ? 'expanded' : 'collapsed'}`} onClick={toggleExpanded}>
		</div>
		<div className={`crm-brands-dropdown ${expanded ? 'expanded' : 'collapsed'}`}>
			<ul className="crm-brands-dropdown__list">
				{
					brands && brands.length
						? <>
							{brands.map((brand: any) => <li key={brand.id} className="crm-brands-dropdown__list-item">{brand.name}</li>)}
							<li className="crm-brands-dropdown__list-item-divider"></li>
						</>
						: ''
				}
				<li className="crm-brands-dropdown__list-item">{translations['brands.dropdown.option.add']}</li>
			</ul>
		</div >
	</div >
}

export default BrandsDropdown;
