import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCreateGenerationMutation } from '@/graphql/graphql-types';
import { Loader2, SendHorizonal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Image {
	id: number;
	url: string;
	name: string;
}

export default function Generate() {
	const [file, setFile] = useState<File | undefined>(undefined);
	const [image, setImage] = useState<Image | null>(null);
	const [loading, setLoading] = useState(false);
	const [prompt, setPrompt] = useState<string>('');

	const handleUpload = async (e: React.MouseEvent<HTMLButtonElement>) => {
		setLoading(true);
		e.preventDefault();
		const form = new FormData();
		if (file) {
			try {
				form.append('file', file);

				const res = await fetch('http://localhost:4000/upload-image', {
					method: 'POST',
					body: form,
				});

				const data = await res.json();
				setImage(data.data[0]);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		} else {
			return;
		}
	};

	const [generate, { loading: genLoad, data }] = useCreateGenerationMutation();
	const navigate = useNavigate();

	const handleGenerate = async () => {
		if (!image) return;

		try {
			const res = await generate({
				variables: {
					input: {
						imageId: image?.id,
						isPublic: true,
						prompt,
						userId: 1,
					},
				},
			});

			console.log(res);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (data?.createGeneration?.id) {
			navigate(`/editor/${data.createGeneration.id}`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

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
				<Button className='flex items-center justify-center gap-2 w-min px-[72px]' disabled={!file} onClick={handleGenerate}>
					{genLoad ? <Loader2 size='24' className='animate-spin' /> : null}
					Generate
					<SendHorizonal size='20' />
				</Button>
			</div>
			<div className='w-full min-h-full flex flex-col gap-4 pb-12'>
				<h3 className='text-lg font-semibold'>Uploaded Image</h3>
				<div className='w-full min-h-full border-2 border-solid border-gray-200 rounded-lg overflow-hidden relative flex justify-center items-center'>
					{image ? (
						<img src={image.url} alt='Uploaded Image' className='w-full object-cover' />
					) : (
						<h3 className='text-lg text-left'>No image uploaded</h3>
					)}
				</div>
			</div>
		</div>
	);
}
