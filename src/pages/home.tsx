import { ModeToggle } from '@/components/buttons/mode-switch';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className='container'>
			<ModeToggle />
			<Link to='/generate'>
				{' '}
				<Button>Generate</Button>{' '}
			</Link>
		</div>
	);
}
