// Supabase config file
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config';
import { decode } from 'base64-arraybuffer';

const URL: any = process.env.SUPABASE_PROJECT_URL;
const API_Key: any = process.env.SUPABASE_API_KEY;

const supabase = createClient(URL, API_Key)

export async function UploadFile(file: any) {

    const fileBase64 = decode(file.buffer.toString('base64'));

    const { data, error } = await supabase.storage.from('File Uploader Storage')
        .upload(file.originalname, fileBase64);
    if (error) {
        throw error;
    } 
}