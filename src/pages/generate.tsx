import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, SendHorizonal } from 'lucide-react';
import { useState } from 'react';

export default function Generate() {
	const [file, setFile] = useState<File | undefined>(undefined);
	const [image, setImage] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [prompt, setPrompt] = useState<string>('');

	const handleUpload = async (e: React.MouseEvent<HTMLButtonElement>) => {
		setLoading(true);
		e.preventDefault();
		const form = new FormData();
		if (file) {
			form.append('file', file);

			const res = await fetch('http://localhost:4000/upload-image', {
				method: 'POST',
				body: form,
			});

			const data = await res.json();
			setImage(data.data[0].url);
			setLoading(false);
		} else {
			return;
		}
	};

	return (
		<div className='container flex flex-row gap-10 justify-between py-6'>
			<div className='flex flex-col gap-10 w-full justify-start'>
				{/* Upload an image */}
				<div className='flex flex-col gap-4'>
					<Label htmlFor='file' className='text-lg font-semibold'>
						Upload an sketch
					</Label>
					<Input type='file' id='file' onChange={e => setFile(e.target.files?.[0])} />
					{/* Loading state when uploading in button */}
					<Button onClick={handleUpload} className={` relative w-min px-20`} disabled={!file || loading}>
						{loading ? <Loader2 size='24' className='animate-spin absolute left-4' /> : null}
						<span className='mr-auto ml-auto'>{loading ? 'Uploading' : 'Upload'}</span>
					</Button>
				</div>
				{/* Prompt */}
				<div className='flex flex-col gap-4'>
					<Label htmlFor='prompt' className='text-lg font-semibold'>
						Prompt
					</Label>
					<Textarea
						id='prompt'
						placeholder='Upload an image to get started, then write a prompt to generate a UI design'
						className='h-80'
						value={prompt}
						onChange={e => setPrompt(e.target.value)}
					/>
				</div>
				{/* Generate button */}
				<Button className='flex items-center justify-center gap-2 w-min px-[72px]' disabled={!file}>
					Generate
					<SendHorizonal size='20' />
				</Button>
			</div>
			<div className='w-full min-h-full flex flex-col gap-4 pb-12'>
				<h3 className='text-lg font-semibold'>Uploaded Image</h3>
				<div className='w-full min-h-full border-2 border-solid border-gray-200 rounded-lg overflow-hidden relative flex justify-center items-center'>
					{image ? (
						<img src={image} alt='Uploaded Image' className='w-full object-cover' />
					) : (
						<h3 className='text-lg text-left'>No image uploaded</h3>
					)}
				</div>
			</div>
		</div>
	);
}
