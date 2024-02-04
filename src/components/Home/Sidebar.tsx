import { ModeToggle } from '@/components/buttons/mode-switch';
import { Icon } from '@iconify/react';

export default function Sidebar() {
	return (
		<div className="h-screen flex flex-col justify-between bg-[#778DA9] w-[56px] items-center py-6">
			<div className="flex flex-col gap-[40px]">
				<ModeToggle />
				<Icon icon="ion:home" width="36" height="36" />
				<Icon icon="wpf:edit" width="36" height="36" />
			</div>
			<Icon icon="radix-icons:github-logo" width="36" height="36" />
		</div>
	)
}